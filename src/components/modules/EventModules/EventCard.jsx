import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActions, IconButton, Divider } from "@mui/material";
import { BiCalendar, BiTime } from "react-icons/bi";
import './EventCard.css'
import usePersianNumber from "../../../helper/PersianNumbers";
const EventCard = ({ image, title, price, teacherFirstName, teacherLastName, date, time , discount }) => {
  const newImage = image?.split('/').splice(1).join('/');

  return (
    <div className="CardEvent" >
      <Card sx={{ width: '100%' , borderRadius : 3}}>
        <CardMedia
          component="img"
          maxheight = {60}
          image={`/${newImage}`}
          alt={title}
          sx={{aspectRatio:"2/1 !important"}}
        />
        <div className="MainDetial" style={{height : 200}}>
        <CardContent>
          <Typography fontFamily={'Yekan, sans-serif'} sx={{minWidth : 240 , maxWidth : 240 , minHeight : 90 , maxheight : 90 , fontSize : 19 }} gutterBottom variant="h6">
          <span id="eventCardTitle" style={{fontSize : 20 , fontWeight : 500}} >{title}</span>
          </Typography>
          <div className="CardEventDetail"  >
          <Typography fontFamily={'Yekan, sans-serif'} sx={{fontSize : 17 , fontWeight : 700}} variant="h6" color="text.secondary">
            <span>مدرس استاد {teacherFirstName} {teacherLastName}</span>
          </Typography>
          <Typography fontFamily={'Yekan, sans-serif'} variant="h6" sx={{paddingLeft : 2}} color="text.secondary">
          <span style={{display : "flex"}}>
            {
              Number(discount) ? (
              <div>
                <span id="price">{price * (100 - Number(discount)) / 100 ? (
              <div style={{display : "flex" , flexDirection : "column" , position : "relative" , alignItems : "center" , justifyContent : "center"}}>
                <span>{usePersianNumber(price * (100 - Number(discount)) / 100)}</span><span style={{fontSize : 12}} >هزارتومان</span>
                <span style={{ opacity : 0.5 , fontSize : 16 ,position : "absolute" ,top : -38 , textDecoration : "line-through" , display : "flex" , flexDirection : "column" , alignItems : "center" , justifyContent : "center"}} > {usePersianNumber(price)}<span style={{position : "absolute" , top : 13}} >هزارتومان</span> </span>
                <span style={{position : "absolute" , top : -260 ,left : -20 , color : "white" , backgroundColor : "#F04438" , fontSize : 17 , padding : 5 , borderRadius : 1000}} >{usePersianNumber(discount)}%</span>
              </div>
              ) : (
                  <div style={{position : "relative"}}>
                  <span style={{ opacity : 0.5 ,position : "absolute" , top : -38 , right : 15 , fontSize : 17 , textDecoration : "line-through"}} >{usePersianNumber(price)} <span style={{position : "absolute" , right : -10, top : 14}} >هزارتومان</span></span>
                  <span style={{fontWeight : 700}} >رایگان</span>
                  <span style={{position : "absolute" , top : -268 ,left : -30, color : "white" , backgroundColor : "#F04438" , fontSize : 17 , padding : 5 , borderRadius : 1000}} >{usePersianNumber(discount)}%</span>
                  </div>
                  )}</span>
              </div>
              ) : (
                <span id="price"> {usePersianNumber(price)} <span id="rial">هزارتومان</span></span>
              )
            }
        </span>
          </Typography>
          </div>
        </CardContent>
        </div>
        <Divider />
          <div className="bottom" style={{ display : "flex" , alignItems : "center" , justifyContent : "center"}} >
        <CardActions disableSpacing>
          <IconButton aria-label="date">
            <BiCalendar />
          </IconButton>
          <Typography fontFamily={'Yekan, sans-serif'} sx={{fontSize : 15}} variant="h1" color="text.secondary">
            <p style={{fontSize : 15}} >{usePersianNumber(date.split(" ")[0])} <span style={{padding : 1}} >/</span> {usePersianNumber(date.split(" ")[1])} <span style={{padding : 1}} >/</span> {usePersianNumber(date.split(" ")[2])}</p>
          </Typography> 
          
          <IconButton aria-label="time">
            <BiTime />
          </IconButton>
          <Typography fontFamily={'Yekan, sans-serif'} sx={{fontSize : 15}} variant="h1" color="text.secondary">
            {
            }
            <p style={{fontSize : 15}}>{usePersianNumber(time.split(" ")[0])}<span style={{padding : 2}} >:</span>{usePersianNumber(time.split(" ")[1])}<span style={{padding : 2}} >:</span>{usePersianNumber(time.split(" ")[2])}</p>
          </Typography>
        </CardActions>
          </div>
      </Card>
    </div>
  );
};

export default EventCard;
