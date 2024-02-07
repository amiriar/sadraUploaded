import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignOutButton from '../SignOutButton';
import { Checkbox, Divider, FormControl, Input, InputLabel, MenuItem, Select, TextField, ThemeProvider, createTheme } from '@mui/material';
import { showToast } from '../../modules/AuthModules/Toastify';
import { ToastContainer } from 'react-toastify';
import { userCategories } from '../Categories';


function DashInfo() {
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

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate("/auth/login")
    }

    const theme = createTheme({
        direction: 'rtl',
    });

    const insertHandler = async () => {
        if(userEmail === '' || userName === '' || userLastName === '' || userAge === '' || userPhone === '' || userEducation === ''){
            showToast('لطفا تمامی فیلد هارا پرکنید.', 'error');
        } else{
            const response = await axios.post('https://backend.sadra-edu.com/fullInfo', {
                id: userId,
                name: userName,
                lastName: userLastName,
                email: userEmail,
                age: userAge,
                phoneNumber: userPhone,
                education: userEducation,
                isStudent: userIsStudent
            });
            console.log(response);
            navigate(response.data.path)
        }
    }

    const handleCheckboxChange = (e) => {
        // Convert the checkbox value to 1 (true) or 0 (false)
        setUserIsStudent(e.target.checked ? 1 : 0);
    };
    
    const handleSelectChange = (event) => {
        setUserEducation(event.target.value);
    };

    return (
        <div dir='rtl' className='panelContainer'>
            {
                userRole === "user" ? 
                    <div className='userPanel'>
                        <div className='sideBarPanel'>
                            <div>
                                {
                                    userCategories.map((item) => (
                                        <Link key={item.title} to={item.link}>{item.title}</Link>
                                    ))
                                }
                            </div>
                            <div>
                                <SignOutButton/>
                            </div>
                        </div>
                        <div className='mainPanel'>
                            <form>

                                <h1>ثبت اطلاعات تکمیلی:</h1>
                                    <ThemeProvider theme={theme}>
                                        <div className='formPanel'>
                                            <FormControl variant="outlined" sx={{ marginTop: "1rem", '&:focus-within': { borderColor: 'green !important' } }}>
                                                <InputLabel htmlFor="first-name" sx={{ left: 'auto', right: 40, fontFamily: "Yekan, sans-serif" }}>
                                                    نام
                                                </InputLabel>
                                                <Input
                                                    id="first-name"
                                                    label="نام"
                                                    variant="outlined"
                                                    sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                                    value={userName}
                                                    onChange={(e) => setUserName(e.target.value)}
                                                    required
                                                    
                                                />
                                            </FormControl>

                                            <FormControl variant="outlined" sx={{marginTop:"1rem"}}>
                                                <InputLabel htmlFor="last-name" sx={{ left: 'auto', right: 40, fontFamily: "Yekan,sans-serif" }}>
                                                    نام خانوادگی
                                                </InputLabel>
                                                <Input
                                                    id="last-name"
                                                    label="نام خانوادگی"
                                                    variant="outlined"
                                                    sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                                    value={userLastName}
                                                    onChange={(e) => setUserLastName(e.target.value)}
                                                    required
                                                />
                                            </FormControl>

                                            <FormControl variant="outlined" sx={{marginTop:"1rem"}}>
                                                <InputLabel htmlFor="last-name" sx={{ left: 'auto', right: 40, fontFamily: "Yekan,sans-serif" }}>
                                                    پست الکترونیکی
                                                </InputLabel>
                                                <Input
                                                    id="email"
                                                    label="پست الکترونیکی"
                                                    variant="outlined"
                                                    sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                                    value={userEmail}
                                                    onChange={(e) => setUserEmail(e.target.value)}
                                                    required
                                                />
                                            </FormControl>

                                            <FormControl variant="outlined" sx={{marginTop:"1rem"}}>
                                                <InputLabel htmlFor="last-name" sx={{ left: 'auto', right: 40, fontFamily: "Yekan,sans-serif" }}>
                                                    سن
                                                </InputLabel>
                                                <Input
                                                    id="age"
                                                    label="سن"
                                                    type='number'
                                                    variant="outlined"
                                                    sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                                    value={userAge}
                                                    onChange={(e) => setUserAge(e.target.value)}
                                                    required
                                                />
                                            </FormControl>

                                            <FormControl variant="outlined" sx={{marginTop:"1rem"}}>
                                                <InputLabel htmlFor="last-name" sx={{ left: 'auto', right: 40, fontFamily: "Yekan,sans-serif" }}>
                                                    شماره تماس
                                                </InputLabel>
                                                <Input
                                                    id="phone"
                                                    label="شماره تماس"
                                                    type='number'
                                                    variant="outlined"
                                                    sx={{ position: 'relative',fontFamily: "Yekan, sans-serif" }}
                                                    value={userPhone}
                                                    onChange={(e) => setUserPhone(e.target.value)}
                                                    required
                                                />
                                            </FormControl>

                                            <FormControl variant="outlined" sx={{ marginTop: '2rem' }}>
                                                <Select
                                                    id="education"
                                                    sx={{ position: 'relative', fontFamily: 'Yekan, sans-serif' }}
                                                    value={userEducation}
                                                    onChange={handleSelectChange}
                                                    required
                                                >
                                                    <MenuItem value="مقطع تحصیلی" disabled={userEducation !== 'مقطع تحصیلی'} sx={{fontFamily:"Yekan,sans-serif"}}>
                                                    مقطع تحصیلی
                                                    </MenuItem>
                                                    <MenuItem sx={{fontFamily:"Yekan,sans-serif"}} value="دیپلم">دیپلم</MenuItem>
                                                    <MenuItem sx={{fontFamily:"Yekan,sans-serif"}} value="لیسانس">لیسانس</MenuItem>
                                                </Select>
                                            </FormControl>

                                            <FormControl sx={{ marginTop: '1rem', display: 'inline', alignItems: 'center' }}>
                                                <Checkbox
                                                    checked={userIsStudent === 1 ? true : false}
                                                    onChange={handleCheckboxChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                    sx={{ color: '#4ca773' }}
                                                    id='is-student'
                                                />
                                                <label htmlFor="is-student" style={{ cursor:"pointer"}}>
                                                    دانشجو هستم
                                                </label>
                                            </FormControl>
                                        </div>
                                    </ThemeProvider>
                                    <button
                                        className='login_Btn_No_Hid'
                                        onClick={insertHandler}
                                        style={{ width: 'fit-content', marginTop: '2rem', cursor: 'pointer' }}
                                        type="button"
                                    >
                                        ثبت اطلاعات نوشته شده
                                    </button>
                                {/* <p className='panelHint'>با کلیک روی این دکمه به مرحله بعد ثبت اطلاعات ارسال میشوید.</p> */}
                            </form>
                        </div>
                    </div>
                :
                <>
                    <h1>ابتدا از حساب کاربری خود خارج شوید و دوباره وارد شوید !</h1>
                    <h1>اگر این مشکل ادامه پیدا کرد با تیم پشتیبانی در ارتباط باشید.</h1>
                    <button className='login_Btn' style={{cursor:"pointer"}} onClick={clickHandler}>ورود</button>
                </>
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
        </div>
    );
}

export default DashInfo;