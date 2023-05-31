import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Container, MainContent } from "./styles";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </Container>
  );
};

export default Layout;
