import React from "react";
import ProductCard from "./component/ProductCard";
import jeepImg from "./assets/JeepRecon.jpg"
import KiaImg from "./assets/KiaTelluride.jpg"


import './App.css'

function App() {
  return (
    <div>
       <ProductCard
       productImg={jeepImg}
       name="Jeep Recon 2025"
       price={54020}
       />
        <ProductCard
       productImg={KiaImg}
       name="Kia Telluride 2025"
       price={85430}
       />
    </div>
     
    
  );
}
export default App
