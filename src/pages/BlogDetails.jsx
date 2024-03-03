import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

//css:
import './BlogDetails.css'
import Line from '../components/modules/Line'

import VerticalProgressBar from '../components/modules/ProgressBar'
import { Avatar, CardContent, Divider, Grid, Typography } from '@mui/material'

// cards:
import BlogCard from '../components/modules/Blog-modules/BlogCard';


//icons:
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import axios from 'axios'
import usePersianNumber from '../helper/PersianNumbers'


function BlogDetails() {
    
    const { id } = useParams()

    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [relevent, setRelevent] = useState([]);
    const [tags, setTags] = useState([]);
    const [authorName, setAuthorName] = useState('')
    const [authorLastName, setAuthorLastName] = useState('')
    const [targetUser, setTargetUser] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://sadra-edu.com/api/blog/data/asc');
                const jsonData = response.data;
                setData(prevData => ({ ...prevData, ...jsonData[id - 1] }));
    
                const relevantItems = jsonData
                    .filter((item) => item?.hashtags?.split(",")[0] === data?.hashtags?.split(",")[0])
                    .slice(0, 3);
    
                setRelevent(relevantItems);
    
                setTags(data?.hashtags?.split(","))
    
                const responseToken2 = await axios.get('https://sadra-edu.com/api/TeacherUsers/data');
                const allUsers = await responseToken2.data[0];
                setUsers(allUsers);
    
                const targetUser = allUsers.find(user => user.name === data.authorName && user.lastName === data.authorLastName);
                setTargetUser(targetUser);
    
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [id, users]);
    
    const matchAuthorWithUser = (authorName, authorLastName) => {
        const matchedUser = users.find(user => user.name === authorName && user.lastName === authorLastName);
        return matchedUser;
    };

    return (
        <div style={{ maxWidth:"1920px" ,margin:"0 auto"}}>
                {
                    data && 
                        <React.Fragment>
                            <div className='Home'>
                                <div className='BoxData'>
                                    <div className='tags' id='hashtagsDetails' dir='rtl'>
                                            {
                                                tags && tags.map((tag)=> (
                                                    <Link className='link' key={tag} to={`/blog/${tag}`} style={{background: 'rgba(255, 255, 255, 0.65)',color:"black"}}>#{tag}</Link>
                                                ))
                                            }
                                        </div>
                                    <h1 dir='rtl'>{data.title}</h1>
                                    <h2 dir='rtl' style={{color:"#D0D5DD", fontWeight:"400"}}>{data.description}</h2>
                                    <p dir='rtl' style={{color:"#FFF", fontWeight:"700"}}>نوشته شده توسط {data.authorName} {data.authorLastName}</p>
                                </div>

                                <div className='BoxImage'>
                                    <img src={data.imageData} alt={data.imageData} />
                                </div>
                            </div>
                            <div className='mainContentBlogDetails'>
                                <div className='ContentTextBlogDetails'>    
                                    <div>
                                        <p style={{color: "#475467"}} dir='rtl'>{data.detailsDescription1}</p><br />
                                        <p style={{color: "#475467"}} dir='rtl'>{data.detailsDescription2}</p><br />
                                        <p style={{color: "#475467"}} dir='rtl'>{data.detailsDescription3}</p><br />
                                    </div>
                                    <div className='BlogDetailsPictures'>
                                        <img src={data.descriptionImage1} alt={data.descriptionImage1} className='BlogDetailsPicture' />
                                        <img src={data.descriptionImage2} alt={data.descriptionImage2} className='BlogDetailsPicture' />
                                    </div>
                                    <div className='BlogDetailsSummery'>
                                        <p dir='rtl' style={{color: "#475467"}}>{data.detailsDescription4}</p>
                                        <h1 dir='rtl' className='middleBlogHeader' style={{color:"#4CA773"}}>"{data.title}"</h1>
                                        <p dir='rtl' style={{color: "#475467"}}>{data.detailsDescription4}</p>
                                    </div>
                                    <div className='BlogPostInfo'>
                                        <div className='tags' id='hashtagsDetails' dir='rtl'>
                                            {
                                                tags && tags.map((tag)=> (
                                                    <Link className='link' key={tag} to={`/blog/${tag}`} style={{background: 'rgba(0, 0, 0, 0.65)',color:"#FFF"}}>#{tag}</Link>
                                                ))
                                            }
                                        </div>

                                        <br />
                                        <Divider/>
                                        <br />

                                        <div className='authorInfo'>
                                            <CardContent style={{ direction: "rtl", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'right' }}>
                                                <Avatar src={`/${targetUser?.profile}`} alt={'authorName'} style={{ marginLeft: 10, objectFit:'cover' }} />
                                                <div>
                                                    <div>
                                                        <Typography fontFamily={'Yekan, sans-serif'} variant="subtitle1" color={'#475467'}>
                                                            {data.authorName} {data.authorLastName}
                                                        </Typography>
                                                        <Typography fontFamily={'Yekan, sans-serif'} variant="body2" color={"#98A2B3"} >
                                                            {targetUser?.description}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className='authorIcons'>
                                                <Link to={targetUser?.linkedin} ><FaLinkedin       size={25} color='#495057' /></Link>
                                                <Link to={targetUser?.pinterest}><FaPinterest      size={25} color='#495057' /></Link>
                                                <Link to={targetUser?.twitterX} ><FaSquareXTwitter size={25} color='#495057' /></Link>
                                                <Link to={targetUser?.facebook} ><FaFacebook       size={25} color='#495057' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='timeProgressBlogDetails' dir='rtl'>
                                    <div style={{display:"flex", alignItems:"center"}}>
                                        <span>{usePersianNumber(data.date)}</span>&nbsp;
                                        <span><Line/></span>&nbsp;
                                        <span>{usePersianNumber(data.timeToRead)} دقیقه</span>
                                    </div>
                                    <VerticalProgressBar bgcolor={"#6AD095"} progress={data.timeToRead} width={"5px"}/>
                                    <span id="dissapear" style={{marginRight:"4rem"}}>پایان</span>
                                </div>
                            </div>
                            <div className='BlogRelatablePosts'>
                                <h3 dir='rtl' style={{marginBottom:"2rem", marginRight:"1.5rem", fontSize:"1.125rem"}}>پست های مرتبط</h3>
                                {/* <div className='blogCardsContainer' dir='rtl'>
                                    <Grid container spacing={3}>
                                        {
                                            relevent ? relevent.map((item) => (
                                                <Grid item xs={12} sm={6} md={4} key={item.id}>
                                                    <BlogCard
                                                        id={item.id} 
                                                        imageData={item.imageData}
                                                        date={item.date}
                                                        title={item.title}
                                                        description={item.description}
                                                        authorName={item.authorName}
                                                        authorDescription={item.authorDescription}
                                                        authorPicture={item.authorPicture}
                                                        hashtags={item.hashtags}
                                                    />
                                                </Grid>
                                            ))
                                            :
                                            <h1>loading ...</h1>
                                        }
                                    </Grid>
                                </div> */}
                                                            <div className='blogCardsContainer' style={{ marginTop: "5rem", marginBottom: "2rem" }}>
                                <Grid container spacing={3}>
                                    {relevent?.map((card, index) => {
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
                            </div>
                        </React.Fragment>
                }
        </div>
    )
}

export default BlogDetails