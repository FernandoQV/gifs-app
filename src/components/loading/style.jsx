import styled from "styled-components";

export const Load = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  
  border: 1px solid red;
  animation: 2s infinite linear rota;
  @keyframes rota {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
