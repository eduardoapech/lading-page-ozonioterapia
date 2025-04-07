// Components
import Header from "./components/Header";
import Spotlight from "./components/Spotlight";
import WhatIs from "./components/WhatIs";
import Beneficio from "./components/Contagion";
import Seguro from "./components/Symptomps";
import Footer from "./components/Footer";
import Weather from "./components/Weather"; // Importando o componente do clima

function App() {
  return (
    <>
      <Header />
      {/* <Weather /> Adicionando o Clima na Página */}
      <Spotlight />
      <WhatIs />
      <Beneficio />
      <Seguro />
      <Footer />
    </>
  );
}

export default App;
