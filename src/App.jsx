import { useState } from 'react'
import './App.css'
import Desktop from './Components/Desktop/Desktop'
import Mobile from './Components/Mobile/Mobile'
import {createTheme, ThemeProvider } from '@mui/material'





function App() {

  
  const theme = createTheme({
    typography:{
      fontFamily:`'Barlow Condensed' sans-serif`
    }
  })


  return (
    <>
    <Desktop />
    <Mobile />
    </>
  )
}

export default App
