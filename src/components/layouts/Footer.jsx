import React from 'react'
import './Footer.css'

// Logos 
import {Corporations1} from './svg/Corporations';
import {Corporations2} from './svg/Corporations';
import {Corporations3} from './svg/Corporations';
import {Corporations4} from './svg/Corporations';
import {Corporations5} from './svg/Corporations';
import {Logo} from './svg/Logo';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  const linkHandler = () => {
    navigate("/auth/register")
  }
  return (
    <div className='Footer' dir='rtl' >
      <div className='Footer_content'>
        <h1 className='Footer_text_1'>در دوره‌هایی که علاقه داری شرکت کن و رشد شغلی خودت رو ببین</h1>
        <p className='Footer_text_2'>مربیان ما همه چیز را به راحتی به شما آموزش می دهند. امروز با ثبت نام در دوره های عالی با قیمت های مقرون به صرفه، مسیر شغلی خود را بهبود ببخشید.</p>

      {/* <div>
        <button className='start_Btn' style={{cursor:"pointer"}} onClick={linkHandler}>همین حالا شروع کن</button>
      </div> */}

      </div>
      

      <div className='corporations'>      
        <ul>
          <li>
            <img src="../../../assets/logos/سازمان آموزش فنی و حرفه ای کشور سفید.png" alt="aa" className='logoMainPage' />
          </li>
          <li>
            <img src="../../../assets/logos/شرکت فرآورده‌های لبنی میهن سفید.png" alt="aa" className='logoMainPage' />
          </li>
          <li>
            <img src="../../../assets/logos/مجتمع فنی تهران سفید.png" alt="aa" className='logoMainPage' />
          </li>
          <li>
            <img src="../../../assets/logos/مکتب شریف سفید.png" alt="aa" className='logoMainPage' />
          </li>
          {/* <li>
            <img src="../../../public/assets/logos/" alt="aa" className='logoMainPage' />
          </li> */}
        </ul>
      </div>

      <div className='detail_container'>
        <div className='More_Detail'>
        <div className='detail_right' dir='ltr' >
          <div>
            <h1>صدرا</h1>
            <Logo/>
          </div>
          <p dir='rtl'>صدرا یک پلتفرم یادگیری آنلاین ملی است که به هر کسی و در هر کجا دسترسی به دوره های آنلاین را ارائه می دهد.</p>
        </div>

      <div className='lists'>
    
          <div className='Forums'>
            <ul>
              <li><h2>انجمن‌ها</h2></li>
              {/* <li><p>دانشنامه</p></li> */}
              <li><Link to={"/employment"} ><p>سوالات پرتکرار</p> </Link> </li>
            </ul>
          </div>
          <div className='companiese'>
            <ul>
              <li><h2>شرکت</h2></li>
              <li><p>شرایط و قوانین</p></li>
              <li><p>سیاست حفظ حریم خصوصی</p></li>
              <li><p>کوکی‌ها</p></li>
            </ul>
          </div>

          <div className='pages'>
            <ul>
              <li><h2>صفحات</h2></li>
              <li><Link to={"/"} ><p>صفحه نخست</p> </Link> </li>
              <li><Link to={"/classes"} ><p>دوره‌ها</p> </Link> </li>
              <li><Link to={"/events"} ><p>رویدادها</p> </Link> </li>
              {/* <li><Link><p>اساتید</p> </Link> </li> */}
              <li><Link to={"/contact"} ><p>درباره ما</p> </Link> </li>
              <li><Link to={"/employment"} ><p>آموزش در صدرا</p> </Link> </li>
            </ul>
          </div>
    </div>
        

        </div>
      </div>

      {/* <div className='footer_end'>
        <div className='end_container'>

          <div className='socialmedia'>
            <CiFacebook className='icons' />
            <FaInstagram className='icons' />
            <FaTwitter className='icons' />
            <CiLinkedin className='icons' />
          </div>

          <p>Made with ❤️ by Rwin & Amiriar</p>
          
        </div>
      </div> */}

    </div>
  )
}

export default Footer
