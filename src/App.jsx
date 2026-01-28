import React from "react";
import ProductCard from "./component/ProductCard";
import jeepImg from "./assets/JeepRecon.jpg"
import KiaImg from "./assets/KiaTelluride.jpg"
import AlfaImg from "./assets/Alfa.jpg"
import GenImg from "./assets/Genesis.jpg"

import './App.css'

function App() {
  return (
 <div className="pro-container">
  <div className="card-pro">
    <ProductCard
      productImg={jeepImg}
      name="Jeep Recon"
      price={54020}
    />
  </div>

  <div className="card-pro">
    <ProductCard
      productImg={KiaImg}
      name="Kia Telluride"
      price={85430}
    />
  </div>

  <div className="card-pro">
    <ProductCard
      productImg={AlfaImg}
      name="Alfa Romeo Stelvio EV"
      price={70430}
    />
  </div>

  <div className="card-pro">
    <ProductCard
      productImg={GenImg}
      name="Genesis GV60 Megma"
      price={90440}
    />
  </div>
</div>


     
    
  );
}
export default App
