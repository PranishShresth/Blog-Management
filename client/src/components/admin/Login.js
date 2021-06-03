import React, { useState } from "react";
import {
  Grid,
  TextField,
  Paper,
  Button,
  Container,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AdminBg from "./images/admin.jpg";

import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  registrationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    background: "linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);",
  },
  container: {
    display: "flex",
    height: "500px",
  },
  imageContainer: {
    flex: "0 0 50%",
    background: `url(${AdminBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    width: "100%",
  },
  formContainer: {
    flex: "0 0 50%",
    background: "white",

    [theme.breakpoints.down("sm")]: {
      flex: "0 0 100%",
    },
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "0 80px",
    height: "100%",
    "& > *": {
      margin: "10px 0",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 50px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 20px",
    },
  },
}));

function Login() {
  const classes = useStyles();
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (ev) => {
    setUser((prevState) => ({
      ...prevState,
      [ev.target.id]: ev.target.value,
    }));
  };
  const handleLogin = () => {};
  return (
    <div className={classes.registrationContainer}>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.imageContainer}></div>
        <div className={classes.formContainer}>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleLogin}
          >
            <LockOpenIcon
              fontSize="large"
              style={{
                background: "red",
                borderRadius: "50%",
                color: "white",
                textAlign: "center",
              }}
            />
            <Typography align="center" variant="h4">
              Admin Sign in
            </Typography>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="text"
              fullWidth
              value={user.email}
              onChange={handleChange}
            />
            <TextField
              id="password"
              type="password"
              value={user.password}
              label="Password"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              className={classes.button}
            >
              Login
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
