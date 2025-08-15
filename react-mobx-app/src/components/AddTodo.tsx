import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/StoreContext';
import './AddTodo.css';

export const AddTodo: React.FC = observer(() => {
  const [text, setText] = useState('');
  const { todoStore } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      todoStore.addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
          autoFocus
        />
        <button type="submit" className="add-button" disabled={!text.trim()}>
          Add Todo
        </button>
      </div>
    </form>
  );
});