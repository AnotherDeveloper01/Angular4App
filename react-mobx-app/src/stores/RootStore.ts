import { TodoStore } from './TodoStore';

export class RootStore {
  todoStore: TodoStore;

  constructor() {
    this.todoStore = new TodoStore();
  }
}

export const rootStore = new RootStore();