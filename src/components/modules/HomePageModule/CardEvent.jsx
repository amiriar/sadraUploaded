import React from 'react'
import './CardPopTu.css'
// Icons
import { CiStar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { MdPlace } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
// Styles 
import './CardEvent.css';
const CardEvent = ({image , title , price , teachers , place , date }) => {
  return (
    <div className='Card' >
      <div className='image_con'>
        <img src={image}  />
      </div>

      <div className='Card_Data'>
          <h1>{title}</h1>

          <div className='more_detail'>
         

            <span id='prices'>
            <h2>{price}</h2>
            {price === "رایگان" ? null : <p id='toman'>هزارتومان</p>}
            </span>

            <p>{teachers}</p>
          </div>


          <div className='class_info'>
              <div className='time'>
              <p>{place}</p>
              <MdPlace  className='iconss' />
              </div>

              <div className='lessons'>
              <p>{date }</p>
              <CiCalendarDate className='iconss' />
              </div>

           

              
          </div>


      </div>
    </div>
  )
}

export default CardEvent
