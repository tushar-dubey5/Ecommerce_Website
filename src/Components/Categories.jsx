import styled from "styled-components";
import { Category } from "../Data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({ padding: "0px", flexDirection: "column" })}
  flex-direction: column;
`;
const CategoryTitle = styled.h1`
  text-align: center;
  margin-bottom: 2px;
`;
const Categories = () => {
  return (
    <Container>
      <CategoryTitle>Categories</CategoryTitle>
      {Category.map(item => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
