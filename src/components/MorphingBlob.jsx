import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useColorMode } from '../hooks/useColorMode';

const MorphingBlob = ({ 
  size = 300, 
  color, 
  opacity = 0.7, 
  duration = 8, 
  blur = 0,
  ...props 
}) => {
  const { isDarkMode } = useColorMode();
  
  // Use provided color or default based on theme
  const blobColor = color || (isDarkMode ? '#90caf9' : '#1976d2');
  
  return (
    <Box
      component={motion.div}
      animate={{
        borderRadius: [
          '60% 40% 30% 70% / 60% 30% 70% 40%',
          '30% 60% 70% 40% / 50% 60% 30% 60%',
          '60% 40% 30% 70% / 60% 30% 70% 40%',
        ],
      }}
      transition={{
        duration,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'mirror',
      }}
      sx={{
        width: size,
        height: size,
        backgroundColor: blobColor,
        opacity,
        filter: blur > 0 ? `blur(${blur}px)` : 'none',
        ...props.sx,
      }}
      {...props}
    />
  );
};

export default MorphingBlob; 