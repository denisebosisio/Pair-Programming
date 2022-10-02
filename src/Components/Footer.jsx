import React from "react";
import instagram from './Imagens/Instagram.svg';
import twitter from './Imagens/Twitter.svg';
import facebook from './Imagens/Facebook.svg';
import pinterest from './Imagens/Pinterest.svg';
import styled from "styled-components";

const Container = styled.footer`
    margin-top: 149vh;
    background-color: #F2F4F1;
    width: 100%;
    height: 30vh;
    display: flex;

    @media(max-width: 400px){
        position: absolute;
        margin-top: 136vh;
        width: 100%;
        height: 60vh;
    }
`
const Imagens = styled.div`
    margin-left: 12vh;
    margin-top: 5%;
    width: 59%;
    flex-wrap: wrap;

    @media(max-width: 550px){
        margin-top: 40vh;
        margin-left: 15vh;
    }
`
const Image = styled.img`
    width: 6vh;
    height: 6vh; 
    margin-right: 2vh;

    @media(max-width: 550px){
        width: 6vh;
        height: 6vh;
        margin-right: 2vh;
    }
`
const Informacao = styled.div`
li{
    list-style: none;
    display: inline-block;
    width: 20vh;
}
    margin-top: 6.2%;

    @media(max-width:500px){
        margin-top: 10%;
        margin-left: -30vh;
        li{
            list-style: none;
            display: block;
            line-height: 10vh;
            font-size: 4vh;
        }
    }
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
            <Informacao>
                <ul>
                    <li>ABOUT</li>
                    <li>RECIPES</li>
                    <li>SUBSCRIBE</li>
                </ul>
            </Informacao>
        </Container>
    )
}