import React from "react";
import { TextField } from "@material-ui/core";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <TextField required id="email" type="email" label="Email" fullWidth />
        <TextField
          required
          id="email"
          type="password"
          label="Password"
          fullWidth
        />
      </form>
    </div>
  );
}

export default Login;
