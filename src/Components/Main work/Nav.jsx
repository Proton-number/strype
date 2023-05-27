import React, {useState} from 'react'
import { Box, Paper, Typography, Stack,  createTheme, ThemeProvider ,Button, IconButton, Drawer , Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Strype.css'



function Nav() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
    
    
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

       <Box id="desktopNav">
       <Toolbar >

<Stack spacing={{lg:4}} direction={{sm:"row",lg:'row'}} sx={{flexGrow:{sm:1, lg:.7},  alignItems:'center' }}  >

   <ThemeProvider theme={theme}>
   <Box>
        <Typography variant='h3'>Strype</Typography>
    </Box>
   </ThemeProvider>
    
</Stack>

<Stack
 direction='row'
 spacing={{sm:4,lg:10}}
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

{/* NAV FOR MOBILE VIEW  */}

        <Toolbar id="mobileNav">
        <Typography variant="h4" sx={{flexGrow:4}}>Strype</Typography>


<IconButton size='small' edge='start' color='inherit' aria-label='logo' onClick={()=> setisDrawerOpen(true)} >
<MenuIcon fontSize='large' />
</IconButton>




</Toolbar>

     {/* DRAWER FOR  THE SIDE MENU */}

  <Drawer anchor="left" open={isDrawerOpen} onClose={() => setisDrawerOpen(false)}>

    <Box width='350px' textAlign='center' role='presentation' >
      <Stack spacing={6} style={{textTransform:'uppercase', padding:'100px' }}>
       
      <Link to={'/'} style={{textDecoration:'none', color:'black'}}>
<Typography variant='p'>Home</Typography>
    </Link>


<Link to={'/Shop'} style={{textDecoration:'none', color:'black'}}>
<Typography variant='p'>Shop</Typography>
</Link>

  
  <Link to={'/About'} style={{textDecoration:'none', color:'black'}}>
  <Typography variant='p'>About us</Typography>
  </Link>

<Link to={'/Contact'} style={{textDecoration:'none', color:'black'}}>
<Typography variant='p'>Contact</Typography>
</Link>
       
        
      </Stack>
    </Box> 

  </Drawer>
      
    </Box>
  )
}

export default Nav
