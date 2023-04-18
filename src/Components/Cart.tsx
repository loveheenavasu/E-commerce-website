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
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          Your Cart is Empty
        </h1>
      )}
    </div>
  );
};

export default Cart;
