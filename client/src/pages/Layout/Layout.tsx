import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ReactNode } from "react";

import { Container } from "@mui/material";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
