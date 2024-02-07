import React from 'react'

// Icon
import { IoMdQuote } from "react-icons/io";

import './CommentCard.css'
import image from '/public/assets/prof.jpg'
const CommentCard = ({id , name , job , comment , image}) => {
  return (
    <div className='comment_card'>

      <div className='header'>
        <IoMdQuote style={{color : 'black' , width : 25 , fontSize : 50 }} />
        <div id='header-child'>

        <span>
        <p>{name}</p>
        <p>{job}</p>
        </span>

        <img src={image} alt={image} />
        </div>
      </div>

      <div className='footer' dir='rtl'>
        <p>{comment}</p>
      </div>
    </div>
  )
}

export default CommentCard
