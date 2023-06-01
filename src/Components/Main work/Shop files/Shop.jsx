import React from 'react'
import Nav from '../Nav'
import { Box, Paper, Typography, Stack,  createTheme, ThemeProvider, Button } from '@mui/material'
import { motion } from 'framer-motion'
import BottomNav from '../BottomNav'

function Shop() {
  return (
    <Box>
      <Nav />

   Let's shop here.....

<BottomNav />
    </Box>
  )
}

export default Shop
