import { Link } from 'react-scroll'
import CloseIcon from '../assets/icons/CloseIcon'
import { useRef } from 'react'

const Modal = ({ setModal ,modal, className = null }) => {
  
  const refModal = useRef(null)

  

    if(modal){
      setTimeout(() => {
        refModal.current.classList.remove("-translate-x-full")
      }, 50);
    }
    
    


  
  
  
  
  return (
    <div ref={refModal} className='absolute shadow-2xl shadow-gray-500 bg-opacity-80  duration-300 transform -translate-x-full transition-transform flex flex-col top-12 left-0 z-10 md:hidden h-52 rounded-lg w-36  bg-blue-300 '>
              <CloseIcon onClick={() => setModal(false)}/>
              
              

              <Link
                to='projets'
                smooth={true}
                duration={700}
                className='mt-10 p-2 bg-white rounded-tl-lg rounded-tr-lg hover:bg-blue-500 hover:text-white duration-500 mx-4'
                
              >
                My Projects
              </Link>

              <Link
                to='skills'
                smooth={true}
                duration={700}
                className='p-2 bg-white hover:bg-blue-500 hover:text-white duration-500 mx-4 shadow-xl'
              >
                Skills
              </Link>

              <Link
                to='contact'
                smooth={true}
                duration={700}
                className='p-2 bg-white rounded-bl-lg rounded-br-lg hover:bg-blue-500 hover:text-white duration-500 mx-4 shadow-xl'
              >
                Contact
              </Link>
    </div>
  )
}

export default Modal