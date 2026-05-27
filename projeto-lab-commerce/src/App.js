import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Toast from "@radix-ui/react-toast";
import NavBar from "./componentes/NavBar/NavBar"
import Carrinho from "./componentes/Carrinho/Carrinho";
import Home from "./componentes/Home/Home";
import { AppContainer } from "./style";
import { useState } from "react";
import Filtro from "./componentes/Filtro/Filtro";


export default function App() {

  const [carrinho, setCarrinho] = useState([]);
  const [valorMin, setValorMin] = useState(0);
  const [valorMax, setValorMax] = useState(Infinity);

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMensagem, setToastMensagem] = useState("");

  const adicionarPlanetaAoCarrinho = (planeta) => {

    setCarrinho([
      ...carrinho,
      { ...planeta, quantidade: 1 }
    ]);

    setToastMensagem(
      `${planeta.nome} adicionado ao carrinho 🚀`
    );

    setToastOpen(true);
  };

  const removerPlanetaDoCarrinho = (item) => {

    const remove = carrinho.filter(
      carrinho => carrinho !== item
    );

    setCarrinho(remove);
  };

  return (

    <Toast.Provider swipeDirection="right">

      <BrowserRouter>
      

        <NavBar />


        <AppContainer>

          <Routes>

            <Route
              path="/"
              element={
                <>
                  <Filtro
                    valorMin={valorMin}
                    valorMax={valorMax}
                    setValorMin={setValorMin}
                    setValorMax={setValorMax}
                  />
                  <Home
                    carrinho={carrinho}
                    setCarrinho={setCarrinho}
                    valorMin={valorMin}
                    valorMax={valorMax}
                    adicionarPlanetaAoCarrinho={
                      adicionarPlanetaAoCarrinho
                    }
                  />
                </>
              }
            />

            <Route
              path="/carrinho"
              element={
                <Carrinho
                  carrinho={carrinho}
                  removerPlanetaDoCarrinho={
                    removerPlanetaDoCarrinho
                  }
                />
              }
            />
            <Route
            />
          </Routes>

        </AppContainer>

      </BrowserRouter>

      <Toast.Root
        open={toastOpen}
        onOpenChange={setToastOpen}
        duration={3000}
        style={{
          background: "#111827",
          color: "white",
          padding: "16px 22px",
          borderRadius: "14px",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          fontWeight: "bold",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
        }}
      >

        <Toast.Title>
          {toastMensagem}
        </Toast.Title>

      </Toast.Root>

      <Toast.Viewport />

    </Toast.Provider>
  )
};