import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const registeredUsers = useSelector((state) => state.signUpReducer);
  const navigate = useNavigate();

  const handleClick = () => {
    registeredUsers.forEach((user) => {
      if (username === user.email && password === user.password) {
        console.log("logged in");
        navigate("/catalog", { state: { name: username, password: password } });
      }
    });
    setSnackbarOpen(true);
  };

  return (
    <Box display="grid">
      <TextField
        id="Username"
        label="Username is your email"
        variant="outlined"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <TextField
        id="Password"
        label="password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <br />
      <Button variant="contained" onClick={handleClick}>
        Login
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Incorrect Credentials
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignIn;
