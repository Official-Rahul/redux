import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Product } from './features/product/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Product />
      </header>
    </div>
  );
}

export default App;
