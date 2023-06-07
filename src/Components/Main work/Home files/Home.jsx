import React, {useState, useEffect} from 'react'
import Nav from '../Nav'
import { Box, Paper, Typography, Stack,  createTheme, ThemeProvider, Button, IconButton } from '@mui/material'
import { motion } from 'framer-motion'
import BottomNav from '../BottomNav'
import { Link } from 'react-router-dom';
import img1 from "/src/images/image00011.jpeg"
import img2 from "/src/images/image00013.jpeg"
import img3 from "/src/images/image00018.jpeg"
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const images = [`${img1}`, `${img2}`, `${img3}`, ]



function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
           

     
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
      }, [currentIndex])




  return (
    <Box 
  
    >
      <Nav />
      

     <Box
    

    sx={{
      position:'relative',
        display:"flex",
        justifyContent:'center',
        padding:{
            lg:8
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
            component={motion.img}
            initial={{opacity:0, x:-100}}
            animate={{opacity:1, x:0}}
    transition={{duration:.5, delay:0.2}} 
            src={images[currentIndex]} 
            alt="models"
            sx={{
              width:{
                // xs: ,
                // sm: ,
                lg:"370px"
              },
              height:{
                  // xs: ,
                // sm: ,
                lg:"500px"
              },
            borderRadius:"10px"
            }}
            />
          

   <Stack 
   spacing={{xs:4,sm:2,lg: 2}}
    sx={{alignItems:"center", textAlign:"center"}} 
   
    >


 

    <Typography 
    variant= 'h2' 
    sx={{width:'90%'}}
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
    transition={{duration:.2, ease: 'easeIn'}}
     whileHover={{ color:'hsl(209, 100%, 30%)', backgroundColor:'whitesmoke',  marginRight:"20px", borderColor:"black"}} 
     varaint='outlined' 
     sx={{
      color:"white",
      backgroundColor:"hsl(209, 100%, 30%)",
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
       endIcon={<ArrowForwardRoundedIcon/>}
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
