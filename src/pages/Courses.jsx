import React, { useRef } from 'react'
import { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Components
import SearchBox from '../components/modules/SearchBox'
import ClassCard from '../components/modules/classes/ClassCard';
import EventCard from '../components/modules/EventModules/EventCard';
//css
import './Classes.css'

// Icons
import { IoGameControllerOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { CiPen } from "react-icons/ci";
import { FiLayout } from "react-icons/fi";
import { LuGitFork } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { IoIosApps } from "react-icons/io";
import { FaNetworkWired } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { GrVirtualStorage } from "react-icons/gr";
import { GiNetworkBars } from "react-icons/gi";
import { IoShareSocial } from "react-icons/io5";
import { TbSocial } from "react-icons/tb";
import { IoIosCreate } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { MdOutlineSocialDistance } from "react-icons/md";

// Flags
import "/node_modules/flag-icons/css/flag-icons.min.css";

// Mui
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import axios from 'axios';


function Classes() {

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
            categorie : "زبان" ,
            iconName : IoLanguage , 
        } ,
        {
            id : 2 ,
            categorie : "فناوری اطلاعات" ,
            iconName : FaDatabase  , 
        } ,
        {
            id : 3 ,
            categorie : "رسانه" ,
            iconName : FaNetworkWired  , 
        } ,
    ]

    const [data , setData] = useState([]);
    const [dataEvent , setdataEvent] = useState([]);
    const [future , setFuture] = useState([])
    useEffect(()=> {
        const fetchData = async () => {
        try {
            const response = await fetch('https://sadra-edu.com/api/Classes/data');
            const jsonData = await response.json();
            setData(jsonData);
            const response2 = await fetch('https://sadra-edu.com/api/ClassEventData/data');
            const jsonData2 = await response2.json();
            setdataEvent(jsonData2);
            const response3 = await fetch('https://sadra-edu.com/api/ClassEventDataFuture/data');
            const jsonData3 = await response3.json();
            setFuture(jsonData3);
        }   catch (error) {
            console.error('Error fetching data:', error);
        }
        
    };
    fetchData();
    } , [])

    const classBodyRef = useRef(null)




    const ListSearcher = async (e) => {
        classBodyRef.current.scrollIntoView({ behavior: 'smooth' });
        let text = e.target.innerText;
    
        try {
            let response;
            if (text === "انگلیسی" || text === "عربی" || text === "ترکی" || text === "روسی" || text === "فرانسه" || text === "اسپانیا" || text === "المانی" || text === "فارسی") {
                response = await axios.post(`https://sadra-edu.com/api/search/categories/lang`, { text });
            } else {
                response = await axios.post(`https://sadra-edu.com/api/search/categories`, { text });
            }
            setData(response.data.data[0]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    const navigate = useNavigate()
    const allHandler = () => {
        navigate("/courses")
    }

    return (
        <div className='classContainer' dir='rtl'>
            <div className='TopClassContainer'>
                <h1>کلاس های صدرا</h1>
                <p>صدرا با فراهم کردن شرایطی ایده‌آل، سالانه رویدادهای زیادی در حوزه‌ی تکنولوژی در شهرهای بزرگی مثل تهران، اصفهان، مشهد و شیراز برگزار می‌کند که مدرسان این رویدادها از بهترین‌ مدرسان کشور بوده و آماده‌ی انتقال دانش خود به دانشجویان می‌باشند. </p>

                <div className='searchBoxContainer'>
                    <SearchBox />
                    <span id='popStyle'> {popularEvent && popularEvent.map((item , index) => <span key={index} >{`${item.title} , `}</span> )} : محبوب‌ها</span>
                </div>

                <div className='Categories'>
                    <h2>دپارتمان ها</h2>
                    <div className='BoxContainer'>
                        <Accordion sx={{width : 300 , paddingTop :  0 , backgroundColor : "#2e2e2e" , }}>
                        <AccordionSummary
                        expandIcon={<IoLanguage style={{color : "white" , width : 40}} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{fontSize : 19 , height : 70 , borderRadius : 2 , backgroundColor : "#2e2e2e" , paddingLeft : 10 , paddingRight : 10 , color : "white" ,  display : "flex" , alignItems : "center" , justifyContent : "center"}}
                        >
                        
                        {categories[0].categorie}
                        
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor : "#2e2e2e" , color : "white"}}>
                            <div className='BoxItems'>
                                <ul className='unorderList' onClick={ListSearcher}>
                                    <li>انگلیسی <span class="fi fi-gb"></span></li> 
                                    <li>عربی <span class="fi fi-ae"></span></li> 
                                    <li>ترکی <span class="fi fi-tr"></span></li> 
                                    <li>روسی <span class="fi fi-ru"></span></li> 
                                    <li>فرانسه <span class="fi fi-fr"></span></li>
                                    <li>اسپانیا <span class="fi fi-es"></span></li>
                                    <li>المانی<span class="fi fi-de"></span></li>
                                    <li>فارسی<span class="fi fi-ir"></span></li>
                                </ul>
                            </div>
                        </AccordionDetails>
                        </Accordion>
                        


                        <Accordion sx={{width : 300 , paddingTop :  0 ,  backgroundColor : "#2e2e2e" , }}>
                        <AccordionSummary
                        expandIcon={<FaDatabase style={{color : "white" , width : 30}} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{fontSize : 19 , height : 70 , borderRadius : 2 , backgroundColor : "#2e2e2e" , paddingLeft : 5 , paddingRight : 5 , color : "white" ,  display : "flex" , alignItems : "center" , justifyContent : "center"}}
                        >
                        
                        {categories[1].categorie}
                        
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor : "#2e2e2e" , color : "white"}}>
                            <div className='BoxItems'>
                                <ul className='unorderList' onClick={ListSearcher}>
                                    <li>شبکه <FaNetworkWired/></li>
                                    <li>امنیت <MdOutlineSecurity/></li>
                                    <li>برنامه نویسی <MdDeveloperMode/></li>
                                    <li>مجازی سازی <GrVirtualStorage/></li>
                                    {/* <li>زیرساخت <GiNetworkBars/></li> */}
                                </ul>
                            </div>
                        </AccordionDetails>
                        </Accordion>


                        <Accordion sx={{width : 300 , paddingTop :  0 , backgroundColor : "#2e2e2e" , }}>
                        <AccordionSummary
                        expandIcon={<IoShareSocial style={{color : "white" , width : 30}} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{fontSize : 19 , height : 70 , borderRadius : 2 , backgroundColor : "#2e2e2e" , paddingLeft : 5 , paddingRight : 5 , color : "white" ,  display : "flex" , alignItems : "center" , justifyContent : "center"}}
                        >
                        
                        {categories[2].categorie}
                        
                        </AccordionSummary>
                        <AccordionDetails sx={{backgroundColor : "#2e2e2e" , color : "white"}}>
                            <div className='BoxItems'>
                                <ul className='unorderList' onClick={ListSearcher}>
                                    <li>طراحی و تدوین <SiAdobephotoshop/></li>
                                    <li>سواد رسانه <TbSocial/></li>
                                    <li>تولید محتوا <MdContentCopy/></li>
                                    <li>نویسندگی <IoIosCreate/></li>
                                    <li>شبکه اجتماعی <MdOutlineSocialDistance/></li>
                                </ul>
                            </div>
                        </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>

            <div className='classBody' ref={classBodyRef}>
                <div className='classBodyTitle'>
                    <h2>دوره های اخیر..</h2>
                    <span onClick={allHandler} style={{cursor:"pointer"}}>نمایش همه <FaLongArrowAltLeft/> </span>
                </div>

                <div className='CardBoxContainer'>
                    {
                    data?.map((item)=> (
                        item.isShown === 1 && <Link key={item.id} to={`/classes/${item.id}`}><ClassCard key={item.id} {...item} /></Link>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Classes