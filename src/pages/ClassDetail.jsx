import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import { Link } from 'react-router-dom';
// Styles
import './ClassDetail.css'
import axios from 'axios';
// Components
import VideoPlayer from '../components/modules/VideoPlayer';
import usePersianNumber from '../helper/PersianNumbers';
import EventDetailTeacherCard from '../components/modules/EventDetailModule/EventDetailTeacherCard';
// Icons
import { FaChevronLeft, FaEllipsisH } from "react-icons/fa";
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material';
import { color } from '@mui/system';
import { CiCalendarDate } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { FaPercentage } from "react-icons/fa";
import moment from 'jalali-moment';
import { number } from 'prop-types';
import { BsStack } from "react-icons/bs";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
// react-query
import { useQuery } from '@tanstack/react-query';
import QuestionIcon from '../components/layouts/svg/QuestionIcon';

export default function ClassDetail() {

  const classCardId = useParams().id;

  const [data , setData] = useState([]);
  const [teachersData , setTeachersData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sadra-edu.com/api/ClassEventData/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const fetchData2 = async () => {
      try {
        const response = await axios.get('https://sadra-edu.com/api/evetnDetailTeachersData/data');
        setTeachersData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const fetchData3 = async () => {
      try {
        const response = await axios.get('https://sadra-edu.com/api/dashboard/token', { withCredentials: true });
        const { id } = response.data;
        setUserId(id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData3();
    fetchData();
    fetchData2();
  }, []);
  


  const dataCard = data.length ? data?.find((item)=> item.id == classCardId) : []
  const {
    title , 
    teacherFirstName ,
    teacherLastName ,
    image ,
    price ,
    discount ,
    Detail_Head_Title ,
    title_description1 ,
    description1 ,
    title_description2 ,
    description2 ,
    title_description3 ,
    description3 ,
    title_description4 ,
    description4 ,
    videoSrc ,
    thumbnail ,
    date , 
    time ,
    detailSubtitle ,
    lessons ,
    level ,
    language,
    headers
  } = dataCard;


  const newImage = image?.split('/').splice(1).splice(1).join('/');

  const [timerDays , setTimerDays] = useState("00");
  const [timerHours , settimerHours] = useState("00");
  const [timerMinuts , setTimerMinuts] = useState("00");
  const [timerSecounds , setTimerSecounds] = useState("00");

  const [userId , setUserId] = useState(null)

// console.log(test === undefined ? "help" :  test)
//    let interval = useRef();
//    const startTimer =  ()=> {


//     interval = setInterval(()=> {
//         const now = new Date().getTime()
//         const distance = countdownDate - now

//         const days = Math.floor(distance / (1000 * 60 * 60 * 24))
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
//         const minuts = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
//         const secounds = Math.floor((distance % (1000 * 60)) / 1000)
        
//         if(distance < 0){
//             // time stoper
//             clearInterval(interval.current)
//         }else {
//             setTimerDays(days)
//             settimerHours(hours)
//             setTimerMinuts(minuts)
//             setTimerSecounds(secounds)
//         }

//     } , 1000)
//   }
  
// // when site loaded
//   useEffect(()=> {
//     startTimer()
//     return () => {
//      clearInterval(interval.current)
//     }
//   } , [])

const navigate = useNavigate()

const sabtHandler = () => {
  if(userId) {
    // sabt nam logic here
  } else{
    navigate("/auth/login")
  }
}


  return (
    <>
    <div className='Details' dir='rtl'>
      <div className='HeadDetail'>
        <div>
        {/* <Link to={"/events"} ><p style={{ display:"flex", alignItems:"center"}}><span style={{color:"#98A2B3"}}>{category}</span> &nbsp; <FaChevronLeft color='#FFF' /> &nbsp; <span style={{color:"#FFF"}}>{title}</span></p></Link> */}
        </div>
        <div className='HeadDetailData'>
          <h1 style={{color:"#F9F9F9"}}>{title}</h1>
          <p style={{color:"#E0E0E0"}}>{Detail_Head_Title}</p>
        </div>
        <div className='timeLeft'>
          <div className='timerStyle'>
            <p>{timerSecounds}</p>
            <p style={{color:"#E0E0E0", fontSize: '1rem'}}>ثانیه</p>
          </div>
          <div className='timerStyle'>
            <p>{timerMinuts}</p>
            <p style={{color:"#E0E0E0", fontSize: '1rem'}}>دقیقه</p>
          </div>
          <div className='timerStyle'>
            <p>{timerHours}</p>
            <p style={{color:"#E0E0E0", fontSize: '1rem'}}>ساعت</p>
          </div>
          <div className='timerStyle'>
            <p>{timerDays}</p>
            <p style={{color:"#E0E0E0", fontSize: '1rem'}}>روز</p>
          </div>
        </div>
      </div>
    </div>
    {/* Body */}
    <div className='bodyDetailContainer' dir='rtl' >
      <div className='infoContainer'>
        <h2 style={{fontSize : 34 , marginBottom : 24 }} >چه چیزی یاد می‌گیریم؟</h2>

          <div className='overView'>
            <div className='overViewBox1'><FaCheck style={{width : 20 , height : 20 , marginLeft : 5}} /> {title_description1}</div>
            <div className='overViewBox1'><FaCheck style={{width : 20 , height : 20 , marginLeft : 5}} /> {title_description2}</div>
            <div className='overViewBox1'><FaCheck style={{width : 20 , height : 20 , marginLeft : 5}} /> {title_description3}</div>
            <div className='overViewBox1'><FaCheck style={{width : 20 , height : 20 , marginLeft : 5}} /> {title_description4}</div>
          </div>
          <div className='Questions'>
              <Accordion>
                <AccordionSummary
                expandIcon={<QuestionIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography fontFamily={"Yekan , sans-serif"} >سرفصل های این دوره :</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography fontFamily={"Yekan , sans-serif"} >
                  {
                    headers?.split(",").slice(0, 100).map((item, index) => (
                      <div className='overViewBox1' key={index}>
                        <FaCheck style={{ width: 20, height: 20, marginLeft: 5 }} />
                        <li>{item}</li>
                      </div>
                    ))
                  }
                  {
                    headers?.split(",").length > 100 && (
                      <div className='overViewBox1'>
                        <h3 style={{marginRight:"25px"}}>و ده ها سرفصل دیگر...</h3>
                      </div>
                    )
                  }
                  </Typography>
                </AccordionDetails>
            </Accordion>
          </div>

          {
            description1 !== "" &&
            <div className='info1'>
              <h3>توضیحات تکمیلی</h3>
              <br />
              {description1?.split('^').map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          }
          {
            description2 !== "" &&
            <div className='info2'>
              {description2?.split('^').map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          }
          {
            description3 !== "" &&
            <div className='info3'>
              {description3?.split('^').map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          }
          {
            description4 !== "" &&
            <div className='info4'>
              {description4?.split('^').map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          }

          
      </div>
        {/* Card */}
        <div className='CardContainer'>
          <div className='CardDetail'>
              <img src={`/${newImage}`} alt={title} />
            <div className='topCard'>
              {
                teacherFirstName.trim().length !== 0 || teacherLastName.trim().length !== 0 ? (
                  <p>استاد {teacherFirstName} {teacherLastName}</p>
                ) : ""
              }
              {/* <span id='price'><span>{price}</span><span>هزار تومان</span></span> */}
      
              {/* <div>
              <span style={{display : "flex"}}>
                  {
                    Number(discount) ? (
                    <div>
                      <span id="price">{price * (100 - Number(discount)) / 100 ? (
                      <div style={{display : "flex" , flexDirection : "column" , position : "relative" , alignItems : "center" , justifyContent : "center"}}>
                        <span>{price * (100 - Number(discount)) / 100}</span><span style={{fontSize : 12}} >هزارتومان</span>
                        <span style={{ opacity : 0.5 , fontSize : 16 ,position : "absolute" ,top : -38 , textDecoration : "line-through" , display : "flex" , flexDirection : "column" , alignItems : "center" , justifyContent : "center"}} >{price} <span style={{position : "absolute" , top : 13}} >هزارتومان</span> </span>
                      </div>
                      ) : (
                            <div style={{position : "relative"}}>
                            <span style={{ opacity : 0.5 ,position : "absolute" , top : -40 , right : 14 , fontSize : 17 , textDecoration : "line-through"}} >{price} <span style={{position : "absolute" , right : -7, top : 17}} >هزارتومان</span></span>
                            <span style={{fontWeight : 700 , fontSize : 23}} >رایگان</span>
                            </div>
                          )}</span>
                    </div>
                    ) : <span id="price">{price} <span id="rial">هزارتومان</span></span>
                  }
              </span>
              </div> */}

              {/* test */}
            </div>
              {/* <Button variant={"outlined"} onClick={sabtHandler}>همین حالا ثبت نام کن</Button> */}
            <div className='cadTitle'>
              <h3>توضیحات دوره</h3>
              <h1>{detailSubtitle}</h1>
            </div>
            <div className='CardFooter'>
              <h2>جزئیات دوره</h2>
            <div className='time'>
              {/* <span style={{display : "flex" , alignItems : "center" , justifyContent : "flex-start" , marginBottom : 10 }} >
                <CiCalendarDate style={{width : 23 , height : 23 , marginLeft : 5 , marginBottom : 4}} />
                {usePersianNumber(date?.split(" ")[0])}<span style={{padding : 3}} >/</span>{usePersianNumber(date?.split(" ")[1])}<span  style={{padding : 3}} >/</span>{usePersianNumber(date?.split(" ")[2])}
              </span> */}
              <span style={{display : "flex" , alignItems : "center" , justifyContent : "flex-start" , marginBottom : 10 }} >
                <FaRegClock style={{width : 20 , height : 20 , marginLeft : 7 , marginBottom : 7}} />
                  طول زمان دوره {usePersianNumber(time?.split(" ")[0])} ساعت
              </span>
              <span style={{display : "flex" , alignItems : "center" , justifyContent : "flex-start" , marginBottom : 10 }} >
                <BsStack style={{width : 20 , height : 20 , marginLeft : 5 , marginBottom : 4}} />
                <span>{usePersianNumber(lessons)} مبحث</span>
              </span>
              <span style={{display : "flex" , alignItems : "center" , justifyContent : "flex-start" , marginBottom : 10 }} >
                <MdOutlineStackedBarChart style={{width : 20 , height : 20 , marginLeft : 5 , marginBottom : 4}} />
                <span>سطح {level}</span>         
              </span>
              <span style={{display : "flex" , alignItems : "center" , justifyContent : "flex-start" , marginBottom : 10 }} >
                <FaEarthAmericas  style={{width : 20 , height : 20 , marginLeft : 5 , marginBottom : 4}} />
                <span>زبان {language}</span>         
              </span>
            </div>
            </div>
          </div>
        </div>
    </div>
    {/* <div className='detailFooter' dir='rtl'>
      <div className='detailFooterTitle'>
        <h2>مروری بر دوره‌های پیشین</h2>
      </div>
        <VideoPlayer  video={videoSrc} poster={thumbnail}   />
      <div style={{display : "flex" , alignItems : "center" , justifyContent : "center" , marginTop : 150 , flexWrap : "wrap"}} >
      {
        teachersData.map(item =><EventDetailTeacherCard key={item.id} data={item} />)
      }
      </div>
    </div> */}
  </>
  )
}
