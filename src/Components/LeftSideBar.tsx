import React from "react";
import {
  Box,  Typography,
Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { removeItem } from "../redux/cartSlice.tsx";
import { toast } from "react-toastify";

const LeftSideBar = () => {
  const useStyles = makeStyles((theme) => ({
    productBox: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #e0e0e0",
      borderRadius: theme.shape.borderRadius,
    },
    productImageBox: {
      width: "40%",
    },
    productImage: {
      width:"10vw",
    },
    productDetailsBox: {
        flexGrow: 1,
    },
  }));

  const dispatch = useDispatch();

  const classes = useStyles();

  const cartItemsArray = useSelector((state:rootState) => state.addItem);

  const handleRemoveProduct = (product) => {
    let varialble = dispatch(removeItem(product)) 
    if(varialble.payload){
      toast.success("Item removed from cart")
    }
  };

  return (
    <div className="leftBar" style={{ width: "60%", margin: 5 }}>
      {cartItemsArray.map((product) => {
        return (
          <>
            <Box className={classes.productBox}>
              <Box className={classes.productImageBox}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className={classes.productImage}
                />
              </Box>
              <Box className={classes.productDetailsBox}>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body1">
                  {product.description.substring(0, 50)}...
                </Typography>
                <Rating
                  name="product-rating"
                  value={product.rating}
                  precision={0.1}
                  readOnly
                />
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="h6"
                    component="span"
                    style={{ marginRight: "1rem" }}
                  >
                    Price:
                  </Typography>
                  <Typography variant="h6" component="span">
                    ${product.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="span"
                    style={{
                      marginLeft: "0.5rem",
                      color: "gray",
                      textDecoration: "line-through",
                    }}
                  >
                    $
                    {Math.round(
                      (product.price / (1 - product.discountPercentage / 100)) *
                        100
                    ) / 100}
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary" component="p">
                  In stock: {product.stock}
                </Typography>
                <Box mt={3} mb={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<RemoveShoppingCartIcon />}
                    onClick={()=>handleRemoveProduct(product)}
                  >
                    Remove Item
                  </Button>
                  <Typography
                    variant="h6"
                    component="span"
                    style={{ margin: "0 1rem" }}
                  >
                    {product.qty}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </>
        );
      })}
    </div>
  );
};

export default LeftSideBar;
