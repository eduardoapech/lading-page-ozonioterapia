import styled from "styled-components";



export const Container = styled.section`
  font-family: "Red Hat Display", sans-serif !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #ff4d4d; /* Borda vermelha */
  padding: 2rem 1rem; /* Adiciona espaçamento interno */

  > div {
    max-width: 1097px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza os elementos horizontalmente */
    justify-content: center;
    text-align: center; /* Garante que o texto esteja centralizado */
  }

  img {
    user-select: none;
    width: 88%;
  }
`;

export const Virus = styled.img`
  width: 25%; /* Reduzi o tamanho para evitar que fique grande demais */
  position: absolute;
  user-select: none;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%); /* Mantém a centralização */
  z-index: -1;

`;



