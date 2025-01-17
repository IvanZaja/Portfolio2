import { Link } from "react-router-dom"

function HayBarro() {
  return (
    <div className="w-full">
      <div className="flex flex-col mt-36 gap-2 pb-10 border-b-[1px]">
        <h1 className="text-6xl">HAY BARRO</h1>
        <h1 className="text-6xl">[ LIVE PROJECT ]</h1>
      </div>
      <div className="flex justify-between mt-10">
        <h1 className="w-1/3">[ ROLE ]</h1>
        <h1 className="w-1/3 text-left">Full Stack Developer</h1>
        <h1 className="w-1/3 text-right">LAUNCH LIVE PROJECT</h1>
      </div>
      <div className="flex justify-start mt-10">
        <h1 className="w-1/3">[ YEAR ]</h1>
        <h1 className="w-1/3 text-left">2025</h1>
      </div>
      <div className="flex justify-start mt-10">
        <h1 className="w-1/3">[ OVERVIEW ]</h1>
        <h1 className="w-1/3 text-left">I designed and developed Hay Barro, a project created for a local pottery school. I utilized JavaScript, Tailwind, and React for the frontend, and MongoDB for the backend. The project was supervised and approved by the client.</h1>
      </div>
      <div className="w-full h-[800px] bg-slate-200 mt-16">

      </div>
      <div className="flex justify-between my-10">
        <h1 className="w-1/3">[ GITHUB ]</h1>
        <a href="" className="w-1/3 text-left">Hay Barro Github</a>
        <Link to={'/'} className="w-1/3 text-right">MORE PROJECTS</Link>
      </div>
    </div>
  )
}

export default HayBarro