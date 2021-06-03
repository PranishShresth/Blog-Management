import React from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";

function Verify() {
  const params = useParams();

  const handleVerify = async () => {
    const { data, status } = await axios.post("/api/auth/verify", {
      token: params.token,
    });

    //   make a api request backend to change verify to true
  };
  return (
    <div>
      Please click on the button to verify the account
      <button onClick={handleVerify}>Verify the account</button>
    </div>
  );
}

export default Verify;
