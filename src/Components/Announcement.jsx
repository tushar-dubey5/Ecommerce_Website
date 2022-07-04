import styled from "styled-components";

const Container = styled.div`
  height: 5vh;
  background-color: teal;
  color: white;
  font-size: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Diwali Sale Is On Get Upto 77% Off</Container>;
};

export default Announcement;
