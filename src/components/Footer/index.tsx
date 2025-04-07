import React from "react";
import { Container, ContactText, WhatsAppButton } from "./styles";
import { FaWhatsapp } from "react-icons/fa"; // Importa o ícone do WhatsApp
import Menu from "./Menu";

const Footer: React.FC = () => {
  return (
    <Container>
      <ContactText>
        <p id="contato">
          Ficou com alguma dúvida, se interessou?
          <br />
          <strong>Entre em contato!</strong>
        </p>
      </ContactText>
      
      {/* WhatsApp Button with accessibility improvements */}
      <a
        href="https://wa.me/555599185265"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato via WhatsApp"
      >
        <WhatsAppButton>
          <FaWhatsapp size={30} /> {/* Exibe o ícone do WhatsApp */}
        </WhatsAppButton>
      </a>
      
      <Menu />
      
      {/* Copyright section with proper link */}
      <p className="copyright">
        {new Date().getFullYear()} {" "}
        <a href="https://www.laurenjagnow.com">Lauren Jagnow Mallez</a> e código desenvolvido por{" "}
        <a href="https://github.com/eduardoapech">Eduardo Pech</a>
      </p>
    </Container>
  );
};

export default Footer;
