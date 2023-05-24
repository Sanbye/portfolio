import React, { useState, useEffect } from 'react';
import htmlLogo from '../../Images/logos/html5.svg';
import cssLogo from '../../Images/logos/css3.svg';
import jsLogo from '../../Images/logos/js.svg';
import reactLogo from '../../Images/logos/react.svg';
import gitLogo from '../../Images/logos/git.svg';
import githubLogo from '../../Images/logos/github.svg';
import wordpressLogo from '../../Images/logos/wordpress.svg';
import phpLogo from '../../Images/logos/php.svg';
import symfonyLogo from '../../Images/logos/symfony.svg';
import apiLogo from '../../Images/logos/api.svg';

const Game = () => {
  const canvasRef = React.useRef(null);
  const paddleRef = React.useRef(null);
  const ballRef = React.useRef(null);
  const animationFrameRef = React.useRef(null);
  const [paddleX, setPaddleX] = useState(0); 
  const [ballX, setBallX] = useState(200); 
  const [ballY, setBallY] = useState(200); 
  const [velX, setVelX] = useState(1);
  const [velY, setVelY] = useState(2);
  
  const movePaddle = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
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
      rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
    const isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
    return isOverlapping;
  }

  useEffect(() => {
    const updateGame = () => {
      const rect = canvasRef.current.getBoundingClientRect();
     
      setBallX((prevBallX) => prevBallX + velX);
      setBallY((prevBallY) => prevBallY + velY);

      overlaps(paddleRef.current,ballRef.current)
  
 
      if (ballX >= rect.width || overlaps(paddleRef.current,ballRef.current)) {

        setBallX((prevBallX) => prevBallX -5);
        setVelX((prevelX) => -prevelX);
      }

      if (ballX <= 0) {

        setBallX((prevBallX) => prevBallX +5);
        setVelX((prevelX) => -prevelX);
      }

      if (ballY >= rect.height) {
    
        setBallY((prevBallY) => prevBallY -5);
        setVelY((prevelY) => -prevelY);
      }

      if (ballY <= 0 || overlaps(paddleRef.current,ballRef.current )) {
 
        setBallY((prevBallY) => prevBallY +5);
        setVelY((prevelY) => -prevelY);
      }

      animationFrameRef.current = requestAnimationFrame(updateGame);

    };
  
    animationFrameRef.current = requestAnimationFrame(updateGame);
  
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [ballX, ballY, velX, velY, paddleX]);

  return (
    <div className='game'>     
      
      <div 
        className='boardGame'
        ref={canvasRef}
        onMouseMove={movePaddle}
      >
          <div className='logos'>

            <div className='logoContainer'>
                <img src={htmlLogo} className='logo'></img>
                <p>HTML5</p>
            </div>

            <div className='logoContainer'>
                <img src={cssLogo} className='logo'></img>
                <p>CSS3</p>
            </div>

            <div className='logoContainer'>
                <img src={jsLogo} className='logo'></img>
                <p>JavaScript</p>
            </div>

            <div className='logoContainer'>
                <img src={reactLogo} className='logo'></img>
                <p>React</p>
            </div>

            <div className='logoContainer'>
                <img src={phpLogo} className='logo'></img>
                <p>PHP</p>
            </div>

            <div className='logoContainer'>
                <img src={symfonyLogo} className='logo'></img>
                <p>Symfony</p>
            </div>

            <div className='logoContainer'>
                <img src={gitLogo} className='logo'></img>
                <p>GIT</p>
            </div>

            <div className='logoContainer'>
                <img src={githubLogo} className='logo'></img>
                <p>GitHub</p>
            </div>

            <div className='logoContainer'>
                <img src={apiLogo} className='logo'></img>
                <p>RESTful API</p>
            </div>   

            <div className='logoContainer'>
                <img src={wordpressLogo} className='logo'></img>
                <p>WordPress</p>
            </div>                  

          </div>      
      </div>

      <div  
        className='ball' 
        style={{ left: ballX, bottom: ballY }} 
        ref={ballRef}
      ></div>

      <div
        className="paddle"
        style={{ left: paddleX }}
        ref={paddleRef}
      />

    </div>
  );
};

export default Game;