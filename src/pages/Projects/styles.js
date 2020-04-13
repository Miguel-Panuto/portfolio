import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    margin-top: 60px;
    div {
        margin-bottom: 38px;
    }
`;

export const ProjectContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #444;
    border-radius: 5px;
    padding-top: 10px;
    align-items: center;
    span {
        text-align: center;
        font-size: 1.2rem;
        color: #B37;
    }
`;

export const ImageContainer = styled.div`
    background-image: url(${props => props.src});
    height: 200px;
    width: 300px;
    border-radius: 5px;
    background-size: cover;
`;