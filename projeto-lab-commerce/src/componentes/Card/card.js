import planetas from "../../planetas.json";

import {
  PlanetasContainer,
  CardPlaneta,
  Imagem,
  Conteudo,
  Nome,
  Preco,
  Botao
} from "./style";

export default function CardContainer({
  valorMin = "",
  valorMax = "",
  adicionarPlanetaAoCarrinho,
}) {

  const planetasFiltrados = planetas.filter((planeta) => {
    return (
      (valorMin === "" || planeta.valor >= Number(valorMin)) &&
      (valorMax === "" || planeta.valor <= Number(valorMax))
    );
  });

  return (
    <PlanetasContainer>

      {planetasFiltrados.map((planeta) => (
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
                adicionarPlanetaAoCarrinho(planeta)
              }
            >
              Adicionar ao Carrinho
            </Botao>

          </Conteudo>

        </CardPlaneta>
      ))}

    </PlanetasContainer>
  );
}