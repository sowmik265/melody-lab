import React from 'react';
import useClass from '../hooks/useClass';
import classCategories from './classCategories';


const Classes = () => {
    const classes = useClass();
    const guitarClass = classes.filter(guitar => guitar.className === "guitar");
    const violinClass = classes.filter(violin => violin.className === "guitar");
    const pianoClass = classes.filter(piano => piano.className === "guitar");
    const drumsClass = classes.filter(drum => drum.className === "drum");
    const saxophoneClass = classes.filter(saxophone => saxophone.className === "saxophone");
    const harmoniumClass = classes.filter(harmonium => harmonium.className === "harmonium");

    return (
        <div>

            <classCategories classes={guitarClass}></classCategories>
            <classCategories classes={violinClass}></classCategories>
            <classCategories classes={pianoClass}></classCategories>
            <classCategories classes={drumsClass}></classCategories>
            <classCategories classes={saxophoneClass}></classCategories>
            <classCategories classes={harmoniumClass}></classCategories>

        </div>
    );
};

export default Classes;