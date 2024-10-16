import DisplayItems from './displayItems'
import Dashboard from './Dashboard'

const DisplayItemsLowStock = ({items}) => {
    function returnLowStock() {
        const lowStock = items.filter(item =>  /* i love react */
            item.quantity <= 5
        )
        return lowStock
    }

    return(
        <div>
            <Dashboard/>
            <h2>Display Low Stock Items</h2>
            <DisplayItems items={returnLowStock()} />
        </div>
    )
}

export default DisplayItemsLowStock;