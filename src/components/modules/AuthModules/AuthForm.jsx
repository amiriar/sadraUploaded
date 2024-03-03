// AuthForm.jsx
import React, { useEffect, useState } from 'react';
import {
    TextField,
    Button,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    OutlinedInput,
    ThemeProvider,
    createTheme,
    Input,
    Checkbox,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import { showToast } from './Toastify';
import { ToastContainer } from 'react-toastify';
import bcrypt from 'bcryptjs';
import axios from 'axios';

import './AuthStyles.css'


const AuthForm = ({ isRegister }) => {
    const [userId, setUserId] = useState(null);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        axios.get('https://sadra-edu.com/api/dashboard/token', {withCredentials: true})
            .then(response => {
            const { id } = response.data;
            setUserId(id);
        })
        .catch(error => {
            console.error('please login first !');
            setUserRole('error');
        });
    }, []); 

    const navigate = useNavigate()

    const [values, setValues] = useState({
        userName: '',
        email: '',
        userEmail: '',
        password: '',
        showPassword: false,
        userIsAccepted: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [isREGUsernameOK, setIsREGUsernameOK] = useState(true);
    const [isREGEmailOK, setIsREGEmailOK] = useState(true);
    const [isREGPassOK, setIsREGPassOK] = useState(true);
    const [isLOGEmailOK, setIsLOGEmailOK] = useState(true);
    const [isPassOK, setIsPassOK] = useState(true);


    const handleSubmit = (event) => {
        event.preventDefault();

        if(isRegister){
            const Register = async ({ values }) => {
                

                if(values.userName.length < 3 || values.userName === ''){
                    showToast("نام کاربری نمیتواند کمتر از 3 حرف باشد!","error")
                    setIsREGUsernameOK(false)
                }
            
                const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            
                if (!(emailRegex.test(values.email))) {
                    setIsREGEmailOK(false);
                    showToast('لطفا از درست بودن ایمیل خود اطمینان حاصل کنید.', 'error');
                } else {
                    setIsREGEmailOK(true);
                }
                if (values.password.length > 32 || values.password.length === 0 || values.password.length < 8) {
                    setIsREGPassOK(false);
                    showToast('رمز عبور نمیتواند خالی، بیشتر از 32 نویسه و یا کمتر از 8 نویسه باشد.', 'error');
                } else {
                    setIsREGPassOK(true);
                }
            
                if (isREGEmailOK === true && isREGPassOK === true && isREGUsernameOK === true) {
                    try {
                        const response = await axios.post('https://sadra-edu.com/api/register', {
                            userName: values.userName,
                            email: values.email,
                            password: values.password,
                        });
            
                        const result = response.data;
            
                        if (result.statusCode === 200) {
                            navigate('/auth/login');
                        }
            
                        if (result.error) {
                            showToast(`${result.error}`, 'error');
                        }
                    } catch (error) {
                        console.error('Error during registration:', error);
                    }
                } else {
                    console.log('didnt');
                }
            };
            
            Register({ values })

        }else{
            const Login = async ({ values }) => {
                
            
                const usermail = /^(?:[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$|^[\w.-]{3,16}$/;
            
                if (!(usermail.test(values.userEmail))) {
                    setIsLOGEmailOK(false);
                    showToast('لطفا از درست بودن ایمیل خود اطمینان حاصل کنید.', 'error');
                } else {
                    setIsLOGEmailOK(true);
                }
                if (values.password.length > 32 || values.password.length === 0 || values.password.length < 8) {
                    setIsPassOK(false);
                    showToast('رمز عبور نمیتواند خالی، بیشتر از 32 نویسه و یا کمتر از 8 نویسه باشد.', 'error');
                } else {
                    setIsPassOK(true);
                }
            
                if (isLOGEmailOK === true && isPassOK === true) {
                    try {
                        let response = await axios({
                            method: 'post',
                            url: 'https://sadra-edu.com/api/login', 
                            data: {
                                emailOrUsername : values.userEmail,
                                password: values.password,
                            },
                            withCredentials: true
                        })
            
                        const result = response.data;
            
                        if (result.statusCode === 200) {
                            navigate("/dashboard")
                        }
            
                        if (result.error) {
                            showToast(`${result.error}`, 'error');
                        }
                    } catch (error) {
                        console.error('Error during login:', error);
                    }
                } else {
                    console.log('didnt');
                }
            };
            Login({ values })
        }
    };

    const dashboardLink = () => {
        navigate("/dashboard")
    }

    const theme = createTheme({
        direction: 'rtl',
    });

    const [userIsAccepted, setUserIsAccepted] = useState(null);

    const handleCheckboxChange = (e) => {
        // Convert the checkbox value to 1 (true) or 0 (false)
        setUserIsAccepted(e.target.checked ? 1 : 0);
    };

    return (
        <>
        {
            !userId ? (
                <>
                <div className='authContainer' dir='rtl'>
                    <form onSubmit={handleSubmit} className='authFrom'>
                        <ThemeProvider theme={theme}>
                            <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                                {
                                    isRegister === true ? 
                                    <>
                                        <h1 style={{textAlign:"center"}}>ایجاد حساب کاربری</h1>
                                        <FormControl variant="outlined" sx={{ marginTop: "1rem", '&:focus-within': { borderColor: 'green !important' } }}>
                                            <InputLabel htmlFor="username" sx={{ left: 'auto', right: 40, fontFamily: "Yekan, sans-serif" }}>
                                                نام کاربری
                                            </InputLabel>
                                            <Input
                                                id="username"
                                                label="نام کاربری"
                                                variant="outlined"
                                                sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                                value={values.userName}
                                                onChange={handleChange('userName')}
                                                required
                                                autoComplete='true'
                                            />
                                        </FormControl>
            
                                        <FormControl variant="outlined" sx={{ marginTop: "1rem", '&:focus-within': { borderColor: 'green !important' } }}>
                                            <InputLabel htmlFor="email" sx={{ left: 'auto', right: 40, fontFamily: "Yekan, sans-serif" }}>
                                                ایمیل
                                            </InputLabel>
                                            <Input
                                                id="email"
                                                label="ایمیل"
                                                variant="outlined"
                                                sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                                value={values.email}
                                                onChange={handleChange('email')}
                                                required
                                                autoComplete='true'
                                            />
                                        </FormControl>
                                    </>
                                    :
                                    <>
                                        <h1 style={{textAlign:"center"}}>ورود به حساب کاربری</h1>
                                        <FormControl variant="outlined" sx={{ marginTop: "1rem", '&:focus-within': { borderColor: 'green !important' } }}>
                                            <InputLabel htmlFor="userMail" sx={{ left: 'auto', right: 40, fontFamily: "Yekan, sans-serif" }}>
                                                نام کاربری یا ایمیل
                                            </InputLabel>
                                            <Input
                                                id="userMail"
                                                label="نام کاربری یا ایمیل"
                                                variant="outlined"
                                                sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                                value={values.userEmail}
                                                onChange={handleChange('userEmail')}
                                                required
                                                autoComplete='true'
                                            />
                                        </FormControl>
                                    </>
                                }


                                <FormControl variant="outlined" sx={{ marginTop: "1rem", '&:focus-within': { borderColor: 'green !important' } }}>
                                    <InputLabel htmlFor="password" sx={{ left: 'auto', right: 40, fontFamily: "Yekan, sans-serif" }}>
                                        رمز عبور
                                    </InputLabel>
                                    <Input
                                        id="password"
                                        label="رمز عبور"
                                        type={values.showPassword ? 'text' : 'password'}
                                        variant="outlined"
                                        sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        required
                                        autoComplete='true'
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        inputProps={{ maxLength: 32 }}
                                    />
                                </FormControl>

                                {
                                    isRegister === true ? 
                                    <>
                                        <div className='AuthBtns' style={{display:"flex", justifyContent:"space-between"}}>
                                            <FormControl sx={{ marginTop: '1rem', display: 'inline', alignItems: 'center' }}>
                                                <Checkbox
                                                    checked={userIsAccepted === 1 ? true : false}
                                                    onChange={handleCheckboxChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                    sx={{ color: '#4ca773' }}
                                                    id='is-student'
                                                    required
                                                />
                                                <label htmlFor="is-student" style={{ cursor:"pointer"}}>
                                                    قوانین و مقررات سایت را میپذیرم
                                                </label>
                                            </FormControl>
                                            <button className='login_Btn_No_Hid' style={{cursor:"pointer"}}>
                                                ایجاد
                                            </button>
                                        </div>
                                        <p style={{marginTop:"2rem",textAlign:"center"}}>از قبل حساب کاربری دارید؟ <Link to={'/auth/login'} style={{fontWeight:"900"}}>ورود</Link></p>
                                    </>
                                    :
                                    <>
                                        <div className='AuthBtns' style={{display:"flex", justifyContent:"space-between"}}>
                                            {/* <FormControl sx={{ marginTop: '1rem', display: 'inline', alignItems: 'center' }}>
                                                <Checkbox
                                                    checked={userIsAccepted === 1 ? true : false}
                                                    onChange={handleCheckboxChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                    sx={{ color: '#4ca773' }}
                                                    id='is-student'
                                                    required
                                                />
                                                <label htmlFor="is-student" style={{ cursor:"pointer"}}>
                                                    مرا به خاطر بسپار
                                                </label>
                                            </FormControl> */}
                                            <button className='login_Btn_No_Hid' style={{cursor:"pointer"}}>
                                                ورود
                                            </button>
                                        </div>
                                        <p style={{marginTop:"2rem",textAlign:"center"}}>حساب صدرا ندارید؟ <Link to={'/auth/register'} style={{fontWeight:"900"}}>ایجاد حساب کاربری</Link></p>
                                    </>
                                }

                            </div>
                        </ThemeProvider>
                    </form>
                    
                    <div className='AuthDiv'>
                        <div className='authSmallLogo'>
                            <img src="../../../../logo.svg" height={100} alt="smallLogo" />
                            <h1 style={{fontSize:"3rem"}}>صدرا</h1>
                        </div>
                        <div className='authBigLogo'>
                            <img src="../../../../assets/authIllustration.png" alt="biglogo" />
                        </div>
                        <div className='authHeader'>
                            <h2>مؤسسه آموزشی و پژوهشی صدرا</h2>
                        </div>
                        <div className='authSubtitle'>
                            <p>با شرکت در دوره‌های آموزشی صدرا، از صفر شروع کن و در مسیر یادگیری با بهترین متد‌های آموزشی ما همراه شو، تا ما پلی باشیم برای ورود تضمینی به بازار کار</p>
                        </div>
                    </div>
                </div>
                </>
            )
            : 
            <div style={{direction:"rtl"}}>
                <h1>شما قبلا وارد شده اید! از دکمه زیر وارد داشبور خود شوید .</h1>
                <button style={{cursor:"pointer"}} onClick={dashboardLink} className='login_Btn_No_Hid'>داشبورد</button>
            </div>
        }
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
        
    );
};

export default AuthForm;
