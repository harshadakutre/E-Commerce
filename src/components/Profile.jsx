import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { changePassword } from "./LoginSlice.js";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Profile = () => {
  const [modalOpen, setModelOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("error");
  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const currentPassword = location.state.password;

  const handleClick = () => {
    if (previousPassword !== currentPassword) {
      setSnackbarMessage("Incorrect Password");
      setSnackbarOpen(true);
      return;
    }
    if (newPassword !== verifyPassword) {
      setSnackbarMessage("New Passwords do not match");
      setSnackbarOpen(true);
      return;
    }

    dispatch(changePassword(location.state));
    setSnackbarMessage("Password changed Successfully");
    setSeverity("success");
    setSnackbarOpen(true);
    setModelOpen(false);
  };
  return (
    <Grid
      container
      sx={{ marginTop: "30px", textAlign: "center", border: "1px solid black" }}
    >
      <Grid item xs={9}>
        <Typography>E_Commerce Catalog section</Typography>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" onClick={() => setModelOpen(true)}>
          Change Password
        </Button>
      </Grid>
      <Modal
        open={modalOpen}
        onClose={() => setModelOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="previous-password"
            label="Previous Password"
            variant="outlined"
            onChange={(e) => setPreviousPassword(e.target.value)}
            type="password"
          />
          <br />
          <TextField
            id="new-Password"
            label="New Password"
            variant="outlined"
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
          />
          <br />
          <TextField
            id="verify-Password"
            label="Verify Password"
            variant="outlined"
            onChange={(e) => setVerifyPassword(e.target.value)}
            type="password"
          />
          <br />
          <Button variant="contained" onClick={handleClick}>
            Change Password
          </Button>
        </Box>
      </Modal>

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
    </Grid>
  );
};

export default Profile;
