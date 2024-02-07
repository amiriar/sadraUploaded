import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import BlogCard from '../components/modules/Blog-modules/BlogCard';

//css
import './Blog.css'
import SearchBox from '../components/modules/SearchBox';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Blog() {

    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseToken = await axios.get('https://backend.sadra-edu.com/blog/data');
                setData(responseToken.data);
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

    const tags = ['دورکاری','کامپوترها','یادگیری_ماشین','طراحی_گرافیک','رابط_کاربری','تکنولوژی','پایگاه_داده','هوش_مصنوعی','امنیت','بیت_کوین','فرانت_اند','بک_اند','سیو','ارز_دیجیتال','فارکس','کریپتو','بازی']

    return (
        <>
            <div className='hero' style={{maxWidth:"1920px", margin:"0 auto"}}>
                <div className='Data_Container_hero'>
                    <h1>مؤسسه آموزشی و پژوهشی صدرا</h1>
                    <h2>دوره مورد علاقت رو شرکت کن، گارانتی پیدا کردن کار با ما</h2>
                    <p>با شرکت در دوره‌های آموزشی صدرا، از صفر شروع کن و در مسیر یادگیری با بهترین متد‌های آموزشی ما همراه شو، تا ما پلی باشیم برای ورود تضمینی به بازار کار</p>
                    <SearchBox firstWidth={'100%'} />
                    <div className='tags' dir='rtl'>
                        {
                            tags.map((tag) => (
                                <Link key={tag} to={`/blog/tags/${tag}`} className='tag'>#{tag}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
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
                                    matchedUser={matchedUser} 
                                    hashtags={card.hashtags}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </>
    );
}

export default Blog;
