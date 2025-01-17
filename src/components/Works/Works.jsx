import { Link } from "react-router-dom"

function Works({ selectedOption }) {
  return (
    <div className='w-2/3'>
        {/* NULL */}
        <div className="flex justify-between">
          {selectedOption === null && <h1>HAY BARRO</h1>}
          {selectedOption === null && <Link to={'/work/hay-barro'}>VIEW PROJECT</Link>}
        </div>
        {selectedOption === null && <div className="my-8 h-[370px]"><img src="https://images.unsplash.com/photo-1631360344189-7b0b7d0c0b1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="hay-barro" className='w-full h-full object-cover'/></div>}

        {/* HAY BARRO */}
        <div className="flex justify-between">  
          {selectedOption === 'option1' && <h1>HAY BARRO</h1>}
          {selectedOption === 'option1' && <Link to={'/work/hay-barro'}>VIEW PROJECT</Link>}
        </div>  
        {selectedOption === 'option1' && <div className="my-8 h-[370px]"><img src="https://images.unsplash.com/photo-1631360344189-7b0b7d0c0b1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="hay-barro" className='w-full h-full object-cover'/></div>}
    </div>
  )
}

export default Works