import React from 'react'
import {Button} from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import './Hero.css';
import '../App.css';
function Hero() {
  return (
    <div className='hero-container'>
      <video src='/videos/hero_video.mp4' autoPlay loop muted />
      <h1>WELCOME TO MY WORLD</h1>  
      <p>So Much to Discover</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>EXPLORE</Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>WATCH VIDEO <FontAwesomeIcon icon={faPlayCircle}/></Button>
      </div>
    </div>
  )
}

export default Hero
