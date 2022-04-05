import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Poppins', sans-serif;
      background:#000;
      color:#fff;
      /* background:#fff;
      color:#000; */
    }
`;

export const ContainerMain = styled.div`
  max-width: 1920px;
  padding: 30px clamp(1.25rem, calc(-0.35rem + 9.15vw), 10.63rem);
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  align-items: ${({ item }) => (item ? item : "center")};
  justify-content: ${({ content }) => (content ? content : "space-between")};
  flex-grow: ${({ grow }) => (grow ? grow : "auto")};
`;

export const Box = styled.div``;
