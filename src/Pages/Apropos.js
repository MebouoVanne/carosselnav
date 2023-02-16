import React from 'react';
import Menu from '../Menu';
import apropos from '../apropos.png';
const Apropos = () => {
    return (
        <div>
            <Menu/>
            <h1> A propos</h1>
            <img src={apropos} className="App-apropos" alt="apropos" height={'300px'} width={'300px'}/>
        </div>
    );
};

export default Apropos;