// 1. Импортируем функцию, с помощью которой создаем slice
import { createAppSlice } from "../../createAppSlice";
import { CounterStateSlice } from "./types";

// 4.1 Создаём объект с первоначальным состояние, который мы потом передаём в свойство initialState
const counterInitialState: CounterStateSlice = {
  count: 0
}

// 2. Создание слайса для каунтера
export const counterSlice = createAppSlice({
  //3. Задаём имя под которым будет храниться объект со значение каунтера (state) в глобальной стейте
  name: 'COUNTER',
  //4. Задаём объект, в котором будет храниться начальное состояние
  initialState: counterInitialState,
  //5. Создаём объект, внутри которого будут храниться редьюсеры (функции, которые отвечают за изменение состояния)
  reducers: create => ({
    plus: create.reducer((state: CounterStateSlice) => { state.count = state.count + 1 }),
    minus: create.reducer((state: CounterStateSlice) => { state.count = state.count - 1 })
  }),
  //6. Создаём селекторы, которые позволяют забрать данные из хранилища в компонент
  selectors: {
    count: (state: CounterStateSlice) => state.count
  }
})

console.log(counterSlice)

//7. Экспорт экшен и селекторов для того, чтобы можно было воспользоваться ими в компонентах приложения
export const counterSliceActions = counterSlice.actions
export const counterSliceSelectors = counterSlice.selectors