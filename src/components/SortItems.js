import React, { useState } from 'react';
import DisplayItems from './displayItems'
import Dashboard from './Dashboard';

const SortItems = ({items}) => {
    const [valueSort, setValueSort] = useState('')
    const [orderSort, setOrderSort] = useState('')

    function returnSorted() {
        let _items = items
        _items = [...items].sort((a, b) => {
            let sortValue = 0;

            if (valueSort === 'Quantity') {
                sortValue = a.quantity - b.quantity;
            } else if (valueSort === 'Price') {
                sortValue = a.price - b.price;
            }

            if (orderSort === 'Descending') {
                sortValue = -sortValue;
            }

            return sortValue;
        }); 

        /* this was really ugly earlier, there were too many calls for items.sort andi  had to search for a different method to combine my if elses, realized i could put everything within one items.sort */
        
        return _items
    }

    return (
        <div>
            <Dashboard/>
            <h2>Sort Items</h2>
            <form>
                <select onChange={e => setValueSort(e.target.value)}>
                    <option disabled value selected>Select Option</option>
                    <option value="Quantity">Quantity</option>
                    <option value="Price">Price</option>
                </select>

                <select onChange={e => setOrderSort(e.target.value)}>
                <option disabled value selected>Select Option</option>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </form>
            
            <DisplayItems items={returnSorted()} />
        </div>
    )
}

export default SortItems