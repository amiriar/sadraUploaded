import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDashboard from './user/UserDashboard';
import TeacherDashbaord from './teacher/TeacherDashboard';
import AdminDashboard from './admin/AdminDashboard';

//css
import './Dashboard.css'

function DashboardHandler() {
    const [userId, setUserId] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userRole, setUserRole] = useState(null);

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

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate("/auth/login")
    }

    return (
        <div dir='rtl' className='panelContainer'>
            {
                userRole === "user" ? 
                    <UserDashboard userId={userId} userEmail={userEmail} userRole={userRole} />
                : userRole === "teacher" ?
                    <TeacherDashbaord userId={userId} userEmail={userEmail} userRole={userRole} />
                : userRole === "admin" ?
                    <AdminDashboard userId={userId} userEmail={userEmail} userRole={userRole} />
                :
                <>
                    <h1>ابتدا باید وارد شوید !</h1>
                    <button className='login_Btn' style={{cursor:"pointer"}} onClick={clickHandler}>ورود</button>
                </>
            }
        </div>
    );
}

export default DashboardHandler;