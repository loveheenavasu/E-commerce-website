import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice.tsx";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardActionArea: {
    height: "90%",
  },
}));

export default function Product({ title, description, thumbnail, id, prdct }) {
  const navigate = useNavigate();

  const handleProduct = () => {
    navigate(`singleproduct/${id}`, { state: { prdct } });
  };

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleActionDispatch =() =>{
    let variable = dispatch(addItem(prdct))
    if(variable.payload){
     toast.success("Item added to your cart")
    }
   }
 

  return (
    <Card style={{ width: "20%", margin: 10, padding: 12 }}>
      <CardActionArea
        className={classes.cardActionArea}
        onClick={() => handleProduct()}
      >
        <CardMedia
          component="img"
          height="200"
          image={thumbnail}
          alt="Product..."
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          variant="contained"
          color="warning"
          onClick={() => handleActionDispatch()}
          endIcon={<AddShoppingCartIcon/>}
        >
          Add item
        </Button>
        <Button variant="outlined" color="info">
          Buy Now
        </Button>
        {/* Proceed to payment  to be added */}
      </CardActions>
    </Card>
  );
}
