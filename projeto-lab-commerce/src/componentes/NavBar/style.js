import styled from "styled-components";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const NavRoot = styled(NavigationMenu.Root)`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 20px;

  background: rgba(10, 10, 25, 0.8);

  backdrop-filter: blur(12px);

  position: sticky;
  top: 0;

  z-index: 100;
`;

export const NavList = styled(NavigationMenu.List)`
  display: flex;

  gap: 20px;

  list-style: none;

  padding: 0;
  margin: 0;
`;

export const NavItem = styled(NavigationMenu.Item)`
  position: relative;
`;

export const NavTrigger = styled(NavigationMenu.Trigger)`
  background: transparent;

  border: none;

  color: white;

  padding: 12px 20px;

  border-radius: 12px;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background: rgba(124, 58, 237, 0.2);

    color: #a78bfa;
  }
`;

export const NavContent = styled(NavigationMenu.Content)`
  position: absolute;

  top: 60px;
  left: 0;

  min-width: 250px;

  padding: 20px;

  border-radius: 16px;

  background: rgba(20, 20, 35, 0.95);

  color: white;

  box-shadow:
    0 10px 30px rgba(0,0,0,0.5);

  animation: aparecer 0.3s ease;

  @keyframes aparecer {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const NavViewport = styled(NavigationMenu.Viewport)`
  position: absolute;
`;