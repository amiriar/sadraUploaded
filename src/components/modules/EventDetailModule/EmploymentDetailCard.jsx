import React from 'react'
import './EmploymentDetailCard.css'
import { useNavigate } from 'react-router-dom'
const EmploymentDetailCard = ({job , time , place , category, id}) => {
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate(`/employmentForm/${id}`)
  }
  return (
    <div className='JobsCard' style={{cursor:"pointer"}} onClick={clickHandler}>
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
