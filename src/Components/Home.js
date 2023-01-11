import React from 'react'
import WelcomePage from './WelcomePage'


function Home({showWelcome, changeShowWelcome}) {

 

  return (
    <div>
      {showWelcome ? (
        <WelcomePage changeShowWelcome={changeShowWelcome}></WelcomePage>
      ) : (
        <p>algo</p>
      )}
    </div>
  )
}

export default Home