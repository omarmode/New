import  { useEffect, useState } from 'react'
import "./header.css";

export default function Header() {
 const[showModal , setshowModal]= useState(false)
 const[theme , setTheme]= useState(localStorage.getItem("currentMode")??"dark")

 useEffect(() => {
 if(theme === "light"){
  document.body.classList.remove("dark")
  document.body.classList.add("light")
 }else{
  document.body.classList.remove("light")
  document.body.classList.add("dark")
 }
 
 }, [theme])

  return (
    <header className='flex'>
      <button onClick={()=>setshowModal(true)} className='menu icon-menu flex'></button>
      <div></div>
      <nav>
       <ul className='flex'>
        <li><a href="">About</a></li>
        <li><a href="">Articles</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">contact</a></li>
       </ul>
      </nav>
      <button  onClick={()=>{
        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")
        setTheme(localStorage.getItem("currentMode"))
      }}>
        {theme === "dark" ? <span className='icon-moon-o'></span> : <span className='icon-sun'></span>}
      </button>

      {showModal && (<div className=" fixed">
        <ul className='modal'>
          <li><button className='icon-cancel' onClick={()=>setshowModal(false)}/></li>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Uses</a></li>
        </ul>
      </div>)}
    </header>
  )
}
