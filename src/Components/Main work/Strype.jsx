import React from 'react'
import './Strype.css'
import { Box,  createTheme, ThemeProvider, } from '@mui/material'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home files/Home'
import Shop from './Shop files/Shop'
import About from './About Files/About'
import Contact from './Contact files/Contact'
import WishList from './Wishlist files/WishList'
import Cart from './Cart files/Cart'
import background1 from "/src/images/image-5.jpg"
// import secondBackground from '/src/images/image-6.jpg'

const containerStyle = {
  background: `url(${background1}) `, 
      position:"relative",
      minHeight:"100vh"
};


  


function Strype() {

    
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1920,
        custom: 801,
      },
    },
    
  });

  return (
  <Router>
    <ThemeProvider theme={theme} > 
    <Box
    id='desktop-view' 
style={containerStyle}
    // sx={{
    //   position:"relative",
    //   background: 'url(/src/images/image-5.jpg) ', 
    //   background: `${images}`,
    //   minHeight:"100vh"
    // }}
    >

<Box component="img" sx={{backgroundImage:"url(/src/images/image-6.jpg)", width:"62%", height:"88%", position:"absolute", top:0, left:-1}} />

      
      <Routes>
       <Route exact path='/' element={<Home />} />

       <Route exact path='/Shop' element={<Shop />} />

       <Route exact path='/About' element={<About />} />

       <Route exact path='/Contact' element={<Contact />} />

       
       <Route exact path='/Wishlist' element={<WishList/>} />

       <Route exact path='/Cart' element={<Cart/>} />


        

      </Routes>
    </Box>
    </ThemeProvider>
  </Router>
  )
}

export default Strype
