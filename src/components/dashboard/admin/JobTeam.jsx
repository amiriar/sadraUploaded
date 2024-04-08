import { Button, Divider, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StudentCard from '../../modules/succes-modules/StudentCard';
import { adminCategories, categories } from '../Categories';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOutButton';
import { IoPerson } from 'react-icons/io5';
import Loading from '../../../helper/Loading';
import NewJobTeam from './NewJobTeam';

function JobTeam() {

    const [data, setData] = useState([]);
    const [userRole, setUserRole] = useState(null);
    const [setting, setSetting] = useState(false);

    useEffect(() => {

        axios.get('https://sadra-edu.com/api/dashboard/token', { withCredentials: true })
            .then(response => {
                const { role } = response.data;
                setUserRole(role);
            })
            .catch(error => {
                console.error('Error fetching user role:', error);
            });
        const fetchData = async () => {
            try {
                await axios.get('https://sadra-edu.com/api/employmentJobTeam/data').then((res) => {
                    setData(res.data);
                })
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const mobileSetting = () => {
        setSetting(prev => !prev);
    }


    return (
        // <div>
        //     <Grid container spacing={2} >
        //         {data.map((item) => (
        //             <Grid key={item.id} item xs={12} sm={6} md={6} lg={3}>
        //                 <StudentCard student={item} account={item.account}  accountLink={item.accountLink}  />
        //             </Grid>
        //         ))}
        //     </Grid>
        // </div>
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
                                        <h1>اعضای تیم جذب و استخدام:</h1>
                                    </div>
                                    <div className='resume-list'>
                                        <Grid container spacing={2} >
                                            {!data ? <Loading/> : data.map((item) => (
                                                <Grid key={item.id} item xs={12} sm={12} md={6} lg={3}>
                                                    <StudentCard student={item} account={item.account}  accountLink={item.accountLink} isAdmin={true} />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </div>
                                </div>
                                
                                <div style={{marginTop:"2rem", marginBottom:"2rem"}}>
                                    <Divider/>
                                </div>

                                <div>
                                    <NewJobTeam/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <h3>یک بار از حساب کاربری خود خارج شوید و دوباره وارد شوید.</h3>
        }
        </>
    )
}

export default JobTeam