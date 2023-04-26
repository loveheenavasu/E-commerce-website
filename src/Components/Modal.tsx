import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { toast } from "react-toastify";
import CallIcon from '@mui/icons-material/Call';


const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: 8,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    display: "block",
    marginLeft: "auto",
    marginTop: theme.spacing(2),
  },
}));

const UserModal = ({setIsModalOpen,isModalOpen}) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [fullName, setFullName] = useState("");

  const navigate = useNavigate();



  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, cardNumber, fullName);
    if(!username||!email||!cardNumber||!fullName){
        toast.error("Please enter all fields")
        return;
    }
    handleClose();
    navigate('/addressparent');
  };

  const body = (
    <div className={classes.paper}>
      <Typography variant="h5" className={classes.title}>
        Enter User Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          className={classes.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon/>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="fullName"
          label="Full Name"
          variant="outlined"
          className={classes.input}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon/>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="cardNumber"
          label="Phone Number"
          variant="outlined"
          className={classes.input}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
              <CallIcon/>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          className={classes.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Submit
        </Button>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isModalOpen} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default UserModal;
