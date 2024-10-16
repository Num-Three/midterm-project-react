import React, { useState } from 'react'
import Dashboard from './Dashboard'
const RemoveItem = ({removeItem}) => {
    const [idChange, setID] = useState('')
    const [message, setMessage] = useState(null)

    function createMessage(msg) {
        setMessage(msg);
        setTimeout(() => {
            setMessage('');
        }, 3000);
    }

    function handleRemove(e) {
        e.preventDefault()
        if (removeItem(idChange)) {
            createMessage("Successfully removed ID: " + idChange)
        } else {
            createMessage("ID does not exist, please check if you inputted the correct ID.")
        }
    }

    return (
        <div>
            <Dashboard />
            <h2>Remove Item</h2>
            <form onSubmit={handleRemove}>
                <label>ID</label>
                <br /><input type='text' onChange={e => setID(e.target.value)} />
                <br /><button type="submit">Remove Item</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default RemoveItem