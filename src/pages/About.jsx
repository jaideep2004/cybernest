import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Chip, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useColorMode } from '../hooks/useColorMode';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxContainer from '../components/ParallaxContainer';
import { fadeIn, textVariant, zoomIn } from '../animations/variants';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, 
  FaGitAlt, FaWordpress, FaPython, FaCode, FaUsers, FaLightbulb, FaRocket
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiMui, SiAndroidstudio, SiOpenai, SiMysql 
} from 'react-icons/si';

// Updated skills data with react-icons
const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 95, isLeft: true, delay: 0 },
  { name: "CSS", icon: <FaCss3Alt />, level: 90, isLeft: false, delay: 0.1 },
  { name: "JavaScript", icon: <FaJs />, level: 75, isLeft: true, delay: 0.1 },
  { name: "React", icon: <FaReact />, level: 80, isLeft: false, delay: 0.2 },
  { name: "Node.js", icon: <FaNodeJs />, level: 60, isLeft: true, delay: 0.2 },
  { name: "Express", icon: <SiExpress />, level: 60, isLeft: false, delay: 0.3 },
  { name: "MongoDB", icon: <SiMongodb />, level: 60, isLeft: true, delay: 0.3 },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 85, isLeft: false, delay: 0.4 },
  { name: "Material UI", icon: <SiMui />, level: 80, isLeft: true, delay: 0.4 },
  { name: "Git", icon: <FaGitAlt />, level: 80, isLeft: false, delay: 0.5 },
  { name: "WordPress", icon: <FaWordpress />, level: 85, isLeft: true, delay: 0.5 },
  { name: "Python", icon: <FaPython />, level: 60, isLeft: false, delay: 0.6 },
  { name: "MySQL", icon: <SiMysql />, level: 90, isLeft: true, delay: 0.6 },
  { name: "Android Studio", icon: <SiAndroidstudio />, level: 65, isLeft: false, delay: 0.7 },
];

// About us features
const features = [
  {
    icon: <FaCode />,
    title: "Expert Development",
    description: "With over 150 successful projects, we bring technical expertise and attention to detail to every line of code we write.",
    color: "primary"
  },
  {
    icon: <FaUsers />,
    title: "Client Satisfaction",
    description: "Our 80+ happy clients speak to our commitment to understanding needs and delivering beyond expectations.",
    color: "secondary"
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Solutions",
    description: "We don't just build websites; we create innovative solutions that solve real business problems.",
    color: "primary"
  },
  {
    icon: <FaRocket />,
    title: "Timely Delivery",
    description: "We understand the importance of deadlines and pride ourselves on delivering quality work on schedule.",
    color: "secondary"
  }
];

const About = () => {
  const { isDarkMode } = useColorMode();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        pt: { xs: 9, md: 14 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Enhanced Decorative Elements */}
      <Box
        component={motion.div}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: isDarkMode ? 'radial-gradient(circle, rgba(144, 202, 249, 0.2) 0%, rgba(0,0,0,0) 70%)' : 'radial-gradient(circle, rgba(25, 118, 210, 0.2) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(30px)',
          zIndex: -1,
        }}
      />
      
      <Box
        component={motion.div}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
          rotate: [0, -10, 0],
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
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: isDarkMode ? 'radial-gradient(circle, rgba(206, 147, 216, 0.2) 0%, rgba(0,0,0,0) 70%)' : 'radial-gradient(circle, rgba(156, 39, 176, 0.2) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(30px)',
          zIndex: -1,
        }}
      />
      
      <Container maxWidth="lg">
        {/* Enhanced Section Header */}
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <ScrollReveal>
            <Typography 
              variant="h6" 
              component="p"
              color="primary"
              sx={{ 
                fontWeight: 600,
                letterSpacing: 4,
                mb: 2,
                textTransform: 'uppercase',
                display: 'inline-block',
                padding: '6px 16px',
                borderRadius: '30px',
                background: isDarkMode ? 'rgba(25, 118, 210, 0.1)' : 'rgba(25, 118, 210, 0.1)',
                border: '1px solid',
                borderColor: isDarkMode ? 'rgba(144, 202, 249, 0.3)' : 'rgba(25, 118, 210, 0.3)',
              }}
            >
              ABOUT US
            </Typography>
            
            <Typography 
              variant="h2" 
              component="h2"
              sx={{ 
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
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
                  ? '0 0 20px rgba(144, 202, 249, 0.3)' 
                  : '0 0 20px rgba(25, 118, 210, 0.3)',
              }}
            >
              Who We Are
            </Typography>
            
            <Typography 
              variant="body1"
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.2rem',
                color: 'text.secondary',
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              We are a dynamic duo of passionate developers and designers, dedicated to creating exceptional digital experiences that leave a lasting impression.
            </Typography>
          </ScrollReveal>
        </Box>
        
        {/* Simplified About Us Left-Right Section */}
        <Box sx={{ mb: 15 }}>
          <Grid container spacing={6} alignItems="center" flexWrap={{ xs: 'wrap', md: 'nowrap' }}>
            {/* Left Side - Image with Animation */}
            <Grid item xs={12} md={6} width={'100%'}>
              <ScrollReveal>
                <Box 
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  sx={{
                   
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    border: '1px solid',
                    borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                  }}
                >
                  {/* Main image */}
                  <Box
                    
                    component={motion.img}
                    src="./images/ab3.png"
                    alt="Our team collaborating"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      filter: [
                        'brightness(1)',
                        'brightness(1.1)',
                        'brightness(1)'
                      ] 
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    sx={{
                      width: '100%',
                      height: { xs: '300px', md: '500px' },
                      objectFit: 'cover',
                    }}
                  />
                  
                  {/* Overlay with text */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                      padding: '30px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <Typography
                      component={motion.div}
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      variant="h3"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        fontSize: { xs: '1.8rem', md: '2.5rem' }
                      }}
                    >
                      Passionate <br />
                      <Box component="span" sx={{ color: '#90caf9' }}>Developers</Box>
                    </Typography>
                  </Box>
                </Box>
              </ScrollReveal>
            </Grid>
            
            {/* Right Side - Content */}
            <Grid item xs={12} md={6}>
              <ScrollReveal>
                <Box 
                  component={motion.div}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 3,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-12px',
                        left: '0',
                        width: '60px',
                        height: '4px',
                        borderRadius: '2px',
                        background: 'linear-gradient(90deg, #1976d2, #9c27b0)',
                      }
                    }}
                  >
                    Crafting Digital Excellence
                  </Typography>
                  
                  <Typography 
                    variant="body1"
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.8,
                      mb: 3,
                      fontSize: '1.1rem',
                    }}
                  >
                    With over 8 years of combined experience in web development and design, we've helped businesses of all sizes transform their digital presence. Our approach combines technical expertise with creative innovation to deliver results that exceed expectations.
                  </Typography>
                  
                  <Typography 
                    variant="body1"
                    sx={{ 
                      color: 'text.secondary',
                      lineHeight: 1.8,
                      mb: 4,
                      fontSize: '1.1rem',
                    }}
                  >
                    We believe in creating solutions that are not just visually stunning but also functionally robust and user-focused. Every project we undertake is treated with the same level of dedication and attention to detail.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                    <Box 
                      component={motion.div}
                      whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                      sx={{ 
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderRadius: '50%',
                        width: 70,
                        height: 70,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                      }}
                    >
                      <Typography variant="h4" sx={{ fontWeight: 700 }}>8+</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>Years of Experience</Typography>
                      <Typography variant="body2" color="text.secondary">Creating digital solutions</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box 
                      component={motion.div}
                      whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                      sx={{ 
                        bgcolor: 'secondary.main',
                        color: 'white',
                        borderRadius: '50%',
                        width: 70,
                        height: 70,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                      }}
                    >
                      <Typography variant="h4" sx={{ fontWeight: 700 }}>50+</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>Projects Completed</Typography>
                      <Typography variant="body2" color="text.secondary">For clients worldwide</Typography>
                    </Box>
                  </Box>
                </Box>
              </ScrollReveal>
            </Grid>
          </Grid>
        </Box>
        
        {/* Skills Section with updated data and styling */}
        <Box sx={{ mt: 18, mb: 12 }}>
          <Typography 
            variant="h3" 
            component="h3"
            sx={{ 
              fontWeight: 700,
              mb: 6,
              textAlign: 'center',
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                borderRadius: '2px',
                background: isDarkMode 
                  ? 'linear-gradient(90deg, #90caf9, #ce93d8)' 
                  : 'linear-gradient(90deg, #1976d2, #9c27b0)',
              }
            }}
          >
            Our Skills
          </Typography>

          <Grid 
            container 
            spacing={3} 
            justifyContent="center" 
            sx={{ 
              mt: 4,
              display: 'grid',
              gridTemplateColumns: { 
                xs: 'repeat(1, 1fr)', 
                sm: 'repeat(4, 1fr)', 
                md: 'repeat(7, 1fr)' 
              },
              gridAutoRows: 'minmax(min-content, max-content)',
              gap: 3,
              '& > .MuiGrid-item': {
                width: '100%',
                paddingLeft: 0,
                paddingTop: 0
              }
            }}
          >
            {skills.slice(0, 14).map((skill, index) => (
              <Grid 
                item 
                key={skill.name}
                sx={{
                  gridRow: { 
                    xs: index + 1,
                    sm: index < 4 ? 1 : 2,
                    md: index < 7 ? 1 : 2
                  }
                }}
              >
                <ScrollReveal threshold={0.2}>
                  <Card
                    component={motion.div}
                    whileHover={{ 
                      y: -10,
                      boxShadow: isDarkMode 
                        ? '0 20px 30px rgba(0, 0, 0, 0.3)' 
                        : '0 20px 30px rgba(0, 0, 0, 0.1)',
                    }}
                    transition={{ duration: 0.3 }}
                    sx={{ 
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      borderRadius: 4,
                      background: isDarkMode 
                        ? 'linear-gradient(145deg, rgba(18, 18, 18, 0.9), rgba(30, 30, 30, 0.9))' 
                        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(245, 245, 247, 0.9))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid',
                      borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                    }}
                  >
                    <Box
                      component={motion.div}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      sx={{ 
                        fontSize: '2.5rem',
                        mb: 2,
                        width: 70,
                        height: 70,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        backgroundColor: isDarkMode ? 'rgba(30, 30, 30, 0.8)' : 'rgba(245, 245, 247, 0.8)',
                        color: skill.isLeft ? 'primary.main' : 'secondary.main',
                        boxShadow: `0 5px 15px ${skill.isLeft ? 'rgba(25, 118, 210, 0.3)' : 'rgba(156, 39, 176, 0.3)'}`,
                        border: '2px solid',
                        borderColor: skill.isLeft ? 'primary.main' : 'secondary.main',
                      }}
                    >
                      {skill.icon}
                    </Box>
                    
                    <Typography 
                      variant="h6" 
                      component="h4"
                      sx={{ 
                        fontWeight: 600,
                        mb: 1,
                        fontSize: { xs: '0.9rem', md: '1rem' }
                      }}
                    >
                      {skill.name}
                    </Typography>
                    
                    <Box
                      sx={{
                        width: '100%',
                        height: '8px',
                        backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        borderRadius: '4px',
                        mt: 2,
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: { width: 0 },
                          visible: { 
                            width: `${skill.level}%`,
                            transition: { 
                              duration: 1.5,
                              delay: 0.2 + index * 0.1
                            }
                          }
                        }}
                        sx={{
                          height: '100%',
                          background: skill.isLeft
                            ? 'linear-gradient(90deg, #1976d2, #42a5f5)'
                            : 'linear-gradient(90deg, #9c27b0, #ba68c8)',
                          borderRadius: '4px',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '10px',
                            height: '100%',
                            background: 'rgba(255, 255, 255, 0.3)',
                            filter: 'blur(5px)',
                          }
                        }}
                      />
                    </Box>
                    
                    <Typography 
                      variant="body2"
                      sx={{ 
                        fontWeight: 600,
                        mt: 1,
                        color: skill.isLeft ? 'primary.main' : 'secondary.main',
                      }}
                    >
                      {skill.level}%
                    </Typography>
                  </Card>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 