import Dashboard from './Dashboard';
import DisplayItems from './displayItems'
import React, { useState } from 'react';

const SearchItems = ({ items }) => {
    const [filter, setFilter] = useState('absolute unknown value') 
    /* er its initialized so that no matter what it will absolutely not find something at first, had no idea how to work around that so uhhh */

    return (
        <div>
            <Dashboard/>
            <h2>Search Items</h2>

            <input type='text' onChange={e => setFilter(e.target.value)}/>
            <DisplayItems items={items} filter={filter} />
        </div>
    )
}

export default SearchItems;