import { fireEvent, render, screen } from "@testing-library/react";
import CardContainer from "./card";

describe("CardContainer", () => {
  it("exibe apenas planetas dentro do intervalo informado", () => {
    render(<CardContainer valorMin="1000" valorMax="2000" />);

    expect(screen.getAllByRole("button", { name: "Adicionar ao Carrinho" })).toHaveLength(2);
    expect(screen.getByText("Crop")).toBeInTheDocument();
    expect(screen.getByText("Exoplaneta")).toBeInTheDocument();
  });

  it("adiciona o planeta selecionado ao carrinho", () => {
    const adicionarPlanetaAoCarrinho = jest.fn();

    render(<CardContainer adicionarPlanetaAoCarrinho={adicionarPlanetaAoCarrinho} />);

    fireEvent.click(screen.getAllByRole("button", { name: "Adicionar ao Carrinho" })[0]);

    expect(adicionarPlanetaAoCarrinho).toHaveBeenCalledTimes(1);
    expect(adicionarPlanetaAoCarrinho).toHaveBeenCalledWith(
      expect.objectContaining({ nome: expect.any(String) })
    );
  });
});