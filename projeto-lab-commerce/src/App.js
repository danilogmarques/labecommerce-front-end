import Carrinho from "./componentes/Carrinho/Carrinho";
import Home from "./componentes/Home/Home";
import Filtro from "./componentes/Filtro/Filtro";
import { AppContainer } from "./style";
import { useState } from "react";


export default function App() {
    const [carrinho, setCarrinho] = useState([]);
    return (
        <AppContainer>
            <Filtro />
            <Home carrinho={carrinho} setCarrinho={setCarrinho}/>
            <Carrinho />

        </AppContainer>
    );
}