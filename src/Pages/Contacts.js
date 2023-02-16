import React from 'react';
import Menu from '../Menu';
import contact from '../contact.jpg';
const Contacts = () => {
    return (
        <div>
            <Menu/>
            <h1> Contacts</h1>
            <img src={contact} className="App-contact" alt="contact" />
            <p> Établir une relation avec quelqu'un, entrer en communication avec un interlocuteur extérieur.
Exemple : "La meilleure preuve qu'il existe une intelligence extraterrestre, c'est que personne n'a essayé de nous contacter." (Bill Watterson)
Synonyme : joindre, toucher
Traduction en anglais : to contact
</p>
        </div>
    );
};

export default Contacts;