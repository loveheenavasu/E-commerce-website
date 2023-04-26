import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    card: {
        padding: '1rem',
        backgroundColor: '#fafafa',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        margin: 12,
        alignItems: 'flex-start',
        minWidth: '300px',
        maxWidth: '600px',
        "&hover":{
            cursor:"pointer",
        }
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: theme.spacing(2),
  },
  name: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  addressLine: {
    marginTop: theme.spacing(1),
    fontSize: '1rem',
  },
  telephoneNumber: {
    marginTop: theme.spacing(2),
    fontSize: '1rem',
  },
}));

const Addresses = () => {
  const classes = useStyles();

  const [selectedAddress, setSelectedAddress] = useState({});

  const addresses = useSelector((state) => state.userAddress);

  const navigate = useNavigate();

  const handleNavigate = (address) => {
    navigate('payment', { state: { address } });
  };

  function handleAddressChange(event) {
    let _address = JSON.parse(event.target.value);
    setSelectedAddress(_address);
  }

  return (
    addresses?.map((address) => {
      return (
        <div key={address.id} onClick={() => handleNavigate(address)}>
          {address.fullName && (
            <Card className={classes.card}>
              <input
                type="radio"
                name="address"
                value={JSON.stringify(address)}
                checked={address === selectedAddress ? true : false}
                onChange={(event) => handleAddressChange(event)}
              />
              <CardContent>
                <Typography variant="h5" className={classes.heading}>
                  {address.fullName.toUpperCase()}
                </Typography>
                <Typography variant="h6" className={classes.addressLine}>
                  {`${address.addressLine1}, ${address.addressLine2}, ${address.city}, ${address.state}, ${address.zipCode}, ${address.country}`}
                </Typography>
              </CardContent>
            </Card>
          )}
        </div>
      );
    })
  );
};

export default Addresses;
