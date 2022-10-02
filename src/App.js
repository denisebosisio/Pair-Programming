import React from 'react';
import Footer from '../src/Components/Footer'
import Header from "../src/Components/Header"
import { GlobalStyle } from "../src/Components/Globalstyle/Style"
import Main from "../src/Components/Container/Main"

export default function App(){
  return(
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  )
}