import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/StoreContext';
import { TodoItem } from './TodoItem';
import './TodoList.css';

export const TodoList: React.FC = observer(() => {
  const { todoStore } = useStore();

  if (todoStore.todos.length === 0) {
    return (
      <div className="empty-state">
        <h3>No todos yet!</h3>
        <p>Add your first todo above to get started.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <div className="todo-stats">
        <span className="stat">
          Total: <strong>{todoStore.totalCount}</strong>
        </span>
        <span className="stat">
          Active: <strong>{todoStore.activeTodos.length}</strong>
        </span>
        <span className="stat">
          Completed: <strong>{todoStore.completedCount}</strong>
        </span>
      </div>
      
      <div className="todos">
        {todoStore.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
});