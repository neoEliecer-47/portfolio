import myphoto from '../assets/personal/fotoportfolio2.jpg'
import cvlogo from '../assets/personal/cvicon.png'
import cvpdf from  '../cv/CVEliecerDev.pdf'

const About = () => {
  return (
    <div className='flex flex-col bg-gray-100 mx-4 border-t-[3px] border-blue-500 md:border-green-400 lg:border-black py-6 px-4 rounded-lg md:w-[350px] md:mx-auto md:hover:bg-blue-50 shadow-lg hover:shadow-blue-300 md:hover:shadow-gray-400 duration-500 md:duration-500 transition-all md:transition-all ease-out' id="about">
      <div className="grid grid-cols-2 gap-[6px] h-44 md:h-48 md:w-[265px]">
      
      <img src={myphoto} alt="" className='h-[190px] w-56 md:h-[175px] md:w-[135px]  rounded-tl-lg'/>
      
     
     
        <p className='text-xs text-start w-[165px]'>Hi, this is Eliecer, I am passionate about software development and i got graduated as university technician in computer science.
        As self-taught, i have been 1+ year learning and developing software in MERN Stack, although I am into the software development's world for several years</p>
        
      
    </div>
      <button className='flex mt-6 md:mt-4 gap-2 p-1 items-center justify-center bg-blue-400 text-sm md:text-base border rounded-bl-lg rounded-br-lg hover:bg-blue-500 duration-500 transition-all text-white w-full'>
        <a href={cvpdf} className='flex gap-2' target='_blank'>
            View CV 
            <img src={cvlogo} alt="" className='w-6 h-6'/>
        </a>
      </button>
    </div>
  )
}

export default About