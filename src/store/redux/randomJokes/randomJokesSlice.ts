import axios from "axios";
import { createAppSlice } from "../../createAppSlice";
import type { RandomJokesSliceState } from "./types";

const randomJokesInitialState: RandomJokesSliceState = {
  data: [],
  error: undefined,
  status: 'default'
}

export const randomJokesSlice = createAppSlice({
  name: 'RANDOM_JOKES',
  initialState: randomJokesInitialState,
  //1. middleware создаётся в объекте reducers вместе с обычными редьюсерами
  reducers: create => ({
    //2. Создаём middleware с помощью метода createThunk из объекта create
    //метод createThunk принимает два аргумента
    // 1-й аргумент - асинхронная функция
    // 2-й аргумент - объект c 3-мя методами, которые обрабатывают результат выполнения асинхронной функции
    getJoke: create.asyncThunk(async (arg, thunkApi) => {
      try {
        const result = await axios.get('https://official-joke-api.appspot.com/random_joke')
        //3. В случае успешного завершения запроса, возвращаем полученные данные, для того, чтобы получить их в обработчике ()агдашддув
        return result.data
      } catch (error: any) {
        //4. В случае ошибки, отправляем её в обработчик rejected с помощью метода rejectWithValue из thunkApi
        thunkApi.rejectWithValue(error.response.data)
      }
    }, {
      //5. Обрабатываем событие ожидания ответа от сервера
      pending: (state: RandomJokesSliceState) => {
        state.error = undefined
        state.status = 'loading'
      },
      //6. Обработка успешного результата (данные пришли)
      fulfilled: (state: RandomJokesSliceState, action: any) => {
        state.status = 'success'
        state.data = [...state.data, action.payload]
      },
      //7. Обработка ошибки (данные не пришли)
      rejected: (state: RandomJokesSliceState, action: any) => {
        state.status = 'error'
        state.error = action.payload
      }
    })
  }),
  selectors: {
    jokeData: (state: RandomJokesSliceState) => state
  }
})

export const randomJokesSliceActions = randomJokesSlice.actions
export const randomJokesSliceSelectors = randomJokesSlice.selectors