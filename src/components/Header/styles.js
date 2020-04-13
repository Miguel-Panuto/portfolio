import styled from 'styled-components';

export const Container = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
