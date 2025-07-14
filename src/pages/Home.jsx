import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useColorMode } from '../hooks/useColorMode';
import MorphingBlob from '../components/MorphingBlob';
import ScrollReveal from '../components/ScrollReveal';
import { textVariant, fadeIn } from '../animations/variants';
import { scrollToSection } from '../utils/motion';
import { FaCode, FaReact, FaDatabase, FaServer, FaMobile, FaPalette } from 'react-icons/fa';

// Technologies for the animation
const technologies = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaServer />, color: "#68A063" },
  { name: "MongoDB", icon: <FaDatabase />, color: "#4DB33D" },
  { name: "UI/UX", icon: <FaPalette />, color: "#FF7C7C" },
  { name: "Mobile", icon: <FaMobile />, color: "#A4C639" },
  { name: "Code", icon: <FaCode />, color: "#E34F26" },
];

// Code snippets for the animation
const codeSnippets = [
  "const App = () => <CyberNest />",
  "import React from 'react';",
  "function optimize(code) {",
  "const [data, setData] = useState();",
  "export default WebDev;",
  "<div className='solution'>",
  "npm install @cybernest/ui",
  "async function fetchAPI() {",
];

const Home = () => {
  const { isDarkMode } = useColorMode();

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Blobs */}
      <Box sx={{ position: 'absolute', top: '-10%', right: '-5%', zIndex: -1 }}>
        <MorphingBlob 
          size={600} 
          opacity={0.15} 
          blur={30}
          color={isDarkMode ? '#90caf9' : '#1976d2'} 
        />
      </Box>
      
      <Box sx={{ position: 'absolute', bottom: '-20%', left: '-10%', zIndex: -1 }}>
        <MorphingBlob 
          size={500} 
          opacity={0.15} 
          blur={30}
          color={isDarkMode ? '#ce93d8' : '#9c27b0'} 
          duration={10}
        />
      </Box>
      
      {/* Background Faded Rings */}
      {[1, 2, 3, 4].map((ring) => (
        <Box
          key={`bg-ring-${ring}`}
          component={motion.div}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 30 + ring * 10,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 8 + ring * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: `${300 + ring * 150}px`,
            height: `${300 + ring * 150}px`,
            borderRadius: '50%',
            border: '1px dashed',
            borderColor: isDarkMode 
              ? ring % 2 === 0 ? 'rgba(144, 202, 249, 0.1)' : 'rgba(206, 147, 216, 0.1)'
              : ring % 2 === 0 ? 'rgba(25, 118, 210, 0.1)' : 'rgba(156, 39, 176, 0.1)',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
          }}
        />
      ))}
      
      {/* Floating Particles - Reduced on mobile */}
      {[...Array(typeof window !== 'undefined' && window.innerWidth < 900 ? 8 : 20)].map((_, i) => {
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 900;
        const size = 4 + Math.random() * 8;
        
        return (
          <Box
            key={`particle-${i}`}
            component={motion.div}
            initial={{
              y: Math.random() * (isMobile ? 50 : 100) * (Math.random() > 0.5 ? 1 : -1),
              x: Math.random() * (isMobile ? 50 : 100) * (Math.random() > 0.5 ? 1 : -1),
              opacity: 0.3,
              scale: 0.8
            }}
            animate={{
              y: [
                Math.random() * (isMobile ? 50 : 100) * (Math.random() > 0.5 ? 1 : -1), 
                Math.random() * (isMobile ? 50 : 100) * (Math.random() > 0.5 ? 1 : -1), 
                Math.random() * (isMobile ? 50 : 100) * (Math.random() > 0.5 ? 1 : -1)
              ],
              x: [
                Math.random() * (isMobile ? 50 : 100) * (Math.random() > 0.5 ? 1 : -1), 
                Math.random() * (isMobile ? 50 : 100) * (Math.random() > 0.5 ? 1 : -1), 
                Math.random() * (isMobile ? 50 : 100) * (Math.random() > 0.5 ? 1 : -1)
              ],
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: isMobile ? 15 + Math.random() * 10 : 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            sx={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              backgroundColor: i % 3 === 0 
                ? 'primary.main' 
                : i % 3 === 1 
                  ? 'secondary.main' 
                  : '#4caf50',
              opacity: 0.3,
              filter: 'blur(1px)',
              zIndex: -1,
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)',
            }}
          />
        );
      })}
      
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center" sx={{ justifyContent: { xs: 'center', md: 'space-between' } }}>
          <Grid item xs={12} md={6}>
            <Box>
              <motion.div
                initial="hidden"
                animate="show"
                variants={textVariant(0.2)}
              >
                <Typography 
                  variant="h6" 
                  color="primary"
                  sx={{ 
                    fontWeight: 600,
                    letterSpacing: 2,
                    mb: 1,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  WELCOME TO
                </Typography>
              </motion.div>
              
              <motion.div
                initial="hidden"
                animate="show"
                variants={textVariant(0.4)}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                    textAlign: { xs: 'center', md: 'left' },
                    background: isDarkMode 
                      ? 'linear-gradient(90deg, #90caf9, #ce93d8, #90caf9)' 
                      : 'linear-gradient(90deg, #1976d2, #9c27b0, #1976d2)',
                    backgroundSize: '200% auto',
                    animation: 'textGradient 5s linear infinite',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    textShadow: isDarkMode 
                      ? '0 0 20px rgba(144, 202, 249, 0.4)' 
                      : '0 0 20px rgba(25, 118, 210, 0.4)',
                  }}
                >
                  CyberNest
                </Typography>
              </motion.div>
              
              <motion.div
                initial="hidden"
                animate="show"
                variants={textVariant(0.6)}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 500,
                    mb: 4,
                    fontSize: { xs: '1.5rem', md: '2.125rem' },
                    textAlign: { xs: 'center', md: 'left' },
                    color: 'text.secondary',
                  }}
                >
                  Web Development Studio
                </Typography>
              </motion.div>
              
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeIn('up', 0.8)}
              >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    maxWidth: '600px',
                    textAlign: { xs: 'center', md: 'left' },
                    mx: { xs: 'auto', md: 0 },
                    color: 'text.secondary',
                  }}
                >
                  We create stunning digital experiences with cutting-edge technologies.
                  Our expertise spans across web development, UI/UX design, and digital transformation.
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}>
                  <Button 
                    component={motion.button}
                    whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    variant="contained" 
                    color="primary" 
                
                    onClick={() => scrollToSection('about')}
                    sx={{ 
                      borderRadius: '8px', 
                      px: 4,
                      py: 1.2,
                      background: isDarkMode 
                        ? 'linear-gradient(90deg, #1976d2, #42a5f5)' 
                        : 'linear-gradient(90deg, #1976d2, #42a5f5)',
                    }}
                  >
                    Learn More
                  </Button>
                  
                  <Button 
                    component={motion.button}
                    whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                    whileTap={{ scale: 0.95 }}
                    variant="outlined" 
                    color="secondary" 
                    size="large"
                    onClick={() => scrollToSection('contact')}
                    sx={{ 
                      borderRadius: '8px', 
                      px: 4,
                      py: 1.2,
                      borderWidth: '2px',
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              sx={{ 
                position: 'relative',
                height: { xs: '350px', md: '550px' },
                width: { xs: '100%', md: '100%' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                perspective: '1500px',
                mx: { xs: 'auto', md: 0 },
                maxWidth: { xs: '350px', md: '100%' }
              }}
            >
              {/* Glowing Background Effect */}
              <Box
                component={motion.div}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                sx={{
                  position: 'absolute',
                  width: { xs: '280px', md: '400px' },
                  height: { xs: '280px', md: '400px' },
                  borderRadius: '50%',
                  background: isDarkMode 
                    ? 'radial-gradient(circle, rgba(25, 118, 210, 0.2) 0%, rgba(0,0,0,0) 70%)'
                    : 'radial-gradient(circle, rgba(25, 118, 210, 0.2) 0%, rgba(255,255,255,0) 70%)',
                  filter: 'blur(20px)',
                  zIndex: 0,
                }}
              />
              
              {/* Web Development Themed Animation - Optimized for mobile */}
              <Box
                component={motion.div}
                sx={{
                  position: 'relative',
                  width: { xs: '280px', md: '420px' },
                  height: { xs: '280px', md: '420px' },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transformStyle: { xs: 'flat', md: 'preserve-3d' },
                  perspective: { xs: 'none', md: '1000px' },
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                {/* Orbital Ring - Technologies - Simplified on mobile */}
                <Box
                  component={motion.div}
                  initial={{ rotateY: 0 }}
                  animate={{
                    rotateY: 360,
                  }}
                  transition={{
                    duration: typeof window !== 'undefined' && window.innerWidth < 900 ? 45 : 30,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  sx={{
                    position: 'absolute',
                    width: { xs: '240px', md: '360px' },
                    height: { xs: '240px', md: '360px' },
                    borderRadius: '50%',
                    transformStyle: { xs: 'flat', md: 'preserve-3d' },
                    willChange: 'transform',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  {technologies.map((tech, index) => {
                    const angle = (index / technologies.length) * Math.PI * 2;
                    const x = Math.cos(angle);
                    const z = Math.sin(angle);
                    
                    return (
                      <Box
                        key={tech.name}
                        component={motion.div}
                        whileHover={{ scale: 1.2 }}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: { xs: '50px', md: '60px' },
                          height: { xs: '50px', md: '60px' },
                          borderRadius: '50%',
                          backgroundColor: isDarkMode ? 'rgba(30, 30, 35, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                          border: '2px solid',
                          borderColor: tech.color,
                          boxShadow: `0 0 15px ${tech.color}80`,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontSize: { xs: '1.5rem', md: '2rem' },
                          color: tech.color,
                          transform: `translate(-50%, -50%) translateZ(180px) rotateY(${angle}rad)`,
                          transformStyle: 'preserve-3d',
                          transition: 'transform 0.3s ease',
                          backdropFilter: 'blur(4px)',
                          zIndex: 5,
                        }}
                      >
                        {tech.icon}
                        
                        {/* Tech name tooltip on hover */}
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: -30,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: isDarkMode ? 'rgba(30, 30, 35, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                            color: tech.color,
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                            opacity: 0,
                            transition: 'opacity 0.2s ease',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                            border: '1px solid',
                            borderColor: tech.color,
                            zIndex: 10,
                            '&:hover': {
                              opacity: 1,
                            }
                          }}
                        >
                          {tech.name}
                        </Box>
                      </Box>
                    );
                  })}
                </Box>

                {/* Pulsing Ring */}
                <Box
                  component={motion.div}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  sx={{
                    position: 'absolute',
                    width: { xs: '200px', md: '280px' },
                    height: { xs: '200px', md: '280px' },
                    borderRadius: '50%',
                    border: '2px solid',
                    borderColor: isDarkMode ? 'rgba(144, 202, 249, 0.3)' : 'rgba(25, 118, 210, 0.3)',
                    boxShadow: `0 0 15px ${isDarkMode ? 'rgba(144, 202, 249, 0.2)' : 'rgba(25, 118, 210, 0.2)'}`,
                  }}
                />

                {/* Code Snippets */}
                {codeSnippets.map((snippet, index) => {
                  const isEven = index % 2 === 0;
                  const startX = isEven ? -150 : 150;
                  const endX = isEven ? 150 : -150;
                  const yPos = -120 + index * 30;
                  
                  return (
                    <Box
                      key={`code-${index}`}
                      component={motion.div}
                      initial={{ x: startX, opacity: 0 }}
                      animate={{ 
                        x: endX, 
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 1.5,
                      }}
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        marginTop: `${yPos}px`,
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: { xs: '10px', md: '12px' },
                        fontFamily: 'monospace',
                        backgroundColor: isDarkMode ? 'rgba(18, 18, 18, 0.85)' : 'rgba(255, 255, 255, 0.85)',
                        color: isEven ? '#1976d2' : '#9c27b0',
                        border: '1px solid',
                        borderColor: isEven ? '#1976d2' : '#9c27b0',
                        boxShadow: `0 0 10px ${isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)'}`,
                        zIndex: 5,
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      {snippet}
                    </Box>
                  );
                })}

                {/* Central Element - Website Display */}
                <Box
                  component={motion.div}
                  animate={{
                    boxShadow: [
                      `0 0 20px rgba(25, 118, 210, 0.4)`,
                      `0 0 40px rgba(25, 118, 210, 0.6)`,
                      `0 0 20px rgba(25, 118, 210, 0.4)`,
                    ],
                    y: [-3, 3, -3],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  }}
                  sx={{
                    position: 'absolute',
                    width: { xs: '180px', md: '240px' },
                    height: { xs: '120px', md: '160px' },
                    borderRadius: '8px',
                    backgroundColor: isDarkMode ? 'rgba(30, 30, 35, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    overflow: 'hidden',
                    zIndex: 10,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Browser-like header */}
                  <Box
                    sx={{
                      height: '24px',
                      backgroundColor: isDarkMode ? 'rgba(18, 18, 18, 0.9)' : 'rgba(240, 240, 240, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      px: 1,
                      borderBottom: '1px solid',
                      borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      {['#FF5F57', '#FDBB2D', '#28C840'].map((color) => (
                        <Box
                          key={color}
                          sx={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: color,
                          }}
                        />
                      ))}
                    </Box>
                    
                    {/* URL bar */}
                    <Box
                      sx={{
                        ml: 1,
                        flex: 1,
                        height: '16px',
                        backgroundColor: isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)',
                        borderRadius: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        px: 1,
                        fontSize: '8px',
                        color: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                      }}
                    >
                      cybernest.dev
                    </Box>
                  </Box>
                  
                  {/* Website content */}
                  <Box
                    sx={{
                      height: 'calc(100% - 24px)',
                      p: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Header */}
                    <Box
                      component={motion.div}
                      animate={{ width: ['30%', '80%', '30%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      sx={{
                        height: '10px',
                        backgroundColor: isDarkMode ? 'rgba(144, 202, 249, 0.5)' : 'rgba(25, 118, 210, 0.5)',
                        borderRadius: '2px',
                        mb: 1,
                      }}
                    />
                    
                    {/* Content lines */}
                    {[...Array(4)].map((_, i) => (
                      <Box
                        key={i}
                        component={motion.div}
                        animate={{ width: [`${30 + Math.random() * 50}%`, `${60 + Math.random() * 30}%`, `${30 + Math.random() * 50}%`] }}
                        transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                        sx={{
                          height: '6px',
                          backgroundColor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
                          borderRadius: '2px',
                          mb: 0.8,
                        }}
                      />
                    ))}
                    
                    {/* Button */}
                    <Box
                      component={motion.div}
                      animate={{ 
                        backgroundColor: ['rgba(156, 39, 176, 0.7)', 'rgba(156, 39, 176, 0.9)', 'rgba(156, 39, 176, 0.7)'],
                        boxShadow: [
                          '0 2px 5px rgba(156, 39, 176, 0.3)',
                          '0 2px 8px rgba(156, 39, 176, 0.5)',
                          '0 2px 5px rgba(156, 39, 176, 0.3)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      sx={{
                        width: '60px',
                        height: '20px',
                        borderRadius: '4px',
                        mt: 'auto',
                      }}
                    />
                  </Box>
                </Box>
                
                {/* Connection lines between technologies and website */}
                {technologies.map((tech, index) => {
                  const angle = (index / technologies.length) * Math.PI * 2;
                  const delay = index * 0.5;
                  
                  return (
                    <Box
                      key={`connection-${index}`}
                      component={motion.div}
                      animate={{
                        opacity: [0, 0.7, 0],
                        height: [0, 2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: delay,
                      }}
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: { xs: '130px', md: '180px' },
                        backgroundColor: tech.color,
                        transformOrigin: 'left center',
                        transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                        zIndex: 1,
                        boxShadow: `0 0 5px ${tech.color}`,
                      }}
                    />
                  );
                })}
                
                {/* Data particles flowing along connection lines */}
                {technologies.map((tech, index) => {
                  const angle = (index / technologies.length) * Math.PI * 2;
                  
                  return (
                    <Box
                      key={`data-particle-${index}`}
                      component={motion.div}
                      animate={{
                        x: [0, Math.cos(angle) * 90],
                        y: [0, Math.sin(angle) * 90],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.5, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: tech.color,
                        boxShadow: `0 0 8px ${tech.color}`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 2,
                      }}
                    />
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        {/* Scroll Indicator */}
        <Box 
          sx={{ 
            position: 'absolute',
            bottom: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              mb: 1,
              opacity: 0.7,
            }}
          >
            Scroll Down
          </Typography>
          
          <Box
            component={motion.div}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Box
              sx={{
                width: '30px',
                height: '50px',
                border: '2px solid',
                borderColor: 'text.secondary',
                borderRadius: '15px',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '8px',
                  left: '50%',
                  width: '6px',
                  height: '6px',
                  backgroundColor: 'text.secondary',
                  borderRadius: '50%',
                  transform: 'translateX(-50%)',
                }
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 