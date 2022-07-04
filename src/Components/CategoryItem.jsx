import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
`;
const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 40px;
  height: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  flex-direction: column;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 7px;
  font-size: 15px;
  border-radius: 3px;
  background-color: white;
  color: grey;
  font-weight: bold;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #e2e2e2;
  }
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
