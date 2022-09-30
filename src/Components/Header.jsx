import React from "react"
import logoimg from "./Imagens/logoimg.png"
import img1 from "./Imagens/img1.png"
import styled from "styled-components"

const Box = styled.header`
    background-image: url(${img1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1300px;


    h1{
        position: absolute;
        bottom: 80px;
        color: #3D3D3D;
        font-family: 'Barlow', sans-serif;
        font-size: 10em;
        text-transform: uppercase;
        letter-spacing: 20px;
    }
`

const Menu = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 35px;
    

    ul{
        display: flex;
        width: 40%;
        padding: 20px;
    }

    li{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        font-family: 'Barlow', sans-serif;
        font-size: 1.2em;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin: 0 20px;
        padding: 10px 20px;
        list-style: none;
    }

    li:hover{
        border: 4px solid #000000;
    }

    figure{
        margin-top: 10px;
    }
`

export default function Header(){
    return(
      <Box>
        <Menu >
            <figure>
                <img src={logoimg} alt="logo" />
            </figure>
            <ul>
                <li>
                    About
                </li>
                <li>
                    Recipes
                </li>
                <li>
                    Subscribe
                </li>
            </ul>
        </Menu>
        <h1>Recipes</h1>
      </Box> 
    )
  }