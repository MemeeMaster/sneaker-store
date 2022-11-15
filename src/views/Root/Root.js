import React from "react";
import "../../assets/styles/fonts.css";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/styles/theme";
import { GlobalStyle } from "../../assets/styles/GlobalStyles";
import MobileNavigation from "../../components/organisms/MobileNavigation/MobileNavigation";
import Main from "../Main/Main";
import ExtendedNav from "../../components/molecules/ExtendedNav/ExtendedNav";
import ContextProviders from "../../providers/ContextProviders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ContextProviders>
          <GlobalStyle />
          <MobileNavigation />
          <ExtendedNav />
          <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="/men" element={<Main />} />
            <Route path="/woman" element={<Main />} />
            <Route path="/collections" element={<Main />} />
            <Route path="/about" element={<Main />} /> */}
          </Routes>
        </ContextProviders>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
