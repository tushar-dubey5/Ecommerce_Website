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
const CategoryContainer = styled.div`
  display: flex;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
const Categories = () => {
  return (
    <Container>
      <CategoryTitle>Categories</CategoryTitle>
      <CategoryContainer>
        {Category.map(item => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </CategoryContainer>
    </Container>
  );
};

export default Categories;
