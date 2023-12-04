import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "./LoginSlice.js";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignIn = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (name === "") {
      setSnackbarMessage("name is required");
      setSnackbarOpen(true);
      return;
    }
    if (email === "") {
      setSnackbarMessage("email is required");
      setSnackbarOpen(true);
      return;
    }
    if (phoneNumber === "") {
      setSnackbarMessage("Phone number is required");
      setSnackbarOpen(true);
      return;
    }
    if (password !== verifyPassword) {
      setSnackbarMessage("Password Does not Match");
      setSnackbarOpen(true);
      return;
    }
    dispatch(signup({ name, email, phoneNumber, password }));
    setSnackbarMessage("Succesfully Signed up");
    setSeverity("success");
    setSnackbarOpen(true);
    return;
  };

  return (
    <Box display="grid">
      <TextField
        id="Name"
        label="Full Name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <TextField
        id="Email"
        label="Email Address"
        variant="outlined"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <TextField
        id="Phone"
        label="Phone Number"
        variant="outlined"
        type="number"
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <br />
      <TextField
        id="Password"
        label="password"
        type="password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />
      <TextField
        id="ReEnterPassword"
        label="Re-Enter Password"
        type="password"
        variant="outlined"
        onChange={(e) => setVerifyPassword(e.target.value)}
        required
      />
      <br />
      <Button variant="contained" onClick={handleClick}>
        Signup
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignIn;
