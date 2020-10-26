import React, { Context } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { RootStoreType, createStore } from '@models/root.store';
// import makeInspectable from 'mobx-devtools-mst';

export const storeContext = React.createContext<RootStoreType | null>(
  createStore(),
);

const CreateStoreProvider = (
  detaultStore: () => {},
  scopeStoreContext: Context<any>,
) => {
  // eslint-disable-next-line react/prop-types
  const StoreProvider: React.FC = ({ children }) => {
    const store = useLocalStore(detaultStore);
    // makeInspectable(store);
    return (
      <scopeStoreContext.Provider value={store}>{children}</scopeStoreContext.Provider>
    );
  };
  return StoreProvider;
};

export default CreateStoreProvider;
