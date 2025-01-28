
import './App.css'
import About from './Component/About'
import Buisiness from './Component/Buisiness'
import Footer from './Component/Footer'
import HeaderNav from './Component/HeaderNav'
import Hero from './Component/Hero'
import Manage from './Component/Manage'

import Navbar from './Component/Navbar'
import Reviews from './Component/Reviews'
import Services from './Component/Services'

function App() {


  return (
    <div className=''>
      <div className='max-w-[2000px]'>
        <HeaderNav />
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Buisiness />
        {/* <Reviews /> */}
        <Manage />
        <Footer />
      </div>
    </div>
  )
}

export default App
