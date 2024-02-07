import React from 'react'
import './EmploymentDetailCard.css'
const EmploymentDetailCard = ({job , time , place , category}) => {
  return (
    <div className='JobsCard'>
    <div className='topPart'>
      <h2>{job}</h2>
      <span>{category}</span>
    </div>
    <div className='botton'>
      <p> { time } </p> , <p> { place } </p>
    </div>
    </div>
  )
}

export default EmploymentDetailCard
