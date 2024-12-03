import React, { useState } from 'react';

function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function NewItemForm({
  handleAddItem,
}) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim()) {
      handleAddItem(inputValue.trim());
      setInputValue('');
    }
  }

  return (
    <form style={{ width: '200px' }} onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder='Enter a new item'
      />
      <button type='submit'>Add Item</button>
    </form>
  );
}

export default function App() {
  const [items, setItems] = useState(['apple', 'banana']);

  function handleAddItem(value) {
    setItems((prevItems) => [...prevItems, value]);
  }

  return (
    <div className='App'>
      {items.length > 0 && <ShoppingList items={items} />}
      <NewItemForm handleAddItem={handleAddItem} />
    </div>
  );
}
