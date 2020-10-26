import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { useRootData } from '@tools/useRootData';

const Footer = () => {
  console.log('Footer重新渲染');
  const { remaining, total } = useRootData((store) => ({
    remaining: store.demo.remainingTodos,
    total: store.demo.todos.length,
  }));
  return (
    <p>
      {remaining.toString()} / {total.toString()} left
    </p>
  );
};

export default Footer;
