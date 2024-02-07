import React from 'react'
import './CardPopTu.css'
// Icons
import { CiStar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { MdOutlineStackedBarChart } from "react-icons/md";

const CardPopTu = ({title , teacher , rates , price , time , lessons , level , thumbnail }) => {
  return (
    <div className='Card' >
      <div className='image_con'>
        <img src={thumbnail}  />
      </div>

      <div className='Card_Data'>
          <h1>{title}</h1>

          <div className='more_detail'>
            <p>{teacher}</p>
            <p><CiStar color='gold' style={{fontWeight : 900}} />({rates.rateNum}){rates.AVGrate}</p>

            <span id='prices'>
            <h2>{price}</h2>
            {price === "رایگان" ? null : <p id='toman'>هزارتومان</p>}
            </span>

          </div>


          <div className='class_info'>
              <div className='time'>
              <CiClock2 className='iconss' />
              <p>{time}دقیقه</p>
              </div>

              <div className='lessons'>
              <GoStack className='iconss' />
              <p>{lessons } درس</p>
              </div>

              <div className='level'>
              <MdOutlineStackedBarChart className='iconss' />
              <p>سطح { level }</p>
              </div>

              
          </div>


      </div>
    </div>
  )
}

export default CardPopTu
