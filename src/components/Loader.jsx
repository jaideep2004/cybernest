import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useColorMode } from '../hooks/useColorMode';

const LoaderText = () => {
  const [text, setText] = useState('');
  const loadingText = 'Welcome to CyberNest';
  const { isDarkMode } = useColorMode();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (text.length < loadingText.length) {
        setText(loadingText.substring(0, text.length + 1));
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <Typography 
      variant="h3" 
      component={motion.h3}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{ 
        fontWeight: 700,
        background: isDarkMode 
          ? 'linear-gradient(90deg, #90caf9, #ce93d8)' 
          : 'linear-gradient(90deg, #1976d2, #9c27b0)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textAlign: 'center',
        mb: 4,
      }}
    >
      {text}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        |
      </motion.span>
    </Typography>
  );
};

const Loader = () => {
  const { isDarkMode } = useColorMode();
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 20);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDarkMode ? 'background.default' : 'background.paper',
        zIndex: 9999,
      }}
    >
      <Box 
        sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          opacity: 0.1,
        }}
      >
        {/* Background grid pattern */}
        {Array.from({ length: 20 }, (_, i) => (
          <Box
            key={`grid-h-${i}`}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: i * 0.05 }}
            sx={{
              position: 'absolute',
              top: `${i * 5}%`,
              left: 0,
              width: '100%',
              height: '1px',
              backgroundColor: isDarkMode ? 'primary.main' : 'secondary.main',
            }}
          />
        ))}
        
        {Array.from({ length: 20 }, (_, i) => (
          <Box
            key={`grid-v-${i}`}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: i * 0.05 }}
            sx={{
              position: 'absolute',
              left: `${i * 5}%`,
              top: 0,
              width: '1px',
              height: '100%',
              backgroundColor: isDarkMode ? 'primary.main' : 'secondary.main',
            }}
          />
        ))}
      </Box>
      
      <Box
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: 'spring',
          stiffness: 200,
          damping: 20,
          delay: 0.2
        }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
          borderRadius: 4,
          backgroundColor: isDarkMode ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: isDarkMode 
            ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
            : '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid',
          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
          maxWidth: '90%',
          width: '500px',
        }}
      >
        <LoaderText />
        
        <Box sx={{ 
          position: 'relative', 
          width: '100%', 
          height: 250, 
          mb: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Main animated logo */}
          <Box
            component={motion.div}
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: 'relative',
              transformStyle: 'preserve-3d',
              width: 150,
              height: 150,
              transformOrigin: 'center',
              perspective: 1000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* 3D Cube Faces */}
            {[
              { rotateY: 0, color: isDarkMode ? '#90caf9' : '#1976d2', z: 75 },
              { rotateY: 90, color: isDarkMode ? '#ce93d8' : '#9c27b0', z: 75 },
              { rotateY: 180, color: isDarkMode ? '#81c784' : '#2e7d32', z: 75 },
              { rotateY: 270, color: isDarkMode ? '#ffb74d' : '#e65100', z: 75 },
              { rotateX: 90, color: isDarkMode ? '#a1887f' : '#5d4037', z: 75 },
              { rotateX: -90, color: isDarkMode ? '#9fa8da' : '#3949ab', z: 75 },
            ].map((face, index) => (
              <Box
                key={index}
                component={motion.div}
                animate={{
                  opacity: [0.7, 1, 0.7],
                  boxShadow: [
                    `0 0 20px ${face.color}80`,
                    `0 0 40px ${face.color}80`,
                    `0 0 20px ${face.color}80`,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                sx={{
                  position: 'absolute',
                  width: 150,
                  height: 150,
                  backgroundColor: face.color,
                  border: '2px solid',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transform: `${face.rotateY ? `rotateY(${face.rotateY}deg)` : ''} ${face.rotateX ? `rotateX(${face.rotateX}deg)` : ''} translateZ(${face.z}px)`,
                  transformOrigin: 'center center',
                  backfaceVisibility: 'hidden',
                }}
              >
                <Typography 
                  variant="h2" 
                  sx={{ 
                    color: '#fff', 
                    fontWeight: 800, 
                    opacity: 0.9,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    margin: 0,
                    padding: 0,
                    width: 'auto',
                    height: 'auto',
                    textAlign: 'center',
                  }}
                >
                 CN
                </Typography>
              </Box>
            ))}
          </Box>
          
          {/* Orbiting particles */}
          {Array.from({ length: 3 }, (_, i) => (
            <Box
              key={`orbit-${i}`}
              component={motion.div}
              animate={{
                rotateZ: [0, 360],
              }}
              transition={{
                duration: 10 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 200 + i * 60,
                height: 200 + i * 60,
                borderRadius: '50%',
                border: '1px dashed',
                borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Box
                component={motion.div}
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    '0 0 10px rgba(144, 202, 249, 0.5)',
                    '0 0 20px rgba(144, 202, 249, 0.8)',
                    '0 0 10px rgba(144, 202, 249, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  backgroundColor: isDarkMode ? 'primary.main' : 'secondary.main',
                  transform: 'translateX(-50%)',
                }}
              />
            </Box>
          ))}
        </Box>
        
        {/* Progress bar */}
        <Box sx={{ width: '100%', mt: 2 }}>
          <Box sx={{ 
            width: '100%', 
            height: 6, 
            backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', 
            borderRadius: 3,
            overflow: 'hidden'
          }}>
            <Box 
              component={motion.div}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: 'spring', stiffness: 50 }}
              sx={{ 
                height: '100%', 
                background: isDarkMode 
                  ? 'linear-gradient(90deg, #90caf9, #ce93d8)' 
                  : 'linear-gradient(90deg, #1976d2, #9c27b0)',
                borderRadius: 3,
              }}
            />
          </Box>
          
          <Typography 
            variant="body2" 
            sx={{ 
              textAlign: 'center', 
              mt: 1,
              color: 'text.secondary',
            }}
          >
            Loading... {progress}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Loader; 