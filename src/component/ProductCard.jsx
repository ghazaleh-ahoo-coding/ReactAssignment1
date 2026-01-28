import React from "react";


function ProductCard({ name, price, productImg}){
    return(
        <div className="card-pro" >
            
            <img src={productImg} alt="Jeep Car"/>
            <h1 className="text-pro">{name}</h1>
            <h3 className="text-pro">Price $: {price}</h3>
            
        </div>
          
        
          
    );
}
export default ProductCard;