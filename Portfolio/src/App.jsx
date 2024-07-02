
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbat from './Components/Navbat'
import Home from './Components/Home'
import Social from './Components/Social'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Contact from './Components/Contact'

function App() {
  

  return (
    <>
       <Navbat/>
       <Home/>
      <About/>
      <Portfolio/>
      <Experience/> 
      <Contact/>

       <Social/>
    </>
  )
}

export default App
