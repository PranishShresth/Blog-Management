import React from "react";
import { useParams } from "react-router-dom";
import axios from "../utils/axios";

function Verify() {
  const params = useParams();

  const handleVerify = async () => {
    //   make a api request backend to change verify to true
  };
  return (
    <div>
      Please click on the button to verify the account
      <button>Verify the account</button>
    </div>
  );
}

export default Verify;
