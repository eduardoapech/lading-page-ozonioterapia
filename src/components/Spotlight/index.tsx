import React from "react";
import { Button, Container, Details, FloatingImage } from "./styles";
import banner from "../../assets/img/spotlight-banner.svg";

const Spotlight: React.FC = () => {
  
  // Função que faz a rolagem suave para a seção de benefícios
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Evita comportamento padrão de links
  
    const section = document.getElementById("beneficio");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  
  return (
    <Container>
      <FloatingImage src={banner} alt="Ozonioterapia" />
      <Details>
        <h2>Ozonioterapia</h2>
        <h3>Tratamento que utiliza o gás ozônio (O₃) com finalidade terapêutica.</h3>
        <p>
          O ozônio é uma molécula composta por três átomos de oxigênio e possui propriedades 
          antimicrobianas, anti-inflamatórias e antioxidantes. Ele pode ser aplicado de diversas 
          formas, como injeções, insuflação, água ozonizada, entre outras.
        </p>
        {/* Agora o botão rola para a seção "beneficio" */}
        <Button onClick={handleScroll} aria-label="Saiba mais sobre Ozonioterapia" role="button">
          Saiba mais!
        </Button>
      </Details>
    </Container>
  );
};

export default Spotlight;
