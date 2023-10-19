import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these apps</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src='images/notes.png'
                text='A simple list app to keep track and cross off task.'
                label='Adventure'
                path='/todo'/>
                <CardItem 
                src='images/timer.png'
                text='A time tracking app to let you know how long you work.'
                label='Vacation'
                path='/timer'/>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
