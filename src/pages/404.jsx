import React from 'react'
import './404.css'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div class="flex-container">
    <div class="text-center">
    <h1>
      <span class="fade-in" id="digit1">4</span>
      <span class="fade-in" id="digit2">0</span>
      <span class="fade-in" id="digit3">4</span>
    </h1>
    <h3 class="fadeIn">صفحه مورد نظر یافت نشد </h3>
    <button><Link to={"/"} name="button" style={{fontFamily : "Yekan"}} >برگشت به صفحه اصلی</Link></button>
    </div>
    </div>
  )
}

export default PageNotFound
