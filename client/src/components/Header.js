import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
  Container,
  makeStyles,
} from "@material-ui/core";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { UserContext } from "../context/UserContext/UserContext";

const useStyles = makeStyles((theme) => ({
  title: { flexGrow: 1 },
}));

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" style={{ background: "#8ec06c" }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6">Blog for Life</Typography>
            <div className={classes.title}></div>
            <Modal title="Login">
              <Login />
            </Modal>
            <Modal title="Register">
              <Register />
            </Modal>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
