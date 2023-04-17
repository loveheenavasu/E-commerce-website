import React from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Button,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addItem } from "../redux/cartSlice.tsx";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const location = useLocation();

  const useStyles = makeStyles((theme) => ({
    card: {
      width: "30vw",
      margin: "0 auto",
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    avatar: {
      backgroundColor: theme.palette.secondary.main,
    },
    carouselStyle: {
      width: "100%",
    },
  }));

  const product = location.state.prdct;

  console.log(product, "productproduct");
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="product" className={classes.avatar}>
              {product.brand.charAt(0)}
            </Avatar>
          }
          title={product.title}
          subheader={`Category: ${product.category}`}
        />
        <Carousel dynamicHeight={false} className={classes.carouselStyle}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={product.title} />
            </div>
          ))}
        </Carousel>
        <CardContent>
          <Typography variant="body1">{product.description}</Typography>
          <Rating
            name="product-rating"
            value={product.rating}
            precision={0.1}
            readOnly
          />
          <Typography variant="h5" gutterBottom>
            Price : ${product.price}{" "}
            <del style={{ color: "grey" }}>
              $
              {Math.round(
                (product.price / (1 - product.discountPercentage / 100)) * 100
              ) / 100}
            </del>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            In stock: {product.stock}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(addItem(product))}
          >
            Add to cart
          </Button>
          {/* <Button variant="outlined" color="primary">
            Buy now
          </Button> */}
        </CardActions>
      </Card>
    </div>
  );
};

export default SingleProduct;
