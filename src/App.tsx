import './App.css'
import './global.css';
import MainBanner from './components/MainBanner';
import ProjectSection from './components/ProjectSection';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import SkillSection from './components/SkillSection';

function App() {

  return (
    <>
    <Header/>
    <MainBanner/>
    <About/>
    <ProjectSection/>
    <SkillSection/>
    <Footer/>
    </>
  )
}

export default App
