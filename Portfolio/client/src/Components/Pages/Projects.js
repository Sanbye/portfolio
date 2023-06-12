import React,  { useEffect, useRef, useState } from 'react';
import {Helmet} from 'react-helmet';
import '../../../src/Projects.css';
import fisherManInstrumentIMG from '../../Images/projects/FisherManSite.png';
import img from '../../Images/projects/image.png';
import img2 from '../../Images/projects/image2.png';
import img3 from '../../Images/projects/image3.png';
import htmlLogo from '../../Images/logos/html5.svg';
import cssLogo from '../../Images/logos/css3.svg';
import jsLogo from '../../Images/logos/js.svg';
import reactLogo from '../../Images/logos/react.svg';
import gitLogo from '../../Images/logos/git.svg';
import githubLogo from '../../Images/logos/github.svg';
import wordpressLogo from '../../Images/logos/wordpress.svg';
import phpLogo from '../../Images/logos/php.svg';
import symfonyLogo from '../../Images/logos/symfony.svg';
import wwwLogo from '../../Images/logos/www.svg'
import apiLogo from '../../Images/logos/api.svg';
import close from '../../Images/svg/close.svg'
import pushUPlogo from '../../Images/svg/pushUP.svg';

const Projects =()=>{
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);

    function scrollTo(hash) {
        window.location.hash = "#" + hash;
    }

    function readMore(ref, hash){
        


            ref.current.lastChild.style.display="flex";

            setTimeout(()=>{
                ref.current.style.flex="8 1 50vw";
                ref.current.firstChild.style.height= "50%";
                ref.current.lastChild.style.transform= "scale(1)";
            },0.1)

            window.location.hash = "";

            setTimeout(()=>{
                scrollTo(hash);
            },1000)

    }

    function minimize(ref,size){
        
        if (size==="bigger"){
            ref.current.style.flex = "2 1 30vw";
        }else{
            ref.current.style.flex = "1 2 30vw";
        }
        
        ref.current.firstChild.style.height = "100%";
        ref.current.lastChild.style.transform = "scale(0)";

         setTimeout(()=>{
                ref.current.lastChild.style.display="none";
                ref.current.style.flex = "";
            },0.1)
    }

    return(
        <>
       
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet"/>
                <title>Projects</title>
            </Helmet>

            <div className='projectsContainer'>

                <div className='projectCard bigger' ref={card1Ref} id="1">

                    <div className='imgContainer' onClick={()=>readMore(card1Ref, "1")}>

                        <div className='cardTitleContainer'>

                            <h1 className='cardTitle'>FISHERMAN'S INSTRUMENT</h1>
                            <div className='cardText'>Built a website for french luthier Pascal Pecheur</div>

                        </div>

                        <img src={fisherManInstrumentIMG} className='cardCover' alt='apperçu du projet'></img>
                    </div>

                    <div className='description'>

                        <div className='descriptionTextContainer'>
                            <h1>Description :</h1>
                            <div className='descriptionText'>
                                <p>This website as two parts: Front-office and Back-office. Pascal Pecheur asked me something he could changes at will, like adding you guitarre, changing price, adding a new article... </p>
                                <p>He left me total liberty in term of UI/UX design, only two colors was necessary, one: a wood-like brown, two: a dark blue that would enhance his guitarres.</p>
                            </div>
                        </div>

                        <div className='spaceBeetwen'>
                            <div className='flexInline'>
                                <h3>Stack :</h3>
                                <img src={phpLogo} className='cardLogo'></img>
                                <img src={symfonyLogo} className='cardLogo'></img>
                                <img src={jsLogo} className='cardLogo'></img>
                            </div>

                            <div className='minimize'  onClick={()=>minimize(card1Ref, "bigger")}>
                                <img src={pushUPlogo} className='cardLogo'></img>
                            </div>

                            <div className='flexInline'>
                                <h3>Visit project :</h3>
                                <div className='playGameContainer'>
                                    <a href='https://www.youtube.com/watch?v=oJ5PfRQB93o&list=RDMM&start_radio=1' target='_blank'>
                                        <button className='cardButton'>

                                            <img src={wwwLogo} className='cardLogo'></  img>

                                        </button>
                                    </a>
                                </div>
                                
                                <div className='playGameContainer'>
                                    <a href='https://github.com/Sanbye/Fisherman-Instruments-Web-Site' target='_blank'>
                                        <button className='cardButton'>
                                            <img src={githubLogo} className='cardLogo'></img>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='projectCard smaller' ref={card2Ref} id='2'>

                    <div className='imgContainer' onClick={()=>readMore(card2Ref, "2")}>

                        <div className='cardTitleContainer'>

                            <h1 className='cardTitle'>FISHERMAN'S INSTRUMENT</h1>
                            <div className='cardText'>Built a website for french luthier Pascal Pecheur</div>

                        </div>

                        <img src={img} className='cardCover' alt='apperçu du projet'></img>
                    </div>

                    <div className='description'>

                        <div className='descriptionTextContainer'>
                            <h1>Description :</h1>
                            <div className='descriptionText'>
                                <p>This website as two parts: Front-office and Back-office. Pascal Pecheur asked me something he could changes at will, like adding you guitarre, changing price, adding a new article... </p>
                                <p>He left me total liberty in term of UI/UX design, only two colors was necessary, one: a wood-like brown, two: a dark blue that would enhance his guitarres.</p>
                            </div>
                        </div>

                        <div className='spaceBeetwen'>
                            <div className='flexInline'>
                                <h3>Stack :</h3>
                                <img src={phpLogo} className='cardLogo'></img>
                                <img src={symfonyLogo} className='cardLogo'></img>
                                <img src={jsLogo} className='cardLogo'></img>
                            </div>

                            <div className='minimize'  onClick={()=>minimize(card2Ref, "")}>
                                <img src={pushUPlogo} className='cardLogo'></img>
                            </div>

                            <div className='flexInline'>
                                <h3>Visit project :</h3>
                                <div className='playGameContainer'>
                                    <button className='cardButton'>
                                        <img src={wwwLogo} className='cardLogo'></img>
                                    </button>
                                </div>
                                
                                <div className='playGameContainer'>
                                    <button className='cardButton'>
                                        <img src={githubLogo} className='cardLogo'></img>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                
                <div className='projectCard smaller' ref={card3Ref} id='3'>

                    <div className='imgContainer' onClick={()=>readMore(card3Ref, "3")}>

                        <div className='cardTitleContainer'>

                            <h1 className='cardTitle'>FISHERMAN'S INSTRUMENT</h1>
                            <div className='cardText'>Built a website for french luthier Pascal Pecheur</div>

                        </div>

                        <img src={img2} className='cardCover' alt='apperçu du projet'></img>
                    </div>

                    <div className='description'>

                        <div className='descriptionTextContainer'>
                            <h1>Description :</h1>
                            <div className='descriptionText'>
                                <p>This website as two parts: Front-office and Back-office. Pascal Pecheur asked me something he could changes at will, like adding you guitarre, changing price, adding a new article... </p>
                                <p>He left me total liberty in term of UI/UX design, only two colors was necessary, one: a wood-like brown, two: a dark blue that would enhance his guitarres.</p>
                            </div>
                        </div>

                        <div className='spaceBeetwen'>
                            <div className='flexInline'>
                                <h3>Stack :</h3>
                                <img src={phpLogo} className='cardLogo'></img>
                                <img src={symfonyLogo} className='cardLogo'></img>
                                <img src={jsLogo} className='cardLogo'></img>
                            </div>

                            <div className='minimize'  onClick={()=>minimize(card3Ref, "")}>
                                <img src={pushUPlogo} className='cardLogo'></img>
                            </div>

                            <div className='flexInline'>
                                <h3>Visit project :</h3>
                                <div className='playGameContainer'>
                                    <button className='cardButton'>
                                        <img src={wwwLogo} className='cardLogo'></img>
                                    </button>
                                </div>
                                
                                <div className='playGameContainer'>
                                    <button className='cardButton'>
                                        <img src={githubLogo} className='cardLogo'></img>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='projectCard bigger' ref={card4Ref} id='4'>

                    <div className='imgContainer'onClick={()=>readMore(card4Ref, "4")}>

                        <div className='cardTitleContainer'>

                            <h1 className='cardTitle'>FISHERMAN'S INSTRUMENT</h1>
                            <div className='cardText'>Built a website for french luthier Pascal Pecheur</div>

                        </div>

                        <img src={img3} className='cardCover' alt='apperçu du projet'></img>
                    </div>

                    <div className='description'>

                        <div className='descriptionTextContainer'>
                            <h1>Description :</h1>
                            <div className='descriptionText'>
                                <p>This website as two parts: Front-office and Back-office. Pascal Pecheur asked me something he could changes at will, like adding you guitarre, changing price, adding a new article... </p>
                                <p>He left me total liberty in term of UI/UX design, only two colors was necessary, one: a wood-like brown, two: a dark blue that would enhance his guitarres.</p>
                            </div>
                        </div>

                        <div className='spaceBeetwen'>
                            <div className='flexInline'>
                                <h3>Stack :</h3>
                                <img src={phpLogo} className='cardLogo'></img>
                                <img src={symfonyLogo} className='cardLogo'></img>
                                <img src={jsLogo} className='cardLogo'></img>
                            </div>

                            <div className='minimize'  onClick={()=>minimize(card4Ref, "bigger")}>
                                <img src={pushUPlogo} className='cardLogo'></img>
                            </div>

                            <div className='flexInline'>
                                <h3>Visit project :</h3>
                                <div className='playGameContainer'>
                                    <button className='cardButton'>
                                        <img src={wwwLogo} className='cardLogo'></img>
                                    </button>
                                </div>
                                
                                <div className='playGameContainer'>
                                    <button className='cardButton'>
                                        <img src={githubLogo} className='cardLogo'></img>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Projects;