import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { adminCategories, categories } from '../Categories';
import SignOutButton from '../SignOutButton';
import { IoPerson } from 'react-icons/io5';
import { Box, Drawer } from '@mui/material';

function ContactList() {

    const [userRole, setUserRole] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://sadra-edu.com/api/dashboard/token', { withCredentials: true })
            .then(response => {
                const { role } = response.data;
                setUserRole(role);
    
                return axios.get(`https://sadra-edu.com/api/contact-us/data`);
            })
            .then(response2 => {
                setData(response2.data);
            })
            .catch(firstError => {
                console.error('Error:', firstError.response ? firstError.response.data : firstError.message);
                setUserRole('error');
            });
    }, []);

    const [setting , setSetting] = useState(false)
    const mobileSetting = ()=>{
        setSetting(e => !e);
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
                                userRole === 'teacher' ?
                                categories.map((item) => (
                                    <Link key={item.title} to={item.link}>{item.title}</Link>
                                ))
                                : userRole === 'admin' ?
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
                        <h1 style={{marginTop:"1rem", marginBottom:"2rem"}}>نظرات ارسال شده:</h1>
                        <div className='resume-list'>
                            {data?.map((item) => (
                                <div key={item.id} className='resume-item'>
                                    <div className='resume-details'>
                                        <p>نام: {item.firstName}</p>
                                        <p>نام خانوادگی: {item.lastName}</p>
                                        <p>شماره تلفن همراه: <Link to={`tel:${item.phoneNumber}`}>{item.phoneNumber}</Link></p>
                                        <p>متن نوشته شده: {item.description}</p>
                                        <p>تاریخ ارسال: <span dir='ltr'>{item.date}</span></p>
                                    </div>
                                </div>
                            ))}
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

export default ContactList