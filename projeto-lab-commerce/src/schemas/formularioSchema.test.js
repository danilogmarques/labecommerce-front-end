import { formularioSchema } from "./formularioSchema";

describe("formularioSchema", () => {
  it("aceita nome e email válidos", () => {
    const resultado = formularioSchema.safeParse({
      nome: "Ana Silva",
      email: "ana@example.com",
    });

    expect(resultado.success).toBe(true);
  });

  it("rejeita nome curto e email inválido", () => {
    const resultado = formularioSchema.safeParse({
      nome: "An",
      email: "email-invalido",
    });

    expect(resultado.success).toBe(false);
  });
});