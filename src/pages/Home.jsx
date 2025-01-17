import { useState } from 'react';
import LeftBar from '../components/LeftBar/LeftBar'
import Works from '../components/Works/Works'

function Home() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };
  return (
    <div className='w-full border-t-[1px] mt-12'>
        <div className='flex w-full mt-8'>
            <LeftBar onSelectOption={handleOptionSelect}/>
            <Works selectedOption={selectedOption}/>
        </div>
    </div>
  )
}

export default Home