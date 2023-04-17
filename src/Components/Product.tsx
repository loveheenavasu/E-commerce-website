import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice.tsx";

const useStyles = makeStyles((theme) => ({
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardActionArea: {
    height: "90%",
  },
}));

export default function Product({ title, description, thumbnail,id,prdct }) {
  const navigate = useNavigate();

  const handleProduct = () =>{
    navigate(`singleproduct/${id}`,{state:{prdct}})
    console.log("handleproductisconsoled")
  }

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card style={{ width: "30%", margin: 10, padding: 12 }}>
      <CardActionArea className={classes.cardActionArea} onClick={()=>handleProduct()}>
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
        <Button onClick={()=>dispatch(addItem(prdct))}>Add to cart</Button>
        <Button variant="contained">Buy Now</Button>
        {/* Proceed to payment  to be added */}
      </CardActions>
    </Card>
  );
}
