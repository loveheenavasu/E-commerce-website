import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from "react";
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
import { useSelector } from 'react-redux';
import PaymentIcon from '@mui/icons-material/Payment';
import UserModal from './Modal.tsx';




const RightSideBar = () => {
    const useStyles = makeStyles((theme)=>({
        root: {
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333',
        },
        header: {          
        color: "#ff423",
        backgroundColor: 'lightblue',
        padding: theme.spacing(2),
        textAlign: 'center',
        borderBottom: '1px solid #ddd',
        },
        tableHead:{
        backgroundColor: "#f2f2f2",
        fontWeight: "bold",
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
        tableFooter: {
          backgroundColor: "#f5f5f5",
        },
        tableCell: {
          fontWeight: "bold",
          fontSize: "1.2rem",
          color: "#333",
        },
      }));

  const classes = useStyles();


  const allProducts = useSelector((state: RootState) => state.addItem);

  const [isModalOpen,setIsModalOpen] = useState(false);

  const handleModal =() =>{
    setIsModalOpen(true)
  }


  const totalCartPrice = () =>{
   let totalPrice=0;
   for (let i = 0; i < allProducts.length; i++) {
   let  itemTotal = allProducts[i].qty * allProducts[i].price;
   totalPrice += itemTotal;
   }
   return totalPrice
  } 

  let totalPrice = totalCartPrice()

  return (
    <div className={classes.root}>
      <main className={classes.main}>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={classes.tableCell}>Product</TableCell>
                <TableCell className={classes.tableCell} align="right">Price</TableCell>
                <TableCell className={classes.tableCell} align="right">Quantity</TableCell>
                <TableCell className={classes.tableCell} align="right">Subtotal</TableCell>
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
            <TableFooter className={classes.tableFooter}>
              <TableRow >
                <TableCell colSpan={3} className={classes.tableCell}>Total: </TableCell>
                <TableCell align="right" className={classes.tableCell}>${totalPrice}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <Button
          variant="contained"
          color="primary"
          className={classes.checkoutButton}
          onClick={()=>handleModal()}
          endIcon={<PaymentIcon/>}
         >
          Checkout
        </Button>
      </main>
      <UserModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
};

export default RightSideBar;
