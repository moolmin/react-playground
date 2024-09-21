import { Provider } from "react-redux";
import { store } from "./state/store";
import Counter from './counter';


export default function Redux() {
    return (
      // Provider은 store을 하위 컴포넌트로 전달해줌
      <Provider store={store}> 
      <div>
        <h1>Redux Practice</h1>
        <Counter />  
      </div>
      </Provider>
    );
  };
  
