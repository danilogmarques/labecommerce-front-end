import { Imagem } from "../Home/style";

const Carrinho = ({ carrinho, removerPlanetaDoCarrinho }) => {
    console.log(carrinho);
    return (
        <div>
            {carrinho.map((item) => (
                <div key={item.id}>
                    <Imagem src={item.imagem} alt={item.nome} />
                    <p>Nome: {item.nome}</p>
                    <p>Preço: {item.valor}</p>
                    <button onClick={() => removerPlanetaDoCarrinho(item)}>Remover</button>
                </div>
            ))}
        </div>
    );
};

export default Carrinho;