import React from 'react';
import useClass from '../hooks/useClass';
import ClassCategory from './ClassCategory';
import SectionTile from '../Utilitites/SectionTile';
import { Helmet } from 'react-helmet-async';


const Classes = () => {
    const [classes] = useClass();
    const guitarClass = classes.filter(guitar => guitar.className === "Guitar");
    const violinClass = classes.filter(violin => violin.className === "violin");
    const pianoClass = classes.filter(piano => piano.className === "piano");
    const drumsClass = classes.filter(drum => drum.className === "drums");
    const saxophoneClass = classes.filter(saxophone => saxophone.className === "saxophone");
    const harmoniumClass = classes.filter(harmonium => harmonium.className === "harmonium");

    return (
        <div className='pt-24'>
            <Helmet>
                <title>Melody Lab | Home</title>
            </Helmet>
            <SectionTile title={'our guiter classes'}></SectionTile>
            <ClassCategory classes={guitarClass}></ClassCategory>
            <SectionTile title={'our violin classes'}></SectionTile>
            <ClassCategory classes={violinClass}></ClassCategory>
            <SectionTile title={'our piano classes'}></SectionTile>
            <ClassCategory classes={pianoClass}></ClassCategory>
            <SectionTile title={'our drums classes'}></SectionTile>
            <ClassCategory classes={drumsClass}></ClassCategory>
            <SectionTile title={'our saxophone classes'}></SectionTile>
            <ClassCategory classes={saxophoneClass}></ClassCategory>
            <SectionTile title={'our harmonium classes'}></SectionTile>
            <ClassCategory classes={harmoniumClass}></ClassCategory>

        </div>
    );
};

export default Classes;