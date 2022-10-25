import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>ENDEREÇO </h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Rua:
          <Input id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Número:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Telefone:
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Complemento:
          <Input id="descricao" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;
