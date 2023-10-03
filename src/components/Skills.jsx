import jwtLogo from '../assets/logos/jwt.png'
import socketIoLogo from '../assets/logos/socket-io.png'
import postmanLogo from '../assets/logos/postman.png'
import mongooseLogo from '../assets/logos/mongoosejs.png'
import mysqlLogo from '../assets/logos/mysql.png'
import postgreLogo from '../assets/logos/postgree.png'
import b2 from '../assets/some-skills/b4.png'
import uno from '../assets/some-skills/1.png'

import htmllogo from '../assets/some-skills/html.png'
import jslogo from '../assets/some-skills/js.png'
import vitelogo from '../assets/some-skills/vitelogo.png'
import tailwindlogo from '../assets/some-skills/tailwind.png'



const Skills = () => {
  return (

    <div className='flex flex-col md:flex-row md:max-w-[940px] md:mx-auto gap-1 mx-4' id='skills'>
        <div className=" border-4 px-12 py-6 bg-blue-500 relative overflow-hidden group shadow-xl shadow-gray-500 hover:shadow-2xl items-center rounded-full">
          <h1 className='text-white font-bold text-center text-sm'>Backend technologies with which i have also worked with:</h1>
          <article className="inset-0 absolute p-4 flex gap-1 items-center justify-center bg-[#3b3d3d] opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out">
              <img src={jwtLogo} alt="" className='w-9 h-9 lg:w-12 lg:h-12' title='JSON Web Tokens'/>
              <img src={socketIoLogo} alt="" className='w-9 h-9 lg:w-12 lg:h-12' title='Socket.io'/>
              <img src={postmanLogo} alt="" className='w-10 h-9 lg:w-14 lg:h-12' title='Postman API'/>
              <img src={mysqlLogo} alt="" className='w-9 h-9 lg:w-12 lg:h-12' title='MySQL'/>
              <img src={mongooseLogo} alt="" className='w-9 h-9 lg:w-12 lg:h-12' title='Mongoose js'/>
              <img src={postgreLogo} alt="" className='w-9 h-9 lg:w-12 lg:h-12' title='PostgreSQL'/>
          </article>
        </div>

      <section className='flex mx-4'>
      
        <div className='border-4 px-11 md:px-24 py-6 group rounded-full relative overflow-hidden'>
          <div className='h-2 bg-blue-300 absolute inset-0 transition-all duration-500 ease-out group-hover:h-full'></div>
          <span className='relative text-blue-400 group-hover:text-white'>
            <h2 className='text-center'>Frontend</h2>
            <figure className='flex gap-1 items-center justify-center'>
              <img src={htmllogo} alt=""  className='h-9 w-9 md:h-10 md:w-10' title='HTML'/>
              <img src={jslogo} alt="" className='h-9 w-9 md:h-10 md:w-10' title='JavaScript'/>
              <img src={tailwindlogo} alt="" className='h-9 w-9 md:h-10 md:w-10' title='Tailwind CSS'/>
              <img src={vitelogo} alt="" className='h-9 w-9 md:h-10 md:w-10' title='Vite'/>
            </figure>
          </span>
        </div>
          {   /* <div className='flex items-center justify-center md:justify-around w-24 mb-3'>
               
              </div>*/}

        <div className='border-4 bg-blue-400 px-7 md:px-12 py-6 group relative rounded-full overflow-hidden' title='English level'>
          <div className='h-2 bg-white absolute inset-0 transition-all duration-500 ease-out group-hover:h-full'></div>
          <span className='relative items-center text-gray-200 group-hover:text-blue-400 flex flex-col'>
              <h2 className='text-center mb-1'>English</h2>
              <figure className='flex gap-1 items-center justify-center'>
                <img src={b2} alt="" className='h-8 w-8'/>
                <img src={uno} alt="" className='h-8 w-8'/>
              </figure>
          </span>
        </div>
      
      </section>
    </div>
   
    
  )
}

export default Skills