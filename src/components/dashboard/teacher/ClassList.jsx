import React, { useEffect, useState } from 'react'
import NewClass from './NewClass'
import { Divider } from '@mui/material'
import { adminCategories, categories } from '../Categories'
import { Link } from 'react-router-dom'
import SignOutButton from '../SignOutButton'
import axios from 'axios'
import ClassCard from '../../modules/classes/ClassCard'

function ClassList() {
    const [userRole, setUserRole] = useState(null);
    const [userId, setUserId] = useState(null);
    const [teacherBlog, setTeacherBlog] = useState('');
    
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);

    const [targetData, setTargetData] = useState([]);

    useEffect(() => {
        axios.get('https://backend.sadra-edu.com/dashboard/token', { withCredentials: true })
            .then(response => {
                const { role, id } = response.data;
                setUserRole(role);
                setUserId(id);
    
                return axios.get(`https://backend.sadra-edu.com/fullDetail/${id}`);
            })
            .then(response2 => {
                setUsers(response2.data);
                console.log(response2.data);
    
                // Fetch data from the third endpoint after the second one is resolved
                return axios.get('https://backend.sadra-edu.com/classes/data');
            })
            .then(response3 => {
                setData(response3.data);
                console.log(response3.data);
    
                // Add more requests as needed
    
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
        </>
    )
}

export default ClassList