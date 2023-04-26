import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Orders.css";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const purchasedProducts = useSelector((state) => state.purchaseItem);
  const cartItemsArray = useSelector((state: rootState) => state.addItem);

  const [products,setProducts] = useState([]);

  const location = useLocation()
  const paymentStatus = location.state?.paymentStatus ||false;

  useEffect(()=>{
    if(!purchasedProducts.length && paymentStatus ||purchasedProducts.length){
      setProducts(cartItemsArray)
    }
    else if(paymentStatus){
      setProducts(purchasedProducts)
    }
  },[purchasedProducts.length,cartItemsArray.length]);

  return (
    <div className="payment-container">
      {products.length ? <h2 className="payment">Your Purchased Products</h2>: <h2 className="payment">You Have No Purchased Products</h2>}
      <div className="product-list">
        {products.map(
          (item) =>
            <div className="product-item" key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-description">{item.description}</p>
                <p >Price :${item.price}</p>
                <p style={{fontFamily:"Gill Sans Extrabold",color:"green"}}>Delivered</p>
              </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
