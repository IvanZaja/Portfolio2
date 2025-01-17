import { Link } from "react-router-dom"

function TopBar() {
  return (
    <div className="flex w-full">
        <div className="w-1/3 text-left">
            <h1>IVAN SANZA</h1>
            <h1>[ FULL STACK DEVELOPER ]</h1>
        </div>
        <div className="flex justify-between w-2/3">
            <Link to={'/'}>WORK</Link>
            <h1>ABOUT</h1>
            <h1>CONTACT</h1>
            <h1>AVAILABLE FOR WORK</h1>
        </div>
    </div>
  )
}

export default TopBar