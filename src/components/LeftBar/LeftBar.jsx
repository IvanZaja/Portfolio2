import { Link } from "react-router-dom"

function LeftBar({ onSelectOption }) {
    const handleOptionClick = (option) => {
        onSelectOption(option);
      };

  return (
    <div className='w-1/3'>
        <h1>[ FEATURED PROJECTS ]</h1>
        <div className="flex flex-col my-8 gap-1">
            <h1 onClick={() => handleOptionClick('option1')} >HAY BARRO</h1>
            <Link to='/work/hay-barro'>ARTIO</Link>
            <Link to='/work/hay-barro'>GAMERHUB</Link>
            <Link to='/work/hay-barro'>POKESHOOTER</Link>
        </div>
    </div>
  )
}

export default LeftBar