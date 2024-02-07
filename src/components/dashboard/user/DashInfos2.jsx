import { Divider } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function DashInfo2() {
    const [users,setUsers] = useState([])

    useEffect(() => {
        axios.get('https://backend.sadra-edu.com/users/data').then(response => {setUsers(response.data[0])})
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
            setUserRole('error');
        });
    }, []); 


    console.log(users);
    return (
        <div dir='rtl' className='panelContainer' style={{padding:"1rem"}}>
            {
                users ? 
                users.map((item) => (
                    <>
                        <h1>نام و نام خانوادگی : {item.name} {item.lastName}</h1>
                        <h1>نقش حساب کاربری : {item.role}</h1>
                        <h2>تاریخ آخرین ورود : {item.lastDateIn}</h2>
                        <h2> پست الکترونیکی : {item.email}</h2>
                        <h2> رمز عبور : {item.password}</h2>
                        <h2> تاریخ تولد : {item.birthDate}</h2>
                        <h2> سطح اول ثبت اطلاعات : {item.level1 === 'true' ? '✅' : '❎'}</h2>
                        <h2> سطح دوم ثبت اطلاعات : {item.level2 === 'true' ? '✅' : '❎'}</h2>
                        <Divider/>
                    </>
                ))
                :
                <h1>Loading ...</h1>
            }
        </div>
    );
}

export default DashInfo2;