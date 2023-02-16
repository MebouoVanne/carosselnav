import React from 'react';
import Menu from '../Menu';
import service from '../service.jpg';
const Services = () => {
    return (
        <div>
            <Menu/>
            <h1> Servives</h1>
            <img src={service} className="App-service" alt="service" height={"300 px"} width={"300 px"}/>
        </div>
    );
};

export default Services;