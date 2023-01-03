import React, { useEffect, useState } from 'react'
import "../CSS/WelcomePage.css"

function WelcomePage() {

    const [hide, setHide] = useState("")

    useEffect(() => {
        const keyDownHandler = event => {
           
          if (event.key === 'Enter') {
            event.preventDefault();
            hideWelcome()
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);

      function hideWelcome () {
        setHide("hide")
      }

  return (
    <div className={`welcome-container ${hide}`}>
        <div className='welcome'>
            <div className='player'>
                <h3>Player 1</h3>
                <h3>Top Score: 10000</h3>
            </div>
            <div className='game'>
                <h1>Francisco Marin</h1>
                <h1 className='glow' onClick={hideWelcome}>Press Enter To Start</h1>
            </div>
            <div className='credit'>
                <h3>Credits: 2</h3>
            </div>
        </div>
    </div>
  )
}

export default WelcomePage