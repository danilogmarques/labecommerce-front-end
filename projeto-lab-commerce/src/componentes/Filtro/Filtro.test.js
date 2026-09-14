import { fireEvent, render, screen } from "@testing-library/react";
import Filtro from "./Filtro";

describe("Filtro", () => {
  it("atualiza os valores mínimo e máximo", () => {
    const setValorMin = jest.fn();
    const setValorMax = jest.fn();

    render(
      <Filtro
        valorMin=""
        valorMax=""
        setValorMin={setValorMin}
        setValorMax={setValorMax}
      />
    );

    fireEvent.change(screen.getByLabelText("Valor Mínimo"), {
      target: { value: "100" },
    });
    fireEvent.change(screen.getByLabelText("Valor Máximo"), {
      target: { value: "500" },
    });

    expect(setValorMin).toHaveBeenCalledWith("100");
    expect(setValorMax).toHaveBeenCalledWith("500");
  });

  it("ignora valores negativos", () => {
    const setValorMin = jest.fn();
    const setValorMax = jest.fn();

    render(
      <Filtro
        valorMin=""
        valorMax=""
        setValorMin={setValorMin}
        setValorMax={setValorMax}
      />
    );

    fireEvent.change(screen.getByLabelText("Valor Mínimo"), {
      target: { value: "-1" },
    });
    fireEvent.change(screen.getByLabelText("Valor Máximo"), {
      target: { value: "-1" },
    });

    expect(setValorMin).not.toHaveBeenCalled();
    expect(setValorMax).not.toHaveBeenCalled();
  });
});