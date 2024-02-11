import React, { useState , useRef, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
// Styles
import './EventDetailStyle.css';
import axios from 'axios';
// Components
import VideoPlayer from '../components/modules/VideoPlayer';
import usePersianNumber from '../helper/PersianNumbers';
import EventDetailTeacherCard from '../components/modules/EventDetailModule/EventDetailTeacherCard';
// Icons
import { FaChevronLeft } from "react-icons/fa";
import { Button } from '@mui/material';
import { color } from '@mui/system';
import { CiCalendarDate } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { FaPercentage } from "react-icons/fa";
import moment from 'jalali-moment';
import { number } from 'prop-types';



const EventDetail = () => {
const {id} = useParams();
const eventdetailId = parseInt(id , 10);

const [eventDetailData , setEventDetailData] = useState([]);
const [teachersData , setTeachersData] = useState([])

useEffect(() => {
  const fetchData = async () => {
      try {
          const response = await axios.get('https://backend.sadra-edu.com/eventsDetail/data');
          const jsonData = response.data;
          setEventDetailData(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  const fetchData2 = async () => {
    try {
        const response = await axios.get('https://backend.sadra-edu.com/evetnDetailTeachersData/data');
        const jsonData = await response.data;
        setTeachersData( await jsonData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


fetchData2();
  fetchData();
}, []);




const dataCard = eventDetailData?.length ? eventDetailData?.find((item) => item.id === eventdetailId) : [] ;
const {
  category ,
  title , 
  teacher ,
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
} = dataCard;


const test = async ()=>{
  
}


const newImage = image?.split('/').splice(1).join('/');

  const [timerDays , setTimerDays] = useState("00");
  const [timerHours , settimerHours] = useState("00"); 
  const [timerMinuts , setTimerMinuts] = useState("00");
  const [timerSecounds , setTimerSecounds] = useState("00");
  

    let interval = useRef();
    const startTimer = async ()=> {

      const dateMonth = await date.split(" ")[0];
      const dateDay = await date.split(" ")[1];
      const dateYear= await date.split(" ")[2];
      

      const timeHour = await time.split(" ")[0];
      const timeMin = await time.split(" ")[1];
      const timeSecound= await time.split(" ")[2];

      const allTime = `${ dateYear } ${ dateDay } ${ dateMonth } ${timeHour}:${timeMin}:${timeSecound }`

      setTimeout(() => {
        const countdownDate = new Date(allTime).getTime();
        interval = setInterval(()=> {
        const now = new Date().getTime()
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
        const minuts = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))
        const secounds = Math.floor((distance % (1000 * 60)) / 1000)
        
        if(distance < 0){
            // time stoper
            clearInterval(interval.current)
        }else {
            setTimerDays(days)
            settimerHours(hours)
            setTimerMinuts(minuts)
            setTimerSecounds(secounds)
        }
      }, 1000);

    } , 1000)
  }
  
// when site loaded
  useEffect(()=> {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  } , [startTimer])



  return (
    <>
      <div className='Details' dir='rtl'>
        <div className='HeadDetail'>
          <div>
          <Link to={"/events"} ><p style={{ display:"flex", alignItems:"center"}}><span style={{color:"#98A2B3"}}>{category}</span> &nbsp; <FaChevronLeft color='#FFF' /> &nbsp; <span style={{color:"#FFF"}}>{title}</span></p></Link>
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
            <div className='info1'>
              <h3>{title_description1}</h3>
              <p>{description1}</p>
            </div>
            <div className='info2'>
              <h3>{title_description2}</h3>
              <p>{description2}</p>
            </div>
            <div className='info3'>
              <h3>{title_description3}</h3>
              <p>{description3}</p>
            </div>
            <div className='info4'>
              <h3>{title_description4}</h3>
              <p>{description4}</p>
            </div>
        </div>
          {/* Card */}
          <div className='CardContainer'>
            <div className='CardDetail'>
                <img src={`/${newImage}`} alt={title} />
              <div className='topCard'>
                <p>{teacher}</p>
                {/* <span id='price'><span>{price}</span><span>هزار تومان</span></span> */}
                {/* test */}
        
                <div>
                <span style={{display : "flex"}}>
                    {
                      Number(discount) ? (
                      <div>
                      <span id="price">{price * (100 - Number(discount)) / 100 ? (
                      <div style={{display : "flex" , flexDirection : "column" , position : "relative" , alignItems : "center" , justifyContent : "center"}}>
                      <span>{price * (100 - Number(discount)) / 100}</span><span style={{fontSize : 12}} >هزارتومان</span>
                      <span style={{ opacity : 0.5 , fontSize : 16 ,position : "absolute" ,top : -38 , textDecoration : "line-through" , display : "flex" , flexDirection : "column" , alignItems : "center" , justifyContent : "center"}} >{price}<span style={{position : "absolute" , top : 13}} >هزارتومان</span> </span>
                      {/* <span style={{position : "absolute" , top : -270 , left : -14 , color : "white" , backgroundColor : "#F04438" , fontSize : 17 , padding : 5 , borderRadius : 1000 , display : "flex" , alignItems : "center"}} >{discount}%</span> */}
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
                </div>

                {/* test */}
              </div>
                <Button variant={"outlined"}>همین حالا ثبت نام کن</Button>
              <div className='cadTitle'>
                <h3>توضیحات رویداد</h3>
                <h1>{detailSubtitle}</h1>
              </div>
              <div className='CardFooter'>
                <h2>جزئیات رویداد</h2>
              <div className='time'>
                <span style={{display : "flex" , alignItems : "center" , justifyContent : "flex-start" }} >
                  <CiCalendarDate style={{width : 25 , height : 25 , marginLeft : 5 , marginBottom : 4}} />
                  {usePersianNumber(date?.split(" ")[0])}<span style={{padding : 3}} >/</span>{usePersianNumber(date?.split(" ")[1])}<span  style={{padding : 3}} >/</span>{usePersianNumber(date?.split(" ")[2])}
                </span>
                <span style={{display : "flex" , alignItems : "center" , justifyContent : "flex-start" }} >
                  <FaRegClock style={{width : 25 , height : 25 , marginLeft : 5 , marginBottom : 4}} />
                  {usePersianNumber(time?.split(" ")[1])}<span style={{padding : 3}} >:</span>{usePersianNumber(time?.split(" ")[0])}
                </span>
              </div>
              </div>
            </div>
          </div>
      </div>
      <div className='detailFooter' dir='rtl'>
        <div className='detailFooterTitle'>
          <h2>مروری بر دوره‌های پیشین</h2>
        </div>
          <VideoPlayer  video={videoSrc} poster={thumbnail}   />
        <div style={{display : "flex" , alignItems : "center" , justifyContent : "center" , marginTop : 150 , flexWrap : "wrap"}} >
        {
          teachersData.map(item =><EventDetailTeacherCard key={item.id} data={item} />)
        }
        </div>
      </div>
    </>
  )
}

export default EventDetail
