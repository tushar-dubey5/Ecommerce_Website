import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KEY =
  "pk_test_51LJMCBSIpD3Ipzs0EPSq3RG92Mmu9TWQut0NoVCv7rDFrm3gWClmgOQTKKw2D8plzVb7nSHCjXWf9BPIeRNDMuy000k3HBBYcF";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 0px 12px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px;
`;
const TopButton = styled.button`
  padding: 10px;
  background-color: ${props => (props.type === "blank" ? "white" : "black")};
  color: ${props => (props.type === "blank" ? "black" : "white")};
  border: ${props => props.type === "filled" && "none"};
  font-weight: bold;
`;
const TopTexts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ display: "none" })}
`;
const TopText = styled.div`
  margin: 10px;
  font-size: 20px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding: 7px 0px;

  ${mobile({ flexDirection: "column" })}
`;
const ProductDatails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;
const ProductSize = styled.span``;

const PriceDatails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Price = styled.p`
  font-size: 30px;
  font-weight: 100;
  margin-top: 10%;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  border: 1px solid black;
  border-radius: 7px;
  padding: 2px 12px;
  margin: 0 5px;
  ${mobile({ mar: "10px" })}
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [stripeToken, setStripeToken] = useState(null);

  const ontoken = token => {
    setStripeToken(token);
  };
  const history = useNavigate();
  console.log(stripeToken);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: cart.total * 100,
          }
        );
      } catch (err) {
        console.log(err.response.data);
      }
      history("/success");
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton type="blank">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Cart({cart.quantity})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map(product => (
              <Product>
                <ProductDatails>
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b>Product: </b>
                      {product.title}
                    </ProductName>
                    <ProductID>
                      <b>ID: </b>
                      {product._id}
                    </ProductID>
                    <ProductColor color={product.color || "Black"} />
                    <ProductSize>
                      <b>Size: </b>
                      {product.size || "M"}
                    </ProductSize>
                  </Details>
                </ProductDatails>
                <PriceDatails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <Price>${product.price}</Price>
                </PriceDatails>
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name=".SnapNap"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmfbD6sQJK9voNucCp4HYTU_7LfZd72LffQ&usqp=CAU"
              billingAddress
              shippingAddress
              description={`Your Total Amount Is $ ${cart.total}`}
              amount={cart.total * 100}
              token={ontoken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
