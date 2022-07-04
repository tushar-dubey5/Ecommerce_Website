import styled from "styled-components";
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  LocationCity,
  LocationOn,
  Phone,
  Email,
} from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;
const Desc = styled.p`
  font-size: 16px;
  font-weight: 300;
  ${mobile({ textAlign: "center" })}
`;
const Logo = styled.div`
  font-size: 40px;
  font-weight: bold;
  ${mobile({ textAlign: "center" })}
`;
const SocialContainer = styled.div`
  display: flex;
  ${mobile({ justifyContent: "center" })}
`;
const SocialIcon = styled.div`
  cursor: pointer;
  background-color: #${props => props.bg};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
const Center = styled.div`
  flex: 1;
`;
const LinkTitle = styled.h3`
  margin-bottom: 30px;
  ${mobile({ textAlign: "center" })}
`;
const ListItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
  ${mobile({ marginLeft: "3%" })}
`;
const Links = styled.li`
  width: 50%;
  cursor: pointer;
  margin-bottom: 2px;
  &:hover {
    text-decoration: underline;
  }
`;
const Right = styled.div`
  flex: 1;
`;
const Title = styled.h3`
  ${mobile({ textAlign: "center" })}
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const PaymentMethod = styled.img`
  width: 50%;
  ${mobile({ marginLeft: "25%" })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>.SnapNap</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          blanditiis!
        </Desc>
        <SocialContainer>
          <SocialIcon bg="4267B2">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="f2003c">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="00acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon bg="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <LinkTitle>Useful Links</LinkTitle>
        <ListItems>
          <Links>All</Links>
          <Links>Best Sellers</Links>
          <Links>Mobiles</Links>
          <Links>Customer Service</Links>
          <Links>Deals</Links>
          <Links>Fashion</Links>
          <Links>Electronics</Links>
          <Links>Men</Links>
          <Links>Home & Kitchen</Links>
          <Links>Women</Links>
          <Links>Kids</Links>
          <Links>Books</Links>
          <Links>Computers</Links>
          <Links>Coupons</Links>
        </ListItems>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "5px" }} />
          Road-D, Krishnapuri Colony, Raipur, Chhattisgarh
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "5px" }} />
          +919826162065
        </ContactItem>
        <ContactItem>
          {" "}
          <Email style={{ marginRight: "5px" }} /> contact@snapnap.com
        </ContactItem>
        <PaymentMethod src="https://www.rhodesgraduation.com/wp-content/uploads/cards.png" />
      </Right>
    </Container>
  );
};

export default Footer;
