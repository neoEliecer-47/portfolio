import { useRef, useState } from 'react'
import { Link } from 'react-scroll'
import ModalMobile from './ModalMobile'
import MenuIcon from '../assets/icons/MenuIcon'
import eLogo from '../assets/personal/ehover.png'


const Header = () => {
  
  const [modal, setModal] = useState(false)
  const refModal = useRef(null)

  
 /* const closeModalAnimation = () => {
    if(!modal){
      setTimeout(() => {git remote -v
        refModal.current.classList.add("-translate-y-full")
      }, 60);
    }
  }*/
  
  return (
    <div className='relative flex justify-between gap-2 py-5 px-4  bg-[url("./assets/bg/mobile1.png")] bg-cover bg-center md:bg-[url("./assets/bg/wp9109672.jpg")] md:bg-cover md:bg-center '>
        <p className='hidden md:flex md:bg-black md:rounded-xl'>
          <img src={eLogo} alt="" className='h-full w-full' />
        </p>
        <button onClick={() => setModal(!modal)} className='relative rounded-lg hover:bg-blue-500 duration-500 p-1 bg-blue-400 flex md:hidden px-4'>
            <MenuIcon />
            {modal && (
              <ModalMobile modal={modal} setModal={setModal} />
            )}
        </button>
        <section className='hidden md:flex bg-blue-400 py-2 px-4 rounded-lg bg-opacity-40 items-center'>
          

          <Link 
            to='projets' 
            className='cursor-pointer rounded-tl-lg rounded-bl-lg hover:bg-white py-2 px-4 duration-500 text-white font bold hover:text-gray-800'
            smooth={true}
            duration={700}  
          >
            Projets
          </Link>

          <Link 
            to='skills' 
            className='cursor-pointer hover:bg-white py-2 px-4 duration-500 text-white font bold hover:text-gray-800'
            smooth={true}
            duration={700}  
          >
            Skills
          </Link>

          <Link 
            to='contact' 
            className='cursor-pointer rounded-tr-lg rounded-br-lg hover:bg-white py-2 px-4 duration-500 text-white font bold hover:text-gray-800'
            smooth={true}
            duration={700}  
          >
            Contact
          </Link>
        </section>
    </div>
  )
}

export default Header