import { types, Instance } from 'mobx-state-tree';

// export interface IHomeModel extends Instance<typeof HomeModel> {}
export const HomeModel = types
  .model('HomeModel', {
    isVisible: types.optional(types.boolean, true),
    str: types.optional(types.string, '京程一灯'),
    token: types.optional(types.string, localStorage['token']),
  })
  .actions((self) => ({
    setStr() {
      self.str = Math.random() + '🍊';
      self.token = localStorage['token'];
    },
    toggle() {
      self.isVisible = !self.isVisible;
    },
  }));
