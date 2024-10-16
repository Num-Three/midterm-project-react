import React, { useState } from 'react'
import Dashboard from './Dashboard'
const UpdateItem = ({ items }) => {
    const [idChange, setID] = useState('')
    const [valueToChange, setToChange] = useState('Quantity') /* defaults to Quantity */
    const [newValue, setNewValue] = useState('')
    const [message, setMessage] = useState(null)

    function createMessage(msg) {
        setMessage(msg);
        setTimeout(() => {
            setMessage('');
        }, 3000);
    }

    function changeValue(e) {
        e.preventDefault();
        const foundId = items.find(item =>
            item.id === idChange
        )

        if (!valueToChange || !newValue) {
            createMessage("Please make sure to select which value to change.")
        } else if (!foundId) {
            createMessage("ID does not exist, please check if you inputted the correct ID.")
        } else if (newValue < 0) {
            createMessage("New value must not be below 0!")
        } else {
            const fields = { /* tables, err arrays?? either way i owe everything to you . my child */
                "Quantity": { oldValue: foundId.quantity, fieldName: "quantity" },
                "Price": { oldValue: foundId.price, fieldName: "price" }
            };

            if (fields[valueToChange]) {    /* basically grabs either Quantity or Price from fields using valueToChange that was changed by user's input */
                const { oldValue, fieldName } = fields[valueToChange];  /* example where fields[Quantity] is passed, it'd return oldValue as foundId.quantity, and fieldName as "quantity" */
                foundId[fieldName] = newValue;
                createMessage(`${valueToChange} of ${foundId.name} has been updated from ${oldValue} to ${newValue}`);  /* i owe you my life, ${} */
            }
        }
    }

    return (
        <div>
            <Dashboard />
            <h2>Update Item</h2>
            <form onSubmit={changeValue}>
                <label>ID</label>
                <br /><input type='text' onChange={e => setID(e.target.value)} />

                <br /><label>Change Value</label>
                <br /><select onChange={e => setToChange(e.target.value)}>
                    <option value="Quantity">Quantity</option>
                    <option value="Price">Price</option>
                </select>

                <br /><label>New Value:</label>
                <br /><input type='number' onChange={e => setNewValue(e.target.value)} />
                <br /><button type="submit">Update Item</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default UpdateItem