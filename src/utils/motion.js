export const scrollToSection = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    // Calculate position with a slight offset for navbar
    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
    
    // Use requestAnimationFrame for smoother scrolling
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
    
    // Update URL hash without jumping
    setTimeout(() => {
      history.pushState(null, null, `#${elementId}`);
    }, 800);
  }
};

export const getActiveSection = () => {
  const sections = document.querySelectorAll('section[id]');
  let scrollY = window.pageYOffset;
  let windowHeight = window.innerHeight;
  let documentHeight = document.body.clientHeight;
  
  // Check if we're at the bottom of the page
  if (scrollY + windowHeight >= documentHeight - 50) {
    // Find the last section
    const lastSection = sections[sections.length - 1];
    if (lastSection) {
      return lastSection.getAttribute('id');
    }
  }
  
  // Check each section
  let currentSection = '';
  
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150; // Increased threshold
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      currentSection = sectionId;
    }
  });
  
  return currentSection;
};

export const observeSection = (callback) => {
  const handleScroll = () => {
    const activeSection = getActiveSection();
    if (activeSection) {
      callback(activeSection);
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}; 