import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
};

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter", // Slice의 이름
    initialState, 
    reducers: {
        // 각 액션에 따라 상태 변경
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

// Slice에서 만든 액션을 export하여 컴포넌트에서 사용할 수 있도록
export const { increment, decrement } = counterSlice.actions;

// reducer는 store에서 사용하게될 것
export default counterSlice.reducer;