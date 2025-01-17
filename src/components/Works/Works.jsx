import { Link } from "react-router-dom"

function Works() {
  return (
    <div className='w-2/3'>
        <div className="flex justify-between">
            <h1>HAY BARRO</h1>
            <Link to={'/work/hay-barro'}>VIEW PROJECT</Link>
        </div>
        <div className="my-8 h-[370px] bg-slate-50">

        </div>
    </div>
  )
}

export default Works