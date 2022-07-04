import { ProductItems } from "../Data";
import styled from "styled-components";
import Product from "./Product";

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
const Products = () => {
  return (
    <Container>
      <ProductTitle>Products</ProductTitle>
      <Wrapper>
        {ProductItems.map(item => (
          <Product item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
