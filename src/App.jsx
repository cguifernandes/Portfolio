import React from 'react';
import Header from "./components/Header/header";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Project from "./components/Projetos/project";
import Contato from "./components/Contato/contato";
import Footer from "./components/Footer/footer";

function App() {

  return (
    <>
      <Header />
      <About />
      <Skills />
      <Project />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
