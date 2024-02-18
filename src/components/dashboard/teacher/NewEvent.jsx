import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import InputContact from '../../modules/input/InputContact'
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { showToast } from '../../modules/AuthModules/Toastify';
import Drawer from '@mui/material/Drawer';
import { IoPerson } from "react-icons/io5";
import Box from '@mui/material/Box';

import { categories } from '../Categories';
import { Link } from 'react-router-dom'



function NewEvent() {

    
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [userRole, setUserRole] = useState([]);
    
    const [imageData, setImageData] = useState('');
    const [imageData2, setImageData2] = useState('');
    
    const [title, setTitle] = useState(''); //1
    const [shortName, setShortName] = useState(''); //2
    const [category, setCategory] = useState(''); //3
    const [subtitle, setSubTitle] = useState(''); //4
    const [teacher, setTeacher] = useState(''); //5
    
    const [fileName, setFileName] = useState(''); //6
    const [newImagePath1, setNewImagePath1] = useState(''); //6
    
    const [price, setPrice] = useState(''); //7
    const [discount, setDiscount] = useState(''); //8
    
    const [qeustion1, setQeustion1] = useState(''); //9
    const [answer1, setAnswer1] = useState(''); //10
    
    const [qeustion2, setQeustion2] = useState(''); //11
    const [answer2, setAnswer2] = useState(''); //12
    
    const [qeustion3, setQeustion3] = useState(''); //13
    const [answer3, setAnswer3] = useState(''); //14
    
    const [qeustion4, setQeustion4] = useState(''); //15
    const [answer4, setAnswer4] = useState(''); //16
    
    const [video, setVideo] = useState(null); //17
    const [fileName3, setFileName3] = useState('');//17
    const [videoPath3, setVideoPath3] = useState('');//17
    
    const [fileName2, setFileName2] = useState(''); //18
    const [imagePath2, setImagePath2] = useState(''); //18
    
    const [place, setPlace] = useState(''); //19
    
    const [date, setDate] = useState(''); //20
    const [time, setTime] = useState(''); //21
    
    const [authorName, setAuthorName] = useState('');
    const [authorLastName, setAuthorLastName] = useState('');

    const [setting , setSetting] = useState(false)
    const mobileSetting = ()=>{
        setSetting(e => !e);
      }
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseToken = await axios.get('https://backend.sadra-edu.com/dashboard/token', { withCredentials: true });
                const { id } = responseToken.data;
                setUserRole(responseToken.data.role)
    
                const responseFullDetail = await axios.get(`https://backend.sadra-edu.com/fullDetail/${id}`);
                setAuthorName(responseFullDetail.data[0][0].name)
                setAuthorLastName(responseFullDetail.data[0][0].lastName)
                setTeacher(`${authorName} ${authorLastName}`)

                const responseToken3 = await axios.get('https://backend.sadra-edu.com/events/data');
                setData(responseToken3.data);

                const responseToken2 = await axios.get('https://backend.sadra-edu.com/TeacherUsers/data');
                setUsers(await responseToken2.data[0]);
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
            }
        };
        fetchData();
    
    }, []);

    useEffect(() => {
        setTeacher(`${authorName} ${authorLastName}`)
    }, [authorName, authorLastName]);

    const onDropImage1 = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImageData(file);
        setFileName(file.name);
    };
    
    const onDropImage2 = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImageData2(file);
        setFileName2(file.name);
    };
    
    
    const { getRootProps: getRootPropsImage1, getInputProps: getInputPropsImage1 } = useDropzone({ onDrop: onDropImage1 });
    const { getRootProps: getRootPropsImage2, getInputProps: getInputPropsImage2 } = useDropzone({ onDrop: onDropImage2 });
    const { getRootProps: getRootPropsImage3, getInputProps: getInputPropsImage3 } = useDropzone({
        accept: 'video/*',
        maxFiles: 1,
        maxSize: 10485760, // 10MB in bytes
        onDrop: (acceptedFiles) => {
            if (acceptedFiles && acceptedFiles.length > 0) {
                const selectedVideo = acceptedFiles[0];
                setVideo(selectedVideo);
                setFileName3(selectedVideo.name || 'Untitled Video');
            } else {
                console.error('No video file selected');
            }
        }
    });
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     if (!imageData || !imageData2) { 
    //         showToast('لطفاً یک تصویر را انتخاب کنید.', "error");
    //         return;
    //     }
    //     if (!video) { 
    //         showToast('ویدیویی انتخاب نشده است!', 'error');
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append('files', imageData); // first pic
    //     formData.append('files', imageData2); // first pic


    //     try {
    //         axios.post('https://backend.sadra-edu.com/upload/multiple/2', formData, {
    //         headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         })
    //         .then(response => {
    //             const imagePath1 = response.data.paths[0].split(`\\`).join("/");
    //             const imagePath2 = response.data.paths[1].split(`\\`).join("/");

    //             setImagePath(imagePath1);
    //             setImagePath2(imagePath2);

    //         })
    //         .catch(error => {
    //             // Handle the error
    //             console.error(error.response ? error.response.data : error.message);
    //         });

            
    //         const formData2 = new FormData();
    //         formData2.append('videoData', video);

    //         try {
    //             const response = await axios.post('https://backend.sadra-edu.com/upload/video', formData2, {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data',
    //                 },
    //             });
    
    //             const videoPath3 = response.data.path.split(`\\`).join("/");
    //             setVideoPath3(videoPath3)
    //         } catch (error) {
    //             console.error('Error uploading video:', error.response ? error.response.data : error.message);
    //             // Handle the error as needed
    //         }
    //         showToast('اطلاعات با موفقیت آپلود شد.', 'success');
    //         axios.post(`https://backend.sadra-edu.com/dashboard/events/add`, {
    //             category: category,
    //             title: title,
    //             image: imagePath,
    //             teacherFirstName: authorName,
    //             teacherLastName: authorLastName,
    //             price: price,
    //             discount: discount,
    //             title_description1: qeustion1,
    //             description1: answer1,
    //             title_description2: qeustion2,
    //             description2: answer2,
    //             title_description3: qeustion3,
    //             description3: answer3,
    //             title_description4: qeustion4,
    //             description4: answer4,
    //             videoSrc: videoPath3,
    //             thumbnail: imagePath2,
    //             place: place,
    //             date: time,
    //             detailSubtitle: subtitle,
    //             Detail_Head_Title: shortName
    //         })
    //         .then(response => {
    //             showToast("بلاگ جدید با موفقیت ثبت شد !", "success")
    //         })
    //         .catch(error => {
    //             console.error('Error:', error.response ? error.response.data : error.message);
    //         });
    //     } catch (error) {
    //         console.error('Error:', error.response ? error.response.data : error.message);
    //         showToast(`خطا در آپلود تصویر: ${error.response ? error.response.data.error : error.message}`, 'error');
    //     }
        
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        
            try {
            // Check if images and video are selected
            if (!imageData || !imageData2) {
                showToast('لطفاً یک تصویر را انتخاب کنید.', 'error');
                return;
            }
            if (!video) {
                showToast('ویدیویی انتخاب نشده است!', 'error');
                return;
            }
        
          // Create an array of promises for image uploads
        const imageUploadPromises = [imageData, imageData2].map((imageData) => {
            const formData = new FormData();
            formData.append('files', imageData);
            return axios.post('https://backend.sadra-edu.com/upload/multiple/2', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                });
            });
        
            // Wait for all image uploads to complete
            const imageUploadResponses = await Promise.all(imageUploadPromises);
        
            // Process image upload responses
            const imagePath1 = imageUploadResponses[0].data.paths[0].split('\\').join('/');
            const imagePath2 = imageUploadResponses[1].data.paths[0].split('\\').join('/');
        
            // Set image paths in state
            setImagePath(imagePath1);
            setImagePath2(imagePath2);
        
        
          // Upload video
            const formData2 = new FormData();
            formData2.append('videoData', video);

        const videoUploadResponse = await axios.post('https://backend.sadra-edu.com/upload/video', formData2, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    
          // Set video path in state
        const videoPath3 = videoUploadResponse.data.path.split('\\').join('/');
        setVideoPath3(videoPath3);

    
          // Make the final Axios call
        const response = await axios.post('https://backend.sadra-edu.com/dashboard/events/add', {
            category: category,
            title: title,
            image: imagePath1,
            teacherFirstName: authorName,
            teacherLastName: authorLastName,
            price: price,
            discount: discount,
            title_description1: qeustion1,
            description1: answer1,
            title_description2: qeustion2,
            description2: answer2,
            title_description3: qeustion3,
            description3: answer3,
            title_description4: qeustion4,
            description4: answer4,
            videoSrc: videoPath3,
            thumbnail: imagePath2,
            place: place,
            date: date,
            time: time,
            detailSubtitle: subtitle,
            Detail_Head_Title: shortName,
        });
            showToast('اطلاعات با موفقیت آپلود شد.', 'success');
            showToast('بلاگ جدید با موفقیت ثبت شد!', 'success');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            showToast(`خطا در آپلود تصویر: ${error.response ? error.response.data.error : error.message}`, 'error');
        }
    };
    

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data' className='newBlogForm'>
            <InputContact id={'title'} setVariable={setTitle} variable={title} title={'عنوان رویداد'} type={'text'} width={'100%'} />
            <InputContact id={'category'} setVariable={setCategory} variable={category} subTitle={"رویدادها یا مدرس‌ها یا دوره‌ها"} title={'دسته بندی'} type={'text'} width={'100%'} />
            <InputContact id={'headSubTitle'} setVariable={setShortName} variable={shortName} subTitle={"مانند طراحی قالب یا..."} title={'نام کوتاه رویداد'} type={'text'} width={'100%'} />
            <InputContact id={'detailSubtitle'} setVariable={setSubTitle} variable={subtitle} title={'اطلاعات کوتاه رویداد'} type={'text'} width={'100%'} />
            {
                userRole === 'admin' ?
                <>
                <InputContact id={'authorFirstName'} setVariable={setAuthorName} variable={authorName} title={'نام استاد'} type={'text'} width={'100%'} />
                <InputContact id={'authorLastName'} setVariable={setAuthorLastName} variable={authorLastName} title={'نام خانوادگی استاد'} type={'text'} width={'100%'} />
                </>
                :
                <InputContact id={'teacher'} disabled={userRole === 'teacher' ? true : false} setVariable={setTeacher} subtitle={"درصورت نداشتن دسترسی در تغییر، به این معنا است که نام از قبل وارد شده است."} variable={teacher} title={'استاد دوره'} type={'text'} width={'100%'} />
            }

            <div {...getRootPropsImage1()} style={dropzoneStyle}>
                <input {...getInputPropsImage1()} />
                <p>تصویر معرفی رویداد را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد (فقط یک تصویر)</p>
                <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                {fileName && (
                    <p style={{ marginTop: '10px' }}>
                    نام فایل انتخابی: {fileName}
                    </p>
                )}
            </div>

            <InputContact id={'price'} setVariable={setPrice} variable={price} title={'قیمت'} type={'number'} width={'100%'} />
            <InputContact id={'discount'} setVariable={setDiscount} variable={discount} subTitle={"بر اساس درصد"} title={'تخفیف'} type={'text'} width={'100%'} />

            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='question1' style={{cursor:"pointer"}}>عنوان سوال شماره 1 <span style={{color:"#667085", cursor:"text"}}>( مانند تحقیقات مبانی و طراحی UX )</span></label>
                <InputContact id={'question1'} setVariable={setQeustion1} variable={qeustion1} type={'text'} width={'100%'} />
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='answer1' style={{cursor:"pointer"}}>توضیحات شماره 1</label>
                <textarea cols="30" rows="5" 
                    id='answer1'
                    className='textArea'
                    value={answer1}
                    onChange={(e) => setAnswer1(e.target.value)}
                >
                </textarea>
            </div>

            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='question2' style={{cursor:"pointer"}}>عنوان سوال شماره 2 <span style={{color:"#667085", cursor:"text"}}>( مانند مفهوم نمونه سازی Low-Fidelity )</span></label>
                <InputContact id={'question2'} setVariable={setQeustion2} variable={qeustion2} type={'text'} width={'100%'} />
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='answer2' style={{cursor:"pointer"}}>توضیحات شماره 2</label>
                <textarea cols="30" rows="5" 
                    id='answer2'
                    className='textArea'
                    value={answer2}
                    onChange={(e) => setAnswer2(e.target.value)}
                >
                </textarea>
            </div>

            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='question3' style={{cursor:"pointer"}}>عنوان سوال شماره 3 <span style={{color:"#667085", cursor:"text"}}>( مانند نمونه سازی High-Fidelity تا تجزیه و تحلیل Post-Launch )</span></label>
                <InputContact id={'question3'} setVariable={setQeustion3} variable={qeustion3} type={'text'} width={'100%'} />
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='answer3' style={{cursor:"pointer"}}>توضیحات شماره 3</label>
                <textarea cols="30" rows="5" 
                    id='answer3'
                    className='textArea'
                    value={answer3}
                    onChange={(e) => setAnswer3(e.target.value)}
                >
                </textarea>
            </div>

            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='question4' style={{cursor:"pointer"}}>عنوان سوال شماره 4 <span style={{color:"#667085", cursor:"text"}}>( مانند CAPSTONE - طراحی نمونه کاره )</span></label>
                <InputContact id={'question4'} setVariable={setQeustion4} variable={qeustion4} type={'text'} width={'100%'} />
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='answer4' style={{cursor:"pointer"}}>توضیحات شماره 4</label>
                <textarea cols="30" rows="5" 
                    id='answer4'
                    className='textArea'
                    value={answer4}
                    onChange={(e) => setAnswer4(e.target.value)}
                >
                </textarea>
            </div>
            {/* pic */}
            <div>
                <p>فیلم معرفی</p>
                <div {...getRootPropsImage3()} style={dropzoneStyle}>
                    <input {...getInputPropsImage3()} accept='video/*' />
                    <p>ویدئو رویداد را انتخاب یا اینجا بکشید باید کمتر از 10 مگابایت باشد (فقط یک ویدئو)</p>
                    <p>باید از یکی از این پسوند ها باشد: ( mp4, webm, ogg, mkv, avi )</p>
                    {fileName3 && (
                        <p style={{ marginTop: '10px' }}>
                            نام فایل انتخابی: {fileName3}
                        </p>
                    )}
                    {video && (
                        <video width="320" height="240" controls>
                            <source src={URL.createObjectURL(video)} type={video.type} />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </div>
            <div>
                <p>عکس نمایشی فیلم</p>
                <div {...getRootPropsImage2()} style={dropzoneStyle}>
                    <input {...getInputPropsImage2()} />
                    <p>تامبنیل را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد (فقط یک تصویر)</p>
                    <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                    {fileName2 && (
                        <p style={{ marginTop: '10px' }}>
                            نام فایل انتخابی: {fileName2}
                        </p>
                    )}
                </div>
            </div>
            {/* pic */}
            <InputContact id={'place'} setVariable={setPlace} variable={place} subTitle={"تهران یا.."} title={'محل برگزاری'} type={'text'} width={'100%'} />
            <InputContact id={'date'} setVariable={setDate} variable={date} subTitle={"سال ماه روز برای مثال 2024 10 5"} title={'تاریخ'} type={'text'} width={'100%'} />
            <InputContact id={'time'} setVariable={setTime} variable={time} subTitle={"ساعت دقیقه ثانیه برای مثال ساعت 9 میشود: 21 00 00"} title={'ساعت'} type={'text'} width={'100%'} />

            <button
                className='login_Btn_No_Hid'
                onClick={handleSubmit}
                style={{ width: 'fit-content', marginTop: '2rem', cursor: 'pointer' }}
                type="button"
            >ثبت</button>
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
            {/* Responsive */}

            <div className='MobileDrawerDash'>
                    <button onClick={mobileSetting} className='drawerButton'> <IoPerson style={{width : 20 , height : 20}} /></button>
                </div>

                <Drawer anchor='left' open={setting} onClose={()=> setSetting(false)}>
                    <Box>
                        <ul className='dashboardList'>
                        {
                            categories.map((item) => (
                                <li><Link key={item.title} to={item.link}>{item.title}</Link></li>
                            ))
                        }
                        </ul>
                    </Box>
                </Drawer>

            {/* Responsive */}
        </form>
        
    )
}
const dropzoneStyle = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '10px',
};
export default NewEvent