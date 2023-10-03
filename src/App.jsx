

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Main from './components/MainPage'
import Skills from './components/Skills'

const app = () => {

  

  
  return (
  
      
      
      <div className='min-h-screen w-full flex flex-col bg-[#eaeaf1]'>
        <Header />
        <Main />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    
  )
}

export default app
