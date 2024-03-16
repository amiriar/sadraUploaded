import { Masonry } from '@mui/lab'
import { Avatar, Divider, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InputContact from '../../modules/input/InputContact'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from '../../../helper/Loading'
import { useDropzone } from 'react-dropzone'
import { ToastContainer } from 'react-toastify'
import { showToast } from '../../modules/AuthModules/Toastify'
import moment from 'jalali-moment'

function EditSuccess() {

    const { id } = useParams()

    const [adminRole, setAdminRole] = useState('')

    const [loading, setLoading] = useState(true)

    const [postId, setPostId] = useState('')
    const [videoSrc, setVideoSrc] = useState('')
    const [videoTitle, setVideoTitle] = useState('')
    const [videoJob, setVideoJob] = useState('')
    const [videoThumbnail, setVideoThumbnail] = useState('')
    const [authorPicture, setAuthorPicture] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [authorJob, setAuthorJob] = useState('')
    const [description, setDescription] = useState('')
    const [additionalPicture, setAdditionalPicture] = useState('')

    const [imageData, setImageData] = useState('')
    const [fileName, setFileName] = useState('')
    const [imagePath, setImagePath] = useState('')



    useEffect(() => {
        axios.get('https://sadra-edu.com/api/dashboard/token', { withCredentials: true })
        .then(response => {
            const { role } = response.data;
            setAdminRole(role);
        });

        axios.get(`https://sadra-edu.com/api/success/data/${id}`).then(response =>{
            setLoading(false)
            setPostId(response.data.data[0][0].id);
            setVideoSrc(response.data.data[0][0].videoSrc)
            setVideoTitle(response.data.data[0][0].videoTitle)
            setVideoJob(response.data.data[0][0].videoJob)
            setVideoThumbnail(response.data.data[0][0].videoThumbnail)
            setAuthorPicture(response.data.data[0][0].authorPicture)
            setAuthorName(response.data.data[0][0].authorName)
            setAuthorJob(response.data.data[0][0].authorJob)
            setDescription(response.data.data[0][0].description)
            setAdditionalPicture(response.data.data[0][0].additionalPicture)
        })
    }, [])

    const handleSubmit1 = async () => {
        
        try {
            if(imageData){
                const formData = new FormData();
                formData.append('imageData', imageData);
                const response = await axios.post('https://sadra-edu.com/api/upload/single/img', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setImagePath(response?.data.path.split(`\\`).join("/"));
            }

        
            axios.post(`https://sadra-edu.com/api/dashboard/success/update/1`, {
                id: postId,
                authorName: authorName,
                authorJob: authorJob,
                description: description,
                additionalPicture: imagePath,
                date: moment().locale('fa').format('YYYY-MM-DD'),
            })
            .then(response => {
                showToast('پست آپدیت شد.', 'success');
            })
            .catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message);
            });
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            showToast(`خطا در آپلود پست: ${error.response ? error.response.data.error : error.message}`, 'error');
        }
    }

    const dropzoneStyle = {
        border: '2px dashed #cccccc',
        borderRadius: '4px',
        padding: '20px',
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

    return (
        <div style={{padding:"2rem 1rem", maxWidth: '1920px', margin: '0 auto'}}>
            {
                loading ? <Loading/> :
                adminRole === 'admin' ?
                <div className='successMainContent' dir='rtl' style={{ maxWidth: '1920px', margin: '0 auto',overflow: 'hidden'}} >
                    <div style={{display:"flex",flexDirection:"column", gap:"1rem"}}>
                    <InputContact id={'authorName'} setVariable={setAuthorName} variable={authorName} title={'نام نویسنده'} type={'text'} width={'100%'} />

                    <InputContact id={'jobTitle'} setVariable={setAuthorJob} variable={authorJob} title={'شغل نویسنده'} type={'text'} width={'100%'} />

                    <div style={{display:"flex", flexDirection:"column", gap:"0.6rem"}}>
                        <label htmlFor='mainText' style={{cursor:"pointer"}}>توضیحات اصلی کارت</label>
                        <textarea cols="30" rows="5" 
                            id='mainText'
                            className='textArea'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </textarea>
                    </div>

                    {
                        additionalPicture ? 
                        <div>
                            <Divider/>
                            <br />
                            <div {...getRootPropsImage1()} style={dropzoneStyle}>
                                <input {...getInputPropsImage1()} />
                                <p>تصویر نویسنده را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد (فقط یک تصویر)</p>
                                <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                                {additionalPicture && (
                                    <p style={{ marginTop: '10px' }}>
                                    نام فایل انتخابی: {additionalPicture}
                                    </p>
                                )}
                            </div>
                        </div>
                        :
                        ''
                    }

                    <button
                        className='login_Btn_No_Hid'
                        onClick={handleSubmit1}
                        style={{ width: 'fit-content', marginTop: '2rem', cursor: 'pointer' }}
                    type="button">
                        ثبت
                    </button>
                    </div>
                </div>
                :
                <h3>ابتدا از حساب کاربری خود خارج شده و دوباره وارد شوید.</h3>
                }
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
    )
}

export default EditSuccess