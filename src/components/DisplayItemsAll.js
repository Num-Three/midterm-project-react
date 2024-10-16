import Dashboard from './Dashboard';
import DisplayItems from './displayItems'

const DisplayItemsAll = ({items}) => {
    return(
        <div>
            <Dashboard/>
            <h2>Display All Items</h2>
            <DisplayItems items={items} />
        </div>
    )
}

export default DisplayItemsAll;