import React from "react";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Container, Menu } from "./styles";
import Logo from "../../../assets/img/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <a href="/" aria-label="Página inicial">
          <img src={Logo} alt="Logo Ozônio" />
        </a>

        {/* Navegação principal */}
        <nav>
          <Menu>
            <ul>
              <li>
                <a href="/" className="active" aria-label="Visão Geral">
                  Visão Geral
                </a>
              </li>
              <li>
                <a href="#ozonio" aria-label="Ozonioterapia">
                  Ozonioterapia
                </a>
              </li>
              <li>
                <a href="#beneficio" aria-label="Benefício">
                  Benefício
                </a>
              </li>
              <li>
                <a href="#seguranca" aria-label="Segurança">
                  Segurança
                </a>
              </li>
            </ul>
          </Menu>
        </nav>

        {/* Menu de ícones sociais */}
        <Menu>
          <ul>
            <li>
              <a 
                href="https://www.instagram.com/enf.lauren?igsh=dnZkMW5xZTU2Mnlq" 
                aria-label="Instagram"
              >
                <FaInstagram color="#E4405F" size={35} />
              </a>
            </li>
            <li>
              <a href="mailto:contato@exemplo.com" aria-label="Enviar e-mail">
                <MdEmail color="#8B0000" size={35} />
              </a>
            </li>
          </ul>
        </Menu>
      </div>
    </Container>
  );
};

export default Header;
