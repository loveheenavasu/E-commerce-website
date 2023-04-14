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



const RightSideBar = () => {

    const useStyles = makeStyles({
        root: {
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        },
        header: {
          backgroundColor: "#1976d2",
          color: "#fff",
          padding: "20px",
        },
        main: {
          flex: "1",
          padding: "20px",
        },
        table: {
          minWidth: 650,
        },
        footer: {
          backgroundColor: "#1976d2",
          color: "#fff",
          padding: "20px",
          marginTop: "auto",
        },
        checkoutButton: {
          marginTop: "20px",
        },
      });

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <h1>Shopping Cart</h1>
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
              {/* Replace with a loop to generate a row for each item in the cart */}
              <TableRow>
                <TableCell>Product name</TableCell>
                <TableCell align="right">$XX.XX</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">$XX.XX</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total:</TableCell>
                <TableCell align="right">$XX.XX</TableCell>
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
      <footer className={classes.footer}>
        <p>&copy; Yourwebsite</p>
      </footer>
    </div>
  );
};

export default RightSideBar;
