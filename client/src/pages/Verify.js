import React, { useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Grid, Container, Button } from "@material-ui/core";
import { UserContext } from "../context/UserContext/UserContext";
import { updateUserSuccess } from "../actions/actions";
import { useSnackbar } from "notistack";

import axios from "../utils/axios";

function Verify() {
  const params = useParams();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { userState, userDispatch } = useContext(UserContext);

  useEffect(() => {
    if (userState.user.isVerified) {
      history.push("/");
    }
  }, [userState.user.isVerified, history]);

  const handleVerify = async () => {
    try {
      const { data, status } = await axios.post("/api/auth/verify", {
        token: params.token,
      });
      localStorage.setItem("token", data.token);
      userDispatch(updateUserSuccess(data.user));
      enqueueSnackbar("User Verified", { variant: "success" });
    } catch (err) {
      enqueueSnackbar("Token expired", { variant: "success" });
    }

    //   make a api request backend to change verify to true
  };
  return (
    <div>
      <Header />
      <Container style={{ marginTop: 100, padding: "150px 0" }} maxWidth="lg">
        <h1>Please click on the button to verify the account</h1>
        <Button
          variant="contained"
          style={{ background: "#c4dff6" }}
          onClick={handleVerify}
        >
          Verify the account
        </Button>
      </Container>

      <Footer />
    </div>
  );
}

export default Verify;
