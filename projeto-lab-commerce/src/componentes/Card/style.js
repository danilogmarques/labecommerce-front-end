import styled from "styled-components";

export const PlanetasContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;

  background:
    radial-gradient(circle at top, #1e1b4b, #060816 60%);

  min-height: 100vh;
`;

export const CardPlaneta = styled.div`
  width: 260px;

  background: rgba(255, 255, 255, 0.06);

  border: 1px solid rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(12px);

  border-radius: 24px;

  overflow: hidden;

  transition: 0.3s ease;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: translateY(-10px) scale(1.02);

    box-shadow:
      0 20px 40px rgba(124, 58, 237, 0.35);
  }
`;

export const Imagem = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const Conteudo = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Nome = styled.h2`
  color: white;

  font-size: 22px;

  font-weight: bold;

  margin: 0;
`;

export const Preco = styled.p`
  color: #a78bfa;

  font-size: 18px;

  font-weight: bold;

  margin: 0;
`;

export const Botao = styled.button`
  margin-top: 10px;

  padding: 12px;

  border: none;

  border-radius: 12px;

  background: linear-gradient(
    135deg,
    #7c3aed,
    #2563eb
  );

  color: white;

  font-weight: bold;

  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;

    transform: scale(1.03);
  }
`;