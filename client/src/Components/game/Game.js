import React, { useState, useEffect } from 'react';
import '../../../src/css/game.css'
import music from '../../sounds/ReadyToPlaybyAlexeyAnisimov.mp3';
import gameOver from '../../sounds/gameOver.wav';
import winSound from '../../sounds/win.wav';
import tsLogo from '../../Images/logos/TypeScript.svg';
import reactLogo from '../../Images/logos/react.svg';
import phpLogo from '../../Images/logos/php.svg';
import symfonyLogo from '../../Images/logos/symfony.svg';
import apiLogo from '../../Images/logos/api.svg';
import javaLogo from '../../Images/logos/Java.svg';
import quarkusLogo from '../../Images/logos/Quarkus.svg';
import kubernetesLogo from '../../Images/logos/Kubernetes.svg';
import awsLogo from '../../Images/logos/AWS.svg';
import close from '../../Images/svg/close.svg';
import cv from '../../Images/cv.jpg'
import dockerLogo from '../../Images/logos/Docker.svg';

const logoImages = [
  tsLogo,
  reactLogo,
  phpLogo,
  symfonyLogo,
  dockerLogo,
  apiLogo,
  javaLogo,
  quarkusLogo,
  kubernetesLogo,
  awsLogo,
];

const logoNames = [
  'TypeScript',
  'React',
  'PHP',
  'Symfony',
  'Docker',
  'RESTful API',
  'Java',
  'Quarkus',
  'Kubernetes',
  'AWS',
];

const Game = () => {

  const boardGame = document.querySelector('.boardGame');
  const playButton = document.querySelector('.playGame');
  const boardGameRef = React.useRef(null);
  const animationFrameRef = React.useRef(null);
  const overlayWin = document.querySelector("#overlayWin");
  const logoRefs = React.useRef([]);
  const paddleRef = React.useRef(null);
  const ballRef = React.useRef(null);
  const [paddleX, setPaddleX] = useState(0);
  const [ballX, setBallX] = useState(0);
  const [ballY, setBallY] = useState(0);
  const [velX, setVelX] = useState(1);
  const [velY, setVelY] = useState(-1);
  const [start, setStart] = useState(false);

  function play() {
    playButton.style.boxShadow="inset 7px 7px 10px var(--orangeShadowGradient), inset -7px -7px 10px var(--orangeLightGradient)";

    const musicEl = document.getElementById("music");
    const randomVelY = getRandomVelocity(-2, 0);
    const randomVelX = getRandomVelocity(-2, 2);

    const bottomWidth = document.querySelector('.bottomSpace').getBoundingClientRect().width;
    const bottomHeight = document.querySelector('.bottomSpace').getBoundingClientRect().height;

    const starterY = bottomHeight/2;
    const starterX = bottomWidth/2;

    setBallX(()=> starterX);
    setBallY(() => starterY);
    setVelY(() => randomVelY);
    setVelX(() => randomVelX);

    musicEl.loop= true;
    musicEl.volume = 0.01;
    musicEl.play();

    boardGame.style.boxShadow="0 0 0 var(--lightBlue), 0 0 0 var(--lightBlue), inset 7px 7px 10px var(--shadow), inset -7px -7px 10px var(--light)";
    setStart(true);

  }

  function getRandomVelocity(min, max) {
    let velocity = 0;
    while (velocity === 0) {
      velocity = Math.floor(Math.random() * (max - min)) + min;
    }
    return velocity;
  }

  const movePaddle = (e) => {
    const rect = boardGameRef.current.getBoundingClientRect();
    const paddleWidth = paddleRef.current?.offsetWidth || 100;
    const paddleX = e.clientX - rect.left - paddleWidth/2;
    const maxPaddleX = rect.width - paddleWidth;

    const clampedPaddleX = Math.min(Math.max(0, paddleX), maxPaddleX);
    setPaddleX(clampedPaddleX);

  };

  function overlaps(a, b) {
    const rect1 = a.getBoundingClientRect();
    const rect2 = b.getBoundingClientRect();
    const isInHoriztonalBounds =
      rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
    const isInVerticalBounds =
      rect1.y < rect2.y + rect2.height && rect1.y + rect1.height>  rect2.y;
    const isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
    return isOverlapping;
  }

  function closeOverlay() {
    overlayWin.style.display="none";
  }

  useEffect(() => {
    logoRefs.current = logoImages.map(() => React.createRef());
  }, []);

  useEffect(() => {
    function win(){
      const musicEl = document.getElementById("music");
      const winEl = document.getElementById("win");
      const boardGameEl = document.querySelector('.boardGame');
      const playButtonEl = document.querySelector('.playGame');
      const overlayWinEl = document.querySelector("#overlayWin");
      musicEl.pause();
      musicEl.currentTime = 0;
      winEl.volume = 0.05;
      winEl.play();
      playButtonEl.style.boxShadow=" inset 0 0 0 var(--orange), inset 0 0 0 var(--orange), 7px 7px 10px var(--shadow), -7px -7px 10px var(--light)";
      boardGameEl.style.boxShadow ="none";
      setStart(false);
      setTimeout(() => {
        logoRefs.current.forEach((logoRef) =>{
          logoRef.current.classList.remove("hidden");
        })
        overlayWinEl.style.display="flex";
      }, "1000");
    }

    function lose(){
      const musicEl = document.getElementById("music");
      const gameOverEl = document.getElementById("gameOver");
      const boardGameEl = document.querySelector('.boardGame');
      const playButtonEl = document.querySelector('.playGame');
      gameOverEl.volume = 0.05;
      gameOverEl.play();
      musicEl.pause();
      musicEl.currentTime = 0;
      playButtonEl.style.boxShadow=" inset 0 0 0 var(--orange), inset 0 0 0 var(--orange), 7px 7px 10px var(--shadow), -7px -7px 10px var(--light)";
      boardGameEl.style.boxShadow ="none";
      setStart(false);
      logoRefs.current.forEach((logoRef) =>{
        logoRef.current.classList.remove("hidden");
      })
    }

    const updateGame = () => {

      if(!start) return;

      let notHiddenLogos = [];
      const rect = boardGameRef.current.getBoundingClientRect();

      setBallX((prevBallX) => prevBallX + velX);
      setBallY((prevBallY) => prevBallY + velY);

      if (ballX >= rect.width-25) {
        setBallX((prevBallX) => prevBallX -5);
        setVelX((prevelX) => -prevelX);
      }

      if (ballX <= 0) {
        setBallX((prevBallX) => prevBallX +5);
        setVelX((prevelX) => -prevelX);
      }

      if (ballY >= rect.height-30) {
        setBallY((prevBallY) => prevBallY -5);
        setVelY((prevelY) => -prevelY);
      }

      if (ballY <= 0) {
        lose();
      }

      if (overlaps(paddleRef.current, ballRef.current)) {
        const randomVelY = getRandomVelocity(-2, 0);
        setBallY((prevBallY) => prevBallY +5);
        setVelY(() => -randomVelY);
      }

      logoRefs.current.forEach((logoRef) => {
        if (logoRef.current && overlaps(logoRef.current, ballRef.current)) {
          if (!logoRef.current.classList.contains("hidden")){
            const randomVelX = getRandomVelocity(-3, 0);
            const randomVelY = getRandomVelocity(-3, 0);
            setVelX(randomVelX);
            setVelY(randomVelY);
            logoRef.current.classList.add("hidden");
          }
        }

        let logoIndex = notHiddenLogos.indexOf(logoRef.current);
        if (logoRef.current.classList.contains("hidden")){
          if (logoIndex > -1) {
            notHiddenLogos.splice(logoIndex, 1);
          }
        } else {
          notHiddenLogos.push(logoRef.current);
        }
      });

      if (notHiddenLogos.length === 0){
        win();
      }

    };

    if(start){
      animationFrameRef.current = requestAnimationFrame(updateGame);
    }

  }, [ballX, ballY, velX, velY, start]);

  return (
    <div className='game'>

      <div id='overlayWin' onClick={closeOverlay}>
        <div className='youWin' onClick={(e) => e.stopPropagation()}>
          <div className='closeContainer'>
            <img src={close} className='close' onClick={closeOverlay} alt='close button'></img>
          </div>
          <h1>🏆 VOUS AVEZ GAGNÉ ! 🏆</h1>
          <p>Vous avez débloqué l'accès à mon CV !</p>

            <div className='iframeContainer'>

              <img src={cv} className='cvImg' alt='my CV'></img>

              <a href='https://drive.google.com/file/d/1cXs3fuYkeuRRP2VcHW24zn6fd67D7P2S/view?usp=sharing' target='_blank' rel="noreferrer">
                <button className='viewCV'>VOIR LE CV</button>
              </a>


            </div>

        </div>
      </div>

      <div
        className='boardGame'
        ref={boardGameRef}
        onMouseMove={movePaddle}
      >
        <div className='logos'>

          {logoImages.map((logoImage, index) => {
            const logoRef = logoRefs.current[index];
            return (
              <div className='logoContainer' key={index} ref={logoRef}>
                <img src={logoImage} className='logo' alt={logoNames[index]} />
                <p>{logoNames[index]}</p>
              </div>
            );
          })}
        </div>

        <div className='bottomSpace'>
          {start === true && (
            <>
              <div
                className="ball"
                style={{ left: ballX, bottom: ballY }}
                ref={ballRef}
              ></div>

              <div
                className="paddle"
                style={{ left: paddleX }}
                ref={paddleRef}
              ></div>
            </>
          )}
        </div>
      </div>


      <audio id="music" src={music}></audio>
      <audio id="gameOver" src={gameOver}></audio>
      <audio id="win" src={winSound}></audio>
      <div className='playGameContainer'><button className='playGame' onClick={play}>JOUER</button></div>

    </div>
  );
};

export default Game;
