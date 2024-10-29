import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const SubscriptionBanner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 'auto', md: '115px' },
        backgroundColor: '#EB00D3',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: { xs: 'center', md: 'flex-start' },
        padding: { xs: '20px 20px', md: '40px 44px ', xl: '30px 120px' },
        boxSizing: 'border-box',
        textAlign: { xs: 'center', md: 'left' }
      }}
    >
      <Box sx={{ marginRight: { md: 'auto' }, mb: { xs: 2, md: 0 } }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Outfit',
            fontSize: { xs: '24px', md: '32px' },
            fontWeight: '700',
            color: 'white',
            margin: 0,
          }}
        >
          Forma parte de Brand
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Outfit',
            fontSize: { xs: '14px', md: '16px' },
            color: 'white',
            margin: 0,
          }}
        >
          Suscríbete a nuestras ofertas y novedades
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: { xs: '45px', md: '52.69px' },
          width: { xs: '100%', sm: '80%', md: '600px' },
          maxWidth: '100%',
          borderRadius: '38px',
          overflow: 'hidden',
          flexShrink: 0,
          position: 'relative', 
        }}
      >
  <TextField
    variant="outlined"
    placeholder="nombre@contacto.cl"
    fullWidth
    sx={{
      height: '100%',
      borderRadius: '38px 0 0 38px',
      backgroundColor: 'white',
      '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
      '& .MuiInputBase-root': { borderRadius: '38px 0 0 38px' },
      '& input': { padding: { xs: '8px 16px', md: '10px 38px' } },
    }}
    InputProps={{
      sx: { height: '100%', padding: 0 },
    }}
  />
  <Button
    variant="contained"
    sx={{
      backgroundColor: '#4D525C',
      color: 'white',
      borderRadius: '38px',
      width: '187px',
      height: '100%',
      minWidth: 'auto',
      fontFamily: 'outfit',
      fontSize: '21px',
      fontWeight: '700',
      textTransform: 'none',
      paddingLeft: '3px',
      position: 'absolute',
      right: '-20px', 
    }}
  >
    Suscribirse
  </Button>
</Box>

    </Box>
  );
};

export default SubscriptionBanner;
