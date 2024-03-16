import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { adminCategories, categories } from '../Categories';
import SignOutButton from '../SignOutButton';
import { IoPerson } from 'react-icons/io5';
import Loading from '../../../helper/Loading';

function Resume() {
    const [data, setData] = useState([]);
    const [userRole, setUserRole] = useState(null);
    const [setting, setSetting] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseToken = await axios.get('https://sadra-edu.com/api/resume/data');
                setData(responseToken.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        axios.get('https://sadra-edu.com/api/dashboard/token', { withCredentials: true })
            .then(response => {
                const { role } = response.data;
                setUserRole(role);
            })
            .catch(error => {
                console.error('Error fetching user role:', error);
            });
    }, []);

    const mobileSetting = () => {
        setSetting(prev => !prev);
    }

    return (
        <>
            {
                userRole === 'admin' ?
                    <div dir='rtl' className='panelContainer'>
                        <div className='userPanel' dir='rtl'>
                            <div className='sideBarPanel'>
                                <div>
                                    {
                                        userRole === 'teacher' ?
                                            categories.map((item) => (
                                                <Link key={item.title} to={item.link}>{item.title}</Link>
                                            ))
                                            : userRole === 'admin' ?
                                                adminCategories.map((item) => (
                                                    <Link key={item.title} to={item.link}>{item.title}</Link>
                                                ))
                                                :
                                                <h3>ابتدا از حساب کاربری خود خارج شده و دوباره وارد شوید.</h3>
                                    }
                                </div>
                                <div>
                                    <SignOutButton />
                                </div>
                            </div>
                            <div className='mainPanel'>
                                <div>
                                    <div>
                                        <div className='MobileDrawerDash'>
                                            <button onClick={mobileSetting} className='drawerButton'> <IoPerson style={{ width: 20, height: 20 }} /></button>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ marginBottom: "2rem" }}>
                                            <h1>رزومه های ارسال شده:</h1>
                                        </div>
                                        <div className='resume-list'>
                                            {!data ? <Loading/> : data.map((item) => {
                                                const newPath = item?.filePath?.split("/").splice(1).splice(1).join("/");
                                                return (
                                                    <div key={item.id} className='resume-item'>
                                                        <div className='resume-details'>
                                                            <p>نام: {item.firstName}</p>
                                                            <p>نام خانوادگی: {item.lastName}</p>
                                                            <p>تلفن همراه: <Link to={`tel:${item.phoneNumber}`}>{item.phoneNumber}</Link></p>
                                                            <p>موقعیت شغلی مورد نظر: {item.selectedTitle}</p>
                                                            <p>زمان موقعیت شغلی: {item.selectedTime}</p>
                                                            <p>مکان موقعیت شغلی: {item.selectedPlace}</p>
                                                        </div>
                                                        <div className='resume-download'>
                                                            <a href={`/${newPath}`} download>
                                                                <button className='login_Btn_No_Hid'>
                                                                    دانلود رزومه
                                                                </button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <h3>یک بار از حساب کاربری خود خارج شوید و دوباره وارد شوید.</h3>
            }
        </>
    );
}

export default Resume;
