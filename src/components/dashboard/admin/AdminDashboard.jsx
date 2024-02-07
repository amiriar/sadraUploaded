import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { adminCategories } from '../Categories';
import SignOutButton from '../SignOutButton';
import { Divider } from '@mui/material';
import DashboardCard from '../DashboardCard';

//icons
import { SiGoogleclassroom } from 'react-icons/si';
import { FaMicroblog } from 'react-icons/fa';
import { MdEvent } from 'react-icons/md';
import { FaUsers } from "react-icons/fa";
import { FaRegSmileBeam } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";

const AdminDashboard = ({ userId, userEmail, userRole }) => {

    return (
        <>
        {
            userRole === 'admin' ?
            <div dir='rtl' className='panelContainer'>
                <div className='userPanel' dir='rtl'> 
                    <div className='sideBarPanel'>
                        <div>
                            {
                                adminCategories.map((item) => (
                                    <Link key={item.title} to={item.link}>{item.title}</Link>
                                ))
                            }
                        </div>
                            <div>
                                <SignOutButton/>
                            </div>
                    </div>
                    <div className='mainPanel'>
                        <div style={{textAlign:"center", display:"flex", flexWrap:"wrap", gap:"10px", justifyContent:"space-around"}}>
                            <DashboardCard icon={<FaMicroblog size={40} />} title={'بلاگ ها'} link={'/dashboard/blogs'} />
                            <DashboardCard icon={<MdEvent size={40} />} title={'رویداد ها'} link={'/dashboard/events'} />
                            <DashboardCard icon={<SiGoogleclassroom size={40} />} title={'کلاس ها'} link={'/dashboard/classes'} />
                            <DashboardCard icon={<FaUsers size={40} />} title={'کاربر ها'} link={'/dashboard/users'} />
                            <DashboardCard icon={<AiFillDatabase size={40} />} title={'موقعیت های شغلی'} link={'/dashboard/employment'} />
                            <DashboardCard icon={<FaRegSmileBeam size={40}/>} title={'موفقیت دانشجویان'} link={'/dashboard/student-success'} />
                        </div>
                    </div>
                </div>
            </div>
            :
            <h3>یک بار از حساب کاربری خود خارج شوید و دوباره وارد شوید.</h3>
        }
        </>
    );
};

export default AdminDashboard;