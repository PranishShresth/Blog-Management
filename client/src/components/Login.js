import React, { useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    "&>div": {
      marginBottom: theme.spacing(3),
    },
  },
}));
function Login() {
  const classes = useStyles();
  const [loginValues, setLoginValues] = useState({ email: "", password: "" });
  const handleChange = (ev) => {
    setLoginValues((prevState) => ({
      ...prevState,
      [ev.target.id]: ev.target.value,
    }));
  };

  const handleLogin = (ev) => {
    ev.preventDefault();
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
