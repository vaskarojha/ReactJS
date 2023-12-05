import React from "react";

function ServiceItem({image, name, price}){
    return (<>
         <div className="serviceItem">
            <div style={{backgroundImage: `url(${image})`}}></div>
            <h1>{name}</h1>
            <h2>{price}</h2>
         </div>
    </>)
}

export default ServiceItem