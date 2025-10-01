import './App.css'
import React from 'react'
import { useDispatch } from "react-redux"
import AddtoCart from './AddtoCart';
import { addItem } from './redux/slice';

const Product = () => {

    const dispatch = useDispatch();

  return (
    <div>
      <section className="products">
    <h2>Our Products</h2>
    <div className="product-grid">
      
      <div className="product-card">
        <img src="data:image/jpeg;base64,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" alt="Product 1"/>
        <h3>Product 1</h3>
        <p>High quality product description goes here.</p>
        <div className="price">$20</div>
        <button onClick={()=>dispatch(addItem(1))}><i className="fas fa-cart-plus"></i> Add to Cart</button>
      </div>

      <div className="product-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiEUMgaHL1Qg40AdlJU2iIgwnjFyKyzeY6g&s" alt="Product 2"/>
        <h3>Product 2</h3>
        <p>Stylish and durable product for daily use.</p>
        <div className="price">$35</div>
        <button onClick={()=>dispatch(addItem(1))}><i className="fas fa-cart-plus"></i> Add to Cart</button>
      </div>

      <div className="product-card">
        <img src="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-main-image-1.2.png" alt="Product 3"/>
        <h3>Product 3</h3>
        <p>Latest design with premium quality.</p>
        <div className="price">$50</div>
        <button onClick={()=>dispatch(addItem(1))}><i className="fas fa-cart-plus"></i> Add to Cart</button>
      </div>

      <div className="product-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCDLh3c6_cAO4YaYn-0WZ8YNK_8A64eSzkOC5rDQibiTk_q6RpkvtjUfueQap7ncGlZE&usqp=CAU" alt="Product 4"/>
        <h3>Product 4</h3>
        <p>Comfortable and trendy product choice.</p>
        <div className="price">$28</div>
        <button onClick={()=>dispatch(addItem(1))}><i className="fas fa-cart-plus"></i> Add to Cart</button>
      </div>

    </div>
  </section>

    </div>
  )
}

export default Product
