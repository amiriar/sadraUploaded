import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Divider } from '@mui/material';
import { FaStar, FaCalendarAlt, FaLevelUpAlt } from 'react-icons/fa';
import { CiClock2 } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { MdOutlineStackedBarChart } from "react-icons/md";
import usePersianNumber from '../../../helper/PersianNumbers';
import { useNavigate } from 'react-router-dom';
const CardPopular = ({ image, id,	teacherFirstName, teacherLastName, rate, price, time, level , lessons , title , discount, category }) => {
  const newImage = image?.split("/").splice(1).splice(1).join("/")
  const  navigate = useNavigate()
  const clickHandler = () => {
    navigate(`/classes/${id}`)
  }
  return (
    <Card sx={{ maxWidth: 300 , minWidth : 300 , maxHeight : 412 , minHeight : 412 ,  borderRadius : 3.9 , cursor:"pointer"}} onClick={clickHandler} >
    <CardMedia
        sx={{maxHeight : 170}}
        component="img"
        height="170"
        image={`/${newImage}`}
        alt={title}
    />
    <CardContent>
    <Typography fontFamily={'Yekan,sans-serif'} gutterBottom variant="h5" component="div">
      <span>{title}</span>
    </Typography>
    <div fontFamily={'Yekan,sans-serif'} style={{display : "flex" , alignItems : "center" , justifyContent : "space-between" , height : 112}}>
    <Typography fontFamily={'Yekan,sans-serif'} gutterBottom variant="h5" component="div">
    <span style={{display : "flex" , alignItems : "center" , justifyContent : "center"}} >
    {
      category === "برنامه نویسی" && (teacherFirstName?.trim().length !== 0 || teacherLastName?.trim().length !== 0) ? (
        <p>استاد {teacherFirstName} {teacherLastName}</p>
      ) : null
    }
    </span>
    </Typography>
    {/* <Typography fontFamily={'Yekan,sans-serif'} sx={{display : "flex" , alignItems : "center" , justifyContent : "space-between"}} variant="body2" color="text.secondary">
        <FaStar style={{color : "gold" , margin : 5}} /> {rate}
      </Typography> */}
      <Typography fontFamily={'Yekan,sans-serif'} variant="h6" component="div">
      <div>
        
      {/* <span style={{display : "flex"}}>
          {
            Number(discount) ? (
            <div>
            <span id="price">{price * (100 - Number(discount)) / 100 ? (
            <div style={{display : "flex" , flexDirection : "column" , position : "relative" , alignItems : "center" , justifyContent : "center"}}>
              <span>{usePersianNumber(price * (100 - Number(discount)) / 100)}</span><span style={{fontSize : 12}} >هزارتومان</span>
            <span style={{ opacity : 0.5 , fontSize : 16 ,position : "absolute" ,top : -38 , textDecoration : "line-through" , display : "flex" , flexDirection : "column" , alignItems : "center" , justifyContent : "center"}} >{usePersianNumber(price)} <span style={{position : "absolute" , top : 13}} >هزارتومان</span> </span>
            <span style={{position : "absolute" , top : -252 , left : -14 , color : "white" , backgroundColor : "#F04438" , fontSize : 17 , padding : 5 , borderRadius : 1000 , display : "flex" , alignItems : "center"}} >{usePersianNumber(discount)}%</span>
            </div>
            ) : (
                <div style={{position : "relative"}}>
                <span style={{ opacity : 0.5 ,position : "absolute" , top : -40 , right : 14 , fontSize : 17 , textDecoration : "line-through"}} >{usePersianNumber(price)} <span style={{position : "absolute" , right : -7, top : 17}} >هزارتومان</span></span>
                <span style={{fontWeight : 700 , fontSize : 23}} >رایگان</span>
                </div>
                )}</span>
            </div>
            ) : <span id="price">{usePersianNumber(price)} <span id="rial">هزارتومان</span></span>
          }
      </span> */}
        
      </div>
      </Typography>
      </div>
    </CardContent>
    <Divider />
    <CardActions>
      <IconButton aria-label="time">
        <CiClock2 /> <Typography fontFamily={'Yekan,sans-serif'}  sx={{fontSize : 14}}> {usePersianNumber(time)} ساعت</Typography>
      </IconButton>
      <IconButton aria-label="lessons">
        <GoStack style={{padding : 1}} /> <Typography fontFamily={'Yekan,sans-serif'} sx={{fontSize : 14}} > <span>درس</span> {usePersianNumber(lessons)}</Typography>
      </IconButton>
      <IconButton aria-label="level">
        <MdOutlineStackedBarChart  /> <Typography fontFamily={'Yekan,sans-serif'} sx={{fontSize : 14}} > <span>سطح</span> {level}</Typography>
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default CardPopular
