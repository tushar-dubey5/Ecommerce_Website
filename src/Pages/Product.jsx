import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Remove, Add, RemoveCircle, AddAlarm } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import axios from "axios";
import { addProduct } from "../Redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color: #fdf3f5;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  height: 70vh;
  flex: 1;
  margin: 0 20px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  ${mobile({ height: "50vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.p`
  font-size: 40px;
  font-weight: 300px;
  ${mobile({ marginBottom: "2px" })}
`;
const Desc = styled.p``;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FilterTitle = styled.h3``;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-left: 7px;
  cursor: pointer;
`;
const Select = styled.select`
  margin-left: 7px;
  padding: 7px;
  font-size: 20px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  ${mobile({ fontSize: "15px", padding: "2px", height: "27px" })}
`;
const Option = styled.option`
  outline: none;
`;

const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%", display: "flex", justifyContent: "space-between" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Quantity = styled.span`
  font-size: 23px;
  font-weight: 100;
  border: 1px solid black;
  padding: 0px 10px;
  border-radius: 8px;
  margin: 10px;
`;
const Button = styled.button`
  padding: 12px;
  background-color: teal;
  border: 1px solid skyblue;
  font-size: 15px;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #bffdff;
    color: black;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/products/${id}`);
        console.log(res);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = type => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map(c => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle></FilterTitle>
              <Select onChange={e => setSize(e.target.value)}>
                {product.size?.map(s => (
                  <Option>{s}</Option>
                ))}
              </Select>
            </Filter>
          </FilterContainer>
          <QuantityContainer>
            <AmountContainer>
              <Remove
                onClick={() => handleQuantity("dec")}
                style={{ cursor: "pointer" }}
              />
              <Quantity color="primary">{quantity}</Quantity>
              <Add
                onClick={() => handleQuantity("inc")}
                style={{ cursor: "pointer" }}
              />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </QuantityContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
