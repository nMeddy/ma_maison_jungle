import React from "react";
import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function CareScale({ scaleValue, careType }) {
  const nbr = [1, 2, 3];
  const quantityLabel = {
    1: `peu`,
    2: `modérement`,
    3: `beaucoup`,
  };
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );
  return (
    <div
      onClick={() =>
        alert(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumière" : `d'arrosage`
          }`
        )
      }
    >
      {nbr.map(
        (nbrElem, index) =>
          scaleValue >= nbrElem && (
            <span key={`${nbrElem}-${index}`}>{scaleType}</span>
          )
      )}
    </div>
  );
}

export default CareScale;
