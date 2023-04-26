import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { userAddress } from "../redux/userSlice.tsx";
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "40vw",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    margin: 12,
  },
  formTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "5px",
      "& fieldset": {
        borderColor: theme.palette.secondary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
        borderWidth: "2px",
      },
    },
  },
}));

function Address() {
  const classes = useStyles();

  const dispatch= useDispatch()
  const addresses = useSelector((state)=> state.userAddress)


  console.log(addresses,"addressconsole")

  const [formData, setFormData] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });



  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handlevaluedisPatch = () => {
    if(!formData.fullName||!formData.addressLine1||!formData.addressLine2||!formData.city||!formData.state||!formData.zipCode||!formData.country){
        toast.error("Please Enter all values")
        return;
    }
    dispatch(userAddress(formData))
    console.log(formData, "formData")
    setFormData({
        fullName: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      })  
  };



  return (
    <div className={classes.root}>
      <h2 className={classes.formTitle}>Enter your Shipping Address</h2>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="fullName"
            label="Full Name"
            variant="outlined"
            value={formData.fullName}
            fullWidth
            onChange={handleFormChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="addressLine1"
            label="Address Line 1"
            variant="outlined"
            value={formData.addressLine1}
            fullWidth
            onChange={handleFormChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="addressLine2"
            label="Address Line 2"
            variant="outlined"
            value={formData.addressLine2}
            fullWidth
            onChange={handleFormChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            label="City"
            variant="outlined"
            value={formData.city}
            fullWidth
            onChange={handleFormChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            label="State/Province/Region"
            variant="outlined"
            value={formData.state}
            fullWidth
            onChange={handleFormChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zipCode"
            label="Zip/Postal Code"
            variant="outlined"
            value={formData.zipCode}
            fullWidth
            onChange={handleFormChange}
            className={classes.textField}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            value={formData.country}
            fullWidth
            onChange={handleFormChange}
            className={classes.textField}
          />
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
          color: "black",
        }}
      >
        <Button
          variant="contained"
          color="error"
          onClick={() => handlevaluedisPatch()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Address;
