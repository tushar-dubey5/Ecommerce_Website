import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    phonenumber: "",
    password: "",
  });
  let name, value;
  const navigate = useNavigate();
  const handleInput = e => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const { username, name, email, phonenumber, password } = user;

    try {
      axios
        .post("http://localhost:4000/api/auth/register", {
          username,
          name,
          password,
          email,
          phonenumber,
        })
        .then(res => console.log(res));
      // const data = await res.json();
      // if (data.status(500) || !data) {
      //   window.alert("Invalid Registration");
      //   console.log("Invalid");
      // } else {
      //   window.alert("Successs");
      //   console.log("Success");
      //   console.log(username, name, email, phonenumber, password);
      // }
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form method="POST">
          <Input
            placeholder=" Username"
            name="username"
            onChange={handleInput}
            value={user.username}
          />
          <Input
            placeholder="Your Name"
            name="name"
            onChange={handleInput}
            value={user.name}
          />
          <Input
            placeholder="Email"
            name="email"
            onChange={handleInput}
            value={user.email}
          />
          <Input
            type="number"
            placeholder="Contact Number"
            name="phonenumber"
            onChange={handleInput}
            value={user.phonenumber}
          />
          <Input
            placeholder="Password"
            name="password"
            onChange={handleInput}
            value={user.password}
          />

          <Agreement>
            By creating an coount, I agree to the processing of my personal data
            in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit}>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
