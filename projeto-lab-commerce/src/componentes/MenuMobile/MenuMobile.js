import * as Dialog from "@radix-ui/react-dialog";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import {
  MenuButton,
  Overlay,
  Drawer,
  FiltrosContainer,
  FiltrosMobile
} from "./styles";

export default function MenuMobile() {
  return (
    <>
      <FiltrosContainer>
      </FiltrosContainer>
      
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <MenuButton>
            <HamburgerMenuIcon />
          </MenuButton>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Overlay />

          <Drawer>
            <h2>Filtros</h2>

            <FiltrosMobile>
              <label>
                <input type="checkbox" />
                Gasosos
              </label>

              <label>
                <input type="checkbox" />
                Habitáveis
              </label>
            </FiltrosMobile>
          </Drawer>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}