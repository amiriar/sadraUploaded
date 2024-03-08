import './employmentForm.css';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InputContact from '../components/modules/input/InputContact';
import { useDropzone } from 'react-dropzone';
import { showToast } from '../components/modules/AuthModules/Toastify';
import { ToastContainer } from 'react-toastify';
import moment from 'jalali-moment';

function EmploymentForm() {
  const router = useParams();
  const {id} = router;

  
  useEffect(()=> {
    const dataFetcher = async () => {
      const res = await axios.get(`https://sadra-edu.com/api/employment/${id}`);
      console.log(res.data[0][0]);
      setJobTime(res.data[0][0].jobTime);
      setJobTitle(res.data[0][0].jobTitle);
      setJobPlace(res.data[0][0].jobPlace);
    }
    dataFetcher();
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
  
  const [userName, setUserName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userPhone, setUserPhone] = useState('')

  const [jobTitle, setJobTitle] = useState('')
  const [jobTime, setJobTime] = useState('')
  const [jobPlace, setJobPlace] = useState('')
  
  const [imageData, setImageData] = useState('');
  const [fileName, setFileName] = useState('');
  const [imagePath, setImagePath] = useState('');
  
  
  const handleSubmit = async (e) => {
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
  //firstName, lastName, phoneNumber, selectedTitle, selectedTime, selectedPlace, filePath, fileName, date
      axios.post(`https://sadra-edu.com/api/resume/add/full`, {
        firstName: userName, 
        lastName: userLastName, 
        phoneNumber: userPhone, 
        selectedTitle: jobTitle, 
        selectedTime: jobTime, 
        selectedPlace: jobPlace, 
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
    <div className='employment' dir='rtl'>
      <div className='employementForm_container'>
        <div>
          <h1>درخواست برای: {jobTitle}</h1>
          <h2>واقع شده در: {jobPlace}</h2>
          <h2>بازه زمانی: {jobTime}</h2>
        </div>
        <form style={{display:"flex", flexDirection:"column", gap:"1.5rem"}}>
          <InputContact id={'name'} variable={userName} setVariable={setUserName} title={'نام'} type={'text'} width={'100%'} required={true} />
          <InputContact id={'lastName'} variable={userLastName} setVariable={setUserLastName} title={'نام خانوادگی'} type={'text'} width={'100%'} required={true} />
          <InputContact id={'phone'} variable={userPhone} setVariable={setUserPhone} title={'تلفن همراه'} type={'text'} width={'100%'} required={true} />

          <div>
            <h1>برای ثبت رزومه ی خود از فرم زیر اقدام فرمایید.</h1>
              <div {...getRootPropsImage1()} style={dropzoneStyle}>
                  <input {...getInputPropsImage1()} />
                  <p>فایل را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد فایل مورد نظر </p>
                  <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, pdf )</p>
                  {fileName && (
                      <p style={{ marginTop: '10px' }}>
                      نام فایل انتخابی: {fileName}
                      </p>
                  )}
              </div>
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

export default EmploymentForm
