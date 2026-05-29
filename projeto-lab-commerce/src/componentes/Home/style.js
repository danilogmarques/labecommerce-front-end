import styled from "styled-components";


export const Container = styled.div`
    height: 100vh; 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const PlanetasContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    width: 100%; 


    @media (min-width: 768px) {
        flex-direction: row; 
        justify-content: center;
        width: 80%;
        padding: 40px;
    }
`;

export const Imagem = styled.img`
    width: 160px; 
    height: 160px;

    @media (min-width: 768px) {
        width: 240px;
        height: 240px;
    }
`;
