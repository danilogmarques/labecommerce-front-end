import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 28px;

  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.5);

  position: fixed;
  inset: 0;

  z-index: 100;
`;

export const Drawer = styled(Dialog.Content)`
  background: #111827;

  width: 280px;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  z-index: 101;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FiltrosContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FiltrosMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: white;
`;