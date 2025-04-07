import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(180deg, #fff 0%, #fff1f4 100%);
  background: #001f3f; /* Vermelho vibrante */
  padding-bottom: 1rem;
  font-family: Lato, sans-serif;
  text-align: center;
  font-size: 13px;
  color: var(--gray-color);
  width: 100%;

  a {
    color: var(--gray-color);

    &:hover {
      text-decoration: underline;
    }
  }
`;

/* Estiliza o texto "Entre em contato!" */
export const ContactText = styled.div`
  font-size: 2em;
  color: var(--secondary-light-color);
  margin-bottom: 1rem;

  strong {
    font-weight: bold;
  }
`;

/* Estiliza o botão do WhatsApp */
export const WhatsAppButton = styled.a`
  display: inline-block;
  background: #25d366; /* Cor do WhatsApp */
  color: white;
  font-size: 1.2em;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #1ebe5d;
  }
`;
