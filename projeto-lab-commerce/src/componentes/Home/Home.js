import planetas from "../../planetas.json";
import { Imagem, PlanetasContainer } from "./style"
console.log(planetas);
const Home = ({ carrinho, setCarrinho }) => {
    return(
        <PlanetasContainer>
           {planetas.map((planeta) => {
                return(
                    <div key={planeta.id}>
                        <Imagem src={planeta.imagem} alt={planeta.nome}/>
                        <p>Nome: {planeta.nome}</p>
                        <p>Preço: {planeta.valor}</p>
                        <button>Comprar</button>
                    </div>
                )
           })}      
        </PlanetasContainer>
    )
};

export default Home;