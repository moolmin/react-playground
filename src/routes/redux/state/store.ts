import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';

export const store = configureStore({
    //counterslice와 store연결해서 provider가 접근 가능하도록 함
    reducer: {
        counter: counterReducer, 
    },
});

// 이후에 사용하기 위한 Redux 상태타입과 dispatch 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

