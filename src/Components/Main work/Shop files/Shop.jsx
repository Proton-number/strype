import React from 'react'
import Nav from '../Nav'
import { Box, Paper, Typography, Stack, IconButton , createTheme, ThemeProvider, Button } from '@mui/material'
import { motion } from 'framer-motion'
import BottomNav from '../BottomNav'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Shop() {
  return (
    <Box>
      <Nav />

    <Box
    sx={{
      position:"relative",
      padding:{
        lg:10
      }
    }}
    >

      <Paper
      sx={{
        padding:{
         lg: 3.4
        },
        width:{
          lg:'12%'
        },
        display:"flex",
        justifyContent:"center",
        borderRadius:"10px"
      }}
      >

       <Stack 
       spacing={{
        lg:2
       }}
       >

         
         <Box
         sx={{position:"relative"}}
         >
          <Box sx={{width:"200px", height:"200px", backgroundColor:'lightblue'}}/>
          <IconButton 
          sx={{
            position:"absolute",
            bottom:"0px"
          }}
          size="large" >
             <FavoriteIcon />
             </IconButton>
         </Box>

         <Stack  spacing={.6} >
          <Typography>Price:  ₦34,000</Typography>
          <Typography> Sport jersey with joggers </Typography>
         </Stack>

          
         <Stack direction="row" sx={{justifyContent:'space-around'}}>

             <Button
             component={motion.button} 
             transition={{duration:.2, ease: 'easeIn'}}
              whileHover={{ color:'hsl(209, 100%, 30%)', backgroundColor:'whitesmoke',  borderColor:"black"}} 
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
                 lg:"2px"
                }
                }} 
             >
              Add to Cart
             </Button>

             </Stack>

        </Stack>  
       

      </Paper>
      
   
    </Box>

<BottomNav />
    </Box>
  )
}

export default Shop
