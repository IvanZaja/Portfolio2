import { Link } from "react-router-dom"
import './LeftBar.css'

function LeftBar({ onSelectOption, selectedOption }) {
    const handleOptionClick = (option) => {
        onSelectOption(option);
      };

  return (
    <div className='col-span-4'>
        <h1 style={{clipPath: 'inset(0px)'}}>[ FEATURED PROJECTS ]</h1>
        <ul className="my-[32px] flex flex-col gap-y-[2px] h-[100px] flex-wrap md:gap-y-[8px] md:h-[unset] lg:gap-y-[10px]">
          <li className="leading-none overflow-y-hidden block h-[18px] w-[180px] md:w-[205px] lg:w-[235px]" style={{clipPath: 'inset(0px)'}}>
            <button onClick={() => handleOptionClick('option1')}>
            {selectedOption === 'option1' && (
              <span className="bg-[#ffffff] indicator w-[8px] h-[8px] inline-block mb-[1px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h/[12px] lg:mb-[0px]"></span>
            )}
            {selectedOption === null && (
              <span className="bg-[#ffffff] indicator w-[8px] h-[8px] inline-block mb-[1px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h/[12px] lg:mb-[0px]"></span>
            )}
              <span className={`text ${selectedOption === 'option1' ? 'slide-in' : ''}`}>
                <span className="blockH2 inline-block text-[#bcbbbb] transition-colors duration-300 hover:text-white" >HAY BARRO</span>
              </span>
            </button>
          </li>
          <li className="leading-none overflow-y-hidden block h-[18px] w-[180px] md:w-[205px] lg:w-[235px]" style={{clipPath: 'inset(0px)'}}>
            <button onClick={() => handleOptionClick('option2')}>
            {selectedOption === 'option2' && (
              <span className="bg-[#ffffff] indicator w-[8px] h-[8px] inline-block mb-[1px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h/[12px] lg:mb-[0px]"></span>
            )}
              <span className={`text ${selectedOption === 'option2' ? 'slide-in' : ''}`}>
                <span className="blockH2 inline-block text-[#bcbbbb] transition-colors duration-300 hover:text-white" >ARTIO</span>
              </span>
            </button>
          </li>
          <li className="leading-none overflow-y-hidden block h-[18px] w-[180px] md:w-[205px] lg:w-[235px]" style={{clipPath: 'inset(0px)'}}>
            <button onClick={() => handleOptionClick('option3')}>
            {selectedOption === 'option3' && (
              <span className="bg-[#ffffff] indicator w-[8px] h-[8px] inline-block mb-[1px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h/[12px] lg:mb-[0px]"></span>
            )}
              <span className={`text ${selectedOption === 'option3' ? 'slide-in' : ''}`}>
                <span className="blockH2 inline-block text-[#bcbbbb] transition-colors duration-300 hover:text-white" >GAMERHUB</span>
              </span>
            </button>
          </li>
          <li className="leading-none overflow-y-hidden block h-[18px] w-[180px] md:w-[205px] lg:w-[235px]" style={{clipPath: 'inset(0px)'}}>
            <button onClick={() => handleOptionClick('option4')}>
            {selectedOption === 'option4' && (
              <span className="bg-[#ffffff] indicator w-[8px] h-[8px] inline-block mb-[1px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h/[12px] lg:mb-[0px]"></span>
            )}
              <span className={`text ${selectedOption === 'option4' ? 'slide-in' : ''}`}>
                <span className="blockH2 inline-block text-[#bcbbbb] transition-colors duration-300 hover:text-white" >POKESHOOTER</span>
              </span>
            </button>
          </li>
        </ul>
    </div>
  )
}

export default LeftBar