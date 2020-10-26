import React, { FC } from 'react';
import { useRootData } from '@tools/useRootData';
import { observer } from 'mobx-react-lite';
const TodoList: FC = observer(() => {
  console.log('TodoList重新渲染');
  const todos = useRootData((store) => store.demo.todos);
  return (
    <ul style={{ listStyle: 'none' }}>
      {todos &&
        todos.map((t) => (
          <li
            onClick={t.toggleTodo}
            style={{
              margin: 10,
              opacity: t.completed ? 0.5 : 1,
              cursor: 'pointer',
              textDecoration: t.completed ? 'line-through' : 'none',
            }}
            key={t.id}
          >
            {t.text}
          </li>
        ))}
    </ul>
  );
});

export default TodoList;
