import { Link } from "react-router-dom"
import PokeshooterData from '../assets/Projects/Pokeshooter.json'

function Pokeshooter() {
  return (
    <div className="w-full">
      <div className="flex flex-col mt-36 gap-2 pb-10 border-b-[1px]">
        <h1 className="text-6xl uppercase">{PokeshooterData.title}</h1>
        <h1 className="text-6xl uppercase">[ {PokeshooterData.status} ]</h1>
      </div>
      <div className="flex justify-start mt-10">
        <h1 className="w-1/3">[ ROLE ]</h1>
        <h1 className="w-1/3 text-left">{PokeshooterData.role}</h1>
      </div>
      <div className="flex justify-start mt-10">
        <h1 className="w-1/3">[ YEAR ]</h1>
        <h1 className="w-1/3 text-left">{PokeshooterData.year}</h1>
      </div>
      <div className="flex justify-start mt-10">
        <h1 className="w-1/3">[ OVERVIEW ]</h1>
        <h1 className="w-1/3 text-left">{PokeshooterData.overview}</h1>
      </div>
      <div className="w-full h-[800px] bg-slate-200 mt-16">
        <img src={PokeshooterData.image_1} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-between my-10">
        <h1 className="w-1/3">[ GITHUB ]</h1>
        <a href={PokeshooterData.github} className="w-1/3 text-left">Pokeshooter&apos;s Github</a>
        <Link to={'/'} className="w-1/3 text-right">MORE PROJECTS</Link>
      </div>
    </div>
  )
}

export default Pokeshooter