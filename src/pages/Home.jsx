import { useState } from 'react';
import LeftBar from '../components/LeftBar/LeftBar'
import Works from '../components/Works/Works'
import BotBar from '../components/BotBar/BotBar';

function Home() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };
  return (
    <div className=''>
        <div className='mx-gutter pt-[32px] mt-[10px] border-t-[1px] h-[calc(100svh-105px)] flex flex-col justify-between md:mt-[32px] md:h-[calc(100svh-212px)] lg:grid lg:grid-cols-12 lg:gap-x-columnGap lg:mt-[32px] lg:h-[calc(100vh-511px)]'>
            <LeftBar onSelectOption={handleOptionSelect} selectedOption={selectedOption}/>
            <Works selectedOption={selectedOption}/>
            <BotBar />
        </div>
    </div>
  )
}

export default Home