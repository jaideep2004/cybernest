import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useColorMode } from '../hooks/useColorMode';

const AnimatedBackground = () => {
  const { isDarkMode } = useColorMode();

  // Generate random shapes with more vibrant colors
  const shapes = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 80 + 40, // Larger sizes
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.2 + 0.05, // Reduced opacity to not interfere with content
    type: Math.floor(Math.random() * 4), // 0: circle, 1: square, 2: polygon, 3: star
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 10,
  }));

  // Create a star shape path
  const createStarPath = (size) => {
    const outerRadius = size / 2;
    const innerRadius = outerRadius / 2.5;
    const points = 5;
    let path = '';
    
    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI / points) * i;
      const x = radius * Math.sin(angle);
      const y = radius * Math.cos(angle);
      
      if (i === 0) {
        path += `M${x},${y} `;
      } else {
        path += `L${x},${y} `;
      }
    }
    
    return path + 'Z';
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1,
        pointerEvents: 'none', // Ensure it doesn't block interactions
      }}
    >
      {/* Gradient overlay - adjusted for better content visibility */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: isDarkMode 
            ? 'radial-gradient(circle at 50% 50%, rgba(25, 25, 35, 0.3) 0%, rgba(10, 10, 15, 0.95) 100%)' 
            : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(245, 245, 250, 0.95) 100%)',
          zIndex: -1,
        }}
      />

      {shapes.map((shape) => {
        // More vibrant colors for light mode but with reduced opacity
        const getShapeColor = () => {
          if (isDarkMode) {
            return shape.type === 0 ? 'rgba(144, 202, 249, 0.6)' 
              : shape.type === 1 ? 'rgba(206, 147, 216, 0.6)' 
              : shape.type === 2 ? 'rgba(129, 199, 132, 0.6)'
              : 'rgba(255, 183, 77, 0.6)';
          } else {
            return shape.type === 0 ? 'rgba(25, 118, 210, 0.4)' 
              : shape.type === 1 ? 'rgba(156, 39, 176, 0.4)' 
              : shape.type === 2 ? 'rgba(46, 125, 50, 0.4)'
              : 'rgba(230, 81, 0, 0.4)';
          }
        };

        // More complex animations
        const shapeProps = {
          initial: {
            x: `${shape.x}vw`,
            y: `${shape.y}vh`,
            opacity: 0,
            rotate: shape.rotation,
          },
          animate: {
            x: [
              `${shape.x}vw`,
              `${shape.x + (Math.random() * 30 - 15)}vw`,
              `${shape.x - (Math.random() * 30 - 15)}vw`,
              `${shape.x}vw`,
            ],
            y: [
              `${shape.y}vh`,
              `${shape.y + (Math.random() * 30 - 15)}vh`,
              `${shape.y - (Math.random() * 30 - 15)}vh`,
              `${shape.y}vh`,
            ],
            opacity: shape.opacity,
            rotate: [shape.rotation, shape.rotation + shape.rotationSpeed * 360],
            scale: [1, 1.1, 0.9, 1],
          },
          transition: {
            duration: shape.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: shape.delay,
            times: [0, 0.33, 0.66, 1],
          },
        };

        // Render different shapes based on type
        if (shape.type === 3) {
          // Star shape
          return (
            <motion.svg
              key={shape.id}
              width={shape.size}
              height={shape.size}
              viewBox="-50 -50 100 100"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                fill: getShapeColor(),
                filter: 'blur(5px)',
              }}
              {...shapeProps}
            >
              <motion.path d={createStarPath(100)} />
            </motion.svg>
          );
        } else {
          // Regular shapes (circle, square, polygon)
          return (
            <motion.div
              key={shape.id}
              {...shapeProps}
              style={{
                position: 'absolute',
                width: shape.size,
                height: shape.size,
                backgroundColor: getShapeColor(),
                borderRadius: shape.type === 0 ? '50%' : shape.type === 1 ? '0%' : '30% 70% 70% 30% / 30% 30% 70% 70%',
                filter: 'blur(8px)',
                boxShadow: isDarkMode 
                  ? `0 0 ${shape.size / 4}px ${getShapeColor()}` 
                  : `0 0 ${shape.size / 5}px ${getShapeColor()}`,
              }}
            />
          );
        }
      })}

      {/* Additional floating particles - reduced quantity for better performance */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            opacity: 0,
          }}
          animate={{
            y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            backgroundColor: isDarkMode ? '#ffffff' : '#000000',
            borderRadius: '50%',
          }}
        />
      ))}
    </Box>
  );
};

export default AnimatedBackground; 