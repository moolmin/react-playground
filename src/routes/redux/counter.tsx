import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import { increment, decrement } from "./state/counter/counterSlice";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
   // 리액트와 redux는 직접 소통할 수 없기에, dispatch를 중간에 껴야해
   // Redux에서 상태를 변경할때 dispatch를 사용하여 액션을 발생시킴
    const dispatch = useDispatch();

    return(
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
}