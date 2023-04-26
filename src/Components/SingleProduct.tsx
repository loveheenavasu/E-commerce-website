import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import { addItem } from "../redux/cartSlice.tsx";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@material-ui/core";
import DoneIcon from '@mui/icons-material/Done';


const SingleProduct = () => {
  const location = useLocation();

  const product = location.state.prdct;

  const dispatch = useDispatch();

  const handleActionDispatch = () => {
    let variable = dispatch(addItem(product));
    if (variable.payload) {
      toast.success("Item added to your cart");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "10%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "70%",
          margin: "20px",
          backgroundColor: "ButtonFace",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ width: "60%", height: "100%", padding: "20px" }}>
            <img
              src={product.thumbnail}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div style={{ width: "50%", height: "100%", padding: "20px" }}>
            <h3 style={{ marginTop: "0" }}>{product.title}</h3>
            <p style={{ marginTop: "0" }}>{product.description}</p>
            <h5 style={{ marginTop: "20px", marginBottom: "0" }}>
              Price : ${product.price}{" "}
              <del style={{ color: "grey" }}>
                $
                {Math.round(
                  (product.price / (1 - product.discountPercentage / 100)) * 100
                ) / 100}
              </del>
            </h5>
            <Rating
              name="product-rating"
              value={product.rating}
              precision={0.1}
              readOnly
              style={{ marginTop: "10px" }}
            />
            <div style={{ marginTop: "20px" }}>
            {!product.qty && <Button
                style={{
                  padding: "10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={handleActionDispatch}
                endIcon={<ShoppingCartIcon/>}
              >
                Add To Cart 
              </Button>}
              {
                 product.qty &&<Button
                 style={{
                   padding: "10px",
                   background: "red",
                   color: "white",
                   border: "none",
                   cursor: "pointer",
                 }}
                 endIcon={<DoneIcon/>}
               >
                 Added 
               </Button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
