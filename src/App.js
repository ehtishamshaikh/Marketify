import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";



const App = () => {
  const theme={
    colors:{
    bg: "#000",
    }

  };
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GlobalStyle/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/single-product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<h1>Not Found</h1>} />

    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
