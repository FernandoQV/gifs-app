import styled from 'styled-components'
export const Container=styled.div`
display:flex;
flex-direction:column;
gap:.5rem;
justify-content:center;
background-color:hsl(120,15%,10%);
text-align:center;
padding:1rem;
border-radius:15px;
box-shadow:.5px 1px 1px 0px #fff;
img{
    /* width:200px;
    object-fit:cover; */
}
h4{
    color:#ffffee;
    font-size:1.1rem;
}
h5{
    color:hsl(20,85%,50%);
    font-size:.95rem;
}
`;