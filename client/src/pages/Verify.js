import React, { useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Grid, Container, Button } from "@material-ui/core";
import { UserContext } from "../context/UserContext/UserContext";

import axios from "../utils/axios";

function Verify() {
  const params = useParams();
  const history = useHistory();
  const { userState } = useContext(UserContext);

  useEffect(() => {
    console.log(userState);
    if (userState.user.isVerified) {
      history.push("/");
    }
  }, [userState.user.isVerified, history]);

  const handleVerify = async () => {
    const { data, status } = await axios.post("/api/auth/verify", {
      token: params.token,
    });

    //   make a api request backend to change verify to true
  };
  return (
    <div>
      <Header />
      <Container style={{ marginTop: 100 }} maxWidth="lg">
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
