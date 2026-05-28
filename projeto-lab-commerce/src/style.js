import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  min-height: 100vh;

  margin: 0;
  padding: 0;

  box-sizing: border-box;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-image: url("../imagens/app.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  overflow-x: hidden;
`;