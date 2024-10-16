import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import DisplayItemsAll from './components/DisplayItemsAll';
import DisplayItemsCategory from './components/DisplayItemsCategory';
import SearchItems from './components/SearchItem';
import SortItems from './components/SortItems';
import DisplayItemsLowStock from './components/DisplayItemsLowStock';
import RemoveItem from './components/RemoveItem';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const addItem = (newItem) => setItems([...items, newItem]);
  function removeItem(id) {
    const idExists = items.find(item => item.id === id)
    if (idExists) {
      setItems(items.filter((item) => item.id !== id));
      return true
    }
    return false
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-item" element={<AddItem addItem={addItem} items={items} />} />
          <Route path="/update-item" element={<UpdateItem items={items} />} />
          <Route path="/remove-item" element={<RemoveItem removeItem={removeItem} />} />
          <Route path="/display-item-all" element={<DisplayItemsAll items={items} />} />
          <Route path="/display-item-category" element={<DisplayItemsCategory items={items} />} />
          <Route path="/search-item" element={<SearchItems items={items} />} />
          <Route path="/sort-item" element={<SortItems items={items} />} />
          <Route path="/display-item-low-stock" element={<DisplayItemsLowStock items={items} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
