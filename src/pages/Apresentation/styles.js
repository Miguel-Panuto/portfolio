import styled from 'styled-components';
import profileImg from '../../assets/images/ProfileImage.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;

    .container {
        display: flex;
        flex-direction: row;
        width: 100%;
        max-width: 1024px;
        height: 80vh;
        align-items: center;
        justify-content: space-between;
        margin: 50px;
    }

    h1 {
        font-family: 'Roboto', sans-serif;
        color: #fff;
        font-weight: bold;
        font-size: 5rem;
    }

    @media (max-width: 800px) {
        h1 {
            font-size: 4rem;
        }   
    }

    @media (max-width: 700px) {
        h1 {
            font-size: 3rem;
        }
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 2rem;
        }
    }
`;

export const ProfileContainer = styled.div`
    background-image: url(${profileImg});
    background-size: cover;
    width: 40vh;
    height: 40vh;
    border-radius: 40vh;

    @media (max-width: 600px) {
        #profile {
            width: 20vh;
            height: 20vh;
        }
    }
`;
