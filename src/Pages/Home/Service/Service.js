import React from 'react';
import './Service.css'
const Service = ({service}) => {
    //const {service} = props;
    const {name, price, description, img, time} = service;
    console.log(name, price, img, description, time);
    return (
        <div className="service-container">
            <img src={img}></img>
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Service;