import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Container = styled.section`
  font-family: "Red Hat Display", sans-serif !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 78%;
  }

  > div {
    max-width: 1097px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  picture img {
    animation: ${rotate} 20s linear infinite; /* Aplica a rotação na imagem de fundo */
  }

  @media screen and (max-width: 992px) {
    > div {
      flex-direction: column;
      margin-bottom: 4.7rem;
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  @media screen and (max-width: 600px) {
    img {
      width: 100%;
    }
  }
`;

export const Virus = styled.img`
  width: 25% !important;
  position: absolute;
  user-select: none;
  bottom: -25%;
  right: 0;
  z-index: -1;

  animation: ${float} 4s ease-in-out infinite; /* Aplica a animação de flutuação */

`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-right: auto;

  h2 {
    font-size: 29px;
    font-weight: bold;
    color: var(--primary-color);
  }

  h3 {
    font-size: 50px;
    font-weight: bold;
    color: var(--secondary-color);
  }

  p {
    font-family: Lato, sans-serif;
    font-size: 15px;
    padding: 0.7rem 0;
    line-height: 28px;
    color: var(--gray-color);
  }

  .fix {
    display: flex;
  }
`;
