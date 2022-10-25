import styled from "styled-components";

export const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.div`
  width: 40vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
 
`;

export const Input = styled.input`
-moz-appearance:none;
  -webkit-appearence:none;  
  appearence:none;
  border: none;
  border-bottom:1px solid black;
  background-color:transparent;
  outline:none;
margin-bottom:29px; 
padding: 2px;

`; 
// margin-left: 16px;

export const InputRel = styled.div`
position: relative; 
display: grid;
top: 12px;
left: 0;
`
export const InputRelative = styled.div`
position: relative; 
display: grid;
top: 12px;
left: 0;

`

export const SendButton = styled.button`
  background-color: #ff4400;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  border: none;
  color: white;
  margin-top: 32px;
  cursor: pointer;
`;

export const RegisterButton = styled.button`
  -moz-appearance:none;
  -webkit-appearence:none;  
  appearence:none;
  border: none;
  border-bottom:1px solid black;
  background-color:transparent;
  outline:none;
  background-color: white;
    border-radius: 8px;
    cursor: pointer;
    width: 200px;
    padding: 10px;
    &:hover{
        background-color: black;
        color: white;
    }
    
`;

//tentando usar o focus ou o hover no texto sem exito

export const StyledLabelo = styled.label`
  position: absolute;
  transition: .4s;
  &:focus {
    font-size: 10px;
    transform: translateY(-30px);
    letter-spacing: 0.17em;
  }

`;

export const StyledLabel = styled.label`
  position: absolute;
  transition: .4s;
  &:hover
   {
  transform: translateY(-30px);
  }
  
  
  
`;

