import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CustomCard from '../../ui/CustomCard/CustomCard';

const CarouselComponent = ({ product }) => {
  const products = Array(5).fill(product);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ width: '97%', height: '1px', backgroundColor: 'black' }} />
      <Typography variant="h5" textAlign="center" mt={4} mb={2}>
        TE PODRÍA INTERESAR TAMBIÉN
      </Typography>
      <Box
        sx={{
          position: 'relative',
          width: '75%',
          maxWidth: '1600px',
          marginBottom: '20px',
        }}
      >
        <Slider {...settings}>
          {products.map((_, index) => (
            <Box key={index} sx={{ padding: '0 10px' }}>
              <CustomCard
                imageUrl="/image_3.png"
                brandName="Brand"
                productName="Shaker Brand 400 cc"
                currentPrice="7.990"
                previousPrice="9.990"
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

const SampleNextArrow = ({ onClick }) => (
  <Button
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '30%', // Mantener el botón centrado verticalmente
      right: { xs: '10px', sm: '-80px' }, // Alineación en pantallas pequeñas
      transform: 'translateY(-50%)',
      zIndex: 1,
      borderRadius: '50%',
      backgroundColor: 'white',
      color: '#EB00D3',
      minWidth: '40px',
      height: '40px',
      border: '1px solid #EB00D3',
      '&:hover': {
        backgroundColor: '#EB00D3',
        color: 'white',
      },
    }}
  >
    <ArrowForwardIosIcon fontSize="small" />
  </Button>
);

const SamplePrevArrow = ({ onClick }) => (
  <Button
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '30%', // Mantener el botón centrado verticalmente
      left: { xs: '10px', sm: '-80px' }, // Alineación en pantallas pequeñas
      transform: 'translateY(-50%)',
      zIndex: 1,
      padding: '10px',
      borderRadius: '50%',
      backgroundColor: 'white',
      color: '#EB00D3',
      minWidth: '40px',
      height: '40px',
      border: '1px solid #EB00D3',
      '&:hover': {
        backgroundColor: '#EB00D3',
        color: 'white',
      },
    }}
  >
    <ArrowBackIosIcon fontSize="small" />
  </Button>
);

export default CarouselComponent;
