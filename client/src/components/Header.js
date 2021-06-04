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
import { logOutSuccess } from "../actions/actions";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  title: { flexGrow: 1 },
  user: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    padding: 0,
  },
}));

function Header() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { userState, userDispatch } = useContext(UserContext);
  console.log(userState);
  return (
    <div>
      <AppBar position="fixed" style={{ background: "#8ec06c" }}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6">Blog for Life</Typography>
            <div className={classes.title}></div>
            {userState.authenticated ? (
              <>
                <Typography variant="h6" className={classes.user}>
                  {userState.user.user}
                </Typography>
                <Button
                  variant="contained"
                  style={{ background: "#c4dff6" }}
                  onClick={() => {
                    userDispatch(logOutSuccess());
                    enqueueSnackbar("Logout Successfully", {
                      variant: "default",
                    });
                  }}
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Modal title="Login">
                  <Login />
                </Modal>
                <Modal title="Register">
                  <Register />
                </Modal>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
