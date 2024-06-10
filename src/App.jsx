import { useState } from "react"
import About from "./components/About/About"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Project from "./components/Project/Project"
import Title from "./components/Title/Title"
import VideoPlayer from "./VideoPlayer/VideoPlayer"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Skills from "./components/Skills/Skills"
import Photography from "./components/Photography/Photography"
import Testimonials from "./components/Testimonials/Testimonials"

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container">
        <Title subTitle= "Project" title = "My Projects" />
        <Project />
        <About setPlayState= {setPlayState} />
        <Title subTitle= "Skills" title = "My Skills" />
        <Skills />
        <Title subTitle= "Photography" title = "My Photos" />
        <Photography />
        <Title subTitle= "TESTIMONIALS" title = "What People Says" />
        <Testimonials />
        <Title subTitle= "Contact me" title = "Get in Touch" />
          <Contact />
          <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
