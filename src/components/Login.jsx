import React, { useState } from "react";
import ecommerce from "../assets/ecommerce.svg";
import "./style.css";
import { Box, Grid, Typography } from "@mui/material";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = () => {
  const [signUp, setSignUp] = useState(false);

  return (
    <Box>
      <Grid container>
        <Grid item xs={6}>
          <img className="ecommerce-image" src={ecommerce} alt="exommerce" />
        </Grid>
        <Grid container item xs={6}>
          <Grid item xs={10} sx={{ textAlign: "center", marginTop: "20%" }}>
            <Typography>E-Commerce Webiste</Typography>
            {!signUp && <SignIn />}
            {signUp && <SignUp />}
            <br />
            {signUp && (
              <a style={{ color: "blue" }} onClick={() => setSignUp(false)}>
                Login
              </a>
            )}

            {!signUp && (
              <>
                <h4>Don't have Account?</h4>{" "}
                <a style={{ color: "blue" }} onClick={() => setSignUp(true)}>
                  Sign Up
                </a>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
