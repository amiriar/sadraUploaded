import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import InputContact from '../../modules/input/InputContact'
import { Checkbox, Divider, FormControl, MenuItem, Select } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import { ToastContainer } from 'react-toastify'
import Loading from '../../../helper/Loading'
import { showToast } from '../../modules/AuthModules/Toastify'
import { adminCategories, categories } from '../Categories'
import SignOutButton from '../SignOutButton'

import { IoPerson } from "react-icons/io5";
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import EmploymentDetailCard from '../../modules/EventDetailModule/EmploymentDetailCard'

function EditEmployment() {
    const [adminRole, setAdminRole] = useState()
    const { id } = useParams()

    const [loading, setLoading] = useState(true)

    const [setting , setSetting] = useState(false)
    const mobileSetting = ()=>{
        setSetting(e => !e);
        console.log(setting)
    }
    
    const [jobBranch, setJobBranch] = useState('')
    const [jobCategory, setJobCategory] = useState('')
    const [jobPlace, setJobPlace] = useState('')
    const [jobTime, setJobTime] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [isShown, setIsShown] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://sadra-edu.com/api/dashboard/token', { withCredentials: true })
        .then(response => {
            const { role } = response.data;
            setAdminRole(role);
        });
        
        axios.get(`https://sadra-edu.com/api/employment/data/${id}`).then(response => {
            setLoading(false)
            setJobBranch(response.data[0].branch)
            setJobCategory(response.data[0].jobCategory)
            setJobPlace(response.data[0].jobPlace)
            setJobTime(response.data[0].jobTime)
            setJobTitle(response.data[0].jobTitle)
            setIsShown(response.data[0].isShown)
        })
    }, [])
    
    const handleCheckboxChange = (e) => {
        // Convert the checkbox value to 1 (true) or 0 (false)
        setIsShown(e.target.checked ? 1 : 0);
    }

    const insertHandler = async () => {
        try {
            const response2 = await axios.post(`https://sadra-edu.com/api/employment/edit`, {
                id: id,
                branch: jobBranch,
                jobCategory,
                jobTitle,
                jobPlace,
                jobTime,
                isShown,
            });

            showToast("اطلاعات شما ثبت شد!", "success");
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            showToast(`خطا در آپلود: ${error.response ? error.response.data.error : error.message}`, 'error');
        }
    };
    
    return (
        <>
        {
            adminRole === 'admin' ?
            <div dir='rtl' className='panelContainer'>
                <div className='userPanel' dir='rtl'> 
                    <div className='sideBarPanel'>
                        <div>
                            {
                                adminRole === 'admin' ?
                                    adminCategories.map((item) => (
                                        <Link key={item.title} to={item.link}>{item.title}</Link>
                                    ))
                                :
                                navigate("/")
                            }
                        </div>
                            <div>
                                <SignOutButton/>
                            </div>
                    </div>
                    <div className='mainPanel'>
                        {
                            loading ? <Loading/> :
                            <form dir='rtl' style={{ display:"flex", flexDirection:"column", gap:"1rem"}}>
                                <InputContact id={'branch'}   variable={jobBranch} setVariable={setJobBranch} subTitle={'محصول، آموزش، مارکتینگ، منابع انسانی، مالی'} title={'شاخه'} type={'text'} width={'100%'} />
                                <InputContact id={'place'}    variable={jobCategory} setVariable={setJobCategory} title={'دسته بندی'} type={'text'} width={'100%'} />
                                <InputContact id={'category'} variable={jobPlace} setVariable={setJobPlace} title={'محل کار'} type={'text'} width={'100%'} />
                                <InputContact id={'title'}    variable={jobTitle} setVariable={setJobTitle} title={'عنوان کار'} type={'text'} width={'100%'} />
                                <InputContact id={'time'}     variable={jobTime} setVariable={setJobTime} subTitle={"تمام وقت، پاره وقت و.."} title={'بازه زمانی'} type={'text'} width={'100%'} />
                
                                <FormControl sx={{ marginTop: '1rem', display: 'inline', alignItems: 'center' }}>
                                    <Checkbox
                                        checked={isShown === 1 ? true : false}
                                        onChange={handleCheckboxChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        sx={{ color: '#4ca773' }}
                                        id='is-student'
                                    />
                                    <label htmlFor="is-student" style={{ cursor:"pointer"}}>
                                        نمایش دادن
                                    </label>
                                </FormControl>

                                <Divider/>
                                <h3>نمونه کارت</h3>
                                <EmploymentDetailCard job={jobTitle} time={jobTime} place={jobPlace} category={jobCategory}/>
                
                                <button
                                    className='login_Btn_No_Hid'
                                    onClick={insertHandler}
                                    style={{ width: 'fit-content', marginTop: '2rem', cursor: 'pointer' }}
                                    type="button"
                                >
                                    ثبت اطلاعات نوشته شده
                                </button>

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
                        </form>
                        }
                    </div>
                </div>
            </div>
            :
            <h3>ابتدا از حساب کاربری خود خارج شده و دوباره وارد شوید.</h3>
        }
            {/* Responsive */}

            <div className='MobileDrawerDash'>
                    <button onClick={mobileSetting} className='drawerButton'> <IoPerson style={{width : 20 , height : 20}} /></button>
                </div>

                <Drawer anchor='left' open={setting} onClose={()=> setSetting(false)}>
                    <Box>
                        <ul className='dashboardList'>
                        {
                            adminCategories.map((item) => (
                                <li><Link key={item.title} to={item.link}>{item.title}</Link></li>
                            ))
                        }
                        </ul>
                    </Box>
                </Drawer>

        {/* Responsive */}
        </>
    )
}

export default EditEmployment