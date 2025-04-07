import React from "react";

import { Container, Virus, Details } from "./styles";
import bg from "../../assets/img/ozonio.svg";
import ozonio from "../../assets/img/coronavirus-low-opacity.svg";

const WhatIs: React.FC = () => {
  return (
    <Container>
      <Virus src={ozonio} alt="Imagem representando o ozonio" />
      <div>
        {/* Imagem de fundo (caso queira reabilitar, pode usar picture para otimizar o carregamento) */}
        <picture>
          <img 
            src={bg} 
            alt="Representação do ozonio" 
            aria-hidden="true" // Imagem decorativa
          />
        </picture>

        <Details id="ozonio">
          <h2>Benefícios da Ozonioterapia</h2>
          <h3>Ozonioterapia</h3>
          <p>
            O ozônio é uma molécula composta por três átomos de oxigênio e possui propriedades 
            antimicrobianas, anti-inflamatórias e antioxidantes. Ele pode ser aplicado de diversas 
            formas, como injeções, insuflação, água ozonizada, entre outras.
          </p>

          <span className="fix">
            {/* Acessibilidade: alterando para um link com destino adequado ou mantendo como está se for navegação interna */}
            <a href="/saber-mais" className="btn" aria-label="Leia mais sobre Ozonioterapia">
              Saber mais
            </a>
          </span>
        </Details>
      </div>
    </Container>
  );
};

export default WhatIs;
