import React from 'react';

// toastify alert

//css
import './AuthRegister.css'
import { Button, TextField } from '@mui/material';
import AuthForm from '../components/modules/AuthModules/AuthForm';

const AuthLogin = () => {

    return (
        <div className='authDiv'>
            <AuthForm/>
        </div>
    );
};

export default AuthLogin;