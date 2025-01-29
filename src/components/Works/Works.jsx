import { Link } from "react-router-dom"
import HayBarroData from '../../assets/Projects/HayBarro.json'
import ArtioData from '../../assets/Projects/Artio.json'
import GamerHubData from '../../assets/Projects/GamerHub.json'
import PokeshooterData from '../../assets/Projects/Pokeshooter.json'




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
        {selectedOption === 'option2' && <div className="my-8 h-[370px]"><img loading="lazy" src={ArtioData.image_banner} alt="hay-barro" className='w-full h-full object-cover'/></div>}

        {/* GAMERHUB */}
        <div className="flex justify-between">  
          {selectedOption === 'option3' && <h1 className="uppercase">{GamerHubData.title}</h1>}
          {selectedOption === 'option3' && <Link to={'/work/gamerhub'}>VIEW PROJECT</Link>}
        </div>  
        {selectedOption === 'option3' && <div className="my-8 h-[370px]"><img src={GamerHubData.image_banner} alt="hay-barro" className='w-full h-full object-cover'/></div>}

        {/* POKESHOOTER */}
        <div className="flex justify-between">  
          {selectedOption === 'option4' && <h1 className="uppercase">{PokeshooterData.title}</h1>}
          {selectedOption === 'option4' && <Link to={'/work/pokeshooter'}>VIEW PROJECT</Link>}
        </div>  
        {selectedOption === 'option4' && <div className="my-8 h-[370px]"><img src={PokeshooterData.image_banner} alt="hay-barro" className='w-full h-full object-cover'/></div>}
    </div>
  )
}

export default Works