import React from 'react'
import Nav from '../Nav'
import { Box, Paper, Typography, Stack,  createTheme, ThemeProvider, Button } from '@mui/material'
import { motion } from 'framer-motion'
import BottomNav from '../BottomNav'
import { Link } from 'react-router-dom';


function Home() {




  return (
    <Box >
      <Nav />
      

     <Box
    

    sx={{
        display:"flex",
        justifyContent:'center',
        padding:{
            lg:12
        }
    }}
      >

     <Stack
     direction={{
        lg:'row'
     }}
     spacing={{
         xs: 5,
         sm:0,
        lg: 30
     }}
     sx={{
        alignItems:'center',
     }}
     >

        <Box  
        component={motion.div}
     initial={{opacity:0, x:-100}}
     animate={{opacity:1, x: 0}}
     transition={{duration:.5, delay:0.2}} 
     sx={{
      width:{
        xs:"300px",
        lg:"400px"
      },
      height:{
        xs:"300px",
        lg:"400px"
      },
      backgroundColor:'blue',
       borderRadius:"50%"}} />


   <Stack 
   spacing={{xs:4,sm:2,lg: 2}}
    sx={{alignItems:"center", textAlign:"center"}} 
   
    >
    <Typography 
    variant= 'h2' 
    sx={{width:'70%'}}
    component={motion.h2}
    initial={{opacity:0, x:100}}
    animate={{opacity:1, x: 0}}
    transition={{duration:.5, delay:0.2}} 
     >Enjoy This Winter Trend</Typography>

    <Typography 
    variant='subtitle1'
    component={motion.p}
    initial={{opacity:0, x:100}}
    animate={{opacity:1, x: 0}}
    transition={{duration:.5, delay:0.3}} 
     > Discover now latest collections </Typography>

     <Link to={'/Shop'} style={{textDecoration:'none', }}>
     <Button  
     component={motion.button} 
    initial={{opacity:0, x:100}}
    animate={{opacity:1, x: 0}}
    // transition={{duration:.5, delay:0.42}} 
     whileHover={{color:'white', backgroundColor:'rgb(43, 42, 42)'}} 
     varaint='outlined' 
     sx={{color:"black",
      backgroundColor:"white",
      textTransform:"none",
      borderStyle:"solid",
       borderColor:"yellow",
       fontSize:"1.2em",
       width:{
        xs:"100%",
        lg: "100%"
       },
       padding:{
        lg:"12px"
       }
       }} 
       disableElevation> Shop now</Button>
     </Link>

   </Stack>

     </Stack>

     </Box>
<BottomNav />
    </Box>
  )
}

export default Home
