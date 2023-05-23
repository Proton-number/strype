import React, {useState} from 'react'
import { Box, Paper, Typography, Stack,  createTheme, ThemeProvider ,Button, IconButton, Drawer , Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Nav() {
    
    
  const theme = createTheme({
    typography:{
      fontFamily:    'Pacifico cursive'
    }
  })



  return (
    <Box
    sx={{
        padding:{
          sm: '10px', //600
          lg: '26px' 
        },
        }}
    >

        <Toolbar>

            <Stack spacing={{lg:4}} direction={{lg:'row'}} sx={{flexGrow:.7,  alignItems:'center' }}  >

               <ThemeProvider theme={theme}>
               <Box>
                    <Typography variant='h3'>Strype</Typography>
                </Box>
               </ThemeProvider>
                
            </Stack>

            <Stack
             direction='row'
             spacing={{lg:10}}
             sx={{alignItems:"center"}}
            >

                <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
            <Typography variant='p'>Home</Typography>
                </Link>


            <Link to={'/Shop'} style={{textDecoration:'none', color:'white'}}>
            <Typography variant='p'>Shop</Typography>
            </Link>

              
              <Link to={'/About'} style={{textDecoration:'none', color:'white'}}>
              <Typography variant='p'>About us</Typography>
              </Link>

            <Link to={'/Contact'} style={{textDecoration:'none', color:'white'}}>
            <Typography variant='p'>Contact</Typography>
            </Link>

            <Link  to={'/Profile'} style={{textDecoration:'none', color:'white'}}>
            <IconButton sx={{color:"white"}} aria-label="profile" >
                  < PersonIcon  />
                </IconButton>
            </Link>

                <Link  to={'/WishList'} style={{textDecoration:'none', color:'white'}}>
                <IconButton sx={{color:"white"}} aria-label="profile" >
                  < FavoriteIcon />
                </IconButton>
                </Link>

                <Link  to={'/Cart'} style={{textDecoration:'none', color:'white'}}>
                <IconButton sx={{color:"white"}} aria-label="profile" >
                  < ShoppingCartIcon />
                </IconButton>
                </Link>

            </Stack>

           

        </Toolbar>
      
    </Box>
  )
}

export default Nav
