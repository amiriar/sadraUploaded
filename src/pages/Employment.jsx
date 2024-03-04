import React, { useEffect, useState } from 'react'
// Styles
import './Employment.css'
// Components
import Line from '../components/modules/Line'
import EmploymentDetailCard from '../components/modules/EventDetailModule/EmploymentDetailCard'
import VideoComponent from '../components/modules/succes-modules/VideoComponent'
import QuestionIcon from '../components/layouts/svg/QuestionIcon'
import StudentCard from '../components/modules/succes-modules/StudentCard'
// export {Table , GrowArrow , PowerIcon , PersonWithHeart}
import {Table , GrowArrow , PowerIcon , PersonWithHeart} from '../components/layouts/svg/EmploymentIcon'
// Mui
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from '@mui/material';
import { useDropzone } from 'react-dropzone'
import { showToast } from '../components/modules/AuthModules/Toastify'
import axios from 'axios'
import moment from 'jalali-moment'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import { ToastContainer } from 'react-toastify'
>>>>>>> 7f81f16ead4da51b69ff8e61ffa5ff40712895d0
// DataBase
// import WhysUsDB from '../utils/WhysUsDB.json'
const Employment = () => {
  const [value, setValue] = React.useState(1);
  const [tabHeader , setTabheader] = useState([
    {
      id : 1 ,
      TabTitle : "همه"
    }
    ,
    {
      id : 2 ,
      TabTitle : "محصول"
    }
    ,
    {
      id : 3 ,
      TabTitle : "آموزش"
    }
    ,
    {
      id : 4 ,
      TabTitle : "مارکتینگ"
    }
    ,
    {
      id : 5 ,
      TabTitle : "منابع انسانی"
    }
    ,
    {
      id : 6 ,
      TabTitle : "مالی"
    }
  ])

  const Questions = [
    {
        id : 1 ,
        title : "فرصت‌های شغلی صدرا را از کجا ببینم؟ چطور اقدام کنم؟" ,
        question : "می‌توانید این آگهی‌ها را در بخش «فرصت‌های شغلی در صدرا» در همین صفحه و وب‌سایت‌های کاریابی ببینید و رزومه‌تان را ارسال کنید."
    }
    ,
    {
        id : 2 ,
        title : "فرایند جذب در صدرا چگونه است؟" ,
        question : "می‌توانید این آگهی‌ها را در بخش «فرصت‌های شغلی در صدرا» در همین صفحه و وب‌سایت‌های کاریابی ببینید و رزومه‌تان را ارسال کنید."
    }
    ,
    {
        id : 3 ,
        title :  "کار در صدرا چه مزایایی دارد؟" ,
        question : "می‌توانید این آگهی‌ها را در بخش «فرصت‌های شغلی در صدرا» در همین صفحه و وب‌سایت‌های کاریابی ببینید و رزومه‌تان را ارسال کنید."
    }
    ,
    {
        id : 4 ,
        title : "چطور می‌توانم محیط کار و فرهنگ صدرا را بیشتر بشناسم؟" ,
        question : "می‌توانید این آگهی‌ها را در بخش «فرصت‌های شغلی در صدرا» در همین صفحه و وب‌سایت‌های کاریابی ببینید و رزومه‌تان را ارسال کنید."
    }
    ,
    {
        id : 5 ,
        title : "چطور می‌توانم محیط کار و فرهنگ صدرا را بیشتر بشناسم؟" ,
        question : "می‌توانید این آگهی‌ها را در بخش «فرصت‌های شغلی در صدرا» در همین صفحه و وب‌سایت‌های کاریابی ببینید و رزومه‌تان را ارسال کنید."
    }
    ,
    {
        id : 6 ,
        title : "فرصت‌های شغلی صدرا را از کجا ببینم؟ چطور اقدام کنم؟",
        question : "می‌توانید این آگهی‌ها را در بخش «فرصت‌های شغلی در صدرا» در همین صفحه و وب‌سایت‌های کاریابی ببینید و رزومه‌تان را ارسال کنید."
    }
    ,
    {
        id : 7 ,
        title : "فرایند جذب در صدرا چگونه است؟" ,
        question : "می‌توانید این آگهی‌ها را در بخش «فرصت‌های شغلی در صدرا» در همین صفحه و وب‌سایت‌های کاریابی ببینید و رزومه‌تان را ارسال کنید."
    }
    ,
    {
        id : 8 ,
        title : "کار در صدرا چه مزایایی دارد؟" ,
        question : "می‌توانید این آگهی‌ها را در بخش «فرصت‌های شغلی در صدرا» در همین صفحه و وب‌سایت‌های کاریابی ببینید و رزومه‌تان را ارسال کنید."
    }
    
]
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [data , setData] = useState([]);
  const [about , setAbout] = useState([]);
  const [jobTeam , setJobTeam] = useState([])
  useEffect(()=> {
    setValue(2)
    const fetchData = async () => {
      try {
          const response = await fetch('https://sadra-edu.com/api/employment/data');
          const jsonData = await response.json();
          setData(jsonData);
          const Response3 = await fetch('https://sadra-edu.com/api/employmentAbout/data');
          const aboutData = await Response3.json();
          setAbout(aboutData)
          const Response2 = await fetch('https://sadra-edu.com/api/employmentJobTeam/data');
          const aboutData2 = await Response2.json();
          setJobTeam(aboutData2)
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  fetchData();
  } , [])

  const dropzoneStyle = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '25px',
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '10px',
};

const onDropImage1 = (acceptedFiles) => {
  const file = acceptedFiles[0];
  setImageData(file);
  setFileName(file.name);
};

const { getRootProps: getRootPropsImage1, getInputProps: getInputPropsImage1 } = useDropzone({ onDrop: onDropImage1 });

const [imageData, setImageData] = useState('');
const [fileName, setFileName] = useState('');
const [imagePath, setImagePath] = useState('');


  const handleSubmit = async (e) => {
    // /upload/single
    // file
    e.preventDefault()

    if (!imageData) { 
        showToast('لطفاً یک تصویر را انتخاب کنید.', "error");
        return;
    }

    const formData = new FormData();
    formData.append('file', imageData);

    try {
      const response = await axios.post('https://sadra-edu.com/api/upload/single', formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      });
  
      const imagePath1 = await response.data.path.split(`\\`).join("/");
  
      axios.post(`https://sadra-edu.com/api/resume/add`, {
          filePath: imagePath1,
          fileName: fileName,
          date: moment().locale('fa').format('YYYY-MM-DD')
      })
      .then(response => {
          showToast("رزومه ی شما ارسال شد! منتظر پاسخ از تیم پشتیبانی باشید.", "success")
      })
      .catch(error => {
          console.error('Error:', error.response ? error.response.data : error.message);
      });
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        showToast(`خطا در آپلود تصویر: ${error.response ? error.response.data.error : error.message}`, 'error');
    }
  }

  return (
    <div className='Employment_container'>
      <div className='Employment_Head'>
        <h1>همکاری با صدرا</h1>
        <p>صدرا، بستری قدرتمند از جنس خلق و تحول است و به افرادی که به فراتر از خود متعهدند، فرصت می‌دهد که «حرفه‌ای‌ترین و تاثیرگذارترین» نسخه خود را خلق کنند و آن را کار و زندگی کنند.</p>
      </div>
      <div className='OurValue'>
        <div className='OurValieIconHead'>
        <Line/> <h2>ارزش‌های ما</h2>
        </div>

    <div className='OurValue_Detail'>
            <h2 id="textMB">جایی که هم باعث رشد خودت میشی، هم دیگران</h2>
            <p>صدرا، محیطی رو فراهم کرده تا از توانایی‌ها و ویژگی‌هایی که شما رو نسبت به مدرسان دیگه، برتر میکنه به بهترین شکل مورد استفاده قرار بگیره تا شما هم به بهترین شکل ممکن این توانایی‌ها رو در اختیار دیگران قرار بدید و مسیر پیشرفت‌شون رو هموار کنی و  میتونی توانایی‌هات رو بهبود بدی و بهترین نسخه خودت باشی.اینجا همون سرزمین فرصت‌هاست!</p>

        <div className='Icons'>
            <ul className='iconUnorderedList'>
                <li><Table/>نتیجه گرایی</li>
                <li><GrowArrow/>پیشرفت مداوم</li>
                <li><PowerIcon/>قدرت‌ بخشی</li>
                <li><PersonWithHeart/>احترام همیشگی</li>
            </ul>
        </div>

    </div>


      </div>
      <div className='Chance_container'>
        <div className='ChanceIcon'>
          <Line/><h2>فرصت‌های شغلی</h2> 
        </div>

        <h2>فرصت‌هایی برای رسیدن به رویاهای خود</h2>

        <div className='Tabs_job_chances'>
          <Box fontFamily={"Yekan , sans-serif"} sx={{ width: '100%', typography: 'body1'}}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList fontFamily={"Yekan , sans-serif"} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" TabIndicatorProps={{style:{ backgroundColor: "#4CA773" }}}>
                  {tabHeader.map(item => <Tab key={item.id} sx={{fontFamily:"Yekan , sans-serif"}} label={item.TabTitle} value={item.id} />)}
                </TabList>
              </Box>
              {
<<<<<<< HEAD
                Tab.TabTitle === "همه" ? data.map(item =><Link key={item.id} to={`/employmentForm/${item.id}`}><EmploymentDetailCard key={item.id} job={item.jobTitle} place={item.jobPlace} category={item.jobCategory} time={item.jobTime} /> </Link>) :
                data.filter((item) => item.jobCategory === Tab.TabTitle).map((filteredItem) => (
                  <Link key={filteredItem.id} to={`/employmentForm/${filteredItem.id}`}><EmploymentDetailCard key={filteredItem.id} job={filteredItem.jobTitle} place={filteredItem.jobPlace} category={filteredItem.jobCategory} time={filteredItem.jobTime} /></Link>
              ))
              }      
            </div>    
            </TabPanel>
            ))
        }
      </TabContext>
    </Box>
=======
                tabHeader.map(Tab => (
                  <TabPanel key={Tab.id} value={Tab.id}>
                  <div className='JonsCardsContainer'>
                  

                    {
                      Tab.TabTitle === "همه" ? data.map(item =><EmploymentDetailCard key={item.id} job={item.jobTitle} place={item.jobPlace} category={item.jobCategory} time={item.jobTime} />) :
                      data.filter((item) => item.jobCategory === Tab.TabTitle).map((filteredItem) => (
                        <EmploymentDetailCard key={filteredItem.id} job={filteredItem.jobTitle} place={filteredItem.jobPlace} category={filteredItem.jobCategory} time={filteredItem.jobTime} id={filteredItem.id} />
                    ))
                    }      
                  </div>    
                  </TabPanel>
                  ))
              }
            </TabContext>
          </Box>
>>>>>>> 7f81f16ead4da51b69ff8e61ffa5ff40712895d0
        </div>
        
        <div style={{marginBottom:"3rem",marginTop:"3rem"}}>
          <h1>برای ثبت رزومه ی خود از فرم زیر اقدام فرمایید.</h1>
          <form action="">
            <div {...getRootPropsImage1()} style={dropzoneStyle}>
                <input {...getInputPropsImage1()} />
                <p>را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد فایل مورد نظر</p>
                <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, pdf )</p>
                {fileName && (
                    <p style={{ marginTop: '10px' }}>
                    نام فایل انتخابی: {fileName}
                    </p>
                )}
            </div>
            <button
              className='login_Btn_No_Hid'
              onClick={handleSubmit}
              style={{ width: 'fit-content', marginTop: '2rem', cursor: 'pointer' }}
              type="button">
                  ارسال
            </button>
          </form>
        </div>

        {/* <div className='whyUs_container'>
          <div className='ChanceIcon'>
          <Line/><h2>چرا ما</h2> 
          </div>

            <h2>صدرا از نگاه همکاران</h2>

          <div className='VideoContents'>
            
            {
              about.map(item => (
                <div key={item.id} className='videoContainer'><VideoComponent key={item.id} UrlAutorName={item.authorName} videoJob={item.videoJob} videoTitle={item.videoTitle} videoThumbnail={item.videoThumbnail} videoSrc={item.videoSrc} /></div>

              ))
            }
          </div>

        </div> */}


      <div className='Question_Container'>
        <div className='ChanceIcon'>
          <Line/><h2>سوال‌های پرتکرار</h2> 
        </div>


        <div className='Questions'>

        {
        Questions.map(item => (
          <Accordion key={item.id}>
            <AccordionSummary
              expandIcon={<QuestionIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
            <Typography fontFamily={"Yekan , sans-serif"} >{item.title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography fontFamily={"Yekan , sans-serif"} >
                {item.question}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </div>
      
      </div>

      <div>
        <h1 style={{marginBottom:"2rem"}}>اعضای تیم جذب و استخدام</h1>
        <div>
    
          <Grid container spacing={2} >
            {jobTeam.map((item) => (
                <Grid key={item.id} item xs={12} sm={6} md={6} lg={3}>
                  <StudentCard student={item} account={item.account}  accountLink={item.accountLink}  />
                </Grid>
            ))}
          </Grid>
        </div>
        <div>
          
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
    </div>
  )
}

export default Employment
