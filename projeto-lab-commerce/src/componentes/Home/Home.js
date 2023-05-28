import planetas from "../../planetas.json";
import { Imagem, PlanetasContainer } from "./style"
console.log(planetas);
const Home = ({ carrinho, setCarrinho }) => {

    const adicionarPlanetaAoCarrinho = (planeta) => {
        const planetaExisteNoCarrinho = carrinho.find((item) => item.nome === planeta.nome);

        console.log(planetaExisteNoCarrinho);

        setCarrinho([...carrinho, {...planeta, quantidade: 1}])    
    };
    

    return(
        <PlanetasContainer>
           {planetas.map((planeta) => {
                return(
                    <div key={planeta.id}>
                        <Imagem src={planeta.imagem} alt={planeta.nome}/>
                        <p>Nome: {planeta.nome}</p>
                        <p>Preço: {planeta.valor}</p>
                        <button onClick={() => adicionarPlanetaAoCarrinho(planeta)}>Comprar</button>
                    </div>
                )
           })}      
        </PlanetasContainer>
    )
};

export default Home;