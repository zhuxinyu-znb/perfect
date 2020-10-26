import { Context, useContext } from 'react';
import { useObserver, Observer } from 'mobx-react-lite';

const useStoreData = <Selection, ContextData, Store>(
  context: Context<ContextData>,
  storeSelector: (contextData: ContextData) => Store,
  dataSelector: (store: Store) => Selection
) => {
  const value = useContext(context);
  if (!value) {
    throw new Error('初始化的Context不能为null🙅‍♂️');
  }
  const store = storeSelector(value);
  return useObserver(() => dataSelector(store));
};

export default useStoreData;
