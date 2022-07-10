import React from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51LJMCBSIpD3Ipzs0EPSq3RG92Mmu9TWQut0NoVCv7rDFrm3gWClmgOQTKKw2D8plzVb7nSHCjXWf9BPIeRNDMuy000k3HBBYcF";

const Pay = () => {
  const ontoken = token => {
    console.log(token);
  };
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
        stripeKay={KEY}
      >
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            fontSize: "30px",
            padding: "12px",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
