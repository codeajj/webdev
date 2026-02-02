import './Counter.css';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('light');

    const incrementHandler = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrementHandler = () => {
        setCount(prevCount => prevCount - 1);
    };

  const setDarkTheme = () => setTheme("dark")
  const setLightTheme = () => setTheme("light")

  const toggleTheme = () => {
  setTheme(theme === 'light' ? 'dark' : 'light');
};

  return (
    <div className={`content ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={setDarkTheme}>Dark</button>
      <button onClick={setLightTheme}>Light</button>
      <button onClick={toggleTheme}>Toggle</button>

      <h2>{count}</h2>

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <p>
        Current theme (logged only): <strong>{theme}</strong>
      </p>
    </div>
  );
};

export default Counter;