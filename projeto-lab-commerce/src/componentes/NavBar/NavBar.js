import MenuMobile from "../MenuMobile/MenuMobile";
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

      <MenuMobile />

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
            <NavLink to="/formulario">
            Formulário
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