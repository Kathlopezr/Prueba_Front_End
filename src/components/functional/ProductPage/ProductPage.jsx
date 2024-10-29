import React, { useState, useEffect } from 'react';
import { fetchFlavors } from '../../../services/apiService'; 
import { Box, FormControl, InputLabel, Select, MenuItem, Button, TextField, Grid, Typography } from '@mui/material';
import { Star, Edit, LocalShippingOutlined, StorefrontOutlined } from '@mui/icons-material';

const ProductPage = () => {
  const [flavors, setFlavors] = useState([]);
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getFlavors = async () => {
      try {
        const flavorNames = await fetchFlavors();
        setFlavors(flavorNames);
      } catch (error) {
        console.error('Error fetching flavors:', error);
      }
    };

    getFlavors();
  }, []);

  return (
    <Box
      sx={{
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: { xs: '20px', sm: '40px', md: '70px', lg: '40px', xl: '200px' },
        paddingRight: { xs: '20px', sm: '40px', md: '70px', lg: '40px', xl: '200px' },
        color: '#4D525C',
      }}
    >
      <Grid 
        container 
        spacing={0} 
        columnSpacing={{ xs: 0, md: 5, lg: 6 }} 
        alignItems="flex-start"
      >
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2" sx={{ color: '#4D525C', marginBottom: '40px', fontFamily: 'outfit', fontSize: '16px', fontWeight: '400' }}>
            INICIO / PROTEÍNAS / WHEY PROTEIN
          </Typography>
          <Box 
            component="img" 
            src="/image_1.png" 
            alt="Producto" 
            width="100%" 
            height="auto" 
            sx={{ maxWidth: '655px', alignSelf: 'flex-start' }} 
          />
          <Box 
            display="flex" 
            gap="24px" 
            justifyContent="center" 
            alignItems="center" 
            marginTop="30px"
            sx={{ maxWidth: '655px', overflowX: 'auto' }}
          >
            {[1, 2, 3].map((_, index) => (
              <Box
                key={index}
                component="img"
                src="/image_1.png"
                alt={`Miniatura ${index + 1}`}
                width="203px"
                height="160px"
              />
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" gap="16px">
            <Typography variant="h6" sx={{ color: '#4D525C', fontFamily: 'outfit', fontSize: '16px', fontWeight: '400' }}>Brand</Typography>
            <Typography variant="h4" sx={{ fontFamily: 'poppins', fontWeight: '600', fontSize: '32px' }}>
              Whey Protein - Original
            </Typography>

            <Box display="flex" alignItems="center" gap="16px">
              <Box display="flex" alignItems="center" justifyContent="center" width="74px" height="40px" bgcolor="#EB00D3" color="white" borderRadius="8px">
                <Typography variant="body1" sx={{ fontWeight: '600', fontFamily: 'outfit', fontSize: '19px' }}>-5%</Typography>
              </Box>
              <Typography variant="h5" sx={{ color: '#EB00D3', fontWeight: '700', fontFamily: 'outfit', fontSize: '32px' }}>$68.390</Typography>
              <Typography variant="body2" sx={{ color: '#666687', fontWeight: '500', fontFamily: 'outfit', fontSize: '24px', textDecoration: 'line-through' }}>$71.990</Typography>
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
              }}
            >
              <Typography variant="h3" sx={{ color: '#07706A', fontSize: '7px' }}>ENVÍO GRATIS STGO</Typography>
            </Box>

            <Typography variant="caption" sx={{color: '#4A4A6A', fontWeight: '400', fontFamily: 'outfit', fontSize: '12px'}}>SKU 1588023425509</Typography>
            <Box
              sx={{
                backgroundColor: '#F5F4F4',
                padding: '16px',
                textAlign: 'justify',
              }}
            >
              <Typography variant="body2" sx={{ color: '#4A4A6A', fontWeight: '400', fontSize: '16px', fontFamily: 'outfit', lineHeight: '27px' }}>
                Exclusiva fórmula proteica a base de suero de leche aislado e hidrolizado que ha sido científicamente diseñada para construir músculo magro libre de grasa, aumentar la fuerza y mejorar el rendimiento deportivo. Cada porción contiene 30 g de proteína y una matriz de aminoácidos de cadena ramificada, glutamina y creatina para acelerar el aumento de músculo y la fuerza.
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#666666', fontWeight: '400', fontSize: '16px', fontFamily: 'outfit' }}>
              Sabor:
            </Typography>

            <FormControl
              variant="outlined"
              fullWidth
              sx={{
                width: '280px',
                borderRadius: '8px',
                border: '1px solid #EB00D3',
              }}
            >
              <InputLabel sx={{ margin: 0, padding: '0 4px', color: '#EB00D3', fontFamily: 'Montserrat' }}>
                Escoger sabor
              </InputLabel>
              <Select
                label="sabor"
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
                sx={{ 
                  borderRadius: '8px',
                  '& .MuiSelect-icon': {
                    color: '#EB00D3', 
                  },
                  '& .MuiSelect-select': {
                    color: '#EB00D3', 
                  },
                  '&:before': {
                    borderColor: '#EB00D3', 
                  },
                  '&:after': {
                    borderColor: '#EB00D3', 
                  },
                }}
              >
                {flavors.map((flavor) => (
                  <MenuItem key={flavor} value={flavor}>
                    {flavor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box display="flex" gap="10px" alignItems="center" marginTop="16px">
              <TextField
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                inputProps={{
                  min: 1,
                  style: { width: '218px', textAlign: 'center' },
                }}
                variant="outlined"
                size="small"
              />
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: '#EB00D3', 
                  color: 'white', 
                  width: '416px', 
                  height: '40px', 
                  fontWeight: '700',
                  fontSize: '15px', 
                  padding: '12px 0', 
                  borderRadius: '5px 0px 0px 0px', 
                  textTransform: 'none',
                  fontFamily: 'outfit'
                }}
              >
                Agregar al carrito
              </Button>
            </Box>

            <Typography variant="body2" sx={{ color: '#666666', fontWeight: '400', fontSize: '16px', fontFamily: 'outfit' }}>
              Tipo de entrega:
            </Typography>

            <Box display="flex" gap="16px" flexWrap="wrap">
              <Button 
                variant="outlined" 
                sx={{ 
                  color: '#4D525C', 
                  borderColor: '#EB00D3', 
                  width: '230px', 
                  height: '44px', 
                  padding: '10px 20px', 
                  borderRadius: '5px',
                  '&:hover': {
                    backgroundColor: '#4D525C1A', 
                  },
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  textTransform: 'none', 
                  fontSize: '14px', 
                  fontWeight: '400',
                  fontFamily: 'outfit', 
                }}
              >
                <LocalShippingOutlined fontSize="small" sx={{ marginRight: '4px', color: '#EB00D3' }} /> 
                Despacho a domicilio
              </Button>
              <Button 
                variant="outlined" 
                sx={{ 
                  color: '#4D525C', 
                  borderColor: '#EB00D3', 
                  width: '230px', 
                  height: '44px', 
                  padding: '10px 10px', 
                  borderRadius: '5px',
                  '&:hover': {
                    backgroundColor: '#4D525C1A', 
                  },
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  textTransform: 'none', 
                  fontSize: '14px', 
                  fontWeight: '400',
                  fontFamily: 'outfit', 
                }}
              >
                <StorefrontOutlined fontSize="small" sx={{ marginRight: '4px', color: '#EB00D3' }} /> 
                Retiro en tienda GRATIS
              </Button>
            </Box>

            <Box display="flex" alignItems="center" gap="5px" mt="5px">
              <Typography variant="body2" sx={{ color: '#000000', fontFamily: 'outfit', fontSize: '16px'}}>12 valoraciones de clientes</Typography>
              <Star sx={{ color: '#FCA549' }} />
              <Typography variant="body2" sx={{ color: '#4A4A6A', fontFamily: 'outfit', fontSize: '14px', fontWeight: '700'}}>4.8</Typography>
              <Button 
                sx={{
                  display: 'flex', 
                  alignItems: 'center', 
                  color: '#000000',
                  fontFamily: 'outfit',
                  fontWeight: '700',
                  textTransform: 'none',
                  padding: 0,
                  textDecoration: 'underline'
                }}
              >
                <Edit fontSize="small" sx={{ marginRight: '14px' }} /> 
                Escribir comentario
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductPage;
