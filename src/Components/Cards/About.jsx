import React from "react";
import spoon from "../Imagens/img6.png";
import styled from "styled-components";

const Section = styled.section`
    width: 100%;
    height: 700px;
    background: #FFFFFF;
    position: relative; 

    @media(max-width: 400px){
        width: 100%;
        height: 200vh;
    }
`
const Image = styled.img`
    width: 50%;
    height: 100vh;

    @media(max-width: 400px){
        margin-top: -22vh;
        width: 105%;
        height: 65vh;
    }
`
const Figura = styled.figure`
    margin-top: 40vh;
    margin-left: -3.2vh;
`
const Div = styled.div`
    width: 70vh;
    height: 100vh;
    position: absolute;
    margin-left: 49.3%;
    margin-top: -100.6vh;
    display: column;

    @media(max-width: 400px){
        margin-top: -2vh;
        margin-left: -15vh;
        width: 90%;
        height: 50vh;

        h2{
            margin-top: 5vh;
        }
        p{
            font-size: 3vh;
            height: 10vh;
        }
    }

    h2{
        font-size: 2.2em;
        font-family: 'Barlow', sans-serif;
        text-transform: uppercase;
        margin-top: 10vh;
        margin-left: 36vh;
    }
    p{
        width: 70vh;
        margin-top: 11vh;
        margin-left: 15vh;
        line-height: 4vh;
        font-family: 'Barlow', sans-serif;
        font-weight: 100;
    }
`

const Line = styled.div`
    width: 70px;
    border: 2px solid #000000;
    margin-top: 2.5vh;
    margin-left: 39vh;
`

const Sub = styled.div`
    margin-top: -1vh;
    width: 100%;
    height: 70vh;
    background: #DFE4DE;
    display: column;
    position: relative;

    @media(max-width: 400px){
        margin-top: 82vh;
        width: 100%;
        height: 55vh;
        position: relative;
    }

    h2{
        font-size: 2.2em;
        font-family: 'Barlow', sans-serif;
        text-transform: uppercase;
        position: absolute;
        margin-top: 17vh;
        margin-left: 45%;

        @media(max-width: 400px){
            margin-top: 10vh;
            margin-left: 13vh;
        }
    }
    p{
        position: absolute;
        margin-top: 26vh;
        margin-left: 43%;
        font-family: 'Barlow', sans-serif;
        font-weight: 100;
        font-size: 4vh;

        @media(max-width: 400px){
            margin-top: 18vh;
            margin-left: 8.2vh;
        }
    }
    form{
        position: absolute;
        margin-top: 35vh;
        margin-left: 45%;

        @media(max-width: 400px){
            margin-top: 26vh;
            margin-left: 13vh;
        }
    }
    button{
        position: absolute;
        font-family: 'Barlow', sans-serif;
        text-transform: uppercase;
        font-size: 2.7vh;
        margin-top: 42vh;
        margin-left: 48%;
        width: 15vh;
        height: 7vh;
        border-width: 2px;

        @media(max-width: 400px){
            margin-top: 33vh;
            margin-left: 18vh;
        }
    }
`

export default function About(){
    return(
        <Section>
            <Figura>
                <Image src={spoon}/>
            </Figura>
            <Div>
                <h2>ABOUT</h2>
                <Line> </Line>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</p>
            </Div>
            <Sub>
                <h2>SUBSCRIBE</h2>
                <p>Sign up for newsletter</p>
                <form>
                    <input type="email" placeholder="Your email"/>
                </form>
                <button>SUBMIT</button>
            </Sub>
        </Section>
    
    )
}