import { useState } from 'react'
import Recipe from './components/Recipe.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Recipe App</h1>
      <Recipe/>
    </div>
  );
}

export default App;