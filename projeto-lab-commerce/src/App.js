import { BrowserRouter, Routes, Route } from "react-router-dom";
import  NavBar from "./componentes/NavBar/NavBar"
import Carrinho from "./componentes/Carrinho/Carrinho";
import Home from "./componentes/Home/Home";
import { AppContainer } from "./style";
import { useState } from "react";


export default function App() {

    const [carrinho, setCarrinho] = useState([]);
    const [valorMin, setValorMin] = useState(0);
    const [valorMax, setValorMax] = useState(Infinity);

    const adicionarPlanetaAoCarrinho = (planeta) => {

        setCarrinho([
            ...carrinho,
            { ...planeta, quantidade: 1 }
        ]);
    };

    const removerPlanetaDoCarrinho = (item) => {

        const remove = carrinho.filter(
            carrinho => carrinho !== item
        );

        setCarrinho(remove);
    };

    return (

        <BrowserRouter>


            <NavBar />

            <AppContainer>

                <Routes>

                    <Route
                        path="/"
                        element={
                            <Home
                                carrinho={carrinho}
                                setCarrinho={setCarrinho}
                                valorMin={valorMin}
                                valorMax={valorMax}
                                adicionarPlanetaAoCarrinho={
                                    adicionarPlanetaAoCarrinho
                                }
                            />
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

                </Routes>

            </AppContainer>

        </BrowserRouter>
    );
}