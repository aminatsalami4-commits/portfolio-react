import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loading from './components/Loading'


const Home = React.lazy(() => import("./pages/Home"))
const Hero = React.lazy(() => import("./pages/Hero"))
const About = React.lazy(() => import("./pages/About"))
const Contact = React.lazy(() => import("./pages/Contact"))
const Portfolio = React.lazy(() => import("./pages/Portfolio"))
const Resume = React.lazy(() => import("./pages/Resume"))
const Services = React.lazy(() => import("./pages/Services"))

function App() {
  return (
    <div className='bg-image m-0' style={{minWidth: '100vh', backgroundImage: 'url(src/assets/steve-busch-DdV3gqDbwQ8-unsplash.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover', overflow: 'hidden'}}>
      <React.Suspense
        fallback={<div style={{width: "100%", height: "100vh"}}>
          <Loading />
        </div>}
      >
        <BrowserRouter>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 d-none d-lg-block">
                <Navbar />
              </div>

              <div className="col-12 col-lg-9">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/hero' element={<Hero />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/resume' element={<Resume />} />
                  <Route path='/services' element={<Services />} />
                </Routes>
                <Footer />
              </div>

            </div>
          </div>          
        </BrowserRouter>
      </React.Suspense>
    </div>
  )
}

export default App