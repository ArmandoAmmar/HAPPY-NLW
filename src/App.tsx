import React from "react";

import "./styles/global.css";
import { LandingStyle } from "./styles/landing.style";

import logoImg from "./images/logo.svg";

import { FiArrowRight } from "react-icons/fi";

function App() {
  return (
    <LandingStyle>
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </div>

        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </a>
      </div>
    </LandingStyle>
  );
}

export default App;
