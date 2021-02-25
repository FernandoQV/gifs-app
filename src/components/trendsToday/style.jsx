import styled from "styled-components";

export const Container=styled.div`
display:flex;
gap:2rem;
flex-wrap:wrap;
background-color:hsl(215,80%,70%);
padding:0 4rem;
h3{
color:hsl(15,85%,15%);
font-size:1.1rem;
cursor: pointer;
transition:font-sise 1s;
:hover{
    font-size:1.3rem;
}
}
`