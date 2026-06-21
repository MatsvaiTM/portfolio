import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Certificates from "./components/Certifications";

function App() {
  return (
  <>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Education />
    <Certificates />
    <ExperienceTimeline />
    <Contact />
    <Footer />
  </>
  )
}

export default App