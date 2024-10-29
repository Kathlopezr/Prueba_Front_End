import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 
import { Menu, MenuItem, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Header_pink = ({ title, width = "100%", height = "auto" }) => {
  const buttonLabels = [
    'SHOP ALL',
    'BEST SELLER',
    'PROTEÍNAS',
    'SUPLEMENTOS',
    'PRE ENTRENOS',
    'ACCESORIOS',
    'BARRAS Y SNACK',
  ];

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
        width,
        height,
        backgroundColor: '#EB00D3',
        padding: '10px 0',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: '800', 
          fontSize: '40px', 
          lineHeight: '50.4px', 
          color: 'white',
          fontFamily: 'Outfit', 
        }}
      >
        {title}
      </Typography>

      <Box 
        sx={{
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          position: 'relative', 
        }}
      >
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {buttonLabels.map((label, index) => (
            <Button
              key={index}
              variant="text"
              sx={{
                color: 'white',
                fontSize: '15px',
                fontFamily: 'Outfit', 
                marginRight: '18px', 
                transition: 'color 0.3s, text-decoration 0.3s',
                '&:hover': {
                  color: 'black',
                  textDecoration: 'underline',
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Menú y iconos en la parte derecha */}
        <Box
          sx={{
            position: 'absolute',
            right: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <SearchIcon fontSize="medium" sx={{ color: 'white' }} />
          <ShoppingCartIcon fontSize="medium" sx={{ color: 'white' }} />
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={handleMenuClick} sx={{ color: 'white' }}>
              <MoreHorizIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }} 
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              {buttonLabels.map((label, index) => (
                <MenuItem key={index} onClick={handleMenuClose}>
                  <Typography sx={{ fontFamily: 'Outfit, sans-serif' }}>{label}</Typography> 
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header_pink;
