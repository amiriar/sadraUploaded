import React, { useEffect, useState } from 'react'
import { adminCategories, categories } from '../Categories'
import { Link } from 'react-router-dom'
import axios from 'axios';
import SignOutButton from '../SignOutButton';
import NewEmployment from './NewEmployment';
import EmploymentDetailCard from '../../modules/EventDetailModule/EmploymentDetailCard';
import { Divider } from '@mui/material';

function EmploymentList() {

    const [userRole, setUserRole] = useState(null);
    const [userId, setUserId] = useState(null);
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
                setUsers(response2.data[0]);
    
                return axios.get('https://backend.sadra-edu.com/users/data');
            })
            .then(response3 => {
                setData(response3.data[0]);

                return axios.get('https://backend.sadra-edu.com/employment/data');
            }).then(response4 => {
                setData(response4.data)
            })
            .catch(firstError => {
                console.error('Error:', firstError.response ? firstError.response.data : firstError.message);
                setUserRole('error');
            });
    }, []);

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
                        <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                            {
                                data?.map((emp,index) => (
                                    <EmploymentDetailCard key={index} job={emp.jobTitle} time={emp.jobTime} place={emp.jobPlace} category={emp.jobCategory} />
                                ))
                            }
                        </div>
                        <br />
                        <Divider/>
                        <br />
                        <div>
                            <h3>برای ثبت فرصت کاری جدید این فرم را پر کنید.</h3>
                            <br />
                            <div>
                                <NewEmployment/>
                            </div>
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

export default EmploymentList