import planetas from "../../planetas.json";
import { Imagem, PlanetasContainer } from "./style"
console.log(planetas);
const Home = ({ carrinho, setCarrinho, valorMin, valorMax  }) => {

    const adicionarPlanetaAoCarrinho = (planeta) => {
        const planetaExisteNoCarrinho = carrinho.find((item) => item.nome === planeta.nome);

        console.log(planetaExisteNoCarrinho);

        setCarrinho([...carrinho, {...planeta, quantidade: 1}])    
    };
    

    return(
        <PlanetasContainer>
            {planetas
            .filter((planeta)=> { 
                 <div key={planeta.id}>
                   <Imagem src={planeta.imagem} alt={planeta.nome} />
                   <p>Nome: {planeta.nome}</p>
                   <p>Preço: {planeta.valor}</p>
                   <button onClick={() => adicionarPlanetaAoCarrinho(planeta)}>Comprar</button>
               </div>
                return planeta.valor >= valorMin || valorMin === "" && planeta.valor <= valorMax || valorMax === "";
            
            })   
           .map((planeta) => (
               <div key={planeta.id}>
                   <Imagem src={planeta.imagem} alt={planeta.nome} />
                   <p>Nome: {planeta.nome}</p>
                   <p>Preço: {planeta.valor}</p>
                   <button onClick={() => adicionarPlanetaAoCarrinho(planeta)}>Comprar</button>
               </div>
           ))}      
        </PlanetasContainer>
    )
};

export default Home;