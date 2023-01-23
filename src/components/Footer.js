import React from "react";
import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState(``);
  function handleInput(e) {
    setInputValue(e.target.value);
  }
  function handleBlur(e) {
    if (!inputValue.includes("@")) {
      alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥`);
    }
  }
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">Pour les passionné*e*s des plantes 🌿🌱🌵</div>
      <div className="lmj-footer-elem">Laissez moi votre mail</div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
    </footer>
  );
}

export default Footer;
