import * as NavigationMenu from "@radix-ui/react-navigation-menu";
// import { NavLink } from "react-router-dom";

import {
  NavRoot,
  NavList,
  NavItem,
  NavTrigger,
  NavContent,
  NavViewport, 
  NavLink,
} from "./style";

export default function NavBar() {
  return (
    <NavRoot>

      <NavList>

        <NavItem>

          <NavTrigger>

            <NavLink to="/">
            Planetas
            </NavLink>
            
          </NavTrigger>

          <NavContent>
            Explore os melhores planetas da galáxia.
          </NavContent>

        </NavItem>

        <NavItem>

          <NavTrigger>

            <NavLink to="/carrinho">
              Carrinho
            </NavLink>

          </NavTrigger>

          <NavContent>
            Seus planetas favoritos.
          </NavContent>

        </NavItem>

        <NavItem>

          <NavTrigger>
            <NavLink to="/filtro">
            Filtro
            </NavLink>
            
          </NavTrigger>

          <NavContent>
            Ecommerce espacial futurista.
          </NavContent>

        </NavItem>

      </NavList>

      <NavViewport />

    </NavRoot>
  );
}