import { animateScroll } from 'react-scroll'
import UpIcon from '../assets/icons/UpIcon'

import github from '../assets/contact/github.png'
import linkedin from '../assets/contact/linkedin.png'



const Contact = () => {
  
const scrollTop = () => {
    animateScroll.scrollToTop()
}  
  
return (
    <footer className='relative bg-blue-950 mt-6 flex items-center justify-center gap-3 py-12' id='contact'>
        <a href="https://github.com/neoEliecer-47" target='_blank' rel='noreferrer'>
            <img src={github} alt="github" title="Go to Eliecer's Github page" className='h-16 w-16 lg:h-20 lg:w-20'/>
        </a>
        <a href="https://www.linkedin.com/in/eliecer-smora-22688a26a/" target='_blanck' rel='noreferrer'>
            <img src={linkedin} alt="linkedin" title="Go to Eliecer's LinkedIn page"  className='h-16 w-16 lg:h-20 lg:w-20'/>
        </a>
        <aside className=''>
        <button title='Go up' onClick={scrollTop} className='absolute p-1 hover:bg-gray-400 duration-500 bg-gray-200 top-2 rounded-lg right-2'>
            <UpIcon />
        </button>
        </aside>
    </footer>
  )
}

export default Contact