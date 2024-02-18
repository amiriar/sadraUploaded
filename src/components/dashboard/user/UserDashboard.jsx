import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SignOutButton from '../SignOutButton';
import { Box, Divider } from '@mui/material';
import { userCategories } from '../Categories';
import { CiSettings } from 'react-icons/ci';
import "../Dashboard.css";
import { IoPerson } from "react-icons/io5";
import Drawer from '@mui/material/Drawer';

function UserDashboard() {

    const navigate = useNavigate()

    const linkHandler = () => {
        navigate('/dashboard/infos')
    }

    const [userId, setUserId] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEducation, setUserEducation] = useState('');
    const [userIsStudent, setUserIsStudent] = useState(false);

    useEffect(() => {
        axios.get('https://backend.sadra-edu.com/dashboard/token', {withCredentials: true})
            .then(response => {
            const { email, role, id } = response.data;
            setUserId(id);
            setUserEmail(email);
            setUserRole(role);
        })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
            setUserRole('error');
        });
    }, []); 

    useEffect(() => {
        userId && axios.get(`https://backend.sadra-edu.com/users/data/${userId}`)
            .then(response => {
                setUserName(response.data[0][0].name);
                setUserLastName(response.data[0][0].lastName);
                setUserAge(response.data[0][0].age)
                setUserPhone(response.data[0][0].phoneNumber)
                setUserEducation(response.data[0][0].education)
                setUserIsStudent(response.data[0][0].isStudent)
            })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
            setUserRole('error');
        });
    }, [userId])

    const [setting , setSetting] = useState(false)
    const mobileSetting = ()=>{
        setSetting(e => !e);
        console.log(setting)
      }

    return (
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
                <h1>با مراجعه به صفحه ی <span className='linkPanel' onClick={linkHandler}>اطلاعات</span> مشخصات خود را تکمیل کنید .</h1>
                <br />
                <Divider/>
                <br />
                <h2>اطلاعات شما :</h2>
                <br />
                <h3>
                    نام: <span style={{fontWeight:"300"}}>{userName}</span>
                </h3>
                <h3>
                    نام خانوادگی: <span style={{fontWeight:"300"}}>{userLastName}</span>
                </h3>
                <h3> 
                    سن: <span style={{fontWeight:"300"}}>{userAge}</span>
                </h3>
                <h3> 
                    شماره تماس: <span style={{fontWeight:"300"}}>{userPhone}</span>
                </h3>
                <h3> 
                    مقطع تحصیلی: <span style={{fontWeight:"300"}}>{userEducation}</span>
                </h3>
                <h3> 
                    دانشجو: <span style={{fontWeight:"300"}}>{userIsStudent === 1 ? '✅' : '❎' }</span>
                </h3>
            </div>
        </div>
    );
}

export default UserDashboard