import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background-color: #121215;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Roboto', sans-serif;
    }
    
    p {
        margin-top: 10px;  
    }

    a {
        color: #e0f0ff;
        font-size: 1rem;
        text-decoration: none;
    }
`;

export const Page = styled.div`
    display: flex;
    min-height: 100vh;
    width: 80%;
    color: #dfdfea;
    padding-top: 20vh;
    margin: auto;
`;

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`;

export const Title = styled.div`
    border-bottom: 2px solid #aac;
    margin-bottom: 10px;
    padding: 10px 0;


    h2 {
        color: #e55;
        font-weight: 700;
    }
`;