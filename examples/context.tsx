import React, { FC, createContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createStore, TStore } from './store';

export const storeContext = createContext<TStore | null>(null);

export const StoreProvider: FC = ({ children }) => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export default StoreProvider;
