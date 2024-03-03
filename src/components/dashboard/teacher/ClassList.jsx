import React, { useEffect, useState } from 'react'
import NewClass from './NewClass'
import { Divider } from '@mui/material'
import { adminCategories, categories } from '../Categories'
import { Link } from 'react-router-dom'
import SignOutButton from '../SignOutButton'
import axios from 'axios'
import ClassCard from '../../modules/classes/ClassCard'

import Drawer from '@mui/material/Drawer';
import { IoPerson } from "react-icons/io5";
import Box from '@mui/material/Box';



function ClassList() {
    const [userRole, setUserRole] = useState(null);
    const [userId, setUserId] = useState(null);
    const [teacherBlog, setTeacherBlog] = useState('');
    
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);

    const [targetData, setTargetData] = useState([]);

    const [setting , setSetting] = useState(false)
    const mobileSetting = ()=>{
        setSetting(e => !e);
    }

    useEffect(() => {
        axios.get('https://sadra-edu.com/api/dashboard/token', { withCredentials: true })
            .then(response => {
                const { role, id } = response.data;
                setUserRole(role);
                setUserId(id);
    
                return axios.get(`https://sadra-edu.com/api/fullDetail/${id}`);
            })
            .then(response2 => {
                setUsers(response2.data);
                // Fetch data from the third endpoint after the second one is resolved
                return axios.get('https://sadra-edu.com/api/classes/data');
            })
            .then(response3 => {
                setData(response3.data);
            })
            .catch(firstError => {
                console.error('Error:', firstError.response ? firstError.response.data : firstError.message);
                setUserRole('error');
            });
    }, []);
    
    
    return (
        <>
        {
        (userRole === 'teacher' ||  userRole === 'admin') ?
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
                        <div className='CardBoxContainer'>
                            {
                                data.slice(0 , 7).map((item)=> (
                                    <Link key={item.id} to={`/classes/${item.id}`}><ClassCard key={item.id} {...item} /></Link>
                                ))
                            }
                        </div>
                        <Divider/>
                        <br />
                        <div>
                            <NewClass/>
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
                            categories.map((item) => (
                                <li key={item.title}><Link to={item.link}>{item.title}</Link></li>
                            ))
                        }
                        </ul>
                    </Box>
                </Drawer>

                {/* Responsive */}
        </>
    )
}

export default ClassList