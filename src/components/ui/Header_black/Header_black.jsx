import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Header_black = ({ children, width = "100%", height = "auto", backgroundColor = "black" }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: '100%', 
        height: '43px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        backgroundColor,
        boxSizing: 'border-box',
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
      }}
    >
      <Typography variant="body2" align="center" sx={{ fontSize: '15px', color: 'white', fontFamily: 'outfit', fontWeight: '400' }}>
        {children}
      </Typography>

      <Box
        sx={{
          position: 'absolute',
          right: '10px',
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center',
          color: 'white',
        }}
      >
        <IconButton onClick={handleMenuClick} sx={{ color: 'white' }}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={handleMenuClose}>
            <PersonIcon fontSize="small" sx={{ marginRight: '5px' }} />
            <Typography variant="body2" sx={{ color: 'black', fontFamily: 'outfit' }}>Iniciar sesión</Typography>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <LocalShippingIcon fontSize="small" sx={{ marginRight: '5px' }} />
            <Typography variant="body2" sx={{ color: 'black', fontFamily: 'outfit' }}>Seguimientos</Typography>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ShoppingBagIcon fontSize="small" sx={{ marginRight: '5px' }} />
            <Typography variant="body2" sx={{ color: 'black', fontFamily: 'outfit' }}>Tiendas</Typography>
          </MenuItem>
        </Menu>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          right: '10px',
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          gap: '15px',
          color: 'white'
        }}
      >
        <IconButton onClick={() => console.log('Iniciar sesión')} sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
          <PersonIcon fontSize="small" sx={{ marginRight: '5px' }} />
          <Typography variant="body2" sx={{ color: 'white', fontFamily: 'outfit', fontSize: '15px' }}>Iniciar sesión</Typography>
        </IconButton>

        <Divider orientation="vertical" flexItem sx={{ height: '20px', backgroundColor: 'white', alignSelf: 'center' }} />

        <IconButton onClick={() => console.log('Seguimientos')} sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
          <LocalShippingIcon fontSize="small" sx={{ marginRight: '5px' }} />
          <Typography variant="body2" sx={{ color: 'white', fontFamily: 'outfit', fontSize: '15px' }}>Seguimientos</Typography>
        </IconButton>

        <Divider orientation="vertical" flexItem sx={{ height: '20px', backgroundColor: 'white', alignSelf: 'center' }} />

        <IconButton onClick={() => console.log('Tiendas')} sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
          <ShoppingBagIcon fontSize="small" sx={{ marginRight: '5px' }} />
          <Typography variant="body2" sx={{ color: 'white', fontFamily: 'outfit', fontSize: '15px' }}>Tiendas</Typography>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header_black;
