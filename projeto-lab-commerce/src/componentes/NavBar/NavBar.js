import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

import {
  NavRoot,
  NavList,
  NavItem,
  NavTrigger,
  NavContent,
  NavViewport,
} from "./style";

export default function NavBar() {
  return (
    <NavRoot>

      <NavList>

        <NavItem>

          <NavTrigger>

            <Link to="/">
            Planetas
            </Link>
            
          </NavTrigger>

          <NavContent>
            Explore os melhores planetas da galáxia.
          </NavContent>

        </NavItem>

        <NavItem>

          <NavTrigger>

            <Link to="/carrinho">
              Carrinho
            </Link>

          </NavTrigger>

          <NavContent>
            Seus planetas favoritos.
          </NavContent>

        </NavItem>

        <NavItem>

          <NavTrigger>
            Sobre
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