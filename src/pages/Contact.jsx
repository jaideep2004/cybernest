import { useState, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Card, 
  CardContent,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
  Paper,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import { useColorMode } from '../hooks/useColorMode';
import ScrollReveal from '../components/ScrollReveal';
import MorphingBlob from '../components/MorphingBlob';
import { fadeIn, textVariant } from '../animations/variants';
import { SectionWrapper } from '../animations/SectionWrapper';
import emailjs from '@emailjs/browser';

// Icons
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaPaperPlane, 
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaUser,
  FaCommentAlt
} from 'react-icons/fa';

const ContactInfo = ({ icon, title, content, delay, color = 'primary' }) => {
  const { isDarkMode } = useColorMode();
  
  return (
    <ScrollReveal>
      <Card
        component={motion.div}
        whileHover={{ 
          y: -10,
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        }}
        transition={{ duration: 0.4 }}
        sx={{ 
          p: 3,
          mb: 4,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          borderRadius: 4,
          background: isDarkMode 
            ? 'rgba(30, 30, 35, 0.9)'
            : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid',
          borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          component={motion.div}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 60,
            borderRadius: '50%',
            backgroundColor: color === 'primary' ? 'primary.main' : 'secondary.main',
            color: '#fff',
            mr: 3,
            fontSize: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            zIndex: 1,
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
        
        <Box>
          <Typography 
            variant="h6" 
            component="h3"
            sx={{ 
              fontWeight: 700,
              mb: 0.5,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {title}
          </Typography>
          
          <Typography 
            variant="body1"
            sx={{ 
              color: 'text.secondary',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {content}
          </Typography>
        </Box>
      </Card>
    </ScrollReveal>
  );
};

const ContactComponent = () => {
  const { isDarkMode } = useColorMode();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Replace these with your own EmailJS service ID, template ID, and Public Key
    emailjs.sendForm(
      'service_m6ve5lz', 
      'template_efe7977', 
      formRef.current, 
      'ByY67qallsZ4slKux'
    )
    .then((result) => {
      setLoading(false);
      setSnackbar({
        open: true,
        message: 'Message sent successfully! We will get back to you soon.',
        severity: 'success',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, (error) => {
      setLoading(false);
      setSnackbar({
        open: true,
        message: 'Failed to send the message. Please try again.',
        severity: 'error',
      });
      console.error('EmailJS Error:', error);
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
        background: isDarkMode 
          ? 'linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.8) 50%, rgba(18, 18, 18, 0) 100%)' 
          : 'linear-gradient(180deg, rgba(245, 245, 247, 0) 0%, rgba(245, 245, 247, 0.8) 50%, rgba(245, 245, 247, 0) 100%)',
      }}
    >
      {/* Enhanced Background Elements */}
      <Box sx={{ position: 'absolute', top: '5%', right: '-10%', zIndex: -1 }}>
        <MorphingBlob 
          size={500} 
          opacity={0.15} 
          blur={30}
          color={isDarkMode ? '#90caf9' : '#1976d2'} 
          duration={12}
        />
      </Box>
      
      <Box sx={{ position: 'absolute', bottom: '10%', left: '-15%', zIndex: -1 }}>
        <MorphingBlob 
          size={600} 
          opacity={0.15} 
          blur={40}
          color={isDarkMode ? '#ce93d8' : '#9c27b0'} 
          duration={15}
        />
      </Box>

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
              Get In Touch
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
              Contact Us
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
              Have a question or want to work together? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </Typography>
          </ScrollReveal>
        </Box>
        
        {/* Contact Form and Info Cards */}
        <Grid 
          container 
          spacing={6} 
          sx={{ 
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Left Side - Contact Info Cards */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column' }}>
            <ContactInfo 
              icon={<FaEnvelope />} 
              title="Email Us" 
              content="info@jsportfolio.com" 
            />
            
            <ContactInfo 
              icon={<FaMapMarkerAlt />} 
              title="Our Location" 
              content="123 Web Dev Street, Digital City, 10001" 
              color="secondary" 
            />
            
            <ContactInfo 
              icon={<FaPhone />} 
              title="Call Us" 
              content="+1 (555) 123-4567" 
            />
            
            {/* Social Media Links */}
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 2, 
                mt: 2,
              }}
            >
              {[
                { icon: <FaLinkedin />, color: '#0077B5' },
                { icon: <FaGithub />, color: isDarkMode ? '#fff' : '#333' },
                { icon: <FaTwitter />, color: '#1DA1F2' },
                { icon: <FaInstagram />, color: '#E1306C' },
              ].map((social, i) => (
                <Box
                  key={i}
                  component={motion.div}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  sx={{ 
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: social.color,
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                >
                  {social.icon}
                </Box>
              ))}
            </Box>
          </Grid>
          
          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={7} sx={{ width: { xs: '100%', md: '50%' } }}>
            <ScrollReveal>
              <Paper
                elevation={isDarkMode ? 4 : 2}
                sx={{ 
                  borderRadius: 4,
                  overflow: 'hidden',
                  background: isDarkMode 
                    ? 'rgba(30, 30, 35, 0.9)'
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid',
                  borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                  p: { xs: 3, md: 5 },
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 4, 
                    fontWeight: 700,
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  Send a Message
                </Typography>
                
                <Box 
                  component="form" 
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      required
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FaUser />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      required
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FaEnvelope />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      required
                      label="Your Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 2 }}>
                            <FaCommentAlt />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                        }
                      }}
                    />
                  </Box>
                  
                  <Box>
                    <Button
                      component={motion.button}
                      whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      disabled={loading}
                      endIcon={<FaPaperPlane />}
                      sx={{ 
                        py: 1.5, 
                        borderRadius: 2,
                        fontWeight: 600,
                        background: 'linear-gradient(90deg, #1976d2, #42a5f5)',
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Container>
      
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

// Export the component wrapped with the section animation
const Contact = SectionWrapper(ContactComponent, "contact");
export default Contact; 