import Carrinho from "./componentes/Carrinho/Carrinho";
import Home from "./componentes/Home/Home";
import Filtro from "./componentes/Filtro/Filtro";
import { AppContainer } from "./style";
import { useState } from "react";
import { Theme } from "@radix-ui/themes";


export default function App() {
    const [carrinho, setCarrinho] = useState([]);
    const [ valorMin, setValorMin ] = useState(0);
    const [ valorMax, setValorMax ] = useState(Infinity);
    const [ valorInicial, setValorInicial ] = useState(0);

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
        const removerPlanetaDoCarrinho = (item) => { 
            const remove = carrinho.filter(carrinho => carrinho !== item)
            setCarrinho(remove);
        }

        // console.log(carrinho[0].valor);
        const resultSoma = ({carrinho}) => {
            for (let i = 0; i < carrinho.length; i++)
            setValorInicial(carrinho[i].valor);
        };
        console.log(valorInicial);
           
    return (
        <Theme>
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
        </Theme>
    );
}