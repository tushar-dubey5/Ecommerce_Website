import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Remove, Add, RemoveCircle, AddAlarm } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color: #fdf3f5;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  height: 100vh;
  flex: 1;
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
  padding: 0px 6px;
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
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21348573-c6ed-461c-b9a3-722cd4624864/da7f7j1-7b12cfd6-f322-43eb-9c31-c2e65d11c9ce.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxMzQ4NTczLWM2ZWQtNDYxYy1iOWEzLTcyMmNkNDYyNDg2NFwvZGE3ZjdqMS03YjEyY2ZkNi1mMzIyLTQzZWItOWMzMS1jMmU2NWQxMWM5Y2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cTaaDjyL3nFf4neemOYQZRDam9_wXBMbGJ29HQQjdD8" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            laborum? Obcaecati, iste! Tempore reprehenderit exercitationem
            minima eveniet harum dolores tenetur labore architecto atque!
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="blue"></FilterColor>
              <FilterColor color="red"></FilterColor>
              <FilterColor color="green"></FilterColor>
              <FilterColor color="yellow"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <Select>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>Xl</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <QuantityContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} />
              <Quantity>2</Quantity>
              <Add style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </QuantityContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
