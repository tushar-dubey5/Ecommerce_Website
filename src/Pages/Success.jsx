import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Gif = styled.h1`
  font-size: 100px;
  font-weight: bold;
`;
const Success = props => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Container>
        <Gif>SUCCESSFULL</Gif>
      </Container>
    </div>
  );
};

export default Success;
