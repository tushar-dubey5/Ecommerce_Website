import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import styled from "styled-components";

const Container = styled.div`
  scroll-behavior: smooth;
`;

function Home() {
  return (
    <Container className="App">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </Container>
  );
}

export default Home;
