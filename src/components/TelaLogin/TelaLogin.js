import { Form, FormContainer, Input, SendButton, StyledLabel, StyledLabelo, RegisterButton, InputRel, InputRelative } from "./styled";

function TelaLogin(props) {

  const enviarLogin = () => {
    alert("E-mail não encontrado, será necessário fazer o cadastro!")
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>
      <Form>
        <InputRel>
          <Input required type={"login"}/>
          <StyledLabelo>E-mail:</StyledLabelo>
          </InputRel>
          <InputRelative>
          <Input type={"password"}/>
          <StyledLabel onFocus="password">Senha:</StyledLabel>
          </InputRelative>
          
        <SendButton onClick={enviarLogin}>Entrar</SendButton>
        <RegisterButton onClick={() => props.mudarTela(2)}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
