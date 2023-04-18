import { makeStyles } from '@material-ui/core/styles';

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TableFooter,
} from "@material-ui/core";
import RootState from '../redux/reducers.tsx'
import { useSelector } from 'react-redux';



const RightSideBar = () => {

    const useStyles = makeStyles({
        root: {
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        },
        header: {          
          color: "#ff423",
      
      
        padding: "5px",
        },
        main: {
          flex: "1",
          padding: "20px",
        },
        table: {
          minWidth: 650,
        },
        checkoutButton: {
          marginTop: "20px",
        },
      });

  const classes = useStyles();



  const allProducts = useSelector((state: RootState) => state.addItem);




  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <h1> Check out your Cart</h1>
      </header>
      <main className={classes.main}>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allProducts.map((product)=>{
                return (
                <TableRow>
                <TableCell>{product.title}</TableCell>
                <TableCell align="right">${product.price}</TableCell>
                <TableCell align="right">{product.qty}</TableCell>
                <TableCell align="right">${product.price * product.qty}</TableCell>
              </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total:</TableCell>
                {/* <TableCell align="right">$XX.XX</TableCell> */}
                {/* total price Yet to be added */}
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <Button
          variant="contained"
          color="primary"
          className={classes.checkoutButton}
        >
          Checkout
        </Button>
      </main>
    </div>
  );
};

export default RightSideBar;
