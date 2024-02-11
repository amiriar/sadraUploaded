import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import InputContact from '../../modules/input/InputContact'
import { Checkbox, Divider, FormControl, MenuItem, Select } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import { ToastContainer } from 'react-toastify'
import Loading from '../../../helper/Loading'
import { showToast } from '../../modules/AuthModules/Toastify'
import { adminCategories, categories } from '../Categories'
import SignOutButton from '../SignOutButton'

function EditUser() {
    const [adminId, setAdminId] = useState()
    const [adminRole, setAdminRole] = useState()
    const { id } = useParams()

    const [loading, setLoading] = useState(true)

    const [imageData, setImageData] = useState('')
    
    const [userId, setUserId] = useState()
    const [userName, setUserName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userRole, setUserRole] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userAge, setUserAge] = useState('')
    const [userPhoneNumber, setUserPhoneNumber] = useState('')
    const [userEducation, setUserEducation] = useState('')
    const [userIsStudent, setUserIsStudent] = useState('')
    const [userProfile, setUserProfile] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userLinkedin, setUserLinkedin] = useState('')
    const [userPinterest, setUserPinterest] = useState('')
    const [userTwitterX, setUserTwitterX] = useState('')
    const [userFacebook, setUserFacebook] = useState('')

    useEffect(() => {
        axios.get('https://backend.sadra-edu.com/dashboard/token', { withCredentials: true })
        .then(response => {
            const { id, role } = response.data;
            setAdminId(id);
            setAdminRole(role);
        });
        
        axios.get(`https://backend.sadra-edu.com/users/data/${id}`).then(response =>{
            setLoading(false)
            setUserId(response.data[0][0].id);
            setUserName(response.data[0][0].name)
            setUserLastName(response.data[0][0].lastName)
            setUserRole(response.data[0][0].role)
            setUserEmail(response.data[0][0].email)
            setUserAge(response.data[0][0].age)
            setUserPhoneNumber(response.data[0][0].phoneNumber)
            setUserEducation(response.data[0][0].education)
            setUserIsStudent(response.data[0][0].isStudent)
            setUserProfile(response.data[0][0].profile)
            setUserDescription(response.data[0][0].description)
            setUserLinkedin(response.data[0][0].linkedin)
            setUserPinterest(response.data[0][0].pinterest)
            setUserTwitterX(response.data[0][0].twitterX)
            setUserFacebook(response.data[0][0].facebook)
        })
    }, [])

    const handleSelectChange = (event) => {
        setUserRole(event.target.value);
    };
    const handleSelectChange2 = (event) => {
        setUserEducation(event.target.value);
    };

    const handleCheckboxChange = (e) => {
        // Convert the checkbox value to 1 (true) or 0 (false)
        setUserIsStudent(e.target.checked ? 1 : 0);
    };

    const [fileName, setFileName] = useState('');

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setImageData(file);
        setFileName(file.name); 
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const dropzoneStyle = {
        border: '2px dashed #cccccc',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        marginTop: '10px',
    };


    const insertHandler = async () => {
        try {
            if (userName === "" || userLastName === "" || userRole === "" || userEmail === "" || userAge === "" || userPhoneNumber === "" || userEducation === "" || userIsStudent === "" || userDescription === "" || userLinkedin === "" || userPinterest === "" || userTwitterX === "" || userFacebook === "") {
                showToast('لطفا تمامی فیلد هارا پرکنید.', 'error');
            } else {
                if (!userProfile && !imageData) {
                    showToast('لطفاً یک تصویر را انتخاب کنید.', 'error');
                } else {
                    let imagePath = userProfile;
    
                    if (imageData) {
                        const formData = new FormData();
                        formData.append('imageData', imageData);
    
                        const response = await axios.post('https://backend.sadra-edu.com/upload/single/img', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                        });
    
                        imagePath = response.data.path.split(`\\`).join("/");
                    }
    
                    const response2 = await axios.post('https://backend.sadra-edu.com/fullInfoRole', {
                        id: userId,
                        name: userName,
                        role: userRole,
                        lastName: userLastName,
                        email: userEmail,
                        age: userAge,
                        phoneNumber: userPhoneNumber,
                        education: userEducation,
                        profile: imagePath,
                        description: userDescription,
                        linkedin: userLinkedin,
                        pinterest: userPinterest,
                        twitterX: userTwitterX,
                        facebook: userFacebook
                    });
    
                    showToast("اطلاعات شما ثبت شد! حالا، به صفحات دیگر دسترسی دارید.", "success");
                }
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            showToast(`خطا در آپلود: ${error.response ? error.response.data.error : error.message}`, 'error');
        }
    };
    
    const navigate = useNavigate()
    
    return (
        <>
            <div dir='rtl' className='panelContainer'>
                <div className='userPanel' dir='rtl'> 
                    <div className='sideBarPanel'>
                        <div>
                            {
                                adminRole === 'admin' ?
                                    adminCategories.map((item) => (
                                        <Link key={item.title} to={item.link}>{item.title}</Link>
                                    ))
                                :
                                navigate("/")
                            }
                        </div>
                            <div>
                                <SignOutButton/>
                            </div>
                    </div>
                    <div className='mainPanel'>
                        {
                            loading ? <Loading/> :
                            <form dir='rtl' style={{ display:"flex", flexDirection:"column", gap:"1rem"}}>
                                <InputContact id={'name'} variable={userName} setVariable={setUserName} title={'نام'} type={'text'} width={'100%'} />
                                <InputContact id={'lastName'} variable={userLastName} setVariable={setUserLastName} title={'نام خانوادگی'} type={'text'} width={'100%'} />

                                <FormControl variant="outlined">
                                    <p>سطح کاربری</p>
                                    <Select
                                        id="education"
                                        sx={{ position: 'relative', fontFamily: 'Yekan, sans-serif', marginTop:"0.6rem", width:"200px" }}
                                        value={userRole}
                                        onChange={handleSelectChange}
                                        required
                                    >
                                        <MenuItem sx={{fontFamily:"Yekan,sans-serif"}} value="user">معمولی</MenuItem>
                                        <MenuItem sx={{fontFamily:"Yekan,sans-serif"}} value="teacher">دبیر</MenuItem>
                                        <MenuItem sx={{fontFamily:"Yekan,sans-serif"}} value="admin">ادمین</MenuItem>
                                    </Select>
                                </FormControl>
                                <InputContact id={'email'} variable={userEmail} setVariable={setUserEmail} title={'پست الکترونیکی'} type={'email'} width={'100%'} />
                                <InputContact id={'age'} variable={userAge} setVariable={setUserAge} title={'سن'} type={'number'} width={'100%'} />
                                <InputContact id={'phone'} variable={userPhoneNumber} setVariable={setUserPhoneNumber} title={'شماره تماس'} type={'text'} width={'100%'} />
                                {/* <InputContact id={'education`} variable={userEducation} setVariable={setUserEducation} title={`مقطع تحصیلی'} type={'text'} width={'100%'} /> */}

                                <FormControl variant="outlined">
                                    <p>مقطع تحصیلی</p>
                                    <Select
                                        id="education"
                                        sx={{ position: 'relative', fontFamily: 'Yekan, sans-serif', marginTop:"0.6rem" }}
                                        value={userEducation === '' ? 'مقطع تحصیلی' : userEducation}
                                        onChange={handleSelectChange2}
                                        required
                                    >
                                        <MenuItem value="مقطع تحصیلی" 
                                        disabled={userEducation !== 'مقطع تحصیلی'}
                                        sx={{fontFamily:"Yekan,sans-serif"}}>
                                        مقطع تحصیلی
                                        </MenuItem>
                                        <MenuItem sx={{fontFamily:"Yekan,sans-serif"}} value="دیپلم">دیپلم</MenuItem>
                                        <MenuItem sx={{fontFamily:"Yekan,sans-serif"}} value="لیسانس">لیسانس</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ marginTop: '1rem', display: 'inline', alignItems: 'center' }}>
                                    <Checkbox
                                        checked={userIsStudent === 1 ? true : false}
                                        onChange={handleCheckboxChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        sx={{ color: '#4ca773' }}
                                        id='is-student'
                                    />
                                    <label htmlFor="is-student" style={{ cursor:"pointer"}}>
                                        دانشجو هستم
                                    </label>
                                </FormControl>

                                <div>
                                    <p>عکس پروفایل</p>
                                    <div {...getRootProps()} style={dropzoneStyle}>
                                        <input {...getInputProps()} />
                                        <p>تصویر را انتخاب یا اینجا بکشید باید کمتر از 3 مگابایت باشد</p>
                                        <p>باید از یکی از این پسوند ها باشد: ( png, jpg, jpeg, webp )</p>
                                        {fileName && (
                                            <p style={{ marginTop: '10px' }}>
                                            نام فایل انتخابی: {fileName}
                                            </p>
                                        )}
                                        {
                                            userProfile !== '' && (
                                                <>
                                                    تصویر فعلی:
                                                    <br />
                                                    <br />
                                                    <img src={`/${userProfile}`} alt={userProfile} style={{height:"200px"}}/>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>

                                <InputContact id={'description'} variable={userDescription} setVariable={setUserDescription} title={'درباره کاربر'} type={'text'} width={'100%'} />
                                <InputContact id={'linkedin'} variable={userLinkedin} setVariable={setUserLinkedin} subTitle={"در صورت نداشتن # بگذارید."} title={'لینک لینکدین'} type={'text'} width={'100%'} />
                                <InputContact id={'pinterest'} variable={userPinterest} setVariable={setUserPinterest} subTitle={"در صورت نداشتن # بگذارید."} title={'لینک پینترست'} type={'text'} width={'100%'} />
                                <InputContact id={'twitter'} variable={userTwitterX} setVariable={setUserTwitterX} subTitle={"در صورت نداشتن # بگذارید."} title={'لینک توییتر یا X'} type={'text'} width={'100%'} />
                                <InputContact id={'facebook'} variable={userFacebook} setVariable={setUserFacebook} subTitle={"در صورت نداشتن # بگذارید."} title={'لینک فیس بوک'} type={'text'} width={'100%'} />
                                <button
                                    className='login_Btn_No_Hid'
                                    onClick={insertHandler}
                                    style={{ width: 'fit-content', marginTop: '2rem', cursor: 'pointer' }}
                                    type="button"
                                >
                                    ثبت اطلاعات نوشته شده
                                </button>
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
                            </form>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditUser