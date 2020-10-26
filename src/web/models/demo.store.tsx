import { types, Instance } from 'mobx-state-tree';

// export interface IDemoModel extends Instance<typeof DemoModel> {}
// export type DemoModelType = typeof DemoModel.Type;

const Todo = types
  .model('Todo', {
    completed: types.boolean,
    id: types.number,
    text: types.string,
  })
  .actions((self) => ({
    toggleTodo() {
      self.completed = !self.completed;
      console.log('🌲', self.completed);
    },
  }));
export const DemoModel = types
  .model('DemoModel', {
    todos: types.array(Todo),
    id: types.number,
    loading: true,
  })
  .views((self) => ({
    get remainingTodos() {
      return self.todos.filter((t) => !t.completed).length;
    },
  }))
  .actions((self) => ({
    setid(id: number) {
      self.id = id;
    },
    async getData() {
      // const data = await fetch('a/b')
      //   .then((res) => res.json())
      //   .catch(function(err) {
      //     console.log('🐻', err);
      //   });
      // console.log('🌲', data);
      // setLoading(false);
      console.log('🌲', '数据请求到此为止');
    },
  }));
