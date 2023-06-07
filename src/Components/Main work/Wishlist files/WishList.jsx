import React from 'react'
import { Box, Paper, Typography, Stack,  createTheme, ThemeProvider, Button } from '@mui/material'
import { motion } from 'framer-motion'
import Nav from '../Nav'
import BottomNav from '../BottomNav'

function WishList() {
  return (
    <Box>
  <Nav />


     <Box
     sx={{
      position:"relative"
     }}
     >
 WishList pageeee
     </Box>

      <BottomNav />
    </Box>
  )
}

export default WishList
