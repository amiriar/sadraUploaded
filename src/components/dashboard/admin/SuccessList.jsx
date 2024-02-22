import React, { useEffect, useState } from 'react'
import { adminCategories, categories } from '../Categories'
import { Link, useNavigate } from 'react-router-dom'
import SignOutButton from '../SignOutButton'
import { Avatar, Divider, Paper, Typography } from '@mui/material'
import NewSuccess from './NewSuccess'
import axios from 'axios'
import { Masonry } from '@mui/lab'
import VideoComponent from '../../modules/succes-modules/VideoComponent'
import SuccessCard from '../../modules/successModuels/SuccessCard'

import { IoPerson } from "react-icons/io5";
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';

function SuccessList() {

    const [userRole, setUserRole] = useState(null);
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://backend.sadra-edu.com/dashboard/token', { withCredentials: true })
            .then(response => {
                const { role, id } = response.data;
                setUserRole(role);
                setUserId(id);
    
                return axios.get(`https://backend.sadra-edu.com/fullDetail/${id}`);
            })
            .then(response2 => {
                setUser(response2.data[0]);
    
                return axios.get('https://backend.sadra-edu.com/users/data');
            })
            .then(response3 => {
                setUsers(response3.data[0]);

                return axios.get('https://backend.sadra-edu.com/stusuccess/data');
            }).then(response4 => {
                setData(response4.data)
            })
            .catch(firstError => {
                console.error('Error:', firstError.response ? firstError.response.data : firstError.message);
                setUserRole('error');
            });
    }, []);

    const navigate = useNavigate()
    function clickHandler({ name }) {
        navigate(`/student/${name}`)
    }

    const [setting , setSetting] = useState(false)
    const mobileSetting = ()=>{
        setSetting(e => !e);
        console.log(setting)
      }

    return (
        <>
        {
            userRole === 'admin' ?
            <div dir='rtl' className='panelContainer'>
                <div className='userPanel' dir='rtl'> 
                    <div className='sideBarPanel'>
                        <div>
                            {
                                userRole === 'admin' ?
                                adminCategories.map((item) => (
                                    <Link key={item.title} to={item.link}>{item.title}</Link>
                                ))
                                :
                                <h3>ابتدا از حساب کاربری خود خارج شده و دوباره وارد شوید.</h3>
                            }
                        </div>
                            <div>
                                <SignOutButton/>
                            </div>
                    </div>
                    <div className='mainPanel'>
                        <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                            <Masonry
                                columns={{ sm: 1, md: 1, lg: 2, xl:3 }}
                                gutter={2}
                                style={{ width: '100%' }}
                            >
                                {data?.map((item) => (
                                <div key={item.id}>
                                    {item?.videoSrc ? (
                                        <VideoComponent UrlAutorName={item.authorName} videoSrc={`/${item.videoSrc.split("/").splice(1).splice(1).join('/')}`} videoTitle={item.videoTitle} videoJob={item.videoJob} videoThumbnail={`/${item.videoThumbnail.split("/").splice(1).join('/')}`} />
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
                                            <Avatar src={`/${item?.authorPicture?.split("/").splice(1).splice(1).join('/')}`} alt={item.authorName} style={{ marginLeft: 15, objectFit:'cover',marginTop:5, height:"3.125rem",width:"3.125rem"}} />
                                            <div style={{display:'flex', flexDirection:"column"}}>
                                                <Typography fontFamily={'Yekan,sans-serif'} variant="h6">{item.authorName}</Typography>
                                                <Typography fontFamily={'Yekan,sans-serif'} variant="subtitle1">{item.authorJob}</Typography>
                                            </div>
                                        </div>
                                        <div style={{display:'flex', justifyContent:"center"}}>
                                            {
                                                item.additionalPicture ? 
                                                <img className='successMainImage' src={`/${item?.additionalPicture?.split("/").splice(1).splice(1).join('/')}`} alt={item.additionalPicture.split("/").splice(1).join('/')} style={{borderRadius:"0.5rem",height:"500px", width:"95%", objectFit:"cover", objectPosition:"100% 50%", marginBottom:"1rem"}} />
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

                        {/* <SuccessCard data={data && data} /> */}
                        <br />
                        <Divider/>
                        <br />
                        <div>
                            <h3>برای ثبت موفقیت دانشجویان این فرم را پر کنید.</h3>
                            <br />
                            <div>
                                <NewSuccess/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <h3>یک بار از حساب کاربری خود خارج شوید و دوباره وارد شوید.</h3>
        }
        {/* Responsive */}

        <div className='MobileDrawerDash'>
                    <button onClick={mobileSetting} className='drawerButton'> <IoPerson style={{width : 20 , height : 20}} /></button>
                </div>

                <Drawer anchor='left' open={setting} onClose={()=> setSetting(false)}>
                    <Box>
                        <ul className='dashboardList'>
                        {
                            adminCategories.map((item) => (
                                <li><Link key={item.title} to={item.link}>{item.title}</Link></li>
                            ))
                        }
                        </ul>
                    </Box>
                </Drawer>

        {/* Responsive */}
        </>
    )
}

export default SuccessList