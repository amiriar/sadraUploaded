import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SignOutButton from '../SignOutButton';
import { Box, Divider } from '@mui/material';
import { userCategories } from '../Categories';
import { IoMdInformationCircle } from "react-icons/io"
import "../Dashboard.css";
import { IoPerson } from "react-icons/io5";
import Drawer from '@mui/material/Drawer';
import DashboardCard from '../DashboardCard';
import Loading from '../../../helper/Loading';

function UserDashboard() {

    const [loading, setLoading] = useState(true)

    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        axios.get('https://sadra-edu.com/api/dashboard/token', {withCredentials: true})
            .then(response => {
            const { role } = response.data;
            setLoading(false)
            setUserRole(role);
        })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
            setUserRole('error');
        });
    }, []); 

    const [setting , setSetting] = useState(false)
    const mobileSetting = ()=>{
        setSetting(e => !e);
        console.log(setting)
    }

    return (
        <>
        {
            loading ? <Loading/> :
            userRole === "user" ?
            <div className='userPanel'>
                <div className='sideBarPanel'>
                    <div>
                        {
                            userCategories.map((item) => (
                                <li><Link key={item.title} to={item.link}>{item.title}</Link></li>
                            ))
                        }
                    </div>
                
                    <div>
                        <SignOutButton/>
                    </div>
                </div>

                {/* Responsive */}

                    <div className='MobileDrawerDash'>
                        <button onClick={mobileSetting} className='drawerButton'> <IoPerson style={{width : 20 , height : 20}} /></button>
                    </div>

                    <Drawer anchor='left' open={setting} onClose={()=> setSetting(false)}>
                        <Box>
                            <ul className='dashboardList'>
                            {
                                userCategories.map((item) => (
                                    <li><Link key={item.title} to={item.link}>{item.title}</Link></li>
                                ))
                            }
                            </ul>
                        </Box>
                    </Drawer>

                    {/* Responsive */}

                <div className='mainPanel'>
                    <div className="cards-container">
                        <DashboardCard icon={<IoMdInformationCircle  size={40} />} title={'تکمیل اطلاعات'} link={'/dashboard/infos'} />
                    </div>
                </div>
            </div>
            :
            <h1>ابتدا از حساب کاربری خود خارج شوید و دوباره لاگین کنید</h1>
        }
        </>
    );
}

export default UserDashboard