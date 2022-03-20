import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    // box-sizing: border-box;
    // outline: 1px dotted red; 

}
`;

export const Container = styled.div`
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding: 0 50px;
`;


export default GlobalStyle;
