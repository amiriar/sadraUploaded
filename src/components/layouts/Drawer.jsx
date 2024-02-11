import React, { useEffect, useState } from 'react'

// MUI parts
import { Box, Drawer, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios';

// Icons
import { IoIosHome } from "react-icons/io";
import { MdOutlineEvent } from "react-icons/md";
import { MdOutlineClass } from "react-icons/md";
import { GoDiscussionClosed } from "react-icons/go";
import { MdEmojiEvents } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { BiUserPlus } from "react-icons/bi";

const SideBar = ({isOpen , setIsopen}) => {

  const [userId, setUserId] = useState(null);
  useEffect(() => {
      axios.get('https://backend.sadra-edu.com/dashboard/token', {withCredentials: true})
          .then(response => {
          const { id } = response.data;
          setUserId(id);
      })
      .catch(error => {
          console.error('please login first !');
      });
  }, []); 

  return (
    <Drawer anchor='left' open={isOpen} onClose={()=> setIsopen(false)}>
          <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component="div">
              <ul style={{marginTop : 100}} >
                <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/'}><IoIosHome style={{position : "absolute" , right : 10 , top : 7 }} /> صفحه اصلی </Link></li>
                <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/events'}> رویدادها <MdOutlineEvent style={{position : "absolute" , right : 10 , top : 7 }} /></Link></li>
                <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/classes'}>کلاس‌ها <MdOutlineClass style={{position : "absolute" , right : 10 , top : 7 }} /> </Link></li>
                <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/blog'}>بلاگ <GoDiscussionClosed style={{position : "absolute" , right : 32 , top : 7 }} /></Link></li>
                <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/success'}>موفقیت دانشجویان <MdEmojiEvents style={{position : "absolute" , right : -18 , top : 7 , color : "gold" }} /></Link></li>
                <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/employment'}> همکاری با ما <BiUserPlus style={{position : "absolute" , right : 5 , top : 7 }} /> </Link></li>
                <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/contact'}> تماس با ما <IoCall style={{position : "absolute" , right : 10 , top : 7 }} /></Link></li>
                {
                  userId ? 
                    <li style={{margin: 30}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/dashboard'}>داشبورد</Link></li>
                    :
                    <li style={{margin: 30 , position : "relative"}}><Link style={{color:"#212121", fontFamily:'Yekan, sans-serif'}} to={'/auth/login'}><IoMdLogIn style={{position : "absolute" , right : -5 , top : 8}} /> ثبت نام و ورود</Link></li>
                }
              </ul>
            </Typography>
          </Box>
    </Drawer>
  )
}

export default SideBar
