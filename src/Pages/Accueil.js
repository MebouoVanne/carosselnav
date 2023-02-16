import React from 'react';
import Menu from '../Menu';
import accueil from '../accueil.jpg';

const Accueil = () => {
    return (
        <div>
            <Menu/>
            <h1> Accueil</h1>
            <img src={accueil} className="App-accueil" alt="accueil" />
        </div>
    );
};

export default Accueil;