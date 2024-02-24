import React, { useEffect, useState } from 'react'
import axios from 'axios';
// Styles
import './Header.css';

// Components
import SideBar from './Drawer';

// Logo
import {Logo} from './svg/Logo';
import Logo2 from './svg/Logo2';
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import sadraLogo from '/public/sadraLogo.svg'

const Header = () => {

  const [userId, setUserId] = useState(null);
  
  useEffect(() => {
      axios.get('https://backend.sadra-edu.com/dashboard/token', {withCredentials: true})
          .then(response => {
          const { id } = response.data;
          setUserId(id);
      })
      .catch(error => {
        console.error('please login first !');
      });
  }, []); 

  const navigate = useNavigate()
  const clickHandler = () => {
    navigate('/auth/register');
  }
  const dashboardHandler = () => {
    navigate('/dashboard');
  }

  const [isOpen , setIsopen] = useState(false)
  

  return (
    <div className='NavBar' >
      <div className='login_Btn_con'>
        {
          userId ? 
            <button className='login_Btn' style={{cursor:"pointer"}} onClick={() => dashboardHandler()}>داشبورد</button>
            :
            <button className='login_Btn' style={{cursor:"pointer"}} onClick={() => clickHandler()}>ثبت نام و ورود</button>
        }
        <RxHamburgerMenu className='burgur' onClick={()=> setIsopen(e => !e)} />
      </div>    
      <div className='List_Logo'>
      <div>
          <ul>
              <li><NavLink className='link' to={'/contact'}>تماس با ما</NavLink></li>
              <li><NavLink className='link' to={'/success'}>موفقیت دانشجویان</NavLink></li>
              <li><NavLink className='link' to={'/employment'}>همکاری با ما</NavLink></li>
              <li><NavLink className='link' to={'/blog'}>بلاگ</NavLink></li>
              <li><NavLink className='link' to={'/events'}>رویدادها</NavLink></li>
              <li><NavLink className='link' to={'/classes'}>کلاس‌ها</NavLink></li>
              <li><NavLink className='link' to={'/'}>صفحه اصلی</NavLink></li>
          </ul>
      </div>

      <div className='logo_Container'>
          <Logo2 className="logo2" />
          <img className='logo' src={"/assets/logosadra.png"} />
      </div>
      </div>
    <SideBar setIsopen={setIsopen} isOpen={isOpen} />
    </div>
  )
}

export default Header
