import React, { useState } from 'react';
import Dashboard from './Dashboard';

const AddItem = ({addItem, items}) => {
    const [form_id, setId] = useState(null)
    const [form_name, setName] = useState(null)
    const [form_quantity, setQuantity] = useState(null)
    const [form_price, setPrice] = useState(null)
    const [form_category, setCategory] = useState('Clothing')  /* the form is set to clothing by default so im initializing it as this as kind of just a workaround */
    const [message, setMessage] = useState(null)

    function createMessage(msg) {
        setMessage(msg);
        setTimeout(() => {
            setMessage('');
          }, 3000);
    }

    const formAddItem = (e) => {
        e.preventDefault(); /* prevents default form submission*/
        document.getElementById('form').reset()
        const checkExistingId = items.some(item => item.id === form_id)
        const parsedQuantity = parseInt(form_quantity)
        const parsedPrice = parseFloat(form_price)

        if (checkExistingId) {
            createMessage('The inputted ID already exists. ID must be unique.')
        } else if (parsedQuantity <= 0) {
            createMessage('The inputted quantity must be a positive number.')
        } else if (parsedPrice <= 0) {
            createMessage('The inputted price must be a positive number.')
        } else {
            addItem({id: form_id, name: form_name, quantity: parsedQuantity, price: parsedPrice, category: form_category})
            setId(null)
            setName(null)
            setQuantity(null)
            setPrice(null)
            setCategory('Clothing') /* the form is set to graphics card by default so im initializing it as this as kind of just a workaround */

            createMessage('Successfully added item.')
        }
    };

    /* 
        earlier this was just const form_id = ''; but like that didn't seem to work well with setting the value on the forms cause it might've made it
        uneditable, so i used useState here 

        seems like setting value in react makes forms unchangeable so i had to put onChange myself and set it that way 
        i wonder if there's a more optimal way to do that rather than manually putting it on each one, or if im unnecessarily putting a bandaid patch here
    */

    return(
        <div>
            <Dashboard/>
            <h2>Add New Item</h2>
            <form onSubmit={formAddItem} id='form'>   
                <label for="id">ID</label><br/>
                <input type="text" required onChange={e => {setId(e.target.value)}}/>

                <br/><label for="name">Name</label><br/>
                <input type="text" required onChange={e => {setName(e.target.value)}}/>

                <br/><label for="quantity">Quantity</label><br/>
                <input type="number" required onChange={e => {setQuantity(e.target.value)}}/>

                <br/><label for="price">Price</label><br/>
                <input type="number" required onChange={e => {setPrice(e.target.value)}}/>

                <br/><label for="category">Category</label><br/>
                <select name="categories" id="categories" required onChange={e => {setCategory(e.target.value)}}>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Entertainment">Entertainment</option>
                </select><br/>

                <button type="submit">Add New Item</button>
                {message && <p>{message}</p>}
            </form>
        </div>
        
    )
}

export default AddItem