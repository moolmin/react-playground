declare global {
  interface Window {
    store: ReturnType<typeof useStore>;
  }
}

import { create, StateCreator } from "zustand";
import zukeeper from "zukeeper";

type Store = {
  count: number;
  inc: () => void;
};

// zustand 스토어를 만들고, zukeeper 미들웨어 적용
const useStore = create<Store>(
  zukeeper((set: Parameters<StateCreator<Store>>[0]) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
  }))
);

export default function Zustand() {
  const { count, inc } = useStore();
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
}

// useStore 상태 관리 객체를 할당해서, 브라우더 콘솔 (여기서는 zukkeeper 사용)에서 상태를 직접 확인할 수 있음
window.store = useStore;
