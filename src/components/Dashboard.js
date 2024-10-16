import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Inventory Management Dashboard</h1>
        <div>
          <button onClick={() => navigate('/add-item')}>Add Item</button>
          <button onClick={() => navigate('/update-item')}>Update Item</button>
          <button onClick={() => navigate('/remove-item')}>Remove Item</button>
          <button onClick={() => navigate('/display-item-all')}>Display All Items</button>
          <button onClick={() => navigate('/display-item-category')}>Display Items by Category</button>
          <button onClick={() => navigate('/display-item-low-stock')}>Display Low Stock Items</button>
          <button onClick={() => navigate('/search-item')}>Search Item</button>
          <button onClick={() => navigate('/sort-item')}>Sort Item</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;