import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Link, 
  IconButton, 
  Divider,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import { useColorMode } from '../hooks/useColorMode';

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { scrollToSection } from '../utils/motion';

const Footer = () => {
  const { isDarkMode } = useColorMode();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
        pb: 1.5,
        mt: 6,
      }}
    >
      {/* Background with glass effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDarkMode 
            ? 'linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.8) 20%)'
            : 'linear-gradient(180deg, rgba(245, 245, 247, 0) 0%, rgba(245, 245, 247, 0.8) 20%)',
          zIndex: -1,
        }}
      />

      {/* Decorative blurred circles */}
      <Box
        component={motion.div}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(25, 118, 210, 0.3) 0%, rgba(0,0,0,0) 70%)'
            : 'radial-gradient(circle, rgba(25, 118, 210, 0.3) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(40px)',
          zIndex: -1,
        }}
      />
      
      <Box
        component={motion.div}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(156, 39, 176, 0.3) 0%, rgba(0,0,0,0) 70%)'
            : 'radial-gradient(circle, rgba(156, 39, 176, 0.3) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(40px)',
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        {/* Main Glass Card */}
        <Box
          sx={{
            backgroundColor: isDarkMode 
              ? 'rgba(30, 30, 35, 0.7)'
              : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            border: '1px solid',
            borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
            boxShadow: isDarkMode 
              ? '0 8px 32px rgba(0, 0, 0, 0.3)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
            padding: 4,
            mb: 4,
          }}
        >
          <Grid container spacing={4}>
            {/* Logo and description */}
            <Grid item xs={12} md={4}>
              <Typography 
                variant="h4" 
                component="div"
                sx={{ 
                  fontWeight: 800,
                  mb: 2,
                  background: isDarkMode 
                    ? 'linear-gradient(90deg, #90caf9, #ce93d8)' 
                    : 'linear-gradient(90deg, #1976d2, #9c27b0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                }}
              >
                CyberNest
              </Typography>
              
              <Typography 
                variant="body2"
                sx={{ 
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.6,
                }}
              >
                We create stunning digital experiences with cutting-edge technologies, focusing on beautifully designed and functionally robust solutions.
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                {[
                  { icon: <LinkedInIcon />, color: '#0077B5' },
                  { icon: <GitHubIcon />, color: isDarkMode ? '#fff' : '#333' },
                  { icon: <TwitterIcon />, color: '#1DA1F2' },
                  { icon: <InstagramIcon />, color: '#E1306C' },
                ].map((item, index) => (
                  <IconButton
                    key={index}
                    component={motion.button}
                    whileHover={{ 
                      scale: 1.2, 
                      backgroundColor: item.color,
                      color: '#fff',
                    }}
                    whileTap={{ scale: 0.9 }}
                    size="small"
                    sx={{ 
                      width: 40,
                      height: 40,
                      background: isDarkMode 
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(0, 0, 0, 0.03)',
                      backdropFilter: 'blur(5px)',
                      border: '1px solid',
                      borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>
            
            {/* Quick links */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  gap: 8,
                }}
              >
                <Box>
                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontWeight: 600,
                      mb: 2,
                      position: 'relative',
                      display: 'inline-block',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-5px',
                        left: 0,
                        width: '30px',
                        height: '2px',
                        background: 'linear-gradient(90deg, #1976d2, #9c27b0)',
                      }
                    }}
                  >
                    Navigation
                  </Typography>
                  
                  <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                    {['Home', 'About', 'Projects', 'Team', 'Contact'].map((item) => (
                      <Box component="li" key={item} sx={{ mb: 1.5 }}>
                        <Link
                          component={motion.a}
                          whileHover={{ x: 5, color: isDarkMode ? '#90caf9' : '#1976d2' }}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.toLowerCase());
                          }}
                          sx={{ 
                            color: 'text.secondary',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          <Box 
                            component="span" 
                            sx={{ 
                              width: 4, 
                              height: 4, 
                              borderRadius: '50%', 
                              bgcolor: 'primary.main' 
                            }} 
                          />
                          {item}
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Box>
                
                <Box>
                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontWeight: 600,
                      mb: 2,
                      position: 'relative',
                      display: 'inline-block',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-5px',
                        left: 0,
                        width: '30px',
                        height: '2px',
                        background: 'linear-gradient(90deg, #1976d2, #9c27b0)',
                      }
                    }}
                  >
                    Services
                  </Typography>
                  
                  <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                    {['Web Development', 'UI/UX Design', 'Consulting'].map((item) => (
                      <Box component="li" key={item} sx={{ mb: 1.5 }}>
                        <Link
                          component={motion.a}
                          whileHover={{ x: 5, color: isDarkMode ? '#ce93d8' : '#9c27b0' }}
                          sx={{ 
                            color: 'text.secondary',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            '&:hover': {
                              color: 'secondary.main',
                            },
                          }}
                        >
                          <Box 
                            component="span" 
                            sx={{ 
                              width: 4, 
                              height: 4, 
                              borderRadius: '50%', 
                              bgcolor: 'secondary.main' 
                            }} 
                          />
                          {item}
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
            
            {/* Contact info */}
            <Grid item xs={12} sm={6} md={4} ml={4}>
              <Typography 
                variant="h6" 
                component="h3"
                sx={{ 
                  fontWeight: 600,
                  mb: 3,
                  position: 'relative',
                  display: 'inline-block',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    width: '30px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #1976d2, #9c27b0)',
                  }
                }}
              >
                Contact Us
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {[
                  { icon: <EmailIcon />, label: 'Email', value: 'jaisidhu2004@gmail.com' },
                  { icon: <PhoneIcon />, label: 'Phone', value: '+91 8360703621' },
                  { icon: <LocationOnIcon />, label: 'Address', value: 'Patiala, Punjab, India' },
                ].map((item) => (
                  <Box 
                    key={item.label} 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: 2 
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: isDarkMode 
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(0, 0, 0, 0.03)',
                        color: item.label === 'Email' ? '#1976d2' : item.label === 'Phone' ? '#9c27b0' : '#4caf50',
                        backdropFilter: 'blur(5px)',
                        border: '1px solid',
                        borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography 
                        variant="caption"
                        sx={{ 
                          color: 'text.secondary',
                          fontWeight: 600,
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography 
                        variant="body2"
                        sx={{ 
                          color: 'text.primary',
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
        
        {/* Footer bottom with glass effect */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
            backgroundColor: isDarkMode 
              ? 'rgba(30, 30, 35, 0.5)'
              : 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            py: 2,
            px: 3,
            border: '1px solid',
            borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
          }}
        >
          <Typography 
            variant="body2"
            sx={{ 
              color: 'text.secondary',
            }}
          >
            © {currentYear} CyberNest. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              size="small"
              onClick={() => scrollToSection('home')}
              startIcon={<KeyboardArrowUpIcon />}
              sx={{ 
                borderRadius: 6,
                textTransform: 'none',
                background: 'linear-gradient(90deg, #1976d2, #9c27b0)',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                px: 2,
                color: 'white',
              }}
            >
              Back to Top
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 