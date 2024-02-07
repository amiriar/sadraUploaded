import React from 'react'
import './VideoPlayer.css';

const VideoPlayer = (props) => {
  const newSrc = props.video?.split('/').splice(1).join('/');
  const newPoster = props.poster?.split('/').splice(1).join('/');

  return (
    <div className='video'>
      <video
        controls
        poster={`/${newPoster}`}
        src={`/${newSrc}`} 
      />
    </div>
  )
}

export default VideoPlayer
