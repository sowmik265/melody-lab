import React from 'react';
import useClass from '../hooks/useClass';
import ClassCategory from './ClassCategory';


const Classes = () => {
    const [classes] = useClass();
    const guitarClass = classes.filter(guitar => guitar.className === "guitar");
    const violinClass = classes.filter(violin => violin.className === "violin");
    const pianoClass = classes.filter(piano => piano.className === "piano");
    const drumsClass = classes.filter(drum => drum.className === "drums");
    const saxophoneClass = classes.filter(saxophone => saxophone.className === "saxophone");
    const harmoniumClass = classes.filter(harmonium => harmonium.className === "harmonium");

    return (
        <div>

            <ClassCategory classes={guitarClass}></ClassCategory>
            <ClassCategory classes={violinClass}></ClassCategory>
            <ClassCategory classes={pianoClass}></ClassCategory>
            <ClassCategory classes={drumsClass}></ClassCategory>
            <ClassCategory classes={saxophoneClass}></ClassCategory>
            <ClassCategory classes={harmoniumClass}></ClassCategory>

        </div>
    );
};

export default Classes;