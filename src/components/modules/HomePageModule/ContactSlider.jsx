import React from 'react'
import { contacts } from './Contact'
import './ContactStyle.css';

const ContactSlider = ({index}) => {
  return (
    <div className='contact_container'>
        <p>{contacts[index].comment}</p>
        <img src={contacts[index].profile} alt='image' />
        <h2>{contacts[index].name}</h2>
        <h2>{contacts[index].job}</h2>

    </div>
  )
}

export default ContactSlider
