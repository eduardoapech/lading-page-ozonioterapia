import React from "react";
import { Container, Virus, Grids } from "./styles";
import HeaderCenterSection from "../HeaderCenterSection";
import Grid from "./Grid";
import virus from "../../assets/img/coronavirus-low-opacity.svg";
import airTransmission from "../../assets/img/air-transmission.svg";
import humanContacts from "../../assets/img/human-contacts.svg";
import containtedObjects from "../../assets/img/containted-objects.svg";

const Beneficio: React.FC = () => {
  return (
    <Container>
      <div id="beneficio">
        <Virus src={virus} alt="virus" />
        <HeaderCenterSection title="Benefícios">
          <p>
            Ação antimicrobiana – O ozônio combate vírus, bactérias e fungos, auxiliando em infecções crônicas.
          </p>
          <p>
            Redução da inflamação – Ajuda no tratamento de doenças inflamatórias como artrite, artrose e doenças autoimunes.
          </p>
          <p>
            Melhora da circulação sanguínea – Aumenta a oxigenação dos tecidos, melhorando a microcirculação.
          </p>
          <p>
            Fortalecimento do sistema imunológico – Estimula a produção de células de defesa do corpo.
          </p>
          <p>
            Alívio da dor – Usado no tratamento de dores musculares e articulares, como hérnia de disco e fibromialgia.
          </p>
          <p>
            Cicatrização acelerada – Auxilia na recuperação de feridas e úlceras diabéticas.
          </p>
        </HeaderCenterSection>

        <Grids>
          <Grid title="O que a Ozonioterapia pode fazer para seus cabelos?" image={airTransmission}>
            <details>
              <summary>Clique para saber mais sobre os benefícios</summary>
              <h1>Ajuda no crescimento</h1>
              <h1>Fortalece e renova os fios</h1>
              <h1>Encorpa, dando volume à saúde</h1>
              <h1>Repara e reconstrói os fios</h1>
              <h1>Combate a caspa</h1>
              <h1>Ajuda a eliminar pontas duplas</h1>
              <h1>Elimina infecções do couro cabeludo</h1>
            </details>
          </Grid>

          <Grid title="Principais indicações da Ozonioterapia" image={humanContacts}>
            <details>
              <summary>Clique para saber mais sobre as indicações</summary>
              <h1>Imunidade baixa, gripes e resfriados</h1>
              <h1>Enxaqueca, sinusite e rinite crônicas</h1>
              <h1>Varizes e problemas circulatórios</h1>
              <h1>Artrite, reumatismo, fibromialgia, dores e inflamações crônicas</h1>
              <h1>Doenças Neurodegenerativas, envelhecimento, força e disposição</h1>
            </details>
          </Grid>

          <Grid title="O Efeito Cascata da Ozonioterapia" image={containtedObjects}>
            <details>
              <summary>Clique para saber mais sobre os benefícios</summary>
              <h1>Estímulo Positivo para as Células</h1>
              <h1>Aumento de Energia Celular</h1>
              <h1>Boost nos Antioxidantes</h1>
              <h1>Fortalecimento do Sistema Imunológico</h1>
              <h1>Imunidade Mais Eficiente</h1>
            </details>
          </Grid>
        </Grids>
      </div>
    </Container>
  );
};

export default Beneficio;
