import React from "react";
import { serviceList } from "../helpers/serviceList";
import ServiceItem from "../components/ServiceItem";
 import '../styles/Service.css'
 
function Service(){
    return <>
    <div className="service">
        <h1 className="serciceTitle">
            Our Services
        </h1>
        <div className= "serviceList" >
            {serviceList.map((serviceItem, key) =>{
                 return (<ServiceItem 
                 key = {key}
                 image = {serviceItem.image} 
                 name= {serviceItem.name} 
                 price ={serviceItem.price}/>
                 );
            })}
        </div>
    </div>
    </>
}

export default Service