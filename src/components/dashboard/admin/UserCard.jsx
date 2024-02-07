import React from 'react'
import { MdOutlineStackedBarChart } from 'react-icons/md'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom'

import { MdPhoneMissed } from "react-icons/md";

import usePersianNumber from '../../../helper/PersianNumbers'

function UserCard({user}) {
    const navigate = useNavigate()
    const editHandler = () => {
        navigate(`/dashboard/users/${user.id}`)
    }
    return (
        <div className='CardBox' dir='rtl'>
            <div className='imgContainer'>
                {
                    user.role === "teacher" ? <img src={`/${user.profile}`} alt={'title'} /> : <img src={'../../../../assets/userPlaceHolder/userPlaceholder.jpg'} alt={user.id} />
                }
                <div className='cardInfo'>
                    <h2>{user.name} {user.lastName}</h2>
                    <div className='moreCardDetail'>
                        <span><MdOutlineStackedBarChart className='classIcon' />سطح کاربری {user.role === 'teacher' ? 'دبیر' : user.role === 'admin' ? 'ادمین' : 'معمولی'}</span>
                        <span><MdOutlineAlternateEmail  className='classIcon'  /><Link to={`mailto:${user.email}`}> ایمیل {user.email}</Link></span>
                        <span><MdPhoneMissed            className='classIcon'  />َ<Link to={`tel:${user.phoneNumber}`}> شماره تماس {user.phoneNumber} </Link></span>
                    </div>
                    <p>تاریخ آخرین ورود: <span>{usePersianNumber(user.lastDateIn.split("-").join("/"))}</span></p>
                </div>
            </div>
            <button className='login_Btn_No_Hid_2' style={{marginLeft:"1rem", cursor:"pointer"}} onClick={editHandler}>
                ویرایش
            </button>
        </div>
    )
}

export default UserCard