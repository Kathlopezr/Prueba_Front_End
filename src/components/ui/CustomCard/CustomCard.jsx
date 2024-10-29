import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Box } from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

const CustomCard = ({ imageUrl, brandName, productName, currentPrice, previousPrice }) => {
  return (
    <Card
      variant="plain"
      sx={{
        position: 'relative',
        borderRadius: 0,
        width: '334px',
        height: '490px',
        padding: '10px',
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        alt={productName}
        image={imageUrl}
        sx={{
          objectFit: 'contain',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          display: 'Flex',
          width: '69px',
          height: '31px',
          top: 28,
          left: 24,
          backgroundColor: '#EB00D3',
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
          fontFamily: 'outfit',
          fontWeight: '600',
          fontSize: '15px',
        }}
      >
        -57%
      </Box>

      <IconButton
        sx={{
          position: 'absolute',
          width: '69px',
          height: '31px',
          top: 28,
          right: 24,
          borderRadius: '8px',
          backgroundColor: '#4D525C',
          color: 'white',
          '&:hover': {
            backgroundColor: '#4D525C',
          },
        }}
      >
        <ShoppingCartOutlined />
      </IconButton>

      <CardContent sx={{ paddingBottom: '60px' }}>
        <Typography
          variant="body2"
          marginBottom="8px"
          sx={{ color: '#4D525C', fontFamily: 'outfit', fontSize: '12px' }}
        >
          {brandName}
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: '#4D525C', fontFamily: 'outfit', fontSize: '16px', fontWeight: '500', marginBottom: '12px' }}
        >
          {productName}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Typography
            variant="body1"
            sx={{ color: '#EB00D3', fontFamily: 'outfit', fontSize: '24px', fontWeight: '700' }}
          >
            ${currentPrice}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#4D525C',
              fontFamily: 'outfit',
              fontSize: '18px',
              fontWeight: '500',
              textDecoration: 'line-through',
            }}
          >
            ${previousPrice}
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: '#00FFF033',
            width: '84px',
            height: '14px',
            textAlign: 'center',
            opacity: 0.8,
            border: '0.5px solid #07706A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '8px'
          }}
        >
          <Typography fontSize="8px" color="#07706A">
            ENVÍO GRATIS STGO
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
