import myphoto from '../assets/personal/fotoportfolio2.jpg'
import cvlogo from '../assets/personal/cvicon.png'

const About = () => {
  return (
    <div className='flex flex-col bg-gray-100 mx-4 border-t-[3px] border-blue-500 md:border-green-400 lg:border-black py-6 px-4 rounded-lg md:w-[350px] md:mx-auto md:hover:bg-blue-50 shadow-lg hover:shadow-blue-300 md:hover:shadow-gray-400 duration-500 md:duration-500 transition-all md:transition-all ease-out' id="about">
      <div className="grid grid-cols-2 gap-2 h-44 md:h-44">
      
      <img src={myphoto} alt="" className='h-[190px] w-56 md:h-[175px] md:w-[140px]  rounded-tl-lg'/>
      
     
     
        <p className='text-xs text-start'>Hi, this is Eliecer, I'm passionate about code and technology and I graduated as university technician in computer science.
        As autodidact, i've been 1+ year learning and developing software in MERN Stack, although I've been in the development world for several years</p>
        
      
    </div>
      <button className='flex mt-6 md:mt-4 gap-2 p-1 items-center justify-center bg-blue-400 text-sm md:text-base border rounded-bl-lg rounded-br-lg hover:bg-blue-500 duration-500 transition-all text-white w-full'>
        View CV 
        <img src={cvlogo} alt="" className='w-8 h-8'/>
      </button>
    </div>
  )
}

export default About