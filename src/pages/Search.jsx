import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EventCard from '../components/modules/EventModules/EventCard';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import BlogCard from '../components/modules/Blog-modules/BlogCard';
import ClassCard from '../components/modules/classes/ClassCard';
import Loading from '../helper/Loading';

function Search() {
    const [data, setData] = useState([])
    const [option, setOption] = useState()
    const [value, setValue] = useState()
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setOption(urlParams.get('option'))
        setValue(urlParams.get('value'))

        const fetchData = async () => {
            try {
                const responseToken = await axios.post(`https://sadra-edu.com/api/search`,{
                    option21: option,
                    value21: value
                });
                setData(responseToken.data.data[0]);

                const responseToken2 = await axios.get('https://sadra-edu.com/api/TeacherUsers/data');
                setUsers(await responseToken2.data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [option, value]);

    const matchAuthorWithUser = (authorName, authorLastName) => {
        const matchedUser = users.find(user => user.name === authorName && user.lastName === authorLastName);
        return matchedUser;
    };

    return (
        <div dir='rtl' style={{margin:"0 auto", maxWidth:"1920px", padding:"10px"}}>
            <h1 style={{marginTop:"1rem", marginBottom:"3rem"}}>نتیجه جستجو در {option === "events" ? "رویداد ها" : option === "blog" ? "وبلاگ ها" : option === "classes" ? "کلاس ها" : ""} با متن "{value}" :</h1>
            {
                data ? 
                <Grid container spacing={2}>
                    {option === "events" && 
                        data?.map((item, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
                                <Link to={`/events/${item.id}`}>
                                    <EventCard 
                                        {...item}
                                    />
                                </Link>
                            </Grid>
                        ))
                    }
                    {option === "blog" && 
                        <Grid container spacing={3} sx={{marginLeft:"0px"}}>
                            {data?.map((card, index) => {
                                console.log(card);
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
                    }
                    {option === "classes" && 
                    <div style={{width:"100%", margin:"10px", marginLeft:"25px"}}>
                        {
                            data.map((item)=> (
                                <Link key={item.id} to={`/classes/${item.id}`}><ClassCard key={item.id} {...item} /></Link>
                            ))
                        }
                    </div>
                    }
                    {option !== "events" && option !== "blog" && option !== "classes" && "ابتدا از صفحه خارج شده و دوباره عملیات جستجو رو انجام دهید."}
                </Grid>
                :
                <Loading/>
            }
        </div>
    )
}

export default Search;
