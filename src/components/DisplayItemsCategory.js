import React, { useState } from 'react';
import DisplayItems from './displayItems';
import Dashboard from './Dashboard'

const DisplayItemsCategory = ({ items }) => {
    const [category, setCategory] = useState(null)

    return (
        <div>
            <Dashboard/>
            <h2>Display Items by Category</h2>
            <select name="categories" id="categories" onChange={e => setCategory(e.target.value)}>
                <option value disabled selected>Select a Category</option>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Entertainment">Entertainment</option>
            </select>
            <DisplayItems items={items} filter={category} />
        </div >
    )
}

export default DisplayItemsCategory;