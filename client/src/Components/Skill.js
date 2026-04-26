import React, { useEffect, useRef } from 'react';

const Skill =(props)=>{

    const value = props.value;
    const graphRef = useRef(null);

    useEffect(()=>{

        const animeGraph = [
            { width:"20%" },
            { width: value },
        ];
    
        const animeParams = {
            duration: 2000,
            iterations: 1, 
            fill: 'forwards', 
            easing:'ease'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
        
                    if(entry.target.classList.contains('anime')){
                                        
                        entry.target.animate(animeGraph,animeParams);
                    }
                }
            });
        });

        observer.observe(graphRef.current);

        return () => {
          observer.disconnect();
        };
      
    },[value]);

    return(
        <div className='skill'>
                    <div className='skillTitle'>
                        <h3>{props.title}</h3>
                    </div>
                    <div className='graph'>
                        <div className='graphValue anime' ref={graphRef}></div>
                    </div>
        </div>
    )
}

export default Skill;