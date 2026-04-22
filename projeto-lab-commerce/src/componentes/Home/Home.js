import planetas from "../../planetas.json";
import { Imagem, PlanetasContainer } from "./style"
const Home = ({ valorMin, valorMax, adicionarPlanetaAoCarrinho  }) => {

    return(
        <PlanetasContainer>
            {planetas
            .filter((planeta)=> { 
                 <div key={planeta.id}>
                   <Imagem src={planeta.imagem} alt={planeta.nome} />
                   <p>Nome: {planeta.nome}</p>
                   <p>Preço: {planeta.valor}</p>
                   <button onClick={() => adicionarPlanetaAoCarrinho(planeta)}>Adiconar ao Carrinho</button>
               </div>
                return planeta.valor >= valorMin || valorMin === "" && planeta.valor <= valorMax || valorMax === "";
            
            })   
           .map((planeta) => (
               <div key={planeta.id}>
                   <Imagem src={planeta.imagem} alt={planeta.nome} />
                   <p>Nome: {planeta.nome}</p>
                   <p>Preço: {planeta.valor}</p>
                   <button onClick={() => adicionarPlanetaAoCarrinho(planeta)}>Adiconar ao Carrinho</button>
               </div>
           ))}
        </PlanetasContainer>
    )
};

export default Home;