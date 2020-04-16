import styled from 'styled-components';

export const Container = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        margin-right: 100px;
    }

    .element {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 30px 40px 30px;
        font-weight: bold;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        transition: border-bottom 0.2s;
    }

    .selected {
        border-color: #e13033; 
    }

    .element:hover {
        border-color: #e13033;
    }

`;
