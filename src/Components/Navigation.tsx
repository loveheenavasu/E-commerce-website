import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Navigation() {

  const cartItems = useSelector((state) => state.addItem);
  const navigate = useNavigate();
  
  
  const handleCartNavigate = () =>{
   navigate('cart')
  }



  return (
<div
      style={{
        flexGrow: 1,
        position: "sticky",
        top: 0,
        zIndex: 1,
        WebkitBackdropFilter: "blur(8px)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#f2f2f2",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
      }}
    >
      <img
        src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
        alt="E-Store.Com logo"
        style={{ height: "50px", marginRight: "20px" }}
      />
      <Typography variant="h6" noWrap>
        E-Store.Com
      </Typography>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          margin: 0,
          padding: 0,
          marginLeft: "auto",
        }}
      >
        <li style={{margin:"12px"}}>Home</li>
        <li style={{margin:"12px"}}>About us</li>
        <li style={{margin:"12px"}}>Contact us</li>
        <li style={{margin:"12px"}}>Cart</li>
        <div style={{ marginLeft: "auto", display: "flex" }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={() => handleCartNavigate()}
          >
            <Badge badgeContent={cartItems.length} color="error" style={{marginBottom:"12"}}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </ul>
    </div>
  );
}
