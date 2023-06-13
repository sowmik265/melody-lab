import React from 'react';
import useClass from '../hooks/useClass';
import classCategories from './classCategories';


const Classes = () => {
    const classes = useClass();
    const guitarClass = guitars.filter(guitar => guitar.className === "guitar");
    const violinClass = violins.filter(violin => violin.className === "guitar");
    const pianoClass = pianos.filter(piano => piano.className === "guitar");
    const drumsClass = drums.filter(drum => drum.className === "drum");
    const saxophoneClass = saxophones.filter(drum => saxophone.className === "saxophone");
    const harmoniumClass = harmoniums.filter(drum => harmonium.className === "harmonium");

    return (
        <div>
           
        <classCategories></classCategories>
           
        </div>
    );
};

export default Classes;