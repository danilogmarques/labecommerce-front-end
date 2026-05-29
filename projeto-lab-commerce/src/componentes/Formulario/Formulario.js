import * as Form from "@radix-ui/react-form";
import {
  Container,
  Input,
  Button
} from "./style";
import { useForm } from "react-hook-form"
import { formularioSchema } from "../../schemas/formularioSchema"
import { zodResolver } from "@hookform/resolvers/zod";



export default function Formulario() { const { 
        register, 
        handleSubmit,
        formState: { errors },
     } = useForm({
        resolver: zodResolver(formularioSchema),
    });


    function onSubmit( data ){
        console.log("submt", data)
    }
            
  return (
    <Container>
      <Form.Root
      id="formulario"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Field name="nome">
          <Form.Label>Nome</Form.Label>

          <Form.Control asChild>
            <Input 
                type="text"
                placeholder="Digite seu nome"
                {...register("nome")}/>
          </Form.Control>
        </Form.Field>

        <Form.Field name="email">
          <Form.Label>Email</Form.Label>

          <Form.Control asChild>
            <Input
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
          </Form.Control>
        </Form.Field>

          <Form.Field name="senha">
          <Form.Label>Senha</Form.Label>

          <Form.Control asChild>
            <Input
              type="senha"
              placeholder="Digite digite a sua senha"
              {...register("senha")}
            />
          </Form.Control>
        </Form.Field>

         <Form.Field name="repetir senha">
          <Form.Label>Repetir Senha</Form.Label>

          <Form.Control asChild>
            <Input
              type="senha"
              placeholder="Repita a sua senha"
              {...register("senha")}
            />
          </Form.Control>
        </Form.Field>
        
        <Form.Submit asChild>
          <Button type="submit">
            Criar Conta
          </Button>
        </Form.Submit>
      </Form.Root>
    </Container>
  );
};