import { useEffect, useState } from 'react'
import Contact from './Components/4-contact/Contact';
import Header from './Components/1-header/Header';
import Hero from './Components/2-hero/Hero';
import Main from './Components/3-main/Main';
import Footer from './Components/5-footer/Footer';



 function App() {
const[scrollbutn , setScrollButn] =useState(false)


useEffect(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      setScrollButn(true);
    } else {
      setScrollButn(false);
    }
  });
}, []);
  return (
   <div className='container' id='up'>
   <Header/>
 
   <Hero/>
   <div className='divider'/>
   <Main/>
   <div className='divider'/>
   <Contact/>
   <div className='divider'/>
   <Footer/>


 <a style={{opacity: scrollbutn ? 1 : 0 , transition: "0.5s"}} href="#up">
  <button className= 'icon-arrow-thin-up scroll2top'></button>
  </a>
   
   </div>
  )
}

export default App
