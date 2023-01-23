import React from "react";
import "../styles/PlantItem.css";
import CareScale from "./CareScale";

function handleClick(PlantName) {
  alert(`Vous voulez acheter 1 ${PlantName}? Très bon choix 🌱✨`);
}

function PlantItem({ name, cover, water, light, price }) {
  return (
    <li className="lmj-plant-item" onClick={() => handleClick()}>
      <span className="lmj-plant-item" onClick={()=>handleClick}>{price}</span>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}
export default PlantItem;
