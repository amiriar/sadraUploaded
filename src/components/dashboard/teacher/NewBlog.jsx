import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { showToast } from '../../modules/AuthModules/Toastify'
import { ToastContainer } from 'react-toastify';
import InputContact from '../../modules/input/InputContact';
import { useDropzone } from 'react-dropzone';
import { Divider } from '@mui/material';
import moment from 'jalali-moment';

import Drawer from '@mui/material/Drawer';
import { IoPerson } from "react-icons/io5";
import Box from '@mui/material/Box';
import { categories } from '../Categories';
import { Link } from 'react-router-dom'


function NewBlog() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                // First request to get the user ID
                const responseToken = await axios.get('https://sadra-edu.com/api/dashboard/token', { withCredentials: true });
                const { id } = responseToken.data;
                setUserRole(responseToken.data.role)
    
                const responseFullDetail = await axios.get(`https://sadra-edu.com/api/fullDetail/${id}`);
                setAuthorName(responseFullDetail.data[0][0].name)
                setAuthorLastName(responseFullDetail.data[0][0].lastName)

                const responseToken3 = await axios.get('https://sadra-edu.com/api/blog/data');
                setData(responseToken3.data);
                const responseToken2 = await axios.get('https://sadra-edu.com/api/TeacherUsers/data');
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
      }
    
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);

    const [userId, setUserId] = useState(null)
    const [userRole, setUserRole] = useState(null)

    const [imageData, setImageData] = useState('');
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [authorLastName, setAuthorLastName] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [detailsDescription1, setDetailsDescription1] = useState('');
    const [detailsDescription2, setDetailsDescription2] = useState('');
    const [detailsDescription3, setDetailsDescription3] = useState('');
    const [descriptionImage1, setDescriptionImage1] = useState('');
    const [descriptionImage2, setDescriptionImage2] = useState('');
    const [detailsDescription4, setDetailsDescription4] = useState('');
    const [detailsDescription5, setDetailsDescription5] = useState('');
    const [timeToRead, setTimeToRead] = useState('');

    const [fileName, setFileName] = useState('');
    const [fileName2, setFileName2] = useState('');
    const [fileName3, setFileName3] = useState('');

    const [imagePath, setImagePath] = useState('');
    const [imagePath2, setImagePath2] = useState('');
    const [imagePath3, setImagePath3] = useState('');
    
    const [newImagePath1, setNewImagePath1] = useState('');
    const [newImagePath2, setNewImagePath2] = useState('');
    const [newImagePath3, setNewImagePath3] = useState('');



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
            const response = await axios.post('https://sadra-edu.com/api/upload/multiple/3', formData, {
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
            axios.post(`https://sadra-edu.com/api/dashboard/blogs/add`, {
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
                detailsDescription3: detailsDescription3,
                detailsDescription4: detailsDescription4,
                detailsDescription5: detailsDescription5,
                timeToRead: timeToRead
            })
            .then(response => {
                showToast('بلاگ جدید با موفقیت ثبت شد. بعد از تایید ادمین در سایت قرار میگیرد.', 'success');
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
        <form onSubmit={handleSubmit} encType='multipart/form-data' className='newBlogForm'>
            
            <div {...getRootPropsImage1()} style={dropzoneStyle}>
                <input {...getInputPropsImage1()} />
                <p>تصویر مقاله را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد (فقط یک تصویر)</p>
                <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                {fileName && (
                    <p style={{ marginTop: '10px' }}>
                    نام فایل انتخابی: {fileName}
                    </p>
                )}
            </div>
            <Divider/>
            <p>اطلاعات اصلی:</p>
            <InputContact id={'title'} setVariable={setTitle} variable={title} title={'عنوان مقاله'} type={'text'} width={'100%'} />
            <InputContact id={'description'} setVariable={setDescription} variable={description} title={'شرح مقاله'} type={'text'} width={'100%'} />
            <InputContact id={'hashtags'} setVariable={setHashtags} variable={hashtags} subTitle={"با کاما ( , ) از هم جدا کنید"} title={'هشتگ ها'} type={'text'} width={'100%'} />
            {
                userRole === 'admin' ?
                <>
                <InputContact id={'authorFirstName'} setVariable={setAuthorName} variable={authorName} title={'نام نویسنده'} type={'text'} width={'100%'} />
                <InputContact id={'authorLastName'} setVariable={setAuthorLastName} variable={authorLastName} title={'نام خانوادگی نویسنده'} type={'text'} width={'100%'} />
                </>
                :
                ''
            }
            {/* <InputContact id={'detail1'} setVariable={setDetailsDescription1} variable={detailsDescription1} title={'متن اول'} type={'text'} width={'100%'} /> */}
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail1' style={{cursor:"pointer"}}>توضیحات شماره 1</label>
                <textarea cols="30" rows="5" 
                    id='detail1'
                    className='textArea'
                    value={detailsDescription1}
                    onChange={(e) => setDetailsDescription1(e.target.value)}
                >
                </textarea>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail2' style={{cursor:"pointer"}}>توضیحات شماره 2</label>
                <textarea cols="30" rows="5" 
                    id='detail2'
                    className='textArea'
                    value={detailsDescription2}
                    onChange={(e) => setDetailsDescription2(e.target.value)}
                >
                </textarea>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail3' style={{cursor:"pointer"}}>توضیحات شماره 3</label>
                <textarea cols="30" rows="5" 
                    id='detail3'
                    className='textArea'
                    value={detailsDescription3}
                    onChange={(e) => setDetailsDescription3(e.target.value)}
                >
                </textarea>
            </div>
            {/* pic */}
            <div>
                <p>عکس شماره 2</p>
                <div {...getRootPropsImage2()} style={dropzoneStyle}>
                    <input {...getInputPropsImage2()} />
                    <p>تصویر مقاله را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد (فقط یک تصویر)</p>
                    <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                    {fileName2 && (
                        <p style={{ marginTop: '10px' }}>
                            نام فایل انتخابی: {fileName2}
                        </p>
                    )}
                </div>
            </div>
            <div>
                <p>عکس شماره 3</p>
                <div {...getRootPropsImage3()} style={dropzoneStyle}>
                    <input {...getInputPropsImage3()} />
                    <p>تصویر مقاله را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد (فقط یک تصویر)</p>
                    <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                    {fileName3 && (
                        <p style={{ marginTop: '10px' }}>
                            نام فایل انتخابی: {fileName3}
                        </p>
                    )}
                </div>
            </div>
            {/* pic */}
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail4' style={{cursor:"pointer"}}>توضیحات شماره 4</label>
                <textarea cols="30" rows="5" 
                    id='detail4'
                    className='textArea'
                    value={detailsDescription4}
                    onChange={(e) => setDetailsDescription4(e.target.value)}
                >
                </textarea>
            </div>
            <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                <label htmlFor='detail5' style={{cursor:"pointer"}}>توضیحات شماره 5</label>
                <textarea cols="30" rows="5" 
                    id='detail5'
                    className='textArea'
                    value={detailsDescription5}
                    onChange={(e) => setDetailsDescription5(e.target.value)}
                >
                </textarea>
            </div>
            <Divider/>
            <InputContact id={'ttr'} setVariable={setTimeToRead} variable={timeToRead} subTitle={"عددی بین 1 تا 100"} title={'زمان مورد نیاز برای خواندن'} type={'number'} width={'100%'} />
            
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


export default NewBlog