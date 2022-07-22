import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../Redux/apiCalls";
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
  width: 30%;
  flex-direction: column;
  background-color: white;
  padding: 12px 20px;
  flex-wrap: wrap;
  ${mobile({ width: "80%" })}
`;
const Title = styled.h1`
  ${mobile({ fontSize: "25px" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  outline: none;
  margin: 17px 27px 0 0;
  padding: 7px;
  font-size: 15px;
  width: 95%;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: #29a1a1;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  color: white;
  margin-top: 12px;
  width: 100%;
  &:disabled {
    color: #29a1a1;
    cursor: not-allowed;
  }
`;

const Link = styled.div`
  margin-top: 12px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user);
  const handleClick = e => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>LOGIN INTO ACCOUNT</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something Went Wrong.....</Error>}
        </Form>
        <Link>Forgot Password</Link>
        <Link>Create an account</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
