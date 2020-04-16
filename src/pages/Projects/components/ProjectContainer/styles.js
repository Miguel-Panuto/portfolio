import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  margin-right: 10px;
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
    color: #b37;
  }
`;

export const ImageContainer = styled.div`
    background-image: url(${props => props.src});
    height: 200px;
    max-width: 250px;
    width: 75vw;
    border-radius: 5px;
    background-size: cover;
`;
