import React from 'react'
import Hero from "./Hero.jsx"
import About from "./About.jsx"
import Resume from "./Resume.jsx"
import Portfolio from "./Portfolio.jsx"
import Services from "./Services.jsx"
import Contact from "./Contact.jsx"

const Home = () => {
  return (
    <>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>
    </>
  )
}

export default Home