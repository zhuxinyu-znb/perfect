import useStoreData from '@tools/useStoreData';
import { RootStoreType } from '@models/root.store';
import { storeContext } from '@tools/StoreProvider';

export const useRootData = <Selection>(dataSelector: (store: RootStoreType) => Selection) =>
    useStoreData(storeContext, (contextData) => contextData!, dataSelector);

// export default useRootData;
