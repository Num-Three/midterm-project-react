import React, { useState } from 'react';

const DisplayItems = ({ items, filter }) => {
    const filteredItems = filter    /* this was originally a function but react doesn't like having hooks within hooks or something like that so i searched for other methods to do this and found out i could just do it like this without turning it into a function */
        ? items.filter(item => 
            item.id === filter || item.category === filter  /* filters by checking if it matches with either id or category, so that i can use it for both display items by category or search items */
        )
        : items;

    return (
        <div>
            {filteredItems.length > 0 ? (
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                    {filteredItems.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                        </tr>
                    ))}
                </table>
            ) : (
                <p>Item not found!</p>
            )}
        </div>
    )
}

export default DisplayItems