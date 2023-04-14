import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));


export default function Product({title,description,thumbnail}) {
  const navigate = useNavigate()

  const classes = useStyles()
  return (
    <Card style={{width:"30%",margin: 10,padding:12}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
       <Button>Add to cart</Button>
       <Button variant="contained">Buy Now</Button>
       {/* Proceed to payment  */}
      </CardActions>
    </Card>
  );
}