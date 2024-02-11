import React, { useEffect, useState } from 'react'

// Styles 
import './Home.css';

// Components
import SearchBox from '../components/modules/SearchBox';
import Line from '../components/modules/Line';
import VideoPlayer from '../components/modules/VideoPlayer';
import CommentCard from '../components/modules/HomePageModule/CommentCard';
import CardPopular from '../components/modules/HomePageModule/CardPopular';
import EventCard from '../components/modules/EventModules/EventCard';
import usePersianNumber from '../helper/PersianNumbers';

// MUI 
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button} from '@mui/material';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

// Icons
import { Mokhaberat , Tapci } from '../components/layouts/svg/workingCorporate';
import { TiMessages } from "react-icons/ti";
import { CiCalendar } from "react-icons/ci";
import { FaLongArrowAltLeft } from "react-icons/fa";
// Media
import imageAbout from '/assets/image_about_us.png'
import { Link } from 'react-router-dom';
// Variabels
import Loading from '../helper/Loading';

const Home = () => {
const [TabHeaders , setTabHeaders] = useState([
  {
    id : 1 ,
    title : "طراحی UI/UX"
  }
  ,
  {
    id : 2 ,
    title : "طراحی گرافیک"
  }
  ,
  {
    id : 3 ,
    title : "انیمیشن و 3D"
  }
  ,
  {
    id : 4 ,
    title : "فرانت‌اند"
  }
  ,
  {
    id : 5 ,
    title : "بک‌اند"
  }
  ,
  {
    id : 6 ,
    title : "IOT"
  }
  
])

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [dataEvent , setdataEvent] = useState([]);
  const [commentData , setCommentData] = useState([]);
  const [popularEvents , setPopularEvents] = useState([])
  const [CommentData , setCommetData] = useState([]);
  useEffect(()=> {
    const fetchData = async () => {
      try {
          const response = await fetch('https://backend.sadra-edu.com/HomeEventData/data');
          const jsonData = await response.json();
          setdataEvent(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  const fetchData2 = async () => {
      try {
          const response = await fetch('https://backend.sadra-edu.com/HomeContactsDetail/data');
          const jsonData = await response.json();
          setCommentData(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  const fetchData3 = async () => {
    try {
        const response = await fetch('https://backend.sadra-edu.com/HomePopularData/data');
        const jsonData = await response.json();
        setPopularEvents(jsonData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
const fetchData4 = async () => {
  try {
      const response = await fetch('https://backend.sadra-edu.com/HomeComment/data');
      const jsonData = await response.json();
      setCommetData(jsonData);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};
  fetchData();
  fetchData2();
  fetchData3();
  fetchData4();
  } , [])

  return (
    <>
    <div className='Home'>
      <div className='BoxData'>
        <h1>مؤسسه آموزشی و پژوهشی صدرا</h1>
        <h2>دوره مورد علاقت رو شرکت کن، گارانتی پیدا کردن کار با ما</h2>
        <p>با شرکت در دوره‌های آموزشی صدرا، از صفر شروع کن و در مسیر یادگیری با بهترین متد‌های آموزشی ما همراه شو، تا ما پلی باشیم برای ورود تضمینی به بازار کار</p>
        <SearchBox firstWidth="80%" />
      </div>

      <div className='BoxImage'>
        <img src={"/assets/manLaptop.png"} />
      </div>
    </div>


    <div className='Boxgraduate'>
      <p>فارغ التحصیلان دوره‌های ما، در  بهترین شرکت‌های کشور مشغول به کارند</p>
      <div className='BoxgraduateIcon'>
      <Mokhaberat/>
      <Tapci/>
      <Mokhaberat/>
      </div>
    </div>

    {/* Why US */}

    <div className='why_Container' id='maxWidth'>
      <div className='why_us'>
        <div className='why_us_Icons' id='maxWidth'>
          <Line/>
          <h2>چرا ما</h2>
        </div>
        <h1>شرکت در دوره‌ها مساوی با ورود قطعی به بازار کار</h1>
        <p>صدرا، از متدهایی استفاده می‌کنه که مسیر یادگیری برای شما هموارتر می‌کنه و نیروی کاری تربیت می‌کنه که صدرا با افتخار به شرکت‌های موفق معرفی می‌کنه و اشتغال به کار شما رو، بعد از دوره تضمین می‌کنه.</p>
        <div className='Box_Container' >
          <div className='data_Box1'>
            <h1 style={{color : '#fff'}} >پشتیبانی بعد از اتمام دوره</h1>
            <p style={{color : '#fff'}}>اگر در طول دوره‌ یا بعد از اتمام آن مشکل دارید، امکان گفت و گو و رفع مشکل برای شما وجود دارد.</p>
            <CiCalendar className='Icon' />
          </div>


          <div className='data_Box2'>
            <h1 style={{color : '#fff'}}>دوره‌های آفلاین</h1>
            <p style={{color : '#fff'}}>اگر امکان شرکت در دوره‌های حضوری یا آنلاین را ندارید، امکان استفاده از ویدیوهای ضبط شده برای شما دوره‌ها وجود دارد.</p>
            <TiMessages className='Icon' />
          </div>
        </div>
      </div>    
    </div>
{/* part Three Media vidoe */}
    <div className='learn_container' id='maxWidth'>
      <div className='learn_icon'>
        <h2>آموزش ما</h2>
        <Line/>
      </div>

      <h1>استفاده از متدهای جدید آموزشی</h1>
      <p dir='rtl'>صدرا، از استانداردها و چارچوب‌های سفارشی جدید آموزشی استفاده می‌کنه ترکیبی از ترکیبی از CSTA ،ISTE ،PBLو ADIF است که در حال حاضر در آمریکا و کانادا در حال اجراست و باعث سهولت در یادگیری دانشجویان و دانش‌آموزان شده و پیشرفت آن‌ها به وضوح، قابل رویت است.</p>
      <div className='Video_Container'>
        <VideoPlayer video={'../../assets/videoMain.mp4'} poster={'../../assets/videoBG.jpeg'} />
      </div>
    </div>

    <div className='Contact_slider' id='maxWidth'>
      <div className='success_container'>
        <h2>داستان‌های موفقیت</h2>
        <Line/>
      </div>

      <h1>بیش از {usePersianNumber('500')} دانش‌آموخته از مسیر خود راضی بودند</h1>
  <div className='Slider'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {commentData.map((item)=> (
          <SwiperSlide key={item.id}>
            <p id='cardComment' style={{padding:"0rem 5rem", textAlign:"justify", textJustify:"inter-word"}}>{item.comment}</p>
            <img src={item.profile} />
            <p id='cardName'>{item.name}</p>
            <p id='cardJob'>{item.job}</p>
          </SwiperSlide>
        ))}
      </Swiper>
  </div>

      <div className='contact_corporates'>
        <Tapci className="icons_contact"/>
        <Tapci className="icons_contact"/>
        <Tapci className="icons_contact"/>
      </div>
    </div>
    {/* Part Five */}

    <div className='popular_Tutorial' id='maxWidth' dir='rtl' >
        <div className='popIcons'>
          <Line/>
          <h2>دوره‌های محبوب</h2>
    </div>


    <div className='popTexts'>
      <div className='dataCon1'>
        <h2>بیش از 100 دوره‌ی فعال برای پیشرفت شما</h2>
      </div>

      <div className='dataCon2'>
        <h2>ما طیف وسیعی از دسته‌ها را برای کمک به شما در انتخاب دوره‌هایی که متناسب با تخصص شما هستند ارائه می‌کنیم. بیش از 100 دوره شما را از پایه راهنمایی می کند.</h2>
      </div>
    </div>


    {/* dataEvent */}
    <Box  sx={{ minHeight : '602px' ,  width: '100%', typography: 'body1', direction : "rtl" , mt : "6rem"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" TabIndicatorProps={{style:{ backgroundColor: "#4CA773" ,  }}} onChange={handleChange}>
            {
              TabHeaders.map((item) => <Tab key={item.id} sx={{fontFamily:"Yekan,sans-serif"}} label={item.title} value={item.id.toString()} /> )
            }
          </TabList>
        </Box>
        {
          TabHeaders.map((Tab)=> (
            <TabPanel key={Tab.id} value={Tab.id.toString()} >
            <div className='popCardEvent'>
              {
                popularEvents.filter((item)=> item.category === Tab.title).map((item)=> (
                    <CardPopular key={item.id} {...item} />
                ))
              }
            </div>
            </TabPanel>
          ))
        }
      </TabContext>
      </Box>
    </div>
    <div className='mobile_reverse' id='maxWidth'>
        <div className='home_about_con'>
            <div className='about_image_con'>
              <div className='about_data'>
              <div>
                <h2>54M</h2>
                <p>دانش‌آموز در حال استفاده از این سامانه</p>
              </div>
              <div>
                  <h2>3.2K+</h2>
                  <p>دوره موجود در دسته‌بندی‌های مختلف</p>
              </div>
              <div>
                <h2>600</h2>
                <p>مربی مجرب که به شما آموزش می‌دهند</p>
              </div>
              </div>
            <div className='about_img_container'>
              <img src={imageAbout} alt='man' />
            </div>
          </div>
          <div className='about_text'>
            <div className='about_icons'>
              <h1>درباره  ما</h1>
              <Line/>
            </div>
            <h1 dir='rtl'>افزایش رشد فردی و تقویت استعداد شما</h1>
            <p dir='rtl'>با بیش از یک دهه فعالیت زیرا همیشه می خواهیم خدمات آموزشی ارائه دهیم که در مدارس آموزش داده نمی شود.</p>
            <Button variant="outlined" sx={{ width : 150 , height : 45 , color : "#4CA773" , borderColor : "#4CA773" , borderRadius : 15}} >بیشتر بدانیم</Button>
          </div>
        </div>
    {/* part Seven  */}
        <div className='event_container'>
              <div className='event_icons'>
                <button><p><FaLongArrowAltLeft style={{margin : 12}} /><Link to="/events" style={{fontFamily:"Yekan, sans-serif"}}>رویدادهای بیشتر</Link></p></button>
                <h2>رویدادهای آینده</h2>
              </div>
              <div className='event_card_data' dir='rtl'>
                {
                window.innerWidth >= 1920 ? dataEvent.slice(0 , 4).map((item) => (
                  <Link key={item.id} to={`/events/${item.id}`} ><EventCard key={item.id} {...item} /></Link>
                  )) : window.innerWidth <= 1440 && dataEvent.slice(0 , 3).map((item) => (
                  <Link key={item.id} to={`/events/${item.id}`} ><EventCard key={item.id} {...item} /></Link>
                  ))
                }
              </div>
        </div>
    </div>

  {/* Part Eight */}
          
  <div className='Comments_container'>
    <div className='Icons_comments'>
      <Line/>
      <h2>نظرات شما</h2>
    </div>

    <h1>نظرات همراهان قبلی صدرا</h1>

<div className='test'>
    <div className='comment_card_container'>
      {CommentData.map((item)=> <CommentCard key={item.id} {...item} />)}
      <div className='comment_card_container2'>
      {CommentData.map((item)=> <CommentCard key={item.id} {...item} />)}
      </div>
</div>

    
    <hr/>

    <div className='comment_card_container3'>
      {CommentData.map((item)=> <CommentCard key={item.id} {...item} />)}
      <div className='comment_card_container4'>
      {CommentData.map((item)=> <CommentCard key={item.id} {...item} />)}
      
      </div>
    </div>

</div>

  </div>
    </>
  )
}

export default Home
