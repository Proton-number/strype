import React from 'react'
import { Box, Paper, Typography, Stack,  createTheme, ThemeProvider, Button } from '@mui/material'
import { motion } from 'framer-motion'
import Nav from '../Nav'
import BottomNav from '../BottomNav'

function Cart() {
  return (
    <Box>
      <Nav />
     
     <Box
     sx={{
      position:'relative'
     }}
     >
     Cart pageee
     </Box>

      <BottomNav />
    </Box>
  )
}

export default Cart
