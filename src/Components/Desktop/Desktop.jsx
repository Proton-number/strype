import React from 'react'
import './Desktop.css'
import { Box,  createTheme, ThemeProvider } from '@mui/material'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home files/Home'
import Shop from './Shop files/Shop'
import About from './About Files/About'
import Contact from './Contact files/Contact'
import Profile from './Profile files/Profile'
import WishList from './Wishlist files/WishList'
import Cart from './Cart files/Cart'




function Desktop() {

    
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
    >
      <Routes>
       <Route exact path='/' element={<Home />} />

       <Route exact path='/Shop' element={<Shop />} />

       <Route exact path='/About' element={<About />} />

       <Route exact path='/Contact' element={<Contact />} />

       <Route exact path='/Profile' element={<Profile/>} />
       
       <Route exact path='/Wishlist' element={<WishList/>} />

       <Route exact path='/Cart' element={<Cart/>} />


        

      </Routes>
    </Box>
    </ThemeProvider>
  </Router>
  )
}

export default Desktop
