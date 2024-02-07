import React, { useEffect, useState } from 'react'
import { Masonry } from '@mui/lab'
import { Avatar, Divider, Grid, Paper, Typography } from '@mui/material';

//css
import './StudentSuccess.css'

import VideoComponent from '../components/modules/succes-modules/VideoComponent';
import { Link, useNavigate } from 'react-router-dom';
import SuccessCard from '../components/modules/successModuels/SuccessCard';

function StudentSuccess() {

    const [data,setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://backend.sadra-edu.com/stusuccess/data');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);

    const navigate = useNavigate()

    function clickHandler({ name }) {
        navigate(`/student/${name}`)
    }

    return (
        <div>
            <div className='successHero' dir='rtl'>
                <div className='successHeroImage'></div>
                <div className='successHeroContent'>
                    <h1 className='successHeroContentHeader'>داستان موفقیت همراهان صدرا</h1>
                    <p className='successHeroContentText'>
                        برای شنیدن داستان موفقیت دانش آموزان و استاید ما فقط از ما نپرسید، خود
                        این همراهان صدرا هستن که برای شما داستان‌های خودشون رو روایت می‌کنن.
                    </p>
                </div>
                    <div className='successHeroImageSmall'></div>
            </div>
            <div className='successMain'>
                <SuccessCard data={data && data} />

                {/* <div
                    className='successMainContent'
                    dir='rtl'
                    style={{ maxWidth: '1920px', margin: '0 auto',overflow: 'hidden'}}
                >
                <Masonry
                    columns={{ sm: 1, md: 2, lg: 2, xl:3 }}
                    gutter={2}
                    style={{ width: '100%' }}
                >
                    {data.map((item) => (
                    <div key={item.id}>
                        {item.videoSrc ? (
                            <VideoComponent UrlAutorName={item.authorName} videoSrc={item.videoSrc.split("/").splice(1).join('/')} videoTitle={item.videoTitle} videoJob={item.videoJob} videoThumbnail={item.videoThumbnail} />
                        ) : (
                        <Paper
                            spacing={2}
                            textalign={'center'}
                            sx={{
                            boxSizing: 'border-box',
                            padding: '1.5rem 1.25rem',
                            textJustify: 'inter-word',
                            textalign: 'justify',
                            boxShadow:
                                '0px 4px 8px 0px rgba(0, 0, 0, 0.10)',
                            borderRadius: '0.625rem',
                            }}
                        >
                            <div style={{display:"flex", justifyContent:"right", marginBottom:"1rem",marginTop:"1rem", boxSizing:'border-box', cursor:"pointer"}} onClick={() => clickHandler({name: item.authorName})}>
                                <Avatar src={item.authorPicture.split("/").splice(1).join('/')} alt={item.authorName} style={{ marginLeft: 15, objectFit:'cover',marginTop:5, height:"3.125rem",width:"3.125rem"}} />
                                <div style={{display:'flex', flexDirection:"column"}}>
                                    <Typography fontFamily={'Yekan,sans-serif'} variant="h6">{item.authorName}</Typography>
                                    <Typography fontFamily={'Yekan,sans-serif'} variant="subtitle1">{item.authorJob}</Typography>
                                </div>
                            </div>
                            <div style={{display:'flex', justifyContent:"center"}}>
                                {
                                    item.additionalPicture ? 
                                    <img className='successMainImage' src={item.additionalPicture.split("/").splice(1).join('/')} alt={item.additionalPicture} style={{borderRadius:"0.5rem",height:"500px", width:"95%", objectFit:"cover", objectPosition:"100% 50%", marginBottom:"1rem"}} />
                                    : null
                                }
                            </div>
                            <Typography sx={{fontSize:"1rem", lineHeight:"1.4rem", marginBottom:"0.5rem"}} className='successPostDesc' variant="body2" fontFamily={'Yekan,sans-serif'}>{item.description}</Typography>
                            <Divider/>
                            <Typography sx={{fontSize:"1rem", textalign:"left",marginTop:"0.75rem"}} className='successPostDesc' variant="body2" fontFamily={'Yekan,sans-serif'}>{item.date}</Typography>
                        </Paper>
                        )}
                    </div>
                    ))}
                </Masonry>
                </div> */}
            </div>
        </div>
    )
}

export default StudentSuccess