import React from 'react'
import './EventDetailCard.css'
const EventDetailTeacherCard = ({data}) => {
  return (
    <div className='teachersCard'>
      <img className='cardImage' src={data.profile} alt={data.profile} />
      <h2>{data.name}</h2>
      <p>{data.job}</p>
    </div>
  )
}

export default EventDetailTeacherCard
