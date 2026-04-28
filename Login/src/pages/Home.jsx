import React from "react";
import Navbar from "../Componentes/Componets globales/Navbar.jsx";
import Header from "../Componentes/Componets globales/Header.jsx";
import Seccion1 from "../Componentes/Components/Seccion1.jsx";
import Seccion2 from "../Componentes/Components/Seccion2.jsx";
import Footer from "../Componentes/Componets globales/Footer.jsx";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Seccion1 />
      <Seccion2 />
      <Footer />
    </>
  );
}

export default Home;