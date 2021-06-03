import React, { useState } from "react";
import { Grid, TextField, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  registrationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    background: "linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);",
  },
  gridContainer: {
    width: "60%",
    height: "90%",
    background: "white",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  button: {
    borderRadius: 9999,
    padding: 14,
  },
  form: {
    width: "60%",

    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: "10rem auto",
    [theme.breakpoints.down("xs")]: {
      margin: "1rem auto",
    },
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  gridItems: {
    height: "100%",
    "&:first-of-type": {
      backgroundSize: "cover",
      backgroundPosition: "center center",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
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
      <Grid container className={classes.gridContainer}>
        <Grid item md={5} xs={1} className={classes.gridItems}></Grid>
        <Grid item md={7} xs={12} className={classes.gridItems}>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleLogin}
          >
            <LockOpenIcon
              fontSize="large"
              style={{ background: "red", borderRadius: "50%", color: "white" }}
            />
            <h2>Sign in</h2>
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
            <Link to="/admin/register">Don't have an account? Sign Up</Link>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
