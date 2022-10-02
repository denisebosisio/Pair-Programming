import React from "react"
import img5 from "../Imagens/img5.png"
import styled from "styled-components"


const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 700px;
    background-color: #FFFFFF;
    box-shadow: 1px 5px 10px #878787;
    margin: 0 40px;

    @media (max-width: 1400px){
        
        height: 550px;
    }

    @media (max-width: 1150px){
        
        height: 450px;
    }

    @media (max-width: 1000px){
        
        height: 550px;
        width: 370px;
    }

`

const Figure = styled.figure`
    width: 100%;

    img{
        width: 100%;
    }

    @media (max-width: 800px){
        
        img{
            width: 370px;
        }
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 120px;
    height: 60px;

    h2{
        font-family: 'Barlow', sans-serif;
        font-weight: 100;
    }

`

const Line = styled.div`
    width: 50px;
    border: 2px solid #000000;
`

export default function Pizza(){
    return(
        <Section>
            <Figure>
                   <img src={img5} alt="red velvet"/> 
            </Figure>
            <Div>
                <Line></Line>
                <h2>Margherita Pizza</h2>
            </Div>
        </Section>
    )
}