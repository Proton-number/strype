import React, {useState} from 'react'
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

function BottomNav() {
    const [value, setValue] = useState(0);

    
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }


  return (
    <Box id="bottomNav">
        <BottomNavigation  sx={{width: "100%", position:"absolute", left:"0px",bottom:"0px"}} value={value} onChange={handleChange} showLabels >
      

      <BottomNavigationAction label='Home' icon={<ShoppingCartIcon/>} />
   
      <BottomNavigationAction label='Wishlist' icon={<FavoriteIcon/>} />
   
      <BottomNavigationAction label='Profile' icon={<PersonIcon/>} />
   
   
   
       </BottomNavigation>
    </Box>
  )
}

export default BottomNav
