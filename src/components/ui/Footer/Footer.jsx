import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ForumIcon from '@mui/icons-material/Forum';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';

const Footer = ({ width = "100%", height = "auto" }) => {
  const columns = [
    {
      title: 'Puntos de Retiro',
      items: [
        { icon: <LocationOnIcon sx={{ color: '#EB00D3' }} />, text: 'Tienda Brand Santiago' },
        { icon: <LocationOnIcon sx={{ color: '#EB00D3' }} />, text: 'Tienda Brand Viña del Mar' },
      ],
    },
    {
      title: 'Servicio al Cliente',
      items: [
        'Seguimiento de pedidos',
        'Cotización',
        'Centro de ayuda',
        'Preguntas frecuentes',
        'Cambios y devoluciones',
        'Información de reservas',
        'Información de despachos',
      ],
    },
    {
      title: 'Mi Cuenta',
      items: ['Ingresa o regístrate', 'Pedidos', 'Descargas', 'Direcciones'],
      hidden: true, // Marca como oculto
    },
    {
      title: 'Sobre Nosotros',
      items: ['Quiénes somos', 'Tiendas', 'Blog'],
      hidden: true, // Marca como oculto
    },
    {
      title: 'Contáctanos',
      items: [
        { icon: <WhatsAppIcon sx={{ color: '#EB00D3' }} />, text: '+56 9 9999 9999' },
        { icon: <ForumIcon sx={{ color: '#EB00D3' }} />, text: '¿Necesitas Ayuda?' },
        'Lunes a viernes 08:30 - 18:30',
        'Sábado de 10:00 - 14:00',
        'Domingo de 13:30 - 14:00',
      ],
      social: [
        { icon: <FacebookIcon sx={{ color: '#EB00D3' }} />, link: '#' },
        { icon: <InstagramIcon sx={{ color: '#EB00D3' }} />, link: '#' },
        { icon: <WhatsAppIcon sx={{ color: '#EB00D3' }} />, link: '#' },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width,
        height,
        backgroundColor: '#FFFFFF',
        padding: { xs: '20px 30px', md: '40px 44px ', xl: '40px 120px' },
        boxSizing: 'border-box',
        borderTop: '1px solid #ddd',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {columns.map((column, index) => (
          <Box
            key={index}
            sx={{
              textAlign: 'left',
              display: (index === 2 || index === 3) ? { xs: 'none', sm: 'block' } : 'block' // Oculta en pantallas pequeñas
            }}
          >
            {column.title && (
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'outfit',
                  fontSize: '16px',
                  color: 'black',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  textDecorationColor: '#EB00D3',
                  marginBottom: '18px',
                }}
              >
                {column.title}
              </Typography>
            )}
            {column.items.map((item, idx) =>
              typeof item === 'string' ? (
                <Typography
                  key={idx}
                  sx={{
                    fontFamily: 'Nunito',
                    fontSize: '16px',
                    color: 'black',
                    marginBottom: '8px',
                  }}
                >
                  {item}
                </Typography>
              ) : (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                  {item.icon}
                  <Typography
                    sx={{
                      fontFamily: 'Nunito',
                      fontSize: '16px',
                      color: 'black',
                      marginLeft: '5px',
                      marginBottom: '8px',
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              )
            )}
            {column.social && (
              <>
                <Typography
                  sx={{
                    fontFamily: 'outfit',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: 'black',
                    textDecoration: 'underline',
                    textDecorationColor: '#EB00D3',
                    marginTop: '19px',
                  }}
                >
                  Síguenos en redes sociales:
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '14px' }}>
                  {column.social.map((social, idx) => (
                    <Box
                      component="a"
                      key={idx}
                      href={social.link}
                      sx={{ color: '#EB00D3', marginRight: '10px' }}
                    >
                      {social.icon}
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </Box>
        ))}
      </Box>
      <Divider sx={{ marginY: '20px' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Typography
          sx={{
            fontFamily: 'Nunito',
            fontSize: '14px',
            color: 'black',
            textAlign: 'left',
          }}
        >
          Términos y condiciones
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Nunito',
            fontSize: '14px',
            color: 'black',
            textAlign: 'left',
          }}
        >
          Brand © Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
