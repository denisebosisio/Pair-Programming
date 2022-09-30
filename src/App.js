import React from 'react';
import Footer from '../src/Components/Footer'
import Header from "../src/Components/Header"
import { GlobalStyle } from "../src/Components/Globalstyle/Style"

export default function App(){
  return(
    <>
      <GlobalStyle />
      <Header />
      <Footer />
    </>
  )
}