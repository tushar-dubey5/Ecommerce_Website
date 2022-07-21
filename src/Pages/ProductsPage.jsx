import { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filter, setfilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handlFilters = e => {
    const value = e.target.value;
    setfilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={handlFilters}>
            <Option disabled>Colors</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
            <Option>Orange</Option>
            <Option>Red</Option>
            <Option>Pink</Option>
          </Select>
          <Select name="size" onChange={handlFilters}>
            <Option disabled>Size</Option>
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
          <Select onChange={e => setSort(e.target.value)}>
            <Option value="newset">Newest</Option>
            <Option value="asc">Price(asc)</Option>
            <Option value="dsc">Price(dsc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <Footer />
    </Container>
  );
};

export default ProductsPage;
