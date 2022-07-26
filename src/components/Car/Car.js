import './Car.style.css';

function Car({item, deleteCar, setCarForUpdate}) {
    const {id, model, price, year} = item

    return (
        <div className={'car-info'}>
            <ul>
                <li> id: {id}</li>
                <li>model: {model}</li>
                <li>price: {price}</li>
                <li>year: {year}</li>
            </ul>

            <button onClick={() => setCarForUpdate(item)}>Edit</button>
            <button onClick={() => deleteCar(id)}>Delete</button>
        </div>
    );
}

export {Car};