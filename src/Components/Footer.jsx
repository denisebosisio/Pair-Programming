import React from "react";
import instagram from './Instagram.svg';
import twitter from './Twitter.svg';
import facebook from './Facebook.svg';
import pinterest from './Pinterest.svg';
import styled from "styled-components";

const Container = styled.footer`
    background-color: #F2F4F1;
    width: 100%;
    height: 30vh;
    display: flex;
`
const Imagens = styled.div`
    margin-left: 5vh;
    margin-top: 5%;
    width: 80%;
    flex-wrap: wrap;
`
const Image = styled.img`
    width: 6vh;
    height: 6vh;
`
const Escrito = styled.div`
    display: inline;
    margin-top: 5%;
`

export default function Footer(){
    return(
        <Container>
            <Imagens>
                <Image src={twitter} alt="twitter"/>
                <Image src={instagram} alt="instagram"/>
                <Image src={facebook} alt="facebook"/>
                <Image src={pinterest} alt="pinterest"/>
            </Imagens>
            <Escrito>
                <p>ABOUT</p>
                <p>RECIPES</p>
                <p>SUBSCRIBE</p>
            </Escrito>
        </Container>
    )
}