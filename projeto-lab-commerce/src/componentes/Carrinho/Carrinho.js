import {
  PlanetasContainer,
  CardPlaneta,
  Imagem,
  Conteudo,
  Nome,
  Preco,
  Botao
} from "../Card/style";

const Carrinho = ({ carrinho, removerPlanetaDoCarrinho }) => {
    if(!carrinho || carrinho.length === 0){
       return (
        <h1>Nenhhum Item no Carrinho</h1>
       ) 
    } else {
    return (
       <PlanetasContainer>
   
         {carrinho.map((planeta) => (
           <CardPlaneta key={planeta.id}>
   
             <Imagem
               src={planeta.imagem}
               alt={planeta.nome}
             />
   
             <Conteudo>
   
               <Nome>
                 {planeta.nome}
               </Nome>
   
               <Preco>
                 R$ {planeta.valor}
               </Preco>
   
               <Botao
                 onClick={() =>
                   removerPlanetaDoCarrinho(planeta)
                 }
               >
                 Remover do Carrinho
               </Botao>
   
             </Conteudo>
   
           </CardPlaneta>
         ))}
   
       </PlanetasContainer>
       
     );
    }
   }    

export default Carrinho;