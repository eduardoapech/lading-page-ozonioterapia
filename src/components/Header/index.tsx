import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import Logo from "../../assets/img/logo.svg";

const Header: React.FC = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval);
  }, []);

  // Formatação da data e hora
  const formattedDate = dateTime.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("pt-BR");

  return (
    <Container>
      <div className="header-content">
        <a href="/">
          <h1>
            <img src={Logo} alt="Ozonioterapia" />
          </h1>
        </a>
        <div className="date-time">
        <p className="fade-in">
          <span role="img" aria-label="Calendário">📅</span> {formattedDate}
        </p>
        <p className="fade-in">
          <span role="img" aria-label="Relógio">⏰</span> {formattedTime}
        </p>
        </div>
        <nav>
          <ul>
            <li><a href="/">Visão Geral</a></li>
            <li><a href="#ozonio">Ozonioterapia</a></li>
            <li><a href="#beneficio">Benefício</a></li>
            <li><a href="#seguranca">Segurança</a></li>
            <li><a href="#contato" className="btn">Contato</a></li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
