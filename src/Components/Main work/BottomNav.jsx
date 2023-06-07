import React, {useState} from 'react'
import { Box, Stack, IconButton, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



function BottomNav() {
    const [value, setValue] = useState(0);

    
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }


  return (
    <Box id="bottomNav">
        <Stack 
        direction="row" 
        sx={{
          // padding:"5px",
          justifyContent:"space-around",
           backgroundColor:"white", 
           width: "100%", 
           position:"absolute", 
           left:"0px",
           bottom:"0px"
           }}  >
      

    
   
   <Link to={'/Cart'} style={{textDecoration:'none'}}>
    <IconButton 
    component={motion.button}
  whileHover={{color:"blue", scale:1.080}}
    style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
      }}>
    <ShoppingCartIcon />
    <Typography variant="body2">Cart</Typography>
    </IconButton>
       </Link>

       <Link to={'/WishList'} style={{textDecoration:'none'}}>
        <IconButton 
         component={motion.button}
         whileHover={{color:"blue", scale:1.080}}
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
          }}>
          <FavoriteIcon/>
    <Typography variant="body2">WishList</Typography>
        </IconButton>
       </Link>
   
      
   
       </Stack>
    </Box>
  )
}

export default BottomNav
