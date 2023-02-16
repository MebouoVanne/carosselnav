import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css'
const Menu = () => {
    return (
        <div className='liste_liste'>
            <ul className='liste'>
                <NavLink to='/'>
                <li className='items'>Accueil</li>
                </NavLink>
                <NavLink to='/Portofolio'>
                <li className='items'>Portofolio </li>
                </NavLink>
                <NavLink to='/Services'>
                <li className='items'>Services</li>
                </NavLink>
                <NavLink to='/Apropos'>
                <li className='items'>Apropos</li>
                </NavLink>
                <NavLink to='/Contacts'>
                <li className='items'>Contacts</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Menu;