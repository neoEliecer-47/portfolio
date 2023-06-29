import githubIcon from '../../assets/card-icon/github2.png'
import demo from '../../assets/card-icon/demo2.png'



const CardProject = ({ img, name, feature, icon = null, subtitle = null, urlRepo, urlDemo }) => {
  return (
    <section className="bg-[#f1f1f1] relative overflow-hidden group shadow-xl shadow-gray-500 hover:shadow-2xl items-center rounded-lg">
      <img src={img} alt={name} className="rounded-lg h-56 group-hover:blur-[2px] transition-all duration-200 ease-out w-full object-cover"/>
      <div className="inset-0 absolute p-4 grid grid-cols-2 justify-end bg-black/60 opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out">
        <article className="flex flex-col">
       
          <div className="flex flex-col mb-4">
            <h2 className="font-bold text-white text-2xl">{name}</h2>
            {subtitle && (
              <h3 className="items-center text-blue-400">{subtitle}</h3>
            )}
          </div>
        <ol>
          <p className="text-gray-400">Features:</p>
          <li className="text-white leading-relaxed">{feature[0]}</li>
          <li className="text-white leading-relaxed">{feature[1]}</li>
          <li className="text-white leading-relaxed">{feature[2]}</li>
        </ol>
        </article>
        
        <article className="text-white flex flex-col items-end gap-3">
          <div className="flex gap-1">
            <img src={icon[0]} alt="" className="h-6 w-6"/>
            <img src={icon[1]} alt="" className="h-6 w-6"/>
            {icon.length > 2 &&  <img src={icon[2]} alt="" className="h-6 w-6"/>}
            {icon.length > 3 &&  <img src={icon[3]} alt="" className="h-6 w-6"/>}  
            {icon.length > 4 &&  <img src={icon[4]} alt="" className="h-6 w-6"/>}     
    
              
            
          </div>
          <div className="flex justify-end mt-20">
            <a href={urlRepo} className="cursor-pointer" target='_blanck'>
              <img src={githubIcon} alt="" className=''/>
            </a>
            <a href={urlDemo} className="cursor-pointer" target='_blanck'>
              <img src={demo} alt="" className=''/>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default CardProject