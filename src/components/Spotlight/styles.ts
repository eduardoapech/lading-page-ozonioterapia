import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.section`
  font-family: "Red Hat Display", sans-serif !important;
  display: flex;
  max-width: 1097px;
  min-height: 812px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 2rem 1rem;

  img {
    position: absolute;
    right: -10rem; /* Ajustado para melhor encaixe */
    max-width: 100%;
    height: auto;
    width: 60%; /* Reduzido para evitar cortes */
    z-index: -1;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;

    img {
      position: relative;
      width: 90%;
      right: 0;
      margin-bottom: 1rem;
    }
  }
`;


export const Details = styled.div`
  max-width: 633px;
  width: 100%;
  order: 0;
  animation: ${fadeIn} 1s ease-in-out;

  h2 {
    font-size: 32px;
    font-weight: bold;
    color: var(--primary-color);
  }

  h3 {
    font-size: 48px; /* Reduzi para melhorar adaptação */
    font-weight: bold;
    color: var(--secondary-color);
  }

  p {
    font-family: Lato, sans-serif;
    font-size: 20px; /* Reduzi um pouco para melhorar leitura */
    padding: 1.2rem 4rem 1.2rem 0; /* Reduzi padding lateral */
    margin-bottom: 1.5rem;
    color: var(--gray-color);
  }

  @media screen and (max-width: 900px) {
    text-align: center;

    p {
      padding: 1rem;
    }
  }
`;


const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); } /* Reduzi o deslocamento */
  100% { transform: translateY(0px); }
`;

export const FloatingImage = styled.img`
  animation: ${floatAnimation} 4s ease-in-out infinite;
  max-width: 90%;
  margin-bottom: 2rem;
`;

const clickAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(0.95); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

export const Button = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  font-size: 18px;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-color);
  }

  &:active {
    animation: ${clickAnimation} 0.3s ease;
  }
`;