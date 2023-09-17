import React from 'react'
import photography from './images/photography.png'
import photography_upper from './images/photography_upper.png'
import Arrow1 from './images/Arrow1.png'
import Footer from './components/Footer'
import Sponsors from './components/Sponsors'
import Awards from './components/Awards'
import Line from './components/Line'
import Offers from './components/Offers'
import Navbar from './components/Navbar'
import Wedding from './components/Wedding'
import Associate from './components/Associates'
import Services from './components/Servies'
// import Blogs from './components/Blogs'


const App = () => {
  return (
    <>
     <Navbar/>
     <Associate/>
     <Services/>
     {/* <Blogs/> */}
      <Wedding />
      <div className="flex justify-center content-center my-5 cursor-pointer">
        <div className="flex p-5" style={{
          background: '#DDF9FF', border: '0.2px solid #000000', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '7px', lineHeight: '32px'
        }}>
          <p className="text-xl">View more weddings</p>
          <img src={Arrow1} alt="" className="px-3" />
        </div>
      </div>
      <Line />
      <Offers />
      <Line />
      <Awards />
      <Sponsors />
      <div className="photography relative">
        <img src={photography} alt="" />
        <img src={photography_upper} alt="" className="photography-upper absolute  left-2/4" />
        <div className="absolute top-20 left-10  text-white sm:block hidden ">
          <p className="lg:text-5xl md:text-2xl sm:text-sm">ULTIMATE COURSE IN</p>
          <p className="lg:text-5xl md:text-2xl sm:text-sm">PHOTOGRAPHY</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App