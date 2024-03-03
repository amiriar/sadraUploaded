import React, { useState } from 'react'
import { MdOutlineStackedBarChart } from 'react-icons/md'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom'

import { MdPhoneMissed } from "react-icons/md";

import usePersianNumber from '../../../helper/PersianNumbers'

import { IoPerson } from "react-icons/io5";
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import { adminCategories } from '../Categories';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

function UserCard({user}) {
    const navigate = useNavigate()
    const editHandler = () => {
        navigate(`/dashboard/users/${user.id}`)
    }

    const [setting , setSetting] = useState(false)
    const mobileSetting = ()=>{
        setSetting(e => !e);
    }
    const newProf = user?.profile.split("/").splice(1).splice(1).join("/")

    return (
        <div className='CardBox' dir='rtl'>
            {/* <div style={{display:"flex", justifyContent: "space-between", height:"fit-content"}}>
                <div className='imgContainer'>
                    {
                        (user.role === "teacher" || user.role === "admin") ? <img src={`/${newProf}`} alt={'title'} /> : <img src={'../../../../assets/userPlaceHolder/userPlaceholder.jpg'} alt={user.id} />
                    }
                    <div className='cardInfo'>
                        <h2>{user.name} {user.lastName}</h2>
                        <div className='moreCardDetail'>
                            <span><MdOutlineStackedBarChart className='classIcon' />سطح کاربری {user.role === 'teacher' ? 'دبیر' : user.role === 'admin' ? 'ادمین' : 'معمولی'}</span>
                            <span><MdOutlineAlternateEmail  className='classIcon'  /><Link to={`mailto:${user.email}`}> ایمیل {user.email}</Link></span>
                            <span><MdPhoneMissed            className='classIcon'  />َشماره تماس  <Link to={`tel:${user.phoneNumber}`}> {user.phoneNumber} </Link></span>
                        </div>
                        <p>تاریخ آخرین ورود: <span>{usePersianNumber(user.lastDateIn.split("-").join("/"))}</span></p>
                    </div>
                </div>
                <div>
                    <button className='login_Btn_No_Hid_2' style={{marginLeft:"1rem", cursor:"pointer", height:"fit-content", display}} onClick={editHandler}>
                        ویرایش
                    </button>
                </div>
            </div> */}
            {/* Responsive */}

            <TableContainer component={Paper} dir="rtl">
                <Table aria-label="user details table">
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div style={{ display: "flex", justifyContent: "space-between", textAlign:"right", fontFamily:"Yekan, sans-serif" }}>
                                    <div className='imgContainer'>
                                        {(user.role === "teacher" || user.role === "admin") ?
                                            <img src={`/${newProf}`} alt={'title'} /> :
                                            <img src={'../../../../assets/userPlaceHolder/userPlaceholder.jpg'} alt={user.id} />
                                        }
                                        <div className='cardInfo'>
                                            <h2>{user.name} {user.lastName}</h2>
                                            <div className='moreCardDetail'>
                                                <span><MdOutlineStackedBarChart className='classIcon' />سطح کاربری {user.role === 'teacher' ? 'دبیر' : user.role === 'admin' ? 'ادمین' : 'معمولی'}</span>
                                                <span><MdOutlineAlternateEmail className='classIcon' /><Link to={`mailto:${user.email}`}> ایمیل {user.email}</Link></span>
                                                <span><MdPhoneMissed className='classIcon' />َشماره تماس  <Link to={`tel:${user.phoneNumber}`}> {user.phoneNumber} </Link></span>
                                            </div>
                                            <p>تاریخ آخرین ورود: <span>{usePersianNumber(user.lastDateIn.split("-").join("/"))}</span></p>
                                        </div>
                                    </div>
                                    <div>
                                    <Button
                                        className='login_Btn_No_Hid_2'
                                        style={{ marginLeft: "1rem", cursor: "pointer", height: "fit-content", backgroundColor: "#4CA773", fontSize: "1.2rem", padding: "0.8rem 2rem", color:"#FFf",fontFamily:"Yekan, sans-serif" }}
                                        onClick={editHandler}
                                        fontFamily={"Yekan, sans-serif"}
                                    >
                                        ویرایش
                                    </Button>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>



            <div className='MobileDrawerDash'>
                    <button onClick={mobileSetting} className='drawerButton'> <IoPerson style={{width : 20 , height : 20}} /></button>
            </div>

                <Drawer anchor='left' open={setting} onClose={()=> setSetting(false)}>
                    <Box>
                        <ul className='dashboardList'>
                        {
                            adminCategories.map((item) => (
                                <li key={item.title}><Link to={item.link}>{item.title}</Link></li>
                            ))
                        }
                        </ul>
                    </Box>
                </Drawer>

        {/* Responsive */}
        </div>
    )
}

export default UserCard