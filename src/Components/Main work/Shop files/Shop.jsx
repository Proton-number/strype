import React from 'react'
import Nav from '../Nav'
import { Box, Grid , Paper, Typography, Stack, IconButton , createTheme, ThemeProvider, Button } from '@mui/material'
import { motion } from 'framer-motion'
import BottomNav from '../BottomNav'
import FavoriteIcon from '@mui/icons-material/Favorite';
import jsonData from '/src/Components/Main work/data.json'


// const prices = [
//   "₦34,000",
//   "₦24,000",
//   "₦14,300",
//   "₦42,800",
//   "₦74,400",
//   "₦18,000",
//   "₦23,340",
//   "₦25,800",
//   "₦15,320",
//   "₦10,230",
//   "₦54,000",
//   "₦74,200",
// ]

// const backgroundColors = [ ];



function Shop() {
  return (
    <Box>
      <Nav />

    <Box
    sx={{
      position:"relative",
      padding:{
        xs: 4,
        lg:10
      }
    }}
    >
     
     <Grid container sx={{display:"flex", justifyContent:"center"}} spacing={3}>
  

      {jsonData.map ((item, index) => (
        <Grid item key={index}>
          
      <Paper
      sx={{
        padding:{
          xs:2.2,
         lg: 3.4
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
          <Box sx={{width:"200px", height:"200px", backgroundColor: item.backgroundColors}}/>
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
          <Typography>Price:  {item.prices} </Typography>
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
        </Grid>
      ))}

     </Grid>


      
   
    </Box>

<BottomNav />
    </Box>
  )
}

export default Shop
