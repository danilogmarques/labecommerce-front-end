import { fireEvent, render, screen } from "@testing-library/react";
import Carrinho from "./Carrinho";

const planeta = {
  id: 1,
  nome: "Terra",
  valor: 1500,
  imagem: "/imagens/terra.jpg",
};

describe("Carrinho", () => {
  it("informa quando está vazio", () => {
    render(<Carrinho carrinho={[]} removerPlanetaDoCarrinho={jest.fn()} />);

    expect(screen.getByText("Nenhhum Item no Carrinho")).toBeInTheDocument();
  });

  it("remove o planeta selecionado", () => {
    const removerPlanetaDoCarrinho = jest.fn();

    render(
      <Carrinho
        carrinho={[planeta]}
        removerPlanetaDoCarrinho={removerPlanetaDoCarrinho}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Remover do Carrinho" }));

    expect(removerPlanetaDoCarrinho).toHaveBeenCalledWith(planeta);
  });
});