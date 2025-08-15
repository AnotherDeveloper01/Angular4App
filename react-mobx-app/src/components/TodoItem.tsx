import React from 'react';
import { observer } from 'mobx-react-lite';
import { Todo } from '../stores/TodoStore';
import { useStore } from '../stores/StoreContext';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = observer(({ todo }) => {
  const { todoStore } = useStore();

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => todoStore.toggleTodo(todo.id)}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <span className="todo-date">
        {todo.createdAt.toLocaleDateString()}
      </span>
      <button
        onClick={() => todoStore.deleteTodo(todo.id)}
        className="delete-button"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </div>
  );
});