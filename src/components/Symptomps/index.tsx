import React from "react";

import { Container, Virus } from "./styles";
import HeaderCenterSection from "../HeaderCenterSection";
// import virus from "../../assets/img/coronavirus-lp-small.svg";
import seguro from "../../assets/img/symptomps.svg";

const Seguro: React.FC = () => {
  return (
    <Container>
      <div>
        {/* <Virus src={virus} alt="virus" /> */}
        {/* Substituí <details> por <div> */}
        <div id="seguranca">
          <HeaderCenterSection title="A Ozonioterapia é Segura?">
            <p> Quando realizada por profissionais qualificados e em dosagens corretas, 
            a ozonioterapia é segura. Porém, há contraindicações para pessoas com 
            deficiência de G6PD (enzima envolvida na oxidação do sangue), 
            gestantes e pacientes com hiperatividade do sistema imunológico.</p>  
          </HeaderCenterSection>
        </div>
        <img src={seguro} alt="seguro" />
      </div>
    </Container>
  );
};

export default Seguro;
