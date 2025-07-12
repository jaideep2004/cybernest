import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Button, 
  MenuItem,
  useScrollTrigger,
  Slide,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { motion } from 'framer-motion';
import { useColorMode } from '../hooks/useColorMode';
import { scrollToSection, observeSection } from '../utils/motion';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Team', id: 'team' },
  { name: 'Contact', id: 'contact' },
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { colorMode, isDarkMode } = useColorMode();

  useEffect(() => {
    // Use the improved observeSection function
    const unobserve = observeSection((sectionId) => {
      if (sectionId) {
        setActiveSection(sectionId);
      }
    });
    
    // Initial check for active section
    const checkInitialSection = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      }
    };
    
    checkInitialSection();
    
    return () => {
      if (unobserve) unobserve();
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (id) => {
    setActiveSection(id); // Set active immediately for better UX
    scrollToSection(id);
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography 
        variant="h6" 
        sx={{ 
          my: 2, 
          fontWeight: 700,
          background: isDarkMode 
            ? 'linear-gradient(90deg, #90caf9, #ce93d8)' 
            : 'linear-gradient(90deg, #1976d2, #9c27b0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        CYBERNEST
      </Typography>
      <Divider />
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: 'center',
                color: activeSection === item.id ? 'primary.main' : 'text.primary',
              }}
              onClick={() => handleNavClick(item.id)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          component={motion.div}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          position="fixed"
          sx={{
            backdropFilter: 'blur(10px)',
            backgroundColor: isDarkMode ? 'rgba(18, 18, 18, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
            borderBottom: '1px solid',
            borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                  background: isDarkMode 
                    ? 'linear-gradient(90deg, #90caf9, #ce93d8)' 
                    : 'linear-gradient(90deg, #1976d2, #9c27b0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textDecoration: 'none',
                }}
              >
                CYBERNEST
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    color: isDarkMode ? 'inherit' : 'text.primary'
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex', md: 'none' },
                  fontWeight: 700,
                  background: isDarkMode 
                    ? 'linear-gradient(90deg, #90caf9, #ce93d8)' 
                    : 'linear-gradient(90deg, #1976d2, #9c27b0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                CYBERNEST
              </Typography>
              
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                {navLinks.map((page) => (
                  <Button
                    key={page.id}
                    component={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(page.id)}
                    sx={{ 
                      my: 2, 
                      mx: 1,
                      color: activeSection === page.id ? 'primary.main' : 'text.primary',
                      display: 'block',
                      fontWeight: 500,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: activeSection === page.id ? '100%' : '0%',
                        height: '2px',
                        bottom: '5px',
                        left: '0',
                        backgroundColor: 'primary.main',
                        transition: 'width 0.3s ease-in-out',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                  <IconButton 
                    onClick={colorMode.toggleColorMode} 
                    color="inherit"
                    component={motion.button}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 180,
                      boxShadow: '0 0 15px rgba(144, 202, 249, 0.8)'
                    }}
                    transition={{ duration: 0.3 }}
                    sx={{
                      p: 1.5,
                      background: isDarkMode 
                        ? 'linear-gradient(45deg, #90caf9, #ce93d8)' 
                        : 'linear-gradient(45deg, #1976d2, #9c27b0)',
                      color: '#fff',
                      borderRadius: '50%',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

export default Navbar; 