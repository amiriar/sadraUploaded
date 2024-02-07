import { Paper, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { IoPlayOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function VideoComponent({ UrlAutorName, videoSrc, videoTitle, videoJob, videoThumbnail }) {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
            console.log(UrlAutorName);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
    };

    const navigate = useNavigate()

    function clickHandlerUrl({ name }) {
        navigate(`/student/${name}`)
    }

    return (
        <div style={{ position: 'relative' }} className='successVideoContainer'>
        <Paper elevation={0} onClick={handleVideoClick}>
            <video
                className='successVideo'
                ref={videoRef}
                width='100%'
                poster={videoThumbnail ? videoThumbnail : ''}
                controls={isPlaying}
                onEnded={handleVideoEnded}
            >
                <source src={videoSrc} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div
                className='successBoxShadow'
                style={{ display: isPlaying ? 'none' : 'block' }}
            ></div>
            <div className='successVideoInformation' style={{ display: isPlaying ? 'none' : 'flex' }}>
                <div className='responsiveVideoTexts' onClick={() => clickHandlerUrl({name: UrlAutorName})}>
                    <Typography fontFamily={'Yekan,sans-serif'} variant='h6'>
                        {videoTitle}
                    </Typography>
                    <Typography fontFamily={'Yekan,sans-serif'} variant='subtitle1'>
                        {videoJob}
                    </Typography>
                </div>
                <div>
                    <IoPlayOutline size={50} />
                </div>
            </div>
        </Paper>
        </div>
    );
}

export default VideoComponent;
