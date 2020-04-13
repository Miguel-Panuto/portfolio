import styled from 'styled-components';

export const ContainerContact = styled.div`
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SocialItem = styled.div`
    width: 50vh;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span, input {
        font-size: 1.5rem;
    }

    input {
        background-color: transparent;
        border: transparent;
        color: #dfdfea;
        cursor: pointer;
    }

    
    @media screen and (max-width: 500px){
        width: 40vh;
        margin-top: 50px;

        span, input {
            font-size: 1rem;
        } 
    }
`;