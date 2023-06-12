import React from 'react';
import coffeeGIF from '../../Images/coffee-88.gif';
import {Helmet} from 'react-helmet';
import Skill from '../Skill';
import Game from '../Game/Game';



const AboutMe =()=>{

    return(
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&   display=swap" rel="stylesheet"/>
                <title>Home</title>
            </Helmet>

            <section className='heroBanner'>
                <div>

                    <p>Hi! I'm Sylvain Bousquet.</p>
                    <p>I'm a french <span className='importantText'>full-stack developer</span>, ready to take your project to the next level! If you're seeking a talented developer, I could be <span className='importantText'>the  perfect fit</span> for you.</p>
                
                </div>
                <img className='cover' src={coffeeGIF} alt='Coffee GIF'/>
            </section>

            <section className='skillSection'>
                <div className='skills'>
                    <h1>Why me ?</h1>
                    <Skill title='Curiosity' value='100%'/>
                    <Skill title='Adaptability' value='90%'/>
                    <Skill title='Creativity' value='90%'/>
                    <Skill title='English' value='80%'/>
                    <Skill title='Motivation' value='100%'/>
                </div>
                <div className='howIwork'>

                    <h1>What I am looking for :</h1>
                    <br></br>
                    <p>I am actively seeking a work-study program in the tech industry as an ISCOD student 📚</p> 
                    <br></br>
                    <p>The unique work-study rhythm at ISCOD, with one day dedicated to   studying and four days for practical work, offers maximum flexibility.                        
                    </p>
                    <br></br>
                    <p>With this schedule, I can adapt my study days according to your preferences and project requirements.</p>
                    <br></br>
                    <p>I'm still open to job offers, though! ✔️</p>
                </div>
                
            </section>

            <section className='techStack'>

                <h1 className='myToolBox'>My Toolbox : </h1>

                <Game/>
                
                
            </section>

           


        </>
    )
}

export default AboutMe;