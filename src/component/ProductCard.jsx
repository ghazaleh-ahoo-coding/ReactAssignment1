import React from "react";


function ProductCard({ name, price, productImg}){
    return(
        <div >
            
            <img src={productImg} alt="Jeep Car"/>
            <h2 className="text-pro">{name}</h2>
            <h3 className="text-pro">Price $: {price}</h3>
            
        </div>
          
        
          
    );
}
export default ProductCard;