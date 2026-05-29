import styled from "styled-components";

export const ContainerFiltro = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
  background-color: #1a1a1a;
  width: 80vw;
  max-width: 300px;
  padding: 20px;
  transition: transform 0.3s ease-in-out;

  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};

  @media (min-width: 768px) {
  color: #ffffff; 
  width: 280px;
  min-width: 240px;
  padding: 24px;

  display: flex;
  flex-direction: column;

  margin: 30px ;

  border-right: 1px solid rgba(255,255,255,0.1);

  align-items: flex-start;

  position: sticky;
  top: 20px;
    
    transform: translateX(0); 
  }`;
