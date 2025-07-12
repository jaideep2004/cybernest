import { useState, useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxContainer = ({ children, speed = 0.5, direction = 'up', ...props }) => {
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  
  const { scrollY } = useScroll();
  
  // Store element position and window height on mount and resize
  useEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(element.offsetTop);
      setClientHeight(window.innerHeight);
    };
    
    onResize();
    window.addEventListener('resize', onResize);
    
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);
  
  // Transform based on scroll position
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    direction === 'down' ? [-clientHeight * speed, clientHeight * speed] : [clientHeight * speed, -clientHeight * speed]
  );
  
  return (
    <Box ref={ref} sx={{ position: 'relative', overflow: 'hidden', ...props.sx }}>
      <motion.div style={{ y }} {...props}>
        {children}
      </motion.div>
    </Box>
  );
};

export default ParallaxContainer; 