import React from "react";
import ProductCard from "./component/ProductCard";
import jeepImg from "./assets/JeepRecon.jpg"
import KiaImg from "./assets/KiaTelluride.jpg"
import AlfaImg from "./assets/Alfa.jpg"
import GenImg from "./assets/Genesis.jpg"

import './App.css'

function App() {
  return (
    <div>
      <h1 className="title"> GOLDEN GALLERY</h1>
      <div className="pro-container">
  <div className="card-pro">
    <ProductCard
      productImg={jeepImg}
      name="Jeep Recon"
     price={68995}
    />
  </div>

  <div className="card-pro">
    <ProductCard
      productImg={KiaImg}
      name="Kia Telluride"
      price={38600}
    />
  </div>

  <div className="card-pro">
    <ProductCard
      productImg={AlfaImg}
      name="Alfa Romeo Stelvio EV"
      price={49995}
    />
  </div>

  <div className="card-pro">
     <ProductCard 
     productImg={GenImg}
     name="Genesis GV60"
     price={11000}
    />
  </div>
</div>
    </div>
 


     
    
  );
}
export default App
