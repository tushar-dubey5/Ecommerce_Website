import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import Saree from "../Pictures/Dress.jpg";
import { Data } from "../Data";
import { useState } from "react";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  background-color: #dddddd;

  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  z-index: 2;

  &:hover {
    background-color: #adabab;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 20px 50px;
  background-color: #${props => props.bg};
  ${mobile({ padding: 0, height: "100%" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;
const Image = styled.img`
  height: 100%;
  ${mobile({ width: "100%", objectFit: "cover" })}
`;
const Info = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h1`
  font-size: 60px;
`;
const Description = styled.p`
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 12px;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #e7e6e6;
  }
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleSlide = direction => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };
  return (
    <Container>
      <Arrow directon="left" onClick={() => handleSlide("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {Data.map(item => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt="Saree"></Image>
            </ImgContainer>
            <Info>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>Shop Now</Button>
            </Info>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleSlide("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
