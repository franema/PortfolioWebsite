import React, { useState } from 'react'
import Typewriter from "typewriter-effect"
import "../CSS/About.css"

function AboutMe() {

  const [show, setShow] = useState("")

  function showAbout () {
    setShow("show")
  }

  return (
    <div className='home_container'>
      <div className='home_message'>
        <h3 className="title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Francisco Marin")
                .pause()
                .callFunction(showAbout)
                .start()
            }}>
          </Typewriter>
        </h3>
        <p className={`about_txt ${show}`}>Es.... Dinamicooooo y el más hermoso del universo</p>
        <p className={`about_txt ${show}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, autem.</p>
        <p className={`about_txt ${show}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, autem.</p>
        <p className={`about_txt ${show}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, autem.</p>
      </div>
    </div>
  )
}

export default AboutMe