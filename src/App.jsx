import About from "./components/About/About"
import Cards from "./components/Cards/Cards"
import EyePage from "./components/Eye/EyePage"
import Navbar from "./components/Header/Navbar"
import LandingPage from "./components/LandingPage/LandingPage"
import Marquee from "./components/Marquee/Marquee"
import Projects from "./components/Projects/Projects"
import StartProject from "./components/StartProjcet/StartProject"
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-800">
       <Navbar/>
       <LandingPage/>
       <Marquee/>
       <About/>
       <EyePage/>
       <Projects/>
       <Cards/>
       <StartProject/>
      </div>
    </>
  )
}

export default App
