import React, { useState } from "react";
import {
  Grid,
  Typography,
  Divider,
  makeStyles,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    maxWidth: 700,
    margin: "0 auto",
    borderRadius: 8,
    backgroundColor: "#fff",
    boxShadow: "0px 0px 8px rgba(0,0,0,0.2)",
    marginTop: theme.spacing(4),
  },
  header: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: "#3f51b5",
    fontWeight: 700,
  },
  address: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  formControl: {
    minWidth: 200,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    fontWeight: 700,
    borderRadius: 4,
    backgroundColor: "#3f51b5",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#2c3e50",
    },
  },
  paymentBox: {
    border: "1px solid #ccc",
    borderRadius: 8,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
}));

const PaymentPage = () => {
  const classes = useStyles();

  const location = useLocation();
  const address = location.state.address;

  const { fullName, addressLine1, addressLine2, city, state, zipCode, country } = address;

  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [paymentFormValues,setIspaymentFormValues] = useState({
    paymentMethod: "",
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  })


  const handleExpiryMonthChange = () => {
    const input = paymentFormValues.expiryMonth;
    if (/^(\d{1,2})$/.test(input) && input <= 12) {
      setExpiryMonth(input);
      return true
    }
    else{
        toast.error("Please enter Valid Month")
        return false;
    }
  };

//   const handleExpiryYearChange = () => {
//     const input = paymentFormValues.expiryYear;
//     if (/^(202[3-9]|[2-9]\d{3})$/.test(input)) {
//         setExpiryYear(input);
//         return true;
//       }
//       else{
//       toast.error("Please enter Valid year")
//       return false;
//     }
//   };


const currentYear = new Date().getFullYear();
const handleExpiryYearChange = () => {
  const input = paymentFormValues.expiryYear;
  const year = parseInt(input, 10);

  if (year >= currentYear && Number.isInteger(year)) {
    setExpiryYear(input);
    return true;
  } else {
    toast.error("Please enter a valid year after " + currentYear);
    return false;
  }
};

 
  const navigate = useNavigate();
  const handleChange =(event) =>{
    setIspaymentFormValues({ ...paymentFormValues, [event.target.id]:event.target.value });
  }

  const handleOrders = () => {
    if(!paymentFormValues.expiryYear||!paymentFormValues.cardNumber||!paymentFormValues.cardName||!paymentFormValues.expiryMonth||!paymentFormValues.cvv){
        toast.error("Please enter all fields")
        return;
    }

   const validateYear = handleExpiryYearChange()
   const validateMonth = handleExpiryMonthChange()
   
   if(!validateYear ||!validateMonth){
    return;
   }
   
   if(paymentFormValues.cvv.length!==3){
    return;
   }


    toast.success("Your payment has been successful");
    navigate("orders", { state: { paymentStatus: true } });
  };



  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" className={classes.header}>
          Payment Options
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={12} className={classes.address}>
        <LocationOnIcon className={classes.icon} style={{ color: "green" }} />
        <div>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            {fullName}
          </Typography>
          <Typography>{`${addressLine1}, ${addressLine2}`}</Typography>
          <Typography>{`${city}, ${state}, ${zipCode}`}</Typography>
          <Typography>{country}</Typography>
        </div>
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="standard" className={classes.formControl}>
          <InputLabel id="paymentMethod" onChange={(event)=>handleChange(event)}>Payment Method</InputLabel>
          <Select labelId="payment-method-label" id="payment-method">
            <MenuItem value="credit-card">
              <CreditCardIcon className={classes.icon} style={{ color: "#3f51b5" }} />
              Credit Card
            </MenuItem>
            <MenuItem value="debit-card">
              <CreditCardIcon className={classes.icon} style={{ color: "#9E9E9E" }} />
              Debit Card
            </MenuItem>
            <MenuItem value="netbanking" style={{color:"green"}}>Netbanking</MenuItem>
            <MenuItem value="upi" style={{color:"green"}}>UPI</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="standard"
          id="cardNumber"
          onChange={(event)=>handleChange(event)}
          label="Card Number"
          type="number"
          fullWidth
          margin="normal"
        />
        <TextField
          variant="standard"
          id="cardName"
          label="Name on Card"
          onChange={(event)=>handleChange(event)}
          fullWidth
          margin="normal"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              label="Expiry Month"
              onChange={(event)=>handleChange(event)}
              id="expiryMonth"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">{'MM'}</InputAdornment>,
              }}  
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="standard"
              label="Expiry Year"
              onChange={(event)=>handleChange(event)}
              id="expiryYear"
              fullWidth
              InputProps={{
                endAdornment: <InputAdornment position="end">{'YYYY'}</InputAdornment>,
              }}      
              margin="normal"
            />
          </Grid>
        </Grid>
        <TextField
          variant="standard"
          type="number"
          label="cvv"
          onChange={(event)=>handleChange(event)}
          id="cvv"
          fullWidth
          margin="normal"
        />
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems:"center"}}>
    <Button variant="contained" onClick={() => handleOrders()}>Pay Now</Button>
     </div>
    </Grid>
     )
  }


export default PaymentPage;   

