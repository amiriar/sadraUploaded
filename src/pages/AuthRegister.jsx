import React from 'react';

//css
import './AuthRegister.css'
import { Button, TextField } from '@mui/material';
import AuthForm from '../components/modules/AuthModules/AuthForm';

const AuthRegister = () => {

    const handleRegister = () => {
        // Add your register logic here
        console.log('Register button clicked');
    };

    
    return (
        <div className='authDiv'>
            <AuthForm isRegister />
        </div>
    );
};

export default AuthRegister;