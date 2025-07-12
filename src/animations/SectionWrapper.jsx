import { motion } from 'framer-motion';
import { staggerContainer } from './variants';

export const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        style={{ 
          position: 'relative',
          zIndex: 0,
          width: '100%'
        }}
      >
        <span id={idName} style={{ display: 'block', position: 'absolute', top: '-100px', visibility: 'hidden' }}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper; 