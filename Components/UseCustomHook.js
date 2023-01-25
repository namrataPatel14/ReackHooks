import {useState} from 'react';

export function UseCustomHook(initialCount, value) {
  const [count, setCount] = useState(initialCount, value);
  const increment = () => {
    setCount(prevState => prevState + value);
  };
  const decrement = () => {
    setCount(prevState => prevState + value);
  };
  const reset = () => {
    setCount(initialCount);
  };
  return [count, increment, decrement, reset];
}
