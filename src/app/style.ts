import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  padding:0;
  margin:0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
}
`;

export const Layout = styled.div`

width:100%;
min-height: 100vh;
height:100%;

display:grid;
place-items: center;

padding:2rem;
`
