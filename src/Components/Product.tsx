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
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      backgroundColor:"#FAFAFA",
      transform: 'scale(1.05)',
    },
  }
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
            {title.substring(0, 12)}...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.substring(0, 45)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          variant="contained"
          color="warning"
          onClick={() => handleActionDispatch()}
          endIcon={<AddShoppingCartIcon/>}
          style={{marginBottom:"30%"}}
        >
          Add item
        </Button>
        <Button style={{marginBottom:"30%"}} variant="outlined" color="info">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
