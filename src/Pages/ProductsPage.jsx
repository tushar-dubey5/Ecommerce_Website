import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin-left: 12px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ alignItems: "flex-start" })}
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  ${mobile({ width: "0 20px", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  margin: 12px;
  font-size: 17px;
  padding: 2px;
  background-color: white;
  outline: none;
  border-radius: 5px;
  &:hover {
  }
`;
const Option = styled.option``;

const ProductsPage = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>
              Colors
            </Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Orange</Option>
            <Option>Red</Option>
            <Option>Pink</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price(asc)</Option>
            <Option>Price(dsc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductsPage;
