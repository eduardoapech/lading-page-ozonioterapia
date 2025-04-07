import styled, { keyframes } from "styled-components";

// Definindo a animação de pulsação
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const Container = styled.section`
  font-family: "Red Hat Display", sans-serif !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20px; /* Adicionando um padding para dar espaçamento acima */

  > div {
    max-width: 1097px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px; /* Ajuste de padding se necessário */
  }

  @media screen and (max-width: 992px) {
    > div {
      flex-direction: column;
      padding-right: 15px;
      padding-left: 15px;
      margin-bottom: 0;
    }
  }
`;

export const Virus = styled.img`
  width: 25% !important;
  position: absolute;
  user-select: none;
  bottom: -25%;
  left: 0;
  z-index: -1;
  visibility: hidden; /* Se necessário, esconda a imagem para que não impacte a rolagem */
`;


export const Grids = styled.ul`
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: auto auto auto;
  width: 100%;
  margin-top: 1.7rem;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;

    li {
      margin-bottom: 4.7rem;
    }
  }

    h1 {
    font-size: 1rem;
    color: green;
    font-weight: sans-serif;
    margin-bottom: 1rem;
  }
    h1:before {
    content: "-> ";
    }

    details {
    color: green;
    }

    summary {
    font-weight: sans-serif;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    cursor: pointer;
    }
`;

export const Image = styled.img`
  width: 100px; /* Defina um tamanho adequado */
  transition: transform 0.3s ease-in-out;

  &:hover {
    animation: ${pulse} 1s infinite;
  }
`;
