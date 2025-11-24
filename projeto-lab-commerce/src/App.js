import Carrinho from "./componentes/Carrinho/Carrinho";
import Home from "./componentes/Home/Home";
import Filtro from "./componentes/Filtro/Filtro";
import { AppContainer } from "./style";
import { useState } from "react";


export default function App() {
    const [carrinho, setCarrinho] = useState([]);
     const [ valorMin, setValorMin ] = useState(0);
    const [ valorMax, setValorMax ] = useState(Infinity);

    const handleValorMin = (event) => {
        setValorMin(event.target.value);
    }

    const handleValorMax = (event) => {
        setValorMax(event.target.value);
    }

     const adicionarPlanetaAoCarrinho = (planeta) => {

        carrinho.find((item) => item.nome === planeta.nome);

        setCarrinho([...carrinho, {...planeta, quantidade: 1}]) 
    }
        const removerPlanetaDoCarrinho = (planeta) => { 
            carrinho.find((item) => item.nome === carrinho.nome)
        }

    return (
        <AppContainer>
            <Filtro 
                valorMin={valorMin}
                valorMax={valorMax}
                handleValorMin={handleValorMin}
                handleValorMax={handleValorMax}
            />
            <Home 
                carrinho={carrinho}
                setCarrinho={setCarrinho}
                valorMin={valorMin}
                valorMax={valorMax}
                adicionarPlanetaAoCarrinho={adicionarPlanetaAoCarrinho}
            />
            <Carrinho 
                carrinho={carrinho}
                removerPlanetaDoCarrinho={removerPlanetaDoCarrinho}
            />

        </AppContainer>
    );
}