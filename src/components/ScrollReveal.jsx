import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollReveal = ({ 
  children, 
  threshold = 0,
  transition = { 
    type: 'spring', 
    duration: 0.8, 
    bounce: 0.4 
  },
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  ...props 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: threshold });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 