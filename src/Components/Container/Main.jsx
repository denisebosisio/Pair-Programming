import React from "react"
import styled from "styled-components"
import Redvelvet from "../Cards/Redvelvet"
import Pizza from "../Cards/Pizza"
import Peanut from "../Cards/Peanut"
import About from "../Cards/About"

const Section = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 1200px;
    padding: 20px;
    background-color: #F2F4F1;

    @media (max-width: 1400px){
        
        height: 1100px;
    }

    @media (max-width: 1150px){
        
        height: 1000px;
    }

    @media (max-width: 1000px){
        
        height: 2000px;
        justify-content: space-around;

    }
`
const Div = styled.div`

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 110px;
        margin-top: 650px;

    h2{
        font-size: 2.2em;
        font-family: 'Barlow', sans-serif;
        text-transform: uppercase;
    }
`

const Line = styled.div`
    margin-top: 20px;
    width: 80px;
    border: 2px solid #000000;
`

const Itens = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 500px;

    @media (max-width: 1000px){
        
        flex-direction: column;
        align-items: center;
        width: 50%;
        height: 100%;
        padding: 10px;
    }

`

const Topico = styled.div`
    width: 100%;
    
`

export default function Main(){
    return(
        <Section>
            <Div>
                <h2>Latest Recipes</h2>
                <Line></Line>
            </Div>
            <Itens>
                <Redvelvet />
                <Pizza />
                <Peanut />
            </Itens>
            <Topico>
                <About />
            </Topico>
        </Section>

    )
}