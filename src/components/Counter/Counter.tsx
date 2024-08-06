import Button from "../Button/Button";
import { CounterComponent, CounterResult } from './styles'
// 9. Импортируем хуки для диспатча и селекторов
import { useAppDispatch, useAppSelector } from "../../store/hooks";
//10. Импортировать экшены и селекторы, которые мы экспортировали в файле слайса
import { counterSliceActions, counterSliceSelectors } from "../../store/redux/counter/counterSlice";

function Counter() {
  // 11. Забираем значение count из store
  const count = useAppSelector(counterSliceSelectors.count)
  //12. Сохраняем функцию dispatch, которую возвращает хук useAppDispatch
  const dispatch = useAppDispatch();

  const onMinus = () => {
    //13. Диспатчим экшен(идентификатор действия), который вызовет соответствующий редьюсер
    dispatch(counterSliceActions.minus())
  }

  const onPlus = () => {
    //13. Диспатчим экшен(идентификатор действия), который вызовет соответствующий редьюсер
    dispatch(counterSliceActions.plus())
  }

  return (
    <CounterComponent>
      <Button name="-" onClick={onMinus} />
      <CounterResult>{count}</CounterResult>
      <Button name="+" onClick={onPlus} />
    </CounterComponent>
  );
}

export default Counter;
