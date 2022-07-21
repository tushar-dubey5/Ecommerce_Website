import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import ".././style.css";
import { useSelector } from "react-redux";
const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ height: "40px" })}
`;
const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 3px;
  border-radius: 4px;
  ${mobile({ margin: 0, border: "none" })}
`;
const Input = styled.input`
  border: none;
  color: grey;
  font-size: 15px;
  outline: none;
  ${mobile({ display: "none" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const MenuItem = styled.span`
  margin-left: 12px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;

  ${mobile({ fontSize: "16px" })}
`;
const Logo = styled.h1`
  font-size: 50px;
  cursor: pointer;
  color: black;
  text-decoration: none;

  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ justifyContent: "center" })}
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Link className="link" to="/">
            <Logo>.SnapNap</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link className="link" to="/register">
              Register
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="link" to="/login">
              Login
            </Link>
          </MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge
                badgeContent={quantity}
                color="primary"
                overlap="rectangular"
              >
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
