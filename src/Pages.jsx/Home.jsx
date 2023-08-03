import React from 'react'
import About from '../Components/About';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';
import Stats from '../Components/Stats';

const Home = () => {
  return (
    <div>
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home