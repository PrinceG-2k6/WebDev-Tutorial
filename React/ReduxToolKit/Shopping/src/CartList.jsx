import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from './redux/slice';
import './App.css'
const CartList = () => {

    const dispatch = useDispatch();

    const cartSelector = useSelector((state) => state.cart.items);
    console.log(cartSelector.length);
    return (
        <>

            <div className='cart-container'>
                <div className="card-Header">
                    <h2>Your Cart Item</h2>
                    <span>{cartSelector.length} Items</span>
                </div>
                {
                    cartSelector.length > 0 ? cartSelector.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <div className="item-info">
                                <img src={item.thumbnail} />
                                <div className="item-details">
                                    <h4>{item.title}</h4>
                                    <p>{item.brand}</p>
                                </div>
                            </div>
                            <div className="item-actions">
                                <span className='price'>{item.price}</span>
                                <button onClick={() => dispatch(removeItem(item))} className='btn remove'>Remove From Cart</button>
                            </div>
                        </div>
                    )) : "No Item Added To Cart "
                }
                <div className='cart-footer'>
                    Total : {cartSelector.reduce((sum, item) => sum + item.price, 0)}
                </div>
            </div>

        </>
    )
}

export default CartList
