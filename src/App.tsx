import './App.css'
import './global.css';
import MainBanner from './components/MainBanner';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  return (
    <>
    <Header/>
    <MainBanner/>
    <About/>
    <ProjectSection/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
