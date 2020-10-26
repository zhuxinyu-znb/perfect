import { types, Instance } from 'mobx-state-tree';
import { HomeModel } from './home.store';
import { DemoModel } from './demo.store';
// import { observable } from 'mobx';

export interface IRootStoreModel extends Instance<typeof RootStore> {}
// export type RootStoreType = typeof RootStore.;

export const RootStore = types.model('RootStore', {
  home: types.optional(HomeModel, {}),
  demo: types.optional(DemoModel, {
    todos: [
      { id: 1, text: '完成React SSR配置', completed: true },
      { id: 2, text: '完成业务逻辑的基本开发', completed: false },
    ],
    id: 0,
  }),
});

export const createStore = () => RootStore.create({});
