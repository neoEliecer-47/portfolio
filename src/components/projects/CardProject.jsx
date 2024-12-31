import githubIcon from "../../assets/card-icon/github2.png";
import demo from "../../assets/card-icon/demo2.png";
import { useLazyLoad } from "../../hooks/useLazyLoad";
import classNames from "classnames";
import TechIconProject from "../TechIconProject";
import { LazyLoadElements } from "../../hooks/LazyLoadElements";
import lazyStyles from "../../hooks/lazyLoadStyles.module.css";

const CardProject = ({
  img,
  name,
  feature,
  icon = null,
  subtitle = null,
  urlRepo,
  urlDemo,
  animation = null,
}) => {
  const { isVisible, refOneSingleElement: ref } = useLazyLoad();

  return (
    <LazyLoadElements lazyLoadFrom={lazyStyles.lazyFromProjects} lazyLoadTo={lazyStyles.lazyToProjects}>
      <section
        className={classNames(
          " bg-[#f1f1f1] relative h-full overflow-hidden group shadow-xl shadow-gray-500 hover:shadow-2xl items-center rounded-lg",
         
        )}
        ref={ref}
      >
        <img
          src={img}
          alt={name}
          className="rounded-lg h-56 group-hover:blur-[2px] transition-all duration-200 ease-out w-full object-cover aspect-auto"
        />
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
            <div className="flex gap-1 bg-white/20 p-1 rounded-lg">
              {icon.map((icon, index) => (
                <TechIconProject key={index} iconSrc={icon} />
              ))}
            </div>
            <div className="flex mt-20 gap-0">
              <a href={urlRepo} className="cursor-pointer " target="_blanck">
                <img src={githubIcon} alt="" className="p-0 m-0" />
              </a>
              <a href={urlDemo} className="cursor-pointer " target="_blanck">
                <img src={demo} alt="" className="p-0 m-0" />
              </a>
            </div>
          </article>
        </div>
      </section>
    </LazyLoadElements>
  );
};

export default CardProject;
