import thumbnail1 from '/public/assets/thumbnail1.jpg'
import thumbnail2 from '/public/assets/prof4.jpg'
import thumbnail3 from '/public/assets/prof.jpg'

const CardData = [
    {
        id : 1 , 
        title : "نحوه طراحی دستی ایده‌ها" , 
        teacher : "استاد علی بابایی" ,
        rates : {
            AVGrate : 4.8 , 
            rateNum : 122 , 
        } , 
        price : 128 , 
        time : 40 ,
        lessons : 21 ,
        level : "مبتدی" , 
        thumbnail : thumbnail1 , 
        // categoy : "طراحی UI/UX" ,
    } , 

    {
        id : 2 , 
        title : "طراحی UI/UX" , 
        teacher : "استاد علی بابایی" ,
        rates : {
            AVGrate : 4.8 , 
            rateNum : 122 , 
        } , 
        price : "220" , 
        time : 140 ,
        lessons : 51 ,
        level : "مبتدی" ,
        thumbnail : thumbnail2 ,  
        // categoy : "طراحی UI/UX" ,

    } ,

    {
        id : 3 , 
        title : "معرفی ابزارهای طراحی رابط کاربری (UI)" , 
        teacher : "استاد علی بابایی" ,
        rates : {
            AVGrate : 4.8 , 
            rateNum : 122 , 
        } , 
        price : 'رایگان' , 
        time : 45 ,
        lessons : 81 ,
        level : "مبتدی" , 
        thumbnail : thumbnail3 ,  
        // categoy : "طراحی گرافیک" ,

    }
]


const RenderCategory = [
    {
        id : 1 , 
        CatTitle : "طراحی UI/UX"
        , 
        quantity : 160 
    } ,
    
    {
        id : 2 , 
        CatTitle : "طراحی گرافیک"
        , 
        quantity : 160 
    } ,

    {
        id : 3 , 
        CatTitle : "انیمیشن و 3D"
        , 
        quantity : 160 
    } ,

    {
        id : 4 , 
        CatTitle : "فرانت‌اند"
        , 
        quantity : 160 
    } ,

    {
        id : 5 , 
        CatTitle : "بک‌اند"
        , 
        quantity : 160 
    } ,

    {
        id : 6 , 
        CatTitle : "IOT" , 
        quantity : 160 
    } ,
]

export {CardData , RenderCategory}