import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log(count);

    setCount(count + 1);
    console.log(count);

    setTimeout(() => {
      console.log(count);
    }, 5000);
  }

  return (
    <div className='App'>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

// 0 0 0