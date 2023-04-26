import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice.tsx";
import { purchaseItem } from "../redux/productSlice.tsx";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { IconButton, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { increQty } from "../redux/cartSlice.tsx";
import { decreQty } from "../redux/cartSlice.tsx";

const useStyles = makeStyles((theme) => ({
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardActionArea: {
    maxHeight:"90%",
    transition: "transform 0.3s ease-in-out",
  },
  cardStyle:{
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#FAFAFA",
      transform: "scale(1.05)",
    },
  },
  myButton: {
    minWidth: 'unset',
    padding: theme.spacing(0.5),
  },
  myInput: {
    width: 20,
    textAlign: "center",
  }
}));

export default function Product({ prdct }) {
  const navigate = useNavigate();
  const [isCartExists, setIsCartExists] = useState(false);

  const allProducts = useSelector((state: RootState) => state.addItem);
  const addresses = useSelector((state) => state.userAddress);


  useEffect(() => {
    if (allProducts.find((item: { id: number }) => item.id == prdct.id)) {
      setIsCartExists(true);
    } else {
      setIsCartExists(false);
    }
  }, [prdct]);

  const handleProduct = () => {
    navigate(`singleproduct/${prdct.id}`, { state: { prdct } });
  };

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleActionDispatch = () => {
    let variable = dispatch(addItem(prdct));
    if (variable.payload) {
      toast.success("Item added to your cart");
    }
  };

  const handleProductPurchase = () => {
    dispatch(purchaseItem(prdct));
    navigate("addressparent");
  };

  return (
    <Card style={{ width: "20%", margin: 10, padding: 12 }} className={classes.cardStyle} 
    >
      <CardActionArea
        onClick={() => handleProduct()}
      >
        <CardMedia
          component="img"
          height="200"
          image={prdct.thumbnail}
          alt="Product..."
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prdct.title.substring(0, 12)}...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prdct.description.substring(0, 70)}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          Price: ${prdct.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        {!prdct.qty && (
          <Button
            variant="contained"
            color="warning"
            onClick={() => handleActionDispatch()}
            endIcon={<AddShoppingCartIcon />}
            style={{ marginBottom: "30%", fontSize: "12px" }}
          >
            Add Item
          </Button>
        )}
        {prdct.qty && (
          <>
            <Button
              variant="contained"
              color="warning"
              endIcon={<RemoveIcon style={{paddingRight:"12px"}}/>}
              style={{ marginBottom: "30%", fontSize: "12px" ,textAlign:"center"}}
              onClick={()=>dispatch(decreQty(prdct))}
            ></Button>
            <TextField
              type="text"
              value={prdct.qty}
              style={{ marginBottom: "30%", width: "10%",textAlign:"center",paddingLeft:"10px"}}
            />
            <Button
              variant="contained"
              color="warning"
              endIcon={<AddIcon style={{paddingRight:"12px"}}/>}
              style={{ marginBottom: "30%", fontSize: "12px",textAlign:"center"}}
              onClick={()=>dispatch(increQty(prdct))}
            >
            </Button>
          </>
        )}
        {!prdct.qty &&<Button
          style={{ marginBottom: "30%", fontSize:"12px" }}
          onClick={() => handleProductPurchase()}
          variant="outlined"
          color="info"
        >
          Buy Now
        </Button>
        }
      </CardActions>
    </Card>
  );
}
