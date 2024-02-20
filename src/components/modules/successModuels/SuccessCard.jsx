import { Masonry } from '@mui/lab'
import React from 'react'
import VideoComponent from '../succes-modules/VideoComponent'
import { Avatar, Divider, Paper, Typography } from '@mui/material'

function SuccessCard({ data }) {
    return (
        <div
            className='successMainContent'
            dir='rtl'
            style={{ maxWidth: '1920px', margin: '0 auto',overflow: 'hidden'}}
        >
            <Masonry
                columns={{ sm: 1, md: 1, lg: 2, xl:3 }}
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
                            <Avatar src={item.authorPicture.split("/").splice(1).splice(1).join('/')} alt={item.authorName} style={{ marginLeft: 15, objectFit:'cover',marginTop:5, height:"3.125rem",width:"3.125rem"}} />
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
        </div>
    )
}

export default SuccessCard