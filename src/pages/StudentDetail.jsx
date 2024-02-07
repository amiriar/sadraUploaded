import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Divider, Grid } from '@mui/material';
import StudentCard from '../components/modules/succes-modules/StudentCard';

//css
import './StudentDetail.css'
import { useParams } from 'react-router-dom';


const StudentDetail = () => {

    const navigate = useNavigate()

    function clickHandler({ name }) {
        navigate(`/student/${name}`)
    }

    const { name } = useParams()
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData2 = async () => {
            try {
                const response = await fetch('https://backend.sadra-edu.com/students/data');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData2();
    }, []);

    const newMainData = data.find((stu) => stu.name === name)

    return (
        <div>
            {
                newMainData &&
                    <React.Fragment key={newMainData.name}>
                        <div className='StuDetailsHero' dir='rtl' >
                            <div className='StuDetailsHeroInfo'>
                                <div>
                                    <div>
                                        <h1 className='stuName'>{newMainData?.name}</h1>
                                        <h2 className='stuCoureses'>{newMainData?.courese}</h2>
                                    </div>
                                    <div className='mt2'>
                                        <p className='StuDetailsHeroInfoPs'><span className='StuDetailsHeroInfoPsSpan'>قبل از صدرا:</span>&nbsp;&nbsp;&nbsp; {newMainData.beforeJob}</p>
                                        <p className='StuDetailsHeroInfoPs'><span className='StuDetailsHeroInfoPsSpan'>بعد &nbsp;از صدرا:</span>&nbsp;&nbsp;&nbsp; {newMainData.afterJob}</p>
                                    </div>
                                </div>
                                <div  style={{display:"flex"}}>
                                    <div className='stuSuccessStrightLine'></div>
                                    <p className='StuDetailsHeroInfoDesc'>{newMainData.titleDescription}</p>
                                </div>
                            </div>
                            <div className='StuDetailsHeroImgContainer'>
                                <div className='StuDetailsHeroImgDiv'>
                                    <img src={newMainData.titlePicture} alt={newMainData.titlePicture} />
                                </div>
                            </div>
                        </div>
                        <div className='StuDetailsMain' dir='rtl'>
                                <div className='StuFirstSection'>
                                    <h3>درباره من</h3>
                                    <p>{newMainData.about}</p>
                                </div>
                                <Divider/>
                                <div className='StuSecondSection'>
                                    <h3>چی باعث شد دوره خودتون رو در صدرا بگذرونید ؟</h3>
                                    <p>{newMainData.whatMadeYouChooseSadra}</p>
                                </div>
                                <Divider/>
                                <div className='StuThirdSection'>
                                    <h3>قبل از صدرا مشغول چه کاری بودید ؟</h3>
                                    <p>{newMainData.whatBeforeSadra}</p>
                                </div>
                                <Divider/>
                                <div className='StuFourthSection'>
                                    <h3>نظرت درباره بوت کمپ طراحی رابط کاربری صدرا به ما می‌گی؟</h3>
                                    <p>{newMainData.opinionOnSadra}</p>
                                </div>
                        </div>
                        <div className='StuOtherStusContainer' dir='rtl'>
                            <h1 style={{fontSize: '2.125rem',fontStyle: 'normal',fontWeight: 500, textAlign:"center", marginTop:"1.5rem",marginBottom:"2rem"}}>با دانشجویان دیگر ما هم آشنا بشید</h1>
                            <div className='StuOtherStus'>
                                {/* <Grid container spacing={2} >
                                    {firstFourStudents.map((student) => (
                                        <Grid item xs={12} sm={6} md={6} lg={3} key={student.name} onClick={() => clickHandler({name: student.name})}>
                                            <StudentCard student={student} />
                                        </Grid>
                                    ))}
                                </Grid> */}
                                <Grid container spacing={2} >
                                    {data.map((student) => (
                                        <Grid item xs={12} sm={6} md={6} lg={3} key={student.name} onClick={() => clickHandler({name: student.name})}>
                                            <StudentCard student={student} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                        </div>
                        <div className='StuExtraInformation' dir='rtl'>
                            <div className='StuExtraInformationText'>
                                <h2>چی باعث شد دوره خودتون رو در صدرا بگذرونید ؟</h2>
                                <p>{newMainData.whatMadeYouChooseSadra}</p>
                            </div>
                            <div className='StuExtraInformationVideo'>
                                {/* video */}
                                <video src={newMainData.videoOnOpinion} controls poster={newMainData.videoOnOpinionPoster}></video>
                            </div>
                            <div className='StuExtraInformationText'>
                                <h2>نظرت در باره بوت کمپ طراحی رابط کاربری صدرا به ما می‌گی؟</h2>
                                <p>{newMainData.opinionOnSadra}</p>
                            </div>
                        </div>
                    </React.Fragment>
            }

        </div>
    )
}

export default StudentDetail