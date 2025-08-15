import React from 'react';
import { StoreProvider } from './stores/StoreContext';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import './App.css';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <header className="app-header">
          <h1>📝 React + MobX Todo App</h1>
          <p>A modern todo application built with React and MobX state management</p>
        </header>
        <main className="app-main">
          <AddTodo />
          <TodoList />
        </main>
      </div>
    </StoreProvider>
  );
}

export default App;
