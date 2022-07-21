import { ProductItems } from "../Data";
import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #d4dedf;
`;
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

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProduct(prev =>
        [...prev].sort((a, b) => a.createsAt - b.createsAt)
      );
    } else if (sort === "asc") {
      setFilteredProduct(prev => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProduct(prev => [...prev].sort((a, b) => b.price - a.price));
    }
  });
  return (
    <Container>
      <ProductTitle>Products</ProductTitle>
      <Wrapper>
        {cat
          ? FilteredProduct.map(item => <Product item={item} key={item._id} />)
          : products
              .slice(0, 8)
              .map(item => <Product item={item} key={item._id} />)}
      </Wrapper>
    </Container>
  );
};

export default Products;
