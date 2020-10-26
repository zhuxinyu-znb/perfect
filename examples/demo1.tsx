import React from 'react';
import { useLocalStore, useObserver } from 'mobx-react-lite';

export const AnalysisData = () => {
  // 注意不要使用解构赋值语法
  const todo = useLocalStore(() => ({
    // state
    title: 'Click to toggle',
    done: false,

    // action
    toggle() {
      todo.done = !todo.done;
    },

    // getter
    get emoji() {
      return todo.done ? '😜' : '🏃';
    },
  }));

  return useObserver(() => (
    <h3 onClick={todo.toggle}>
      {todo.title} {todo.emoji}
    </h3>
  ));
};

const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
  nameDispatch({ type: 'SET_NAME', payload: e.target.value });
};
