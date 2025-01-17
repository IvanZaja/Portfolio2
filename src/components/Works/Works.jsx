import { Link } from "react-router-dom"
import HayBarroData from '../../assets/Projects/HayBarro.json'
import ArtioData from '../../assets/Projects/Artio.json'


function Works({ selectedOption }) {
  return (
    <div className='w-2/3'>
        {/* NULL */}
        <div className="flex justify-between">
          {selectedOption === null && <h1 className="uppercase">{HayBarroData.title}</h1>}
          {selectedOption === null && <Link to={'/work/hay-barro'}>VIEW PROJECT</Link>}
        </div>
        {selectedOption === null && <div className="my-8 h-[370px]"><img src={HayBarroData.image_banner} alt="hay-barro" className='w-full h-full object-cover'/></div>}

        {/* HAY BARRO */}
        <div className="flex justify-between">  
          {selectedOption === 'option1' && <h1 className="uppercase">{HayBarroData.title}</h1>}
          {selectedOption === 'option1' && <Link to={'/work/hay-barro'}>VIEW PROJECT</Link>}
        </div>  
        {selectedOption === 'option1' && <div className="my-8 h-[370px]"><img src={HayBarroData.image_banner} alt="hay-barro" className='w-full h-full object-cover'/></div>}

        {/* ARTIO */}
        <div className="flex justify-between">  
          {selectedOption === 'option2' && <h1 className="uppercase">{ArtioData.title}</h1>}
          {selectedOption === 'option2' && <Link to={'/work/artio'}>VIEW PROJECT</Link>}
        </div>  
        {selectedOption === 'option2' && <div className="my-8 h-[370px]"><img src={ArtioData.image_banner} alt="hay-barro" className='w-full h-full object-cover'/></div>}
    </div>
  )
}

export default Works