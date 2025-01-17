import { Link } from "react-router-dom"

function LeftBar() {
  return (
    <div className='w-1/3'>
        <h1>[ FEATURED PROJECTS ]</h1>
        <div className="flex flex-col my-8 gap-1">
            <Link to='/work/hay-barro'>HAY BARRO</Link>
            <Link to='/work/hay-barro'>ARTIO</Link>
            <Link to='/work/hay-barro'>GAMERHUB</Link>
            <Link to='/work/hay-barro'>POKESHOOTER</Link>
        </div>
    </div>
  )
}

export default LeftBar