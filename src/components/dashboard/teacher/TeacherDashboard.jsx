import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SignOutButton from '../SignOutButton'
import DashboardCard from '../DashboardCard';
import { categories } from '../Categories';

import Drawer from '@mui/material/Drawer';
import { IoPerson } from "react-icons/io5";
import Box from '@mui/material/Box';

//icons
import { FaMicroblog } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { Checkbox, Divider, FormControl, Input, InputLabel, MenuItem, Select, ThemeProvider, createTheme } from '@mui/material';
import { showToast } from '../../modules/AuthModules/Toastify';
import { ToastContainer } from 'react-toastify';
import InputContact from '../../modules/input/InputContact';
import { useDropzone } from 'react-dropzone';


function TeacherDashbaord({ userRole, userId }) {

    
    const theme = createTheme({
        direction: 'rtl',
    });

    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEducation, setUserEducation] = useState('');
    const [imageData, setImageData] = useState(''); // author picture
    const [authorDescription, setAuthorDescription] = useState('');
    const [authorLinkedin, setAuthorLinkedin] = useState('');
    const [authorPinterest, setAuthorPinterest] = useState('');
    const [authorTwitterX, setAuthorTwitterX] = useState('');
    const [authorFacebook, setAuthorFacebook] = useState('');

    const [imagePath, setImagePath] = useState('');
    
    const handleSelectChange = (event) => {
        setUserEducation(event.target.value);
    };
    const insertHandler = async () => {
        if(userEmail === '' || userName === '' || userLastName === '' || userAge === '' || userPhone === '' || userEducation === ''){
            showToast('لطفا تمامی فیلد هارا پرکنید.', 'error');
        } else{
            if (!imageData) { 
                showToast('لطفاً یک تصویر را انتخاب کنید.', 'error');
                return;
            }
    
            const formData = new FormData();
            formData.append('imageData', imageData);
    
            try {
                const response = await axios.post('https://backend.sadra-edu.com/upload/single', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                });
                // Handle the response as needed
                setImagePath(await response.data.path)
                const newImagePath = imagePath.split(`\\`).join("/")
                const response2 = await axios.post('https://backend.sadra-edu.com/fullInfo', {
                    id: userId,
                    name: userName,
                    lastName: userLastName,
                    email: userEmail,
                    age: userAge,
                    phoneNumber: userPhone,
                    education: userEducation,
                    profile: newImagePath,
                    description: authorDescription,
                    linkedin: authorLinkedin,
                    pinterest: authorPinterest,
                    twitterX : authorTwitterX,
                    facebook: authorFacebook
                });
                showToast("اطلاعات شما ثبت شد! حالا، به صفحات دیگر دسترسی دارید.","success")
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
                showToast(`خطا در آپلود تصویر: ${error.response ? error.response.data.error : error.message}`, 'error');
            }
        }
    }
    useEffect(() => {
        userId && axios.get(`https://backend.sadra-edu.com/users/data/${userId}`)
            .then(response => {
                setUserName(response.data[0][0].name);
                setUserLastName(response.data[0][0].lastName);
                setUserEmail(response.data[0][0].email);
                setUserAge(response.data[0][0].age)
                setUserPhone(response.data[0][0].phoneNumber)
                setUserEducation(response.data[0][0].education)
                setAuthorDescription(response.data[0][0].description)
                setAuthorLinkedin(response.data[0][0].linkedin)
                setAuthorFacebook(response.data[0][0].facebook)
                setAuthorTwitterX(response.data[0][0].twitterX)
                setAuthorPinterest(response.data[0][0].pinterest)
            })
        .catch(error => {
            console.error('Error:', error.response ? error.response.data : error.message);
        });
    }, [userId])

    const [fileName, setFileName] = useState('');

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImageData(file);
        setFileName(file.name); // Set the file name in state
    };
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    const dropzoneStyle = {
        border: '2px dashed #cccccc',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        marginTop: '10px',
    };

    const [setting , setSetting] = useState(false)
    const mobileSetting = ()=>{
        setSetting(e => !e);
      }


    return (
        <>
        {
            userRole === "teacher" ?
            <div className='userPanel'>
                <div className='sideBarPanel'>
                    <div>
                        {
                            categories.map((item) => (
                                <Link key={item.title} to={item.link}>{item.title}</Link>
                            ))
                        }
                    </div>
                    <br /><br /><br />
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
                            categories.map((item) => (
                                <li><Link key={item.title} to={item.link}>{item.title}</Link></li>
                            ))
                        }
                        </ul>
                    </Box>
                </Drawer>

                {/* Responsive */}
                <div className='mainPanel'>
                    <div className="cards-container">
                        <DashboardCard icon={<FaMicroblog size={40} />} title={'بلاگ ها'} link={'/dashboard/blogs'} />
                        <DashboardCard icon={<MdEvent size={40} />} title={'رویداد ها'} link={'/dashboard/events'} />
                        <DashboardCard icon={<SiGoogleclassroom size={40} />} title={'کلاس ها'} link={'/dashboard/classes'} />
                    </div>
                    <br />
                    <Divider/>
                    <br />
                    <form>
                        <h1>ثبت اطلاعات تکمیلی:</h1>
                            <ThemeProvider theme={theme}>
                                <div className='formPanel'>
                                    <InputContact id={'authorName'} setVariable={setUserName} variable={userName} title={'نام'} type={'text'} width={'100%'} />
                                    <InputContact id={'authorLastName'} setVariable={setUserLastName} variable={userLastName} title={'نام خانوادگی'} type={'text'} width={'100%'} />
                                    <InputContact id={'authorEmail'} setVariable={setUserEmail} variable={userEmail} title={'پست الکترونیکی'} type={'text'} width={'100%'} />
                                    <InputContact id={'authorAge'} setVariable={setUserAge} variable={userAge} title={'سن'} type={'number'} width={'100%'} />
                                    <InputContact id={'authorPhone'} setVariable={setUserPhone} variable={userPhone} title={'شماره تماس'} type={'number'} width={'100%'} />

                                    <FormControl variant="outlined">
                                        <p>مقطع تحصیلی</p>
                                        <Select
                                            id="education"
                                            sx={{ position: 'relative', fontFamily: 'Yekan, sans-serif', marginTop:"0.6rem" }}
                                            value={userEducation === '' ? 'مقطع تحصیلی' : userEducation}
                                            onChange={handleSelectChange}
                                            required
                                        >
                                            <MenuItem value="مقطع تحصیلی" 
                                            disabled={userEducation !== 'مقطع تحصیلی'}
                                            sx={{fontFamily:"Yekan,sans-serif"}}>
                                            مقطع تحصیلی
                                            </MenuItem>
                                            <MenuItem sx={{fontFamily:"Yekan,sans-serif"}} value="دیپلم">دیپلم</MenuItem>
                                            <MenuItem sx={{fontFamily:"Yekan,sans-serif"}} value="لیسانس">لیسانس</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <div>
                                        <p>عکس پروفایل</p>
                                        <div {...getRootProps()} style={dropzoneStyle}>
                                            <input {...getInputProps()} />
                                            <p>تصویر مقاله را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد</p>
                                            <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                                            {fileName && (
                                                <p style={{ marginTop: '10px' }}>
                                                نام فایل انتخابی: {fileName}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <InputContact id={'authorDescription'} setVariable={setAuthorDescription} variable={authorDescription} title={'شرح'} subTitle={"توضیح کوتاهی درباره خودتان"} type={'text'} width={'100%'} />
                                    <InputContact id={'authorLinkedin'} setVariable={setAuthorLinkedin} variable={authorLinkedin} title={'لینک لینکدین'} subTitle={"در صورت نداشتن # بگذارید."} type={'text'} width={'100%'} />
                                    <InputContact id={'authorPinterest'} setVariable={setAuthorPinterest} variable={authorPinterest} title={'لینک پینترست'} subTitle={"در صورت نداشتن # بگذارید."} type={'text'} width={'100%'} />
                                    <InputContact id={'authorTwitterX'} setVariable={setAuthorTwitterX} variable={authorTwitterX} title={'لینک توییتر(X)'} subTitle={"در صورت نداشتن # بگذارید."} type={'text'} width={'100%'} />
                                    <InputContact id={'authorFacebook'} setVariable={setAuthorFacebook} variable={authorFacebook} title={'لینک فیس بوک'} subTitle={"در صورت نداشتن # بگذارید."} type={'text'} width={'100%'} />
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
                        </form>
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
                <br />
                <Divider/>
            </div>
            :
            <h2>ابتدا از حساب کاربری خود خارج شده و دوباره وارد شوید.</h2>
        }
        
        </>
    );
}

export default TeacherDashbaord