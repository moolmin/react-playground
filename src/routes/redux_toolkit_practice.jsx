import React from 'react';
// Redux store 생성
import {createStore} from 'redux';
import {Provider, useSelector} from 'react-redux';

// Reducer 정의
function reducer(state, action){
    return state;
}

// 초기값 정의
const initialState = {value: 0}
// store 정의
// store는 provider를 통해 애플리케이션에 공급해준다.
const store = createStore(reducer, initialState);


// store에서 value값 가져오기
function Counter(){
  // useSelector을 통해 store의 값을 가져와
  const counter = useSelector(state=>state.value);
    return <div>
        <button>+</button> {count}
    </div>
}

export default function Redux() {
  return (
  <div>
    <h1>리덕스 툴킷 연습</h1>
    <Counter></Counter>
  </div>
  );
}
