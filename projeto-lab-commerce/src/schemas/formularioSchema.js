import { z } from "zod";

export const formularioSchema = z.object({
  nome: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 letras"),

  email: z
    .email("Digite um email válido"),
});