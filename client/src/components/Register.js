import React, { useState, useContext } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";
import axios from "../utils/axios";
import { useSnackbar } from "notistack";
import { UserContext } from "../context/UserContext/UserContext";
import { registerUserSuccess } from "../actions/actions";
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
  const [error, setError] = useState(null);
  const { userDispatch } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const handleChange = (ev) => {
    setRegisterValues((prevState) => ({
      ...prevState,
      [ev.target.id]: ev.target.value,
    }));
  };

  const handleRegister = async (ev) => {
    ev.preventDefault();
    if (registerValue.password !== registerValue.repeatPassword) {
      return enqueueSnackbar("Password doesn't match", { variant: "error" });
    }
    try {
      const { data, status } = await axios.post(
        "/api/auth/register",
        registerValue
      );

      if (status === 201) {
        localStorage.setItem("token", data.token);
        userDispatch(registerUserSuccess(data.user));

        return enqueueSnackbar("Register Success", { variant: "success" });
      }
    } catch (err) {
      enqueueSnackbar("Register Failed", { variant: "error" });
    }
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
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
