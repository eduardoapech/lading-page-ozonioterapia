import React from "react";
import { Container } from "./styles";

interface Props {
  title: string;
  children?: React.ReactNode; // ✅ Permite receber elementos JSX dentro do componente
}

const HeaderCenterSection: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <h2>Ozônio</h2>
      <h3>{title}</h3>
      {children} {/* ✅ Renderiza os elementos filhos corretamente */}
    </Container>
  );
};

export default HeaderCenterSection;
