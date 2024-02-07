import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider } from '@mui/material'
import InputContact from '../components/modules/input/InputContact'

//css 
import './ContactUs.css'


function ContactUs() {

    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [description,setDescription] = useState('')

    return (
        <div dir='rtl' className='contactDiv' >
            <div className='contactContainer'>
                <div className='contactUsTexts'>
                    <div className='contactUsTextsHeader'>
                        <h1 className="contactUsHeader">تماس با ما</h1>
                        <p>در صورت داشتن هر سوال و یا مشاوره ای میتوانید از مسیر ها زیر با ما در ارتباط باشید</p>
                    </div>
                    <div className='contactInfo'>
                        <div className='contactIconContainer'>
                            <span className='contactIcon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_1216_2162)">
                                        <path d="M5 12H3L12 3L21 12H19" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.5304 13 14.0391 13.2107 14.4142 13.5858C14.7893 13.9609 15 14.4696 15 15V21" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1216_2162">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                &nbsp;
                                آدرس
                            </span>
                            &nbsp;
                            &nbsp;
                            <span>تهران، خیابان نواب، جنب بانک شهر، پلاک۶ ، طبقه دوم</span>
                        </div>
                        <div className='contactIconContainer'>
                            <span className='contactIcon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_1216_2171)">
                                        <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1216_2171">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                &nbsp;
                                تماس
                            </span>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <Link to={'tel:02144672237'} dir='ltr'>۰۲۱ - ۴۴۶۷۲۲۳۷</Link>
                        </div>
                        <div className='contactIconContainer'>
                            <span className='contactIcon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_1216_2179)">
                                        <path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 7L12 13L21 7" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1216_2179">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                &nbsp;
                                ایمیل
                            </span>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <Link to={'mailto:info@sadra.com'} style={{cursor:"pointer"}}>info@sadra.com</Link>
                        </div>
                    </div>
                    <Divider/>
                    <div>
                        <div className='contantWorkDetails'>
                            <h1>با ما همکاری کن</h1>
                            <p>اگر دوست داری با تیم صدرا همکاری کنی حتما به ما پیام بده تا در اولین فرصت همکاران ما با شما تماس بگیرن.</p>
                        </div>
                        <div className='contactWorkForm'>
                            <form action="" style={{
                                margin:"3.25rem 0", 
                                display:"flex", 
                                flexDirection:"column", 
                                gap:"1.5rem"
                            }}>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <InputContact id={'name'} className='contactInput' setVariable={setName} variable={name} title={"نام"} type={'text'} width={'47%'} />
                                    <InputContact id={'lastName'} className='contactInput' setVariable={setLastName} variable={lastName} title={"نام خانوادگی"} type={'text'} width={'47%'} />
                                </div>
                                <InputContact id={'phone'} setVariable={setPhoneNumber} variable={phoneNumber} title={"شماره موبایل"} type={'text'} width={'100%'} />
                                <div style={{display:"flex", flexDirection:"column", gap:"0.5rem"}}>
                                    <label htmlFor='description' style={{cursor:"pointer", display:"inline"}}>توضیحات</label>
                                    <textarea cols="30" rows="7" 
                                        id='description'
                                        className='textArea'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    >
                                    </textarea>
                                </div>
                                <Button variant="contained" sx={{
                                    backgroundColor: "#4CA773",
                                    width:"fit-content"
                                }}>Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='ContactImage' style={{display:"flex", alignItems:"center", justifyContent:"left"}}>
                    <img  src="/assets/contact/Banner image.png" alt="banner pic" />
                </div>
            </div>
        </div>
    )
}

export default ContactUs