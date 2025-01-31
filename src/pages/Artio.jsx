import { Link } from "react-router-dom"
import ArtioData from '../assets/Projects/Artio.json'
import BotBar from "../components/BotBar/BotBar"

function Artio() {
  return (
    <div className="mt-[42px] px-gutter md:mt-[78px] lg:mt-[121px]">
      <div className="">
        <h1 className="blockH1 mb-[4px] w-fit" style={{clipPath: "inset(0px);"}}>{ArtioData.title}</h1>
        <h2 className="blockH1 text-[#bcbbbb] w-fit" style={{clipPath: "inset(0px);"}}>[ {ArtioData.status} ]</h2>
        <div className="w-full bg-grey2 mt-[32px] h-[1px]"></div>
      </div>
      <div className="grid grid-cols-2 gap-x-columnGap mt-[32px] md:block">
        <div className="md:grid grid-cols-6 gap-x-columnGap">
          <h6 className="blockH2 mb-[8px] text-[#bcbbbb] md:col-span-2">[ ROLE ]</h6>
          <ul className="bodyCopy md:col-span-2">
            <li>{ArtioData.role}</li>
          </ul>
          <a href={ArtioData.link} target="_blank" rel="noreferrer" className="blockH2 hidden items-center gap-x-[8px] hoverLink md:col-span-2 md:flex md:justify-self-end">
            <span> LAUNCH LIVE PROJECT </span>
            <span className="bg-[#ffffff] w-[8px] h-[8px] inline-block mb-[1px] flashAnimation md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px]"></span>
          </a>
        </div>
        <div className="md:grid grid-cols-6 gap-x-columnGap md:mt-[32px]">
          <h6 className="blockH2 mb-[8px] text-[#bcbbbb] md:col-span-2">[ YEAR ]</h6>
          <h6 className="bodyCopy">{ArtioData.year}</h6>
        </div>
      </div>
      <div className="md:grid grid-cols-6 gap-x-columnGap md:mt-[32px]">
        <h6 className="blockH2 mt-[32px] mb-[8px] text-[#bcbbbb] md:mt-[0px] md:col-span-2">[ OVERVIEW ]</h6>
        <p className="bodyCopy md:col-span-3 lg:col-span-2">{ArtioData.overview}</p>
      </div>
      <a href={ArtioData.link} target="_blank" rel="noreferrer" className="blockH2 mt-[32px] flex items-center gap-x-[8px] md:hidden"> 
        <span> LAUNCH LIVE PROJECT </span>
        <span className="bg-[#ffffff] w-[8px] h-[8px] inline-block mb-[1px] flashAnimation md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px]"></span>
      </a>

      <section className="flex flex-col gap-y-5 mt-[32px] lg:my-[64px]">
        <section className="flex items-center justify-center">
          <img alt="Laptop on rock" loading="lazy" width="2440" height="1920" decoding="async" data-nimg="1" className="w-screen transition-opacity duration-700" src={ArtioData.image_1} style={{color: "transparent;"}}/>
        </section>
        <section className="flex items-center justify-center">
          <img alt="Submit design screenshot" loading="lazy" width="2440" height="1920" decoding="async" data-nimg="1" className="w-screen transition-opacity duration-700" src={ArtioData.image_2} style={{color: "transparent;"}}/>
        </section>
        <section className="flex items-center justify-center">
          <img alt="Mobile Mockup" loading="lazy" width="2440" height="1920" decoding="async" data-nimg="1" className="w-screen transition-opacity duration-700"  src={ArtioData.image_3} style={{color: "transparent;"}}/>
        </section>
        
      </section>
      <div className="flex justify-between my-10">
        <h1 className="w-1/3">[ GITHUB ]</h1>
        <a href={ArtioData.github} className="w-1/3 text-left">Artio&apos;s Github</a>
        <Link to={'/'} className="w-1/3 text-right">MORE PROJECTS</Link>
      </div>
      <BotBar />
    </div>
  )
}

export default Artio