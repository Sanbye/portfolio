import React,  { useEffect, useRef, useState } from 'react';
import {Helmet} from 'react-helmet';
import '../../../src/Projects.css';
import fisherManInstrumentIMG from '../../Images/projects/FisherManSite.png';
import chatGPTproject from '../../Images/projects/image.png';
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
                            <div className='cardText'>Website Development for French Luthier Pascal Pecheur</div>

                        </div>

                        <img src={fisherManInstrumentIMG} className='cardCover' alt='apperçu du projet'></img>
                    </div>

                    <div className='description'>

                        <div className='descriptionTextContainer'>
                            <h1>Description :</h1>
                            <div className='descriptionText'>
                                <p>This project involved building a website for Pascal Pecheur, a talented French luthier. The website consists of two main parts: the Front-office and the Back-office.</p>
                                <p>In the Back-office, Pascal wanted the ability to make changes effortlessly, such as adding new guitars, updating prices, or creating new articles. I implemented a user-friendly content management system that allows him to have complete control over these aspects.</p>
                                <p>For the UI/UX design, I had the freedom to exercise my creativity. Pascal Pecheur only specified two essential colors: a wood-like brown and a dark blue to accentuate his guitars. Taking this into consideration, my design aims to highlight the beauty and craftsmanship of his instruments.</p>
                                
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

                            <h1 className='cardTitle'>ChatGPT Project</h1>
                            <div className='cardText'>A personnal project utilizing  OpenAI API</div>

                        </div>

                        <img src={chatGPTproject} className='cardCover' alt='apperçu du projet'></img>
                    </div>

                    <div className='description'>

                        <div className='descriptionTextContainer'>
                            <h1>Description :</h1>
                            <div className='descriptionText'>
                                <p>This project centers around utilizing the OpenAI API to generate responses using ChatGPT. By leveraging the power of OpenAI, I developed a system that allows users to interact with the ChatGPT model.</p>
                                <p>With this project, users have the ability to personalize their responses by adjusting specific parameters. The goal was to create an interactive experience for users while exploring the capabilities of the OpenAI API.</p>
                                <p>Driven by curiosity and a desire to understand the inner workings of the OpenAI API, I embarked on this project purely for the joy of learning.</p>
                            </div>
                        </div>

                        <div className='spaceBeetwen'>
                            <div className='flexInline'>
                                <h3>Stack :</h3>
                                <img src={jsLogo} className='cardLogo'></img>
                                <img src={apiLogo} className='cardLogo'></img>
                                <img src={reactLogo} className='cardLogo'></img>
                            </div>

                            <div className='minimize'  onClick={()=>minimize(card2Ref, "")}>
                                <img src={pushUPlogo} className='cardLogo'></img>
                            </div>

                            <div className='flexInline'>
                                <h3>Visit project :</h3>
                                                                
                                <div className='playGameContainer'>

                                    <a href='https://github.com/Sanbye/chatGPT-project' target='_blank'>
                                        <button className='cardButton'>
                                            <img src={githubLogo} className='cardLogo'></img>
                                        </button>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='projectCard smaller' ref={card3Ref} id='3'>

                    <div className='imgContainer'onClick={()=>readMore(card3Ref, "3")}>

                        <div className='cardTitleContainer'>

                            <h1 className='cardTitle'>SortirApp</h1>
                            <div className='cardText'>My first Symfony project</div>

                        </div>

                        <img src={img3} className='cardCover' alt='apperçu du projet'></img>
                    </div>

                    <div className='description'>

                        <div className='descriptionTextContainer'>
                            <h1>Description :</h1>
                            <div className='descriptionText'>
                                <p>This is my very first Symfony project as part of my web developer training.</p>
                                <p>It was developed in collaboration with Erwan BELLANTAN and CHEN Max. The main objective of this project was to learn object-oriented programming (OOP) and database utilization. It's important to note that the front-end development was not the primary focus.</p>
                                <p>Working with databases allowed us to understand and utilize the power of data storage and retrieval within the Symfony framework.</p>
                                <p>SortirApp represents my first milestone in my journey as a web developer, marking my initial foray into Symfony and solidifying my understanding of back-end development principles.</p>
                            </div>
                        </div>

                        <div className='spaceBeetwen'>
                            <div className='flexInline'>
                                <h3>Stack :</h3>
                                <img src={phpLogo} className='cardLogo'></img>
                                <img src={symfonyLogo} className='cardLogo'></img>
                                <img src={jsLogo} className='cardLogo'></img>
                            </div>

                            <div className='minimize'  onClick={()=>minimize(card3Ref, "bigger")}>
                                <img src={pushUPlogo} className='cardLogo'></img>
                            </div>

                            <div className='flexInline'>
                                <h3>Visit project :</h3>
                                
                                <div className='playGameContainer'>
                                    <a href='https://github.com/Sanbye/sortirApp' target='_blank'>
                                        <button className='cardButton'>
                                            <img src={githubLogo} className='cardLogo'></img>
                                         </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                
                <div className='projectCard bigger' ref={card4Ref} id='4'>

                    <div className='imgContainer' onClick={()=>readMore(card4Ref, "4")}>

                        <div className='cardTitleContainer'>

                            <h1 className='cardTitle'>My personnal Portfolio</h1>
                            <div className='cardText'>The website you are currently on</div>

                        </div>

                        <img src={img2} className='cardCover' alt='apperçu du projet'></img>
                    </div>

                    <div className='description'>

                        <div className='descriptionTextContainer'>
                            <h1>Description :</h1>
                            <div className='descriptionText'>
                                <p>This project showcases my personal portfolio website, the very website you are currently visiting. It serves as a platform to present my skills, projects, and experiences to potential clients and employers.</p>
                                <p>If you're interested in exploring the code behind this website, you can find it on my GitHub repository. Feel free to browse through the code and gain insights into the implementation details.</p>
                                <p>In addition to providing information about my work, skills, and accomplishments, my portfolio also features a fun little game that you can play. </p>
                                <p> Give it a try and discover a surprise awaiting those who triumph in the game !</p>
                            </div>
                        </div>

                        <div className='spaceBeetwen'>
                            <div className='flexInline'>
                                <h3>Stack :</h3>
                                <img src={jsLogo} className='cardLogo'></img>
                                <img src={reactLogo} className='cardLogo'></img>
                                <img src={cssLogo} className='cardLogo'></img>
                            </div>

                            <div className='minimize'  onClick={()=>minimize(card4Ref, "")}>
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

                                    <a href='https://github.com/Sanbye/portfolio/tree/master/Portfolio/client' target='_blank'>
                                        <button className='cardButton'>
                                            <img src={githubLogo} className='cardLogo'></img>
                                        </button>
                                    </a>
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