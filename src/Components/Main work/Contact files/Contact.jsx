import React from 'react'
import Nav from '../Nav'
import BottomNav from '../BottomNav'
import { Box, TextField, Typography, Stack,  createTheme, ThemeProvider, Button } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <Box>
        <Nav />

        <Box
        sx={{
          position:"relative",
          padding:{
            lg:10,
            xs: 4
          },
          textAlign:'center'
        }}
        >
        
        <Typography variant="h2"> We'd love to hear from you! </Typography>

        <Typography variant="h5"> Kindly send us a message via email </Typography>

        <Stack
        direction="column"
        spacing={{
          lg:3
        }}
        sx={{
          alignItems:"center",
          padding:{
            lg:5
          }
        }}
        >
     <TextField 
     sx={{
      width:{
        lg: "50%"
      }
    }} 
     label='Name' 
     type="name" 
     size='large' 
     color='primary' 
     variant='outlined' 
     />

     <TextField 
     sx={{
      width:{
        lg: "50%"
      },
    }} 
     label='Email' 
     type="email" 
     size='large' 
     color='primary' 
     variant='outlined'
      />

<TextField 
     sx={{
      width:{
        lg: "50%"
      }
    }} 
     label='Subject' 
     type="text" 
     size='large' 
     color='primary' 
     variant='outlined'
      />

<TextField 
     sx={{
      width:{
        lg: "50%"
      }
    }} 
    InputProps={{ style: { height: 200 } }}
     type="text" 
     size='large' 
     color='primary' 
     variant='outlined'
      />

      <Button 
        sx={{
          width:{
            lg: "50%"
          }
        }} 
      color="primary" 
      size="large"
      variant="contained"
      disableElevation
      > Submit</Button>
 

       
       <Stack>
        
      <Stack 
      direction="row" 
       spacing={{
        lg:4
       }}
       > 
       <PhoneIcon /> 
       <Typography> +2344848438383838 </Typography>
       </Stack>
      
      <hr style={{width:'100%', opacity:.4}} />
 
      <Stack 
      direction="row"
      spacing={{
        lg:4
       }}
      >
         <EmailIcon/> 
         <Typography>Styrpe@gmail.com</Typography>
      </Stack>

       </Stack>
       
        </Stack>



        </Box>

      <BottomNav />
    </Box>
  )
}

export default Contact
