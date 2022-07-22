import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51LJMCBSIpD3Ipzs0EPSq3RG92Mmu9TWQut0NoVCv7rDFrm3gWClmgOQTKKw2D8plzVb7nSHCjXWf9BPIeRNDMuy000k3HBBYcF";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const ontoken = token => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 3000,
          }
        );
      } catch (err) {
        console.log(err.response.data);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StripeCheckout
        name=".SnapNap"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmfbD6sQJK9voNucCp4HYTU_7LfZd72LffQ&usqp=CAU"
        billingAddress
        shippingAddress
        description="Your Total Amount $30"
        amount={3000}
        token={ontoken}
        stripeKey={KEY}
      ></StripeCheckout>
    </div>
  );
};

export default Pay;
