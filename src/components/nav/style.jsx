import styled from "styled-components";
import { Link } from "wouter";
export const Lista = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
`;
export const LinkPage = styled(Link)`
  text-decoration: none;
  color: hsl(34, 65%, 50%);
  font-weight:500;
  font-size: 1.1rem;
  &:hover {
    border: 1px solid hsl(34, 65%, 50%);
    padding: 0.5rem;
  }
`;
