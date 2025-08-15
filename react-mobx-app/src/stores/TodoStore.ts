import { makeAutoObservable } from 'mobx';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
    // Add some demo data
    this.addTodo('Learn React with TypeScript');
    this.addTodo('Master MobX state management');
    this.addTodo('Build awesome applications');
    this.toggleTodo(this.todos[0].id); // Mark first one as completed
  }

  addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    this.todos.push(newTodo);
  };

  toggleTodo = (id: string) => {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  };

  deleteTodo = (id: string) => {
    this.todos = this.todos.filter(t => t.id !== id);
  };

  get completedCount() {
    return this.todos.filter(t => t.completed).length;
  }

  get totalCount() {
    return this.todos.length;
  }

  get activeTodos() {
    return this.todos.filter(t => !t.completed);
  }

  get completedTodos() {
    return this.todos.filter(t => t.completed);
  }
}