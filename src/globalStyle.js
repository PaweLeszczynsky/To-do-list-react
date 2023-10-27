import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body{
  background-color: rgb(221, 221, 221);
}
    
    
`;