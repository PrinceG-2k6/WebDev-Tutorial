import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from './redux/slice';
import './App.css'
const CartList = () => {

    const dispatch = useDispatch();

    const cartSelector = useSelector((state)=>state.cart.items);
    console.log(cartSelector.length);
  return (
    <>
    <div className="card-Header">
        <h1>Your Cart Item</h1>
        <span style={{marginLeft:'20px'}}>{cartSelector.length} Items</span>
    </div>
    <div className='cart-container'>
          {
            cartSelector.length>0 ?cartSelector.map((item,index)=>(
              <div className="cart-item" key={index}>
                <img src={item.thumbnail} />
                <div className="content"><br />
                  <div className="title">{item.title}</div>
                  <div className="brand">{item.brand}</div>
                  <div className="price" style={{color:'green'}}>Price: {item.price}</div>
                  <div className="rating">Rating: {item.rating}</div>
                    <button onClick={()=>dispatch(removeItem(item))} className='btn remove'>Remove From Cart</button>
                  
                </div>
              </div>
            )):"No Item Added To Cart "
          }
          <div className='cart-footer'>
            Total : {cartSelector.reduce((sum,item)=>sum+item.price,0)}
        </div>
        </div>
        
        </>
  )
}

export default CartList
