import React from 'react';
import {Helmet} from 'react-helmet';
import '../../../src/Projects.css';
import fisherManInstrumentIMG from '../../Images/projects/FisherManSite.png';

const Projects =()=>{
    return(
        <>
       
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&   display=swap" rel="stylesheet"/>
                <title>Projects</title>
            </Helmet>

            <div className='projectsContainer'>
                <div className='projectCard'>
                    <div className='cardTextContainer'>
                        <h1 className='cardTitle'>FISHERMAN'S INSTRUMENT</h1>
                        <div className='cardText'>A website for french luthier Pascal Pecheur</div>
                    </div>
                    <img src={fisherManInstrumentIMG} alt='apperçu du projet'></img>
                </div>
                <div className='projectCard'>
                    <div className='cardTextContainer'>
                            <h1 className='cardTitle'>FISHERMAN'S INSTRUMENT</h1>
                            <div className='cardText'>A website for french luthier Pascal   Pecheur</div>
                        </div>
                </div>
                <div className='projectCard'>jaj</div>
            </div>

        </>
    )
}

export default Projects;