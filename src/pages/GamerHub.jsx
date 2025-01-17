import { Link } from "react-router-dom"
import GamerHubData from '../assets/Projects/GamerHub.json'

function GamerHub() {
  return (
    <div className="w-full">
      <div className="flex flex-col mt-36 gap-2 pb-10 border-b-[1px]">
        <h1 className="text-6xl uppercase">{GamerHubData.title}</h1>
        <h1 className="text-6xl uppercase">[ {GamerHubData.status} ]</h1>
      </div>
      <div className="flex justify-between mt-10">
        <h1 className="w-1/3">[ ROLE ]</h1>
        <h1 className="w-1/3 text-left">{GamerHubData.role}</h1>
        <a href={GamerHubData.link} className="w-1/3 text-right">LAUNCH LIVE PROJECT</a>
      </div>
      <div className="flex justify-start mt-10">
        <h1 className="w-1/3">[ YEAR ]</h1>
        <h1 className="w-1/3 text-left">{GamerHubData.year}</h1>
      </div>
      <div className="flex justify-start mt-10">
        <h1 className="w-1/3">[ OVERVIEW ]</h1>
        <h1 className="w-1/3 text-left">{GamerHubData.overview}</h1>
      </div>
      <div className="w-full h-[800px] bg-slate-200 mt-16">
        <img src={GamerHubData.image_1} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-between my-10">
        <h1 className="w-1/3">[ GITHUB ]</h1>
        <a href={GamerHubData.github} className="w-1/3 text-left">GamerHub&apos;s Github</a>
        <Link to={'/'} className="w-1/3 text-right">MORE PROJECTS</Link>
      </div>
    </div>
  )
}

export default GamerHub