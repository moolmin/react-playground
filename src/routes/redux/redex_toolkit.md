
## Redux Toolkit
Redux Toolkin(줄여서 "RTK")는 공통 의존성을 포함하여 대부분의 Redux 작업을 단순화해준다.

### store에서 사용한 configureStore
Redux store를 쉽게 설정하고 관리할 수 있게 도와주고 있다.
> configureStore 有
```javascript
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

> configureStore 無
```javascript
// 여러 리듀서를 하나로 합침
const rootReducer = combineReducers({
  counter: counterReducer,
});

// 미들웨어와 DevTools를 직접 설정
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Thunk 미들웨어와 DevTools 설정
);
```

## RTK를 이용한 카운터 연습
```
📦redux
 ┣ 📂state
 ┃ ┣ 📂counter
 ┃ ┃ ┗ 📜counterSlice.ts
 ┃ ┗ 📜store.ts
 ┣ 📜counter.tsx
 ┗ 📜redex_practice.tsx
```

### 1. redux_praictice
* 최상위 컴포넌트로
* Provider을 통해 store를 하위 컴포넌트에서 전달

### 2. store.ts
* Redux store 설정 파일

### 3. Counter.tsx
* Redux store에서 상태를 가져오기 위한 `useSelecgtor`훅 포함
* Redux의 액션을 발생시키는 `useDispatch`훅 포함

### 4. counterSlice.ts
* Redux의 상태 관리와 액션 생성 로직을 간편하게 작성할 수 있게 도와줌
* 상태를 직접 변경할 수 없기 때문에 액션을 통해 상태를 변경