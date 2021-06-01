import React, { useState, useContext } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
import axios from "../utils/axios";
import { useSnackbar } from "notistack";
import { UserContext } from "../context/UserContext/UserContext";

const useStyles = makeStyles((theme) => ({
  form: {
    "&>div": {
      marginBottom: theme.spacing(3),
    },
  },
}));
function Login() {
  const classes = useStyles();
  const { userDispatch } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();
  const [loginValues, setLoginValues] = useState({ email: "", password: "" });
  const handleChange = (ev) => {
    setLoginValues((prevState) => ({
      ...prevState,
      [ev.target.id]: ev.target.value,
    }));
  };

  const handleLogin = async (ev) => {
    ev.preventDefault();
    try {
      const { data, status } = await axios.post("/api/auth/login", loginValues);
      if (status === 200) {
        localStorage.setItem("token", data.accessToken);
        // userDispatch()
        enqueueSnackbar("Login Success", { variant: "success" });
      }
    } catch (err) {
      enqueueSnackbar("Login Error", { variant: "error" });
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form className={classes.form} onSubmit={handleLogin}>
        <TextField
          required
          id="email"
          type="email"
          label="Email"
          fullWidth
          value={loginValues.email}
          onChange={handleChange}
        />
        <TextField
          required
          id="email"
          type="password"
          label="Password"
          fullWidth
          value={loginValues.password}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
