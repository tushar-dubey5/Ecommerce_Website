import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

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

  ${mobile({ flexDirection: "column" })}
`;
const ProductDatails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
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
  border: 1.5px solid lightgray;
  height: 50vh;
  padding: 12px;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "bold"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span;
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
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton type="blank">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Cart(3)</TopText>
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
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size: </b>
                      {product.size}
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
            <hr></hr>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$46</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping </SummaryItemText>
              <SummaryItemPrice>$10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItemText>Discount</SummaryItemText>
            <SummaryItemPrice>-$10</SummaryItemPrice>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              {/* <SummaryItemPrice>$46</SummaryItemPrice> */}
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
