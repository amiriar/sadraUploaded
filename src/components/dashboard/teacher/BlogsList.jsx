import React, { useEffect, useState } from 'react'
import SignOutButton from '../SignOutButton'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Divider, Grid } from '@mui/material';
import BlogCard from '../../modules/Blog-modules/BlogCard'
import NewBlog from './NewBlog';
import { adminCategories, categories } from '../Categories';

function BlogsList() {
    const [userRole, setUserRole] = useState(null);
    const [userId, setUserId] = useState(null);
    const [teacherBlog, setTeacherBlog] = useState('');

    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://backend.sadra-edu.com/dashboard/token', { withCredentials: true })
            .then(response => {
            const { role, id } = response.data;
            setUserRole(role);
            setUserId(id);
            if (id) {
                axios.get(`https://backend.sadra-edu.com/dashboard/blogs/${id}`)
                    .then(secondResponse => {
                    setTeacherBlog(secondResponse.data[0])
                    })
                    .catch(secondError => {
                    console.error('Second Request Error:', secondError.response ? secondError.response.data : secondError.message);
                });
            }
        })
        .catch(firstError => {
            console.error('First Request Error:', firstError.response ? firstError.response.data : firstError.message);
            setUserRole('error');
        });

        const fetchData = async () => {
            try {
                const responseToken = await axios.get('https://backend.sadra-edu.com/blog/data');
                setData(responseToken.data);
                console.log(responseToken.data);
                const responseToken2 = await axios.get('https://backend.sadra-edu.com/TeacherUsers/data');
                setUsers(await responseToken2.data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);

    const matchAuthorWithUser = (authorName, authorLastName) => {
        const matchedUser = users.find(user => user.name === authorName && user.lastName === authorLastName);
        return matchedUser;
    };

    return (
        <>
        {
            (userRole === 'teacher' ||  userRole === 'admin') ?
            <div className='panelContainer'>
            {
                (userRole === 'teacher' ||  userRole === 'admin') ?
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
                                <SignOutButton/>
                            </div>
                        </div>
                        <div className='mainPanel'>
                            <div className='blogCardsContainer' style={{ marginTop: "5rem", marginBottom: "2rem" }}>
                                    <Grid container spacing={3}>
                                        {data?.map((card, index) => {
                                            const matchedUser = matchAuthorWithUser(card.authorName, card.authorLastName);

                                            return (
                                                <Grid item key={index} xs={12} sm={6} md={4}>
                                                    <BlogCard
                                                        id={card.id}
                                                        imageData={card.imageData}
                                                        date={card.date}
                                                        title={card.title}
                                                        description={card.description}
                                                        authorName={card.authorName}
                                                        authorLastName={card.authorLastName}
                                                        authorDescription={matchedUser?.description}
                                                        matchedUser={matchedUser}

                                                        hashtags={card.hashtags}
                                                    />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                            </div>
                            <br />
                            <Divider/>
                            <br />
                            <h3>برای ثبت بلاگ از فرم زیر استفاده کنید:</h3>
                            <br />
                            <>
                                <NewBlog/>
                            </>
                        </div>
                    </div>
                :
                <h2>ابتدا از حساب کاربری خود خارج شده و دوباره وارد شوید.</h2>
            }
            </div>
            :
            <h3>یک بار از حساب کاربری خود خارج شوید و دوباره وارد شوید.</h3>
        }
        </>
    )
}

export default BlogsList