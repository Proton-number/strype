import React from 'react'
import Nav from '../Nav'
import BottomNav from '../BottomNav'
import { Box, Paper, Typography, Stack,  createTheme, ThemeProvider, Button } from '@mui/material'

function About() {
  return (
    <Box>
      <Nav />

   <Box
   sx={{
    position:"relative"
   }}
   >
   This is about meeeeee
   </Box>

     <BottomNav />
    </Box>
  )
}

export default About
