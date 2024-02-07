import React from 'react'

// Components
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  )
}

export default Layout
