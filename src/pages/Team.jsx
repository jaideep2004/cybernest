import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Avatar, 
  IconButton,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import { useColorMode } from '../hooks/useColorMode';
import ScrollReveal from '../components/ScrollReveal';
import { fadeIn } from '../animations/variants';
import { SectionWrapper } from '../animations/SectionWrapper';

// Icons
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaEnvelope, 
  FaGlobe,
  FaCode,
  FaPalette,
  FaInstagram
} from 'react-icons/fa';

// Team members data - Keep only the main 2
const teamMembers = [
  {
    id: 1,
    name: 'Jaideep Singh',
    role: 'Full Stack Developer',
    image: '/images/profile2.jpg',
    bio: 'Experienced full-stack developer with expertise in React, Node.js, and cloud technologies. Passionate about creating elegant solutions to complex problems.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js','Express', 'MongoDB', 'NextJS', 'WordPress','ChatGPT'],
    experience: '3+ years',
    education: 'BVOC in Software Development',
    social: {
      linkedin: 'https://www.linkedin.com/in/jaideep-2oo4/',
      github: 'https://github.com/jaideep2004',
      twitter: 'https://www.instagram.com/jaisidhu2oo4/',
      email: 'mailto:jaisidhu2004@gmail.com',
    },
    icon: <FaCode />,
    color: 'primary',
  },
  {
    id: 2,
    name: 'Kanwalpreet Singh',
    role: 'UI/UX Designer & Backend Developer',
    image: '/images/profile3.png',
    bio: 'Creative UI/UX designer with a passion for creating beautiful and intuitive user experiences. Specializes in user research, wireframing, and prototyping.',
    skills: ['UI/UX Design', 'Figma', 'Adobe XD', 'User Research', 'Prototyping','ChatGPT','Rest API','SQL','Video Editing'],
    experience: '6+ years',
    education: 'Masters in Computer Applications',
    social: {
      linkedin: '#',
      github: '#',
      twitter: 'https://www.instagram.com/kanwal_wanderer/',
      email: 'partner@example.com',
    },
    icon: <FaPalette />,
    color: 'secondary',
  }
];

const TeamComponent = () => {
  const { isDarkMode } = useColorMode();

  return (
    <Box
      id="team"
      component="section"
      sx={{
        py: { xs: 10, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: isDarkMode 
          ? 'linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.8) 50%, rgba(18, 18, 18, 0) 100%)' 
          : 'linear-gradient(180deg, rgba(245, 245, 247, 0) 0%, rgba(245, 245, 247, 0.8) 50%, rgba(245, 245, 247, 0) 100%)',
      }}
    >
      {/* Enhanced Background Elements */}
      <Box
        component={motion.div}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(144, 202, 249, 0.2) 0%, rgba(0,0,0,0) 70%)' 
            : 'radial-gradient(circle, rgba(25, 118, 210, 0.2) 0%, rgba(0,0,0,0) 70%)',
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
              Our Team
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
              Meet Our Team
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
              Our team of passionate professionals brings together diverse skills and expertise to deliver exceptional digital experiences.
            </Typography>
          </ScrollReveal>
        </Box>
        
        {/* Enhanced Team Members */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 6,
          }}
        >
          {teamMembers.map((member, index) => (
            <Box 
              key={member.id} 
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
                    y: -15,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                  }}
                  transition={{ duration: 0.4 }}
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    borderRadius: 6,
                    overflow: 'hidden',
                    background: isDarkMode 
                      ? 'rgba(30, 30, 35, 0.9)'
                      : 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid',
                    borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                    position: 'relative',
                   
                  }}
                >
                  {/* Decorative background element */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '200px',
                      height: '200px',
                      background: member.color === 'primary' 
                        ? isDarkMode ? 'radial-gradient(circle, rgba(144, 202, 249, 0.2) 0%, rgba(0,0,0,0) 70%)' 
                        : 'radial-gradient(circle, rgba(25, 118, 210, 0.1) 0%, rgba(0,0,0,0) 70%)'
                        : isDarkMode ? 'radial-gradient(circle, rgba(206, 147, 216, 0.2) 0%, rgba(0,0,0,0) 70%)'
                        : 'radial-gradient(circle, rgba(156, 39, 176, 0.1) 0%, rgba(0,0,0,0) 70%)',
                      borderRadius: '50%',
                      zIndex: 0,
                    }}
                  />
                  
                  <Grid container justifyContent='center'>
                    {/* Member Image */}
                    <Grid item xs={12} md={5} sx={{ p: 4 }}>
                      <Box sx={{ position: 'relative', display: 'flex', justifyContent: { xs: 'center', md: 'center' } }}>
                        <Box
                          component={motion.div}
                          animate={{
                            borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '60% 40% 30% 70% / 60% 30% 70% 40%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            // border: '2px solid',
                            borderColor: member.color === 'primary' ? 'primary.main' : 'secondary.main',
                            zIndex: 1,
                          }}
                        />
                        
                        {/* Icon Bubble */}
                        <Box
                          component={motion.div}
                          animate={{ 
                            y: [0, -10, 0],
                            rotate: [0, 10, 0, -10, 0]
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          sx={{
                            position: 'absolute',
                            top: -20,
                            right: -20,
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            backgroundColor: member.color === 'primary' ? 'primary.main' : 'secondary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.8rem',
                            color: '#fff',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                            zIndex: 3,
                          }}
                        >
                          {member.icon}
                        </Box>
                        
                        <Avatar
                          src={member.image}
                          alt={member.name}
                          sx={{
                            width: '250px',
                            height: 'auto',
                            aspectRatio: '1/1',
                            borderRadius: '20%',
                            border: '4px solid',
                            borderColor: member.color === 'primary' ? 'primary.main' : 'secondary.main',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                            zIndex: 2,
                          }}
                        />
                      </Box>
                      
                      <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Typography 
                          variant="h5" 
                          component="h3"
                          sx={{ 
                            fontWeight: 700,
                            mb: 0.5,
                          }}
                        >
                          {member.name}
                        </Typography>
                        
                        <Typography 
                          variant="subtitle1" 
                          color={member.color === 'primary' ? 'primary' : 'secondary'}
                          sx={{ 
                            fontWeight: 600,
                            mb: 2,
                          }}
                        >
                          {member.role}
                        </Typography>
                        
                        {/* Social Icons */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                          {member.social.linkedin && (
                            <a 
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: 'none' }}
                            >
                              <IconButton 
                                component={motion.button}
                                whileHover={{ y: -3, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                size="small"
                                color={member.color}
                                sx={{ 
                                  border: '1px solid',
                                  borderColor: member.color === 'primary' ? 'primary.main' : 'secondary.main',
                                }}
                              >
                                <FaLinkedin />
                              </IconButton>
                            </a>
                          )}
                          
                          {member.social.github && (
                            <a 
                              href={member.social.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: 'none' }}
                            >
                              <IconButton 
                                component={motion.button}
                                whileHover={{ y: -3, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                size="small"
                                color={member.color}
                                sx={{ 
                                  border: '1px solid',
                                  borderColor: member.color === 'primary' ? 'primary.main' : 'secondary.main',
                                }}
                              >
                                <FaGithub />
                              </IconButton>
                            </a>
                          )}
                          
                          {member.social.twitter && (
                            <a 
                              href={member.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: 'none' }}
                            >
                              <IconButton 
                                component={motion.button}
                                whileHover={{ y: -3, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                size="small"
                                color={member.color}
                                sx={{ 
                                  border: '1px solid',
                                  borderColor: member.color === 'primary' ? 'primary.main' : 'secondary.main',
                                }}
                              >
                                <FaInstagram />
                              </IconButton>
                            </a>
                          )}
                          
                          {member.social.email && (
                            <a 
                              href={`mailto:${member.social.email}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: 'none' }}
                            >
                              <IconButton 
                                component={motion.button}
                                whileHover={{ y: -3, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                size="small"
                                color={member.color}
                                sx={{ 
                                  border: '1px solid',
                                  borderColor: member.color === 'primary' ? 'primary.main' : 'secondary.main',
                                }}
                              >
                                <FaEnvelope />
                              </IconButton>
                            </a>
                          )}
                        </Box>
                      </Box>
                    </Grid>
                    
                    {/* Member Info */}
                    <Grid item xs={12} md={7} sx={{ pl: 4, pt: 0, pb: 4, pr: 4 }}>
                      <Box>
                        <Box sx={{ mb: 3 }}>
                          <Typography 
                            variant="body1" 
                            paragraph
                            sx={{ 
                              mb: 3, 
                              lineHeight: 1.8,
                              color: 'text.secondary',
                            }}
                          >
                            {member.bio}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ mb: 2 }}>
                          <Typography 
                            variant="subtitle2" 
                            sx={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: 1,
                              mb: 1,
                              fontWeight: 700,
                            }}
                          >
                            <Box component="span" sx={{ color: member.color === 'primary' ? 'primary.main' : 'secondary.main' }}>•</Box>
                            Experience: <Box component="span" sx={{ color: 'text.secondary', fontWeight: 500 }}>{member.experience}</Box>
                          </Typography>
                          
                          <Typography 
                            variant="subtitle2" 
                            sx={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: 1,
                              mb: 2,
                              fontWeight: 700,
                            }}
                          >
                            <Box component="span" sx={{ color: member.color === 'primary' ? 'primary.main' : 'secondary.main' }}>•</Box>
                            Education: <Box component="span" sx={{ color: 'text.secondary', fontWeight: 500 }}>{member.education}</Box>
                          </Typography>
                        </Box>
                        
                        <Box>
                          <Typography 
                            variant="subtitle2" 
                            sx={{ 
                              mb: 1,
                              fontWeight: 700,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            <Box component="span" sx={{ color: member.color === 'primary' ? 'primary.main' : 'secondary.main' }}>•</Box>
                            Key Skills:
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {member.skills.map((skill) => (
                              <Chip 
                                key={skill} 
                                label={skill} 
                                size="small" 
                                color={member.color}
                                sx={{ 
                                  fontWeight: 500,
                                  '&.MuiChip-colorPrimary': {
                                    background: isDarkMode ? 'rgba(25, 118, 210, 0.2)' : 'rgba(25, 118, 210, 0.1)',
                                    color: isDarkMode ? '#ffffff' : '#000000',
                                  },
                                  '&.MuiChip-colorSecondary': {
                                    background: isDarkMode ? 'rgba(156, 39, 176, 0.2)' : 'rgba(156, 39, 176, 0.1)',
                                    color: isDarkMode ? '#ffffff' : '#000000',
                                  }
                                }}
                              />
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </ScrollReveal>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// Export the component wrapped with the section animation
const Team = SectionWrapper(TeamComponent, "team");
export default Team; 