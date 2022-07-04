import styled from "styled-components";
import Navbar from "../Components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #daf4ff;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  width: 41.5%;
  flex-direction: column;
  background-color: white;
  padding: 12px 20px;
  flex-wrap: wrap;
  ${mobile({ width: "80vw" })}
`;
const Title = styled.h1`
  ${mobile({ fontSize: "24px" })}
`;
const Form = styled.form``;
const Input = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  outline: none;
  margin: 17px 27px 0 0;
  padding: 7px;
  font-size: 15px;
`;

const Agreement = styled.div`
  margin: 12px 0px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: #29a1a1;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  color: white;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input maxLength="9" type="number" placeholder="Contact Number" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an coount, I agree to the processing of my personal data
            in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
