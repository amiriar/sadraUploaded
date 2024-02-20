import React, { useEffect, useState } from 'react'
import InputContact from '../../modules/input/InputContact'
import { Divider } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import axios from 'axios';
import { showToast } from '../../modules/AuthModules/Toastify';
import { useDropzone } from 'react-dropzone';
import moment from 'jalali-moment';

import { IoPerson } from "react-icons/io5";
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import { adminCategories } from '../Categories';
import { Link } from 'react-router-dom';

function NewSuccess() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                // First request to get the user ID
                const responseToken = await axios.get('https://backend.sadra-edu.com/dashboard/token', { withCredentials: true });
                const { id } = responseToken.data;
                setUserRole(responseToken.data.role)
    
                const responseFullDetail = await axios.get(`https://backend.sadra-edu.com/fullDetail/${id}`);
                setAuthorName(responseFullDetail.data[0][0].name)
                setAuthorLastName(responseFullDetail.data[0][0].lastName)

                const responseToken3 = await axios.get('https://backend.sadra-edu.com/blog/data');
                setData(responseToken3.data);
                const responseToken2 = await axios.get('https://backend.sadra-edu.com/TeacherUsers/data');
                setUsers(await responseToken2.data[0]);
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
                setUserRole('error');
            }
        };
    
        fetchData(); // Call the function
    
    }, []); 

    const [setting , setSetting] = useState(false)
    const mobileSetting = ()=>{
        setSetting(e => !e);
        console.log(setting)
      }
    
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);

    const [userId, setUserId] = useState(null)
    const [userRole, setUserRole] = useState(null)

    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [authorLastName, setAuthorLastName] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [detailsDescription1, setDetailsDescription1] = useState('');
    const [detailsDescription2, setDetailsDescription2] = useState('');
    const [detailsDescription3, setDetailsDescription3] = useState('');
    const [descriptionImage2, setDescriptionImage2] = useState('');
    const [detailsDescription4, setDetailsDescription4] = useState('');
    const [detailsDescription5, setDetailsDescription5] = useState('');
    const [timeToRead, setTimeToRead] = useState('');

    
    const [imagePath3, setImagePath3] = useState('');
    
    
    
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    
    const [authorNameCardFirst, setAuthorNameCardFirst] = useState('');
    const [JobTitle, setJobTitle] = useState('');
    const [descriptionImage1, setDescriptionImage1] = useState('');
    const [fileName, setFileName] = useState('');
    const [cardDesc, setCardDesc] = useState('');
    const [newImagePath1, setNewImagePath1] = useState('');
    const [newImagePath2, setNewImagePath2] = useState('');
    
    const [imagePath2, setImagePath2] = useState('');
    // 
    // 
    const [fileName2, setFileName2] = useState('');
    const [addPicJob, setAddPicJob] = useState('');
    const [addPicName, setAddPicName] = useState('');
    const [addPicDesc, setAddPicDesc] = useState('');
    const [imageData, setImageData] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [fileName3, setFileName3] = useState('');
    const [newImagePath3, setNewImagePath3] = useState('');
    //
    //
    
    const [fileName4, setFileName4] = useState('');
    const [fileName5, setFileName5] = useState('');
    const [videoAuthorName, setVideoAuthorName] = useState('');
    const [videoJobTitle, setVideoJobTitle] = useState('');
    const [video, setVideo] = useState('');
    const [imagePath4, setImagePath4] = useState('');
    
    
    
    
    const onDropImage1 = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImageData(file);
        setFileName(file.name);
    };
    
    const onDropImage2 = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setDescriptionImage1(file);
        setFileName2(file.name);
    };
    
    const onDropImage3 = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setDescriptionImage2(file);
        setFileName3(file.name);
    };
    
    const { getRootProps: getRootPropsImage1, getInputProps: getInputPropsImage1 } = useDropzone({ onDrop: onDropImage1 });
    const { getRootProps: getRootPropsImage2, getInputProps: getInputPropsImage2 } = useDropzone({ onDrop: onDropImage2 });
    const { getRootProps: getRootPropsImage3, getInputProps: getInputPropsImage3 } = useDropzone({ onDrop: onDropImage3 });
    const { getRootProps: getRootPropsImage4, getInputProps: getInputPropsImage4 } = useDropzone({
        accept: 'video/*',
        maxFiles: 1,
        maxSize: 10485760, // 10MB in bytes
        onDrop: (acceptedFiles) => {
            if (acceptedFiles && acceptedFiles.length > 0) {
                const selectedVideo = acceptedFiles[0];
                setVideo(selectedVideo);
                setFileName4(selectedVideo.name || 'Untitled Video');
            } else {
                console.error('No video file selected');
            }
        }
    });

    const onDropImage5 = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setDescriptionImage2(file);
        setFileName5(file.name);
    };

    const { getRootProps: getRootPropsImage5, getInputProps: getInputPropsImage5 } = useDropzone({ onDrop: onDropImage5 });

    

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!imageData) { 
            showToast('لطفاً یک تصویر را انتخاب کنید.', "error");
            return;
        }

        const formData = new FormData();
        formData.append('files', imageData);
        formData.append('files', descriptionImage1);
        formData.append('files', descriptionImage2);

        try {
            const response = await axios.post('https://backend.sadra-edu.com/upload/multiple/3', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        
            const imagePath1 = response.data.paths[0].split(`\\`).join("/");
            const imagePath2 = response.data.paths[1].split(`\\`).join("/");
            const imagePath3 = response.data.paths[2].split(`\\`).join("/");
        
            setImagePath(imagePath1);
            setImagePath2(imagePath2);
            setImagePath3(imagePath3);
        
            showToast('اطلاعات با موفقیت آپلود شد.', 'success');
            axios.post(`https://backend.sadra-edu.com/dashboard/success/add`, {
                imageData: imagePath1,
                date: moment().locale('fa').format('YYYY-MM-DD'),
                title: title,
                description: description,
                authorName: authorName,
                authorLastName: authorLastName,
                hashtags: hashtags,
                detailsDescription1: detailsDescription1,
                detailsDescription2: detailsDescription2,
                descriptionImage1: imagePath2,
                descriptionImage2: imagePath3, 
                detailsDescription4: detailsDescription4,
                detailsDescription5: detailsDescription5,
                timeToRead: timeToRead
            })
            .then(response => {
                showToast("بلاگ جدید با موفقیت ثبت شد !", "success")
            })
            .catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message);
            });
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            showToast(`خطا در آپلود تصویر: ${error.response ? error.response.data.error : error.message}`, 'error');
        }
        
    }

    const handleSubmit1 = async () => {
        if (!imageData) { 
            showToast('لطفاً یک تصویر را انتخاب کنید.', "error");
            return;
        }
        const formData = new FormData();
        formData.append('imageData', imageData);

        try {
            const response = await axios.post('https://backend.sadra-edu.com/upload/single/img', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const imagePath1 = response.data.path.split(`\\`).join("/");
            setImagePath(imagePath1);
        
            showToast('اطلاعات با موفقیت آپلود شد.', 'success');
            axios.post(`https://backend.sadra-edu.com/dashboard/success/add/1`, {
                authorPicture: imagePath1,
                authorName: authorNameCardFirst,
                authorJob: JobTitle,
                description: cardDesc,
                date: moment().locale('fa').format('YYYY-MM-DD'),
            })
            .then(response => {
                showToast("پست جدید با موفقیت ثبت شد !", "success")
            })
            .catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message);
            });
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            showToast(`خطا در آپلود پست: ${error.response ? error.response.data.error : error.message}`, 'error');
        }
    }

    const handleSubmit2 = async () => {
        if (!descriptionImage1) { 
            showToast('لطفاً یک تصویر را انتخاب کنید.', "error");
            return;
        }

        const formData2 = new FormData();
        formData2.append('files', descriptionImage1);
        formData2.append('files', descriptionImage2);

        try {
            const response = await axios.post('https://backend.sadra-edu.com/upload/multiple/2', formData2, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const imagePath2 = response.data.paths[0].split(`\\`).join("/");
            const imagePath3 = response.data.paths[1].split(`\\`).join("/");

            setImagePath2(imagePath2);
            setImagePath3(imagePath3);
        
            showToast('اطلاعات با موفقیت آپلود شد.', 'success');
            axios.post(`https://backend.sadra-edu.com/dashboard/success/add/2`, {
                authorPicture: imagePath2,
                authorName: addPicName,
                authorJob: addPicJob,
                description: addPicDesc,
                additionalPicture: imagePath3,
                date: moment().locale('fa').format('YYYY-MM-DD'),
            })
            .then(response => {
                showToast("پست جدید با موفقیت ثبت شد !", "success")
            })
            .catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message);
            });
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            showToast(`خطا در آپلود پست: ${error.response ? error.response.data.error : error.message}`, 'error');
        }
    }

    // const handleSubmit3 = async () => {
    //     if (!descriptionImage1) { 
    //         showToast('لطفاً یک تصویر را انتخاب کنید.', "error");
    //         return;
    //     }

    //     const formData2 = new FormData();
    //     formData2.append('videoData', video);

    //     try {
    //         const response = await axios.post('https://backend.sadra-edu.com/upload/video', formData2, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });

    //         const videoPath = response.data.paths[0].split(`\\`).join("/");

    //         setImagePath3(videoPath);
        
    //         showToast('اطلاعات با موفقیت آپلود شد.', 'success');
    //         axios.post(`https://backend.sadra-edu.com/dashboard/success/add/2`, {
    //             authorPicture: imagePath2,
    //             authorName: addPicName,
    //             authorJob: addPicJob,
    //             description: addPicDesc,
    //             additionalPicture: imagePath3,
    //             date: moment().locale('fa').format('YYYY-MM-DD'),
    //         })
    //         .then(response => {
    //             showToast("پست جدید با موفقیت ثبت شد !", "success")
    //         })
    //         .catch(error => {
    //             console.error('Error:', error.response ? error.response.data : error.message);
    //         });
    //     } catch (error) {
    //         console.error('Error:', error.response ? error.response.data : error.message);
    //         showToast(`خطا در آپلود پست: ${error.response ? error.response.data.error : error.message}`, 'error');
    //     }
    // }

    // const handleSubmit3 = async () => {
    //     if (!video) { 
    //         showToast('لطفاً یک ویدیو را انتخاب کنید.', 'error');
    //         return;
    //     }
    
    //     const formData2 = new FormData();
    //     formData2.append('videoData', video);
    
    //     try {
    //         const response = await axios.post('https://backend.sadra-edu.com/upload/video', formData2, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    
    //         const videoPath = response.data.path.split(`\\`).join("/");
    
    //         setImagePath3(videoPath);
    
    //         showToast('اطلاعات با موفقیت آپلود شد.', 'success');
            
    //         // Make sure to handle imagePath2, addPicName, addPicJob, and addPicDesc
    //         axios.post(`https://backend.sadra-edu.com/dashboard/success/add/3`, {
    //             videoTitle: videoAuthorName,
    //             videoJob: videoJobTitle,
    //             videoSrc: imagePath3,
    //             videoThumbnail: imagePath3,
    //             date: moment().locale('fa').format('YYYY-MM-DD'),
    //         })
    //         .then(response => {
    //             showToast("پست جدید با موفقیت ثبت شد !", "success")
    //         })
    //         .catch(error => {
    //             console.error('Error:', error.response ? error.response.data : error.message);
    //         });
    //     } catch (error) {
    //         console.error('Error:', error.response ? error.response.data : error.message);
    //         showToast(`خطا در آپلود ویدیو: ${error.response ? error.response.data.error : error.message}`, 'error');
    //     }
    // };
    

    const handleSubmit3 = async () => {
        if (!video) { 
            showToast('لطفاً یک ویدیو را انتخاب کنید.', 'error');
            return;
        }
    
        const formData = new FormData();
        formData.append('videoData', video);
    
        try {
            // Upload video
            const videoResponse = await axios.post('https://backend.sadra-edu.com/upload/video', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            const videoPath = videoResponse.data.path.split(`\\`).join("/");
            setImagePath3(videoPath);
    
            // Handle image upload (assuming you have the image file in descriptionImage2)
            const imageFormData = new FormData();
            imageFormData.append('imageData', descriptionImage2);
    
            const imageResponse = await axios.post('https://backend.sadra-edu.com/upload/single/img', imageFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            const imagePath = imageResponse.data.path.split(`\\`).join("/");
            setImagePath4(imagePath);
    
            showToast('اطلاعات با موفقیت آپلود شد.', 'success');
    
            axios.post(`https://backend.sadra-edu.com/dashboard/success/add/3`, {
                videoTitle: videoAuthorName,
                videoJob: videoJobTitle,
                videoSrc: imagePath3,
                videoThumbnail: imagePath4,
                date: moment().locale('fa').format('YYYY-MM-DD'),
            })
            .then(response => {
                showToast("پست جدید با موفقیت ثبت شد !", "success")
            })
            .catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message);
            });
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            showToast(`خطا در آپلود ویدیو: ${error.response ? error.response.data.error : error.message}`, 'error');
        }
    };
    
    const dropzoneStyle = {
        border: '2px dashed #cccccc',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        marginTop: '10px',
    };


    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data' className='newBlogForm'>
            <div>
                <h3>در این پست باید از یکی از روش های زیر اقدام کنید:</h3>
                <p style={{textDecoration:"underline"}}>فقط متن</p>
                <p style={{textDecoration:"underline"}}>تصویر و متن</p>
                <p style={{textDecoration:"underline"}}>فقط ویدیو</p>
            </div>

            <Divider/>

            <div style={{display:"flex",flexDirection:"column", gap:"1rem"}}>
                <h2>حالت اول، فقط متن:</h2>

                <InputContact id={'authorNameCardFirst'} setVariable={setAuthorNameCardFirst} variable={authorNameCardFirst} title={'نام نویسنده'} type={'text'} width={'100%'} />

                <div {...getRootPropsImage1()} style={dropzoneStyle}>
                    <input {...getInputPropsImage1()} />
                    <p>تصویر نویسنده را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد (فقط یک تصویر)</p>
                    <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                    {fileName && (
                        <p style={{ marginTop: '10px' }}>
                        نام فایل انتخابی: {fileName}
                        </p>
                    )}
                </div>

                <InputContact id={'jobTitle'} setVariable={setJobTitle} variable={JobTitle} title={'شغل نویسنده'} type={'text'} width={'100%'} />

                <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                    <label htmlFor='mainText' style={{cursor:"pointer"}}>توضیحات اصلی کارت</label>
                    <textarea cols="30" rows="5" 
                        id='mainText'
                        className='textArea'
                        value={cardDesc}
                        onChange={(e) => setCardDesc(e.target.value)}
                    >
                    </textarea>
                </div>

                <button
                    className='login_Btn_No_Hid'
                    onClick={handleSubmit1}
                    style={{ width: 'fit-content', marginTop: '2rem', cursor: 'pointer' }}
                type="button">
                    ثبت
                </button>
            </div>


            <Divider/>


            <div style={{display:"flex",flexDirection:"column", gap:"1rem"}}>
                <h2>حالت دوم، تصویر و متن:</h2>

                <InputContact id={'addName'} setVariable={setAddPicName} variable={addPicName} title={'نام نویسنده'} type={'text'} width={'100%'} />
                <InputContact id={'addPicJob'} setVariable={setAddPicJob} variable={addPicJob} title={'شغل نویسنده'} type={'text'} width={'100%'} />

                <div {...getRootPropsImage2()} style={dropzoneStyle}>
                    <input {...getInputPropsImage2()} />
                    <p>تصویر نویسنده را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد (فقط یک تصویر)</p>
                    <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                    {fileName2 && (
                        <p style={{ marginTop: '10px' }}>
                        نام فایل انتخابی: {fileName2}
                        </p>
                    )}
                </div>

                <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                    <label htmlFor='mainText2' style={{cursor:"pointer"}}>توضیحات اصلی کارت</label>
                    <textarea cols="30" rows="5" 
                        id='mainText2'
                        className='textArea'
                        value={addPicDesc}
                        onChange={(e) => setAddPicDesc(e.target.value)}
                    >
                    </textarea>
                </div>

                <div {...getRootPropsImage3()} style={dropzoneStyle}>
                    <input {...getInputPropsImage3()} />
                    <p>تصویر کارت را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد (فقط یک تصویر)</p>
                    <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                    {fileName3 && (
                        <p style={{ marginTop: '10px' }}>
                        نام فایل انتخابی: {fileName3}
                        </p>
                    )}
                </div>

                <button
                    className='login_Btn_No_Hid'
                    onClick={handleSubmit2}
                    style={{ width: 'fit-content', marginTop: '2rem', cursor: 'pointer' }}
                    type="button">
                        ثبت
                </button>
            </div>


            <Divider/>


            <div style={{display:"flex",flexDirection:"column", gap:"1rem"}}>
                <h2>حالت سوم، فقط ویدیو:</h2>

                <InputContact id={'videoname'} setVariable={setVideoAuthorName} variable={videoAuthorName} title={'نام نویسنده'} type={'text'} width={'100%'} />
                <InputContact id={'videojob'} setVariable={setVideoJobTitle} variable={videoJobTitle} title={'شغل نویسنده'} type={'text'} width={'100%'} />

                <p>فیلم معرفی</p>
                <div {...getRootPropsImage4()} style={dropzoneStyle}>
                    <input {...getInputPropsImage4()} accept='video/*' />
                    <p>ویدئو موفقیت را انتخاب یا اینجا بکشید باید کمتر از 10 مگابایت باشد (فقط یک ویدئو)</p>
                    <p>باید از یکی از این پسوند ها باشد: ( mp4, webm, ogg, mkv, avi )</p>
                    {fileName4 && (
                        <p style={{ marginTop: '10px' }}>
                            نام فایل انتخابی: {fileName4}
                        </p>
                    )}
                    {video && (
                        <video width="320" height="240" controls>
                            <source src={URL.createObjectURL(video)} type={video.type} />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>

                <div {...getRootPropsImage5()} style={dropzoneStyle}>
                    <input {...getInputPropsImage5()} />
                    <p>تصویر نمایشی فیلم را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد (فقط یک تصویر)</p>
                    <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                    {fileName5 && (
                        <p style={{ marginTop: '10px' }}>
                        نام فایل انتخابی: {fileName5}
                        </p>
                    )}
                </div>

                <button
                    className='login_Btn_No_Hid'
                    onClick={handleSubmit3}
                    style={{ width: 'fit-content', marginTop: '2rem', cursor: 'pointer' }}
                    type="button">
                        ثبت
                </button>
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
            {/* Responsive */}

            <div className='MobileDrawerDash'>
                    <button onClick={mobileSetting} className='drawerButton'> <IoPerson style={{width : 20 , height : 20}} /></button>
                </div>

                <Drawer anchor='left' open={setting} onClose={()=> setSetting(false)}>
                    <Box>
                        <ul className='dashboardList'>
                        {
                            adminCategories.map((item) => (
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

export default NewSuccess