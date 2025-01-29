import { Link } from "react-router-dom"
import HayBarroData from '../../assets/Projects/HayBarro.json'
import ArtioData from '../../assets/Projects/Artio.json'
import GamerHubData from '../../assets/Projects/GamerHub.json'
import PokeshooterData from '../../assets/Projects/Pokeshooter.json'




function Works({ selectedOption }) {
  return (
    <div className='lg:col-span-8'>
      <div className='blockH2 mb-[16px] md:mb-[32px]'>
        {/* NULL */}
        <div className="flex justify-between mb-[16px] lg:mb-[32px]">
          {selectedOption === null && <h1 className="uppercase">{HayBarroData.title}</h1>}
          {selectedOption === 'option1' && <h1 className="uppercase">{HayBarroData.title}</h1>}
          {selectedOption === 'option2' && <h1 className="uppercase">{ArtioData.title}</h1>}
          {selectedOption === 'option3' && <h1 className="uppercase">{GamerHubData.title}</h1>}
          {selectedOption === 'option4' && <h1 className="uppercase">{PokeshooterData.title}</h1>}

          {selectedOption === null && <Link className="flex items-center gap-x-[8px] hoverLink" to={'/work/hay-barro'}>
            <span>VIEW PROJECT</span>
            <span className="bg-[#ffffff] w-[8px] h-[8px] inline-block mb-[1px] flashAnimation md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px]"></span>
          </Link>}
          {selectedOption === 'option1' && <Link className="flex items-center gap-x-[8px] hoverLink" to={'/work/hay-barro'}>
            <span>VIEW PROJECT</span>
            <span className="bg-[#ffffff] w-[8px] h-[8px] inline-block mb-[1px] flashAnimation md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px]"></span>
          </Link>}
          {selectedOption === 'option2' && <Link className="flex items-center gap-x-[8px] hoverLink" to={'/work/artio'}>
            <span>VIEW PROJECT</span>
            <span className="bg-[#ffffff] w-[8px] h-[8px] inline-block mb-[1px] flashAnimation md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px]"></span>
          </Link>}
          {selectedOption === 'option3' && <Link className="flex items-center gap-x-[8px] hoverLink" to={'/work/gamerhub'}>
            <span>VIEW PROJECT</span>
            <span className="bg-[#ffffff] w-[8px] h-[8px] inline-block mb-[1px] flashAnimation md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px]"></span>
          </Link>}
          {selectedOption === 'option4' && <Link className="flex items-center gap-x-[8px] hoverLink" to={'/work/pokeshooter'}>
            <span>VIEW PROJECT</span>
            <span className="bg-[#ffffff] w-[8px] h-[8px] inline-block mb-[1px] flashAnimation md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px]"></span>
          </Link>}
        </div>
        <div className="relative h-[calc(100svh-420px)] md:h-[calc(100vh-620px)] lg:h-[calc(100vh-361px)] overflow-hidden">
          {selectedOption === null && <div className="h-full absolute top-0 left-0 z-[2]"><img fetchPriority="high" width="1920" height="1920" decoding="async" data-nimg="1" className="object-cover h-full object-center transition-opacity duration-700" src={HayBarroData.image_banner} alt="hay-barro"/></div>}
          {selectedOption === 'option1' && <div className="h-full absolute top-0 left-0 z-[2]"><img fetchPriority="high" width="1920" height="1920" decoding="async" data-nimg="1" className="object-cover h-full object-center transition-opacity duration-700" src={HayBarroData.image_banner} alt="hay-barro"/></div>}
          {selectedOption === 'option2' && <div className="h-full absolute top-0 left-0 z-[2]"><img fetchPriority="high" width="1920" height="1920" decoding="async" data-nimg="1" className="object-cover h-full object-center transition-opacity duration-700" src={ArtioData.image_banner} alt="hay-barro"/></div>}
          {selectedOption === 'option3' && <div className="h-full absolute top-0 left-0 z-[2]"><img fetchPriority="high" width="1920" height="1920" decoding="async" data-nimg="1" className="object-cover h-full object-center transition-opacity duration-700" src={GamerHubData.image_banner} alt="hay-barro"/></div>}
          {selectedOption === 'option4' && <div className="h-full absolute top-0 left-0 z-[2]"><img fetchPriority="high" width="1920" height="1920" decoding="async" data-nimg="1" className="object-cover h-full object-center transition-opacity duration-700" src={PokeshooterData.image_banner} alt="hay-barro"/></div>}
        </div>
      </div>
    </div>
  )
}

export default Works