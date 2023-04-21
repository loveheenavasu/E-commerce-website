import React from "react";
import LeftSideBar from "./LeftSideBar.tsx";
import RightSideBar from "./RightSideBar.tsx";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItemsArray = useSelector((state) => state.addItem);

  return (
    <div className="Cart" style={{ display: "flex" }}>
      {cartItemsArray.length ? (
        <>
          <LeftSideBar />
          <RightSideBar />
        </>
      ) : (
        <div style={{
          display: "flex",
          flexDirection:"column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}>
        <div>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png"/>
        </div>
        <h1>
          Your Cart is Empty !!
        </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
