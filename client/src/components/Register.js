import React, { useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    "&>div": {
      marginBottom: theme.spacing(3),
    },
  },
}));
function Register() {
  const [registerValue, setRegisterValues] = useState({
    username: "",
    password: "",
    repeatPassword: "",
    email: "",
  });

  const classes = useStyles();
  const handleChange = (ev) => {
    setRegisterValues((prevState) => ({
      ...prevState,
      [ev.target.id]: ev.target.value,
    }));
  };

  const handleRegister = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <h1>Register</h1>
      <form className={classes.form} onSubmit={handleRegister}>
        <TextField
          required
          id="email"
          type="email"
          label="Email"
          fullWidth
          value={registerValue.email}
          onChange={handleChange}
        />
        <TextField
          required
          id="username"
          type="text"
          label="Username"
          fullWidth
          value={registerValue.username}
          onChange={handleChange}
        />
        <TextField
          required
          id="password"
          type="password"
          label="Password"
          fullWidth
          value={registerValue.password}
          onChange={handleChange}
        />
        <TextField
          required
          id="repeatPassword"
          type="password"
          label="Repeat Password"
          value={registerValue.repeatPassword}
          fullWidth
          onChange={handleChange}
        />
        <Button variant="contained" color="primary">
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
