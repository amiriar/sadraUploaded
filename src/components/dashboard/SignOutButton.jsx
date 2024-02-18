import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {

    const navigate= useNavigate()

    const signOut = async () => {
        try {
            await axios.get('https://backend.sadra-edu.com/signout', {withCredentials: true})
            .then((res) => navigate(res.data.path))
        } catch (error) {
            console.error('Error signing out:', error);
        }
    }

    return (
        <button style={{cursor:"pointer"}} className='login_Btn_No_Hid_2' onClick={signOut}>
            خروج از حساب کاربری
        </button>
        
    );
};

export default SignOutButton;