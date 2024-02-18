import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogCard from '../components/modules/Blog-modules/BlogCard'
import { Grid } from '@mui/material';

//css
import './Tags.css'

//loading
import Loading from '../helper/Loading';

function Tags() {
    const {tag} = useParams();
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [showLoading, setShowLoading] = useState(true); // State to control loading message visibility
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.post(`https://backend.sadra-edu.com/searchTags`,{tag})
                setData(await result.data[0])
                const responseToken2 = await axios.get('https://backend.sadra-edu.com/TeacherUsers/data');
                setUsers(await responseToken2.data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setTimeout(() => {
                    setShowLoading(false);
                }, 1000); 
            }
        };
        fetchData();
    }, []);

    const matchAuthorWithUser = (authorName, authorLastName) => {
        const matchedUser = users.find(user => user.name === authorName && user.lastName === authorLastName);
        return matchedUser;
    };

    return (
        <div dir='rtl'>
            <h1 className='headerTags'>بلاگ های موجود با تگ {tag.split("_").join(" ")} :</h1>
            <div className='blogCardsContainer' style={{ marginTop: "5rem", marginBottom: "2rem" }}>
                {showLoading ? ( // Render loading message if showLoading is true
                    <h2>در حال جست و جو...</h2>
                ) : (
                    data.length !== 0 ? 
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
                    :
                    <h2 style={{marginBottom:"2rem"}}>متاسفانه هیچ بلاگی پیدا نشد.</h2> 
                )}
            </div>
        </div>
    )
}

export default Tags;
