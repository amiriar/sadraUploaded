import React from 'react'
import './JobTeamCard.css'
const JobTeamCard = ({name , job , account , profile}) => {
  return (
    <div className='detailCard'>
      <img src={profile} />
      <h2>{name}</h2>
      <p>{job}</p>
      <p id="account">{account}</p>
    </div>
  )
}

export default JobTeamCard
