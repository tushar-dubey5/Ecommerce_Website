import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 250px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease;

  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #cdf7f3;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image
        src={
          item && item.image
            ? item.image
            : "https://cdn.pixabay.com/photo/2020/06/09/08/01/model-5277459_640.jpg"
        }
      />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
