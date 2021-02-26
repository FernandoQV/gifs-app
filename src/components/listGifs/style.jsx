import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  padding:3rem;
  background-color:hsl(120,20%,5%);
  margin:3rem;
  min-height:100vh;
`;