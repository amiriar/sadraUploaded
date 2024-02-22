import React, { useEffect, useState } from 'react'

// Components
import SearchBox from '../components/modules/SearchBox'
import { Box } from '@mui/material'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import EventCar from '../components/modules/EventModules/EventCard';
import MenuIcon from '../components/layouts/svg/MenuIcon';
import MobileSettingIcon from '../components/layouts/svg/MobileSettingIcon';
// import { Box, Drawer, Typography } from '@mui/material'
import { Drawer, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaMinus } from "react-icons/fa";
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { CiSettings } from "react-icons/ci";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


// Styles
import './Events.css'

// DB
import { RenderCategory } from '../components/modules/HomePageModule/CardPopTuData';

import { Link } from 'react-router-dom';

const Events = () => {
  const [status , setStatus] = useState(true)
  const [status2 , setStatus2] = useState(true)
  const [status3 , setStatus3] = useState(true)
  const [setting , setSetting] = useState(false)
  const [value, setValue] = React.useState('1');
  const [TabHeaders , setTabHeaders] = useState([
    {
      id : 1 ,
      title : "رویدادها"
    }
    ,
    {
      id : 2 ,
      title : "دوره ها"
    }
    ,
    {
      id : 3 ,
      title : "مدرس‌ها"
    }
    
  ])

  const [popularEvent , setPopularEvent] = useState([
  {
      id : 1 ,
      title : "UI Design"
  }
  ,
  {
      id : 2 ,
      title : "UX Design"
  } 
  ,
  {
      id : 3 ,
      title : "Front-end"
  }
])

const categories = [
  {
    id : 1 ,
    title : "UI/UX طراحی",
    quantity : 160
  }
  ,
  {
    id : 2 ,
    title : "Graphic طراحی",
    quantity : 90
  }
  ,
  {
    id : 3 ,
    title : "Game طراحی",
    quantity : 25
  }
  ,
  {
    id : 4 ,
    title : "Front-End",
    quantity : 5
  }
  ,
  {
    id : 5 ,
    title : "Back-End" ,
    quantity : 20
  }
  ,
  {
    id : 6 ,
    title : "Data Science",
    quantity : 65
  }

]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const statusHandler = ()=>{
    setStatus(e => !e)
  }

  const statusHandler2 = ()=>{
    setStatus2(e => !e)
  }

  const statusHandler3 = ()=>{
    setStatus3(e => !e)
  }

  const mobileSetting = ()=>{
    setSetting(e => !e);
  }


  const [data , setData] = useState([]);
  useEffect(()=> {
    setValue("1")
    const fetchData = async () => {
      try {
          const response = await fetch('https://backend.sadra-edu.com/events/data');
          const jsonData = await response.json();
          setData(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  fetchData();
  } , [])
  
  return (
    <div className='eventContainer'>
      <div className='eventHeader'>
        <h1 dir='rtl'>رویدادهای صدرا</h1>
        <p dir='rtl'>صدرا با فراهم کردن شرایطی ایده‌آل، سالانه رویدادهای زیادی در حوزه‌ی تکنولوژی در شهرهای بزرگی مثل تهران، اصفهان، مشهد و شیراز برگزار می‌کند که مدرسان این رویدادها از بهترین‌ مدرسان کشور بوده و آماده‌ی انتقال دانش خود به دانشجویان می‌باشند. </p>
        <SearchBox dir="ltr" />
        <span id='popStyle'> {popularEvent && popularEvent.map((item , index) => <span key={index} >{`${item.title} , `}</span> )} : محبوب‌ها</span>
      </div>


    <div className='eventBody'>
      <div className='tutorialBox'>


<Box sx={{ width: '100%', typography: 'body1' , direction : "rtl" }}>
  <TabContext value={value}>


    {
      TabHeaders.map((Tab) => (
        <TabPanel key={Tab.id} value={Tab.id.toString()} >
          <div key={Tab.id} className='event_card_info'>
                {
                  data.filter((item)=> item.category === Tab.title).map((item)=>(
                    <Link key={item.id} to={`/events/${item.id}`}><EventCar key={item.id} {...item} /></Link>
                  ))
                }
          </div>
        </TabPanel>
      ))
    }


  </TabContext>
</Box>


</div>
<div>
</div>


{/* Mobile  */}

  <div className='MobileFilter'>
  <button onClick={mobileSetting}> <CiSettings style={{width : 30 , height : 30 , color : "white"}} /></button>
  </div>

  <div className={setting ? "mobileS_active" : "mobileS_de"}>
    <Drawer anchor='left' open={setting} onClose={()=> setSetting(false)}>
          <Box p={2} width='250px' textAlign='center' role='presentation'>
          <Accordion defaultExpanded sx={{background : "none"}} >
        <AccordionSummary
          expandIcon={<FaMinus />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography variant="h6" sx={{fontFamily : "Yekan"}} >دسته‌ بندی‌ ها</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {categories.map(Category=>(
              <li className='ListItems'>
                <span> <Checkbox {...label} color="success" /> <span>({Category.quantity}) {Category.title}</span></span>
              </li>
            ))
            }
          </ul>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded sx={{background : "none"}} >
        <AccordionSummary
          expandIcon={<FaMinus />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography variant="h6" sx={{fontFamily : "Yekan"}} >قیمت</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>رایگان</span></span></li>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>تخفیف‌دار ها</span></span></li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{background : "none"}} >
        <AccordionSummary
          expandIcon={<FaMinus />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography variant="h6" sx={{fontFamily : "Yekan"}} >زمان</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>رویدادهای آینده</span></span></li>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>رویدادهای گذشته </span></span></li>
          </ul>
        </AccordionDetails>
      </Accordion>
          </Box>
    </Drawer>
    </div>


  
  {/* Mobile  */}
  <div className='FilterContainer'>

      <Accordion defaultExpanded sx={{background : "none"}} >
        <AccordionSummary
          expandIcon={<FaMinus />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography variant="h6" sx={{fontFamily : "Yekan"}} >دسته‌ بندی‌ ها</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {categories.map(Category=>(
              <li className='ListItems' key={Category.item} >
                <span> <Checkbox {...label} color="success" /> <span>({Category.quantity}) {Category.title}</span></span>
              </li>
            ))
            }
          </ul>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded sx={{background : "none"}} >
        <AccordionSummary
          expandIcon={<FaMinus />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography variant="h6" sx={{fontFamily : "Yekan"}} >قیمت</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>رایگان</span></span></li>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>تخفیف‌دار ها</span></span></li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{background : "none"}} >
        <AccordionSummary
          expandIcon={<FaMinus />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <Typography variant="h6" sx={{fontFamily : "Yekan"}} >زمان</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>رویدادهای آینده</span></span></li>
            <li className='ListItems' > <span> <Checkbox {...label} color="success" /> <span>رویدادهای گذشته </span></span></li>
          </ul>
        </AccordionDetails>
      </Accordion>


  </div>
  

</div>   
</div>

  )
}

export default Events
