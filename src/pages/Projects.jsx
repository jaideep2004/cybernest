import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Tabs, Tab, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useColorMode } from '../hooks/useColorMode';
import ScrollReveal from '../components/ScrollReveal';
import { fadeIn } from '../animations/variants';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SectionWrapper } from '../animations/SectionWrapper';

// Project data
const projects = [
  {
    title: "The FinShelter",
    description: "Tax filing platform built with MERN stack and backend record management.",
    image: "/images/pr1.png",   
    link: "https://thefinshelter.com/",
    technologies: ["MERN Stack", "Razorpay"]
  },
  {
    title: "TrueSub",
    description: "E-commerce website with custom WordPress coding and multilingual support.",
    image: "/images/pr2.png", 
    link: "https://karhari.sprintbus.ca/",
    technologies: ["Custom WordPress Coding", "HTML", "PHP"]
  },
  {
    title: "SingleAudio",
    description: "Fully custom WordPress music site with artist uploads and copyright tools.",
    image: "/images/pr3.png",
    link: "https://singleaudio.com/",
    technologies: ["Custom WordPress Theme", "Custom Coding", "Contact Form"]
  },
  {
    title: "Karhari Media",
    description: "Custom WordPress music platform with dynamic releases and audio player.",
    image: "/images/pr4.png",
    link: "https://karharimedia.com/",
    technologies: ["Custom WordPress Theme", "Custom Coding", "Contact Form"]
  },
  {
    title: "Inlighntech",
    description: "Course and certification site with WooCommerce and training enrollment.",
    image: "/images/pr5.png",
    link: "https://www.inlighntech.com/",
    technologies: ["Custom WordPress Plugin", "Certification Logic"]
  },
  {
    title: "Acumen",
    description: "Analytics company website with custom WordPress plugin and forms.",
    image: "/images/pr6.png",
    link: "https://acumendata.io/",
    technologies: ["Custom WordPress Plugin", "Custom Coding"]
  },
  {
    title: "Life Foundation NGO",
    description: "Donation platform using React with Razorpay and PayPal integration.",
    image: "/images/pr7.png",
    link: "https://lifefoundationhelp.com/",
    technologies: ["React", "Razorpay", "PayPal Integration"]
  },
  {
    title: "AcademicAssignmentMaster",
    description: "MERN-based education site with dashboards and Razorpay payments.",
    image: "/images/pr8.png",
    link: "https://academicassignmentmaster.co.in/",
    technologies: ["MERN Stack", "Razorpay"]
  },
  {
    title: "NGO Website",
    description: "NGO Website built using WordPress and using plugins like WPForms Lite.",
    image: "/images/pr9.png",
    link: "https://ggsvidyakendra.com/",
    technologies: ["WordPress", "Stripe"]
  },
  {
    title: "Nutritionist Website",
    description: "Nutritionist Website built using MERN stack with appointment booking.",
    image: "/images/pr10.png",
    link: "https://arvindsabharwal.onrender.com/",
    technologies: ["React"]
  },
  {
    title: "Education Website",
    description: "Education Website built using MERN stack with course management.",
    image: "/images/pr11.png",
    link: "https://codingarena.onrender.com/",
    technologies: ["MERN Stack", "Authentication"]
  },
  {
    title: "Trucking Website",
    description: "Trucking Website built using WordPress and plugins like WPForms Lite.",
    image: "/images/pr12.png",
    link: "https://gunaventerprises.com/",
    technologies: ["WordPress"]
  },
];

const ProjectsComponent = () => {
  const { isDarkMode } = useColorMode();

  // Placeholder image for development since actual images might not exist yet
  const getImageUrl = (imagePath) => {
    try {
      return new URL(imagePath, import.meta.url).href;
    } catch (error) {
      return 'https://via.placeholder.com/800x500?text=Project+Image';
    }
  };

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 7, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        background: isDarkMode 
          ? 'linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.8) 50%, rgba(18, 18, 18, 0) 100%)' 
          : 'linear-gradient(180deg, rgba(245, 245, 247, 0) 0%, rgba(245, 245, 247, 0.8) 50%, rgba(245, 245, 247, 0) 100%)',
      }}
    >
      {/* Decorative Elements */}
      <Box
        component={motion.div}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: isDarkMode ? 'radial-gradient(circle, rgba(144, 202, 249, 0.2) 0%, rgba(0,0,0,0) 70%)' : 'radial-gradient(circle, rgba(25, 118, 210, 0.2) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(30px)',
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
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
              Our Work
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
              Featured Projects
            </Typography>
            
            <Typography 
              variant="body1"
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                fontSize: '1.2rem',
                color: 'text.secondary',
                lineHeight: 1.8,
                mb: 5,
              }}
            >
              Explore our portfolio of web development projects. Each project showcases our expertise in creating modern, responsive, and user-friendly digital experiences.
            </Typography>
          </ScrollReveal>
        </Box>

        {/* Projects Grid */}
        <Box>
          <Grid 
            container 
            spacing={4} 
            justifyContent="center"
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {projects.map((project, index) => (
              <Grid 
                item 
                key={project.title}
                sx={{ width: '100%' }}
              >
                <ScrollReveal 
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, delay: index % 2 * 0.2 }}
                >
                  <Card
                    component={motion.div}
                    whileHover={{ 
                      y: -20,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                      transition: { duration: 0.3 }
                    }}
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      background: isDarkMode 
                        ? 'rgba(30, 30, 35, 0.9)'
                        : 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid',
                      borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                    }}
                  >
                    {/* Project Image with Overlay */}
                    <Box sx={{ position: 'relative', overflow: 'hidden', height: 200 }}>
                      <CardMedia
                        component="img"
                        height="100%"
                        image={getImageUrl(project.image)}
                        alt={project.title}
                        sx={{
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          '&:hover': {
                            opacity: 1,
                          },
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<FaExternalLinkAlt />}
                          sx={{
                            borderRadius: 2,
                            textTransform: 'none',
                            boxShadow: 3,
                            fontWeight: 600,
                          }}
                        >
                          Visit Site
                        </Button>
                      </Box>
                    </Box>

                    {/* Project Info */}
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 700, 
                          color: 'text.primary' 
                        }}
                      >
                        {project.title}
                      </Typography>
                      
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                          mb: 2,
                          minHeight: '40px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {project.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1, minHeight: '40px' }}>
                        {project.technologies && project.technologies.map((tech, i) => (
                          <Chip 
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              fontSize: '0.7rem',
                              height: 22,
                              fontWeight: 500,
                              bgcolor: isDarkMode ? 'rgba(144, 202, 249, 0.1)' : 'rgba(25, 118, 210, 0.1)',
                              color: isDarkMode ? '#90caf9' : '#1976d2',
                              border: '1px solid',
                              borderColor: isDarkMode ? 'rgba(144, 202, 249, 0.2)' : 'rgba(25, 118, 210, 0.2)',
                              '& .MuiChip-label': {
                                px: 1,
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    
                    {/* Card Actions */}
                    <CardActions sx={{ p: 2, pt: 0, justifyContent: 'flex-end' }}>
                      <Button
                        size="small"
                        component="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<FaExternalLinkAlt />}
                        sx={{
                          fontWeight: 500,
                          textTransform: 'none',
                          color: isDarkMode ? '#90caf9' : '#1976d2',
                          '&:hover': {
                            background: isDarkMode ? 'rgba(144, 202, 249, 0.1)' : 'rgba(25, 118, 210, 0.1)',
                          },
                        }}
                      >
                        Visit Website
                      </Button>
                    </CardActions>
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

// Export the component wrapped with the section animation
const Projects = SectionWrapper(ProjectsComponent, "projects");
export default Projects; 