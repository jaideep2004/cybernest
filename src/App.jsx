import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AnimatedBackground from "./components/AnimatedBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

	return (
    <ThemeContextProvider>
      <Router>
        <Box sx={{ position: "relative", minHeight: "100vh" }}>
          <AnimatePresence mode="wait">
            {loading ? (
              <Loader key="loader" />
            ) : (
              <>
                <AnimatedBackground />
                <Navbar />
                <Box 
                  component="main" 
                  sx={{ 
                    position: "relative", 
                    zIndex: 1,
                    overflowX: "hidden",
                  }}
                >
                  <Routes>
                    <Route path="/" element={
                      <>
                        <Home />
                        <Box id="about-section" sx={{ position: "relative", zIndex: 2 }}>
                          <About />
                        </Box>
                        <Box id="projects-section" sx={{ position: "relative", zIndex: 2 }}>
                          <Projects />
                        </Box>
                        <Box id="team-section" sx={{ position: "relative", zIndex: 2 }}>
                          <Team />
                        </Box>
                        <Box id="contact-section" sx={{ position: "relative", zIndex: 2 }}>
                          <Contact />
                        </Box>
                      </>
                    } />
                  </Routes>
                </Box>
                <Footer />
              </>
            )}
          </AnimatePresence>
        </Box>
      </Router>
    </ThemeContextProvider>
	);
}

export default App;
