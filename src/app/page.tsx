import Top from './components/Top'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Footer from './components/Footer'




export default function Page() {
  return (
    <section className='transition-all duration-300 scroll-smooth'>
      <Top/>
      <Navbar/>
      <Home/>
      <Projects/>
      <Footer/>
    </section>
  )
}
