import * as Form from "@radix-ui/react-form";
import {
  Container,
  Input,
  Button
} from "./style";

export default function Formulario() {
  return (
    <Container>
      <Form.Root
        onSubmit={(e) => {
          e.preventDefault();
          alert("Formulário enviado!");
        }}
      >
        <Form.Field name="nome">
          <Form.Label>Nome</Form.Label>

          <Form.Control asChild>
            <Input type="text" placeholder="Digite seu nome" required />
          </Form.Control>
        </Form.Field>

        <Form.Field name="email">
          <Form.Label>Email</Form.Label>

          <Form.Control asChild>
            <Input
              type="email"
              placeholder="Digite seu email"
              required
            />
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild>
          <Button type="submit">
            Enviar
          </Button>
        </Form.Submit>
      </Form.Root>
    </Container>
  );
};