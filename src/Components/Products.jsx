import { ProductItems } from "../Data";
import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-between;
  background-color: #d4dedf;
`;
const ProductTitle = styled.h1`
  text-align: center;
  margin-bottom: 2px;
`;
const Products = ({ cat, sort, filter }) => {
  const [products, setProducts] = useState([]);
  const [FilteredProduct, setFilteredProduct] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:4000/api/products?category=${cat}`
            : "http://localhost:4000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProduct(
        products.filter(item =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    console.log(FilteredProduct);
  }, [products, cat, filter]);
  return (
    <Container>
      <ProductTitle>Products</ProductTitle>
      <Wrapper>
        {products.map(item => (
          <Product item={item} key={item._id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
