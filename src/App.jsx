import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopBar from './components/TopBar/TopBar'
import Home from './pages/Home'
import HayBarro from './pages/HayBarro'
import BotBar from './components/BotBar/BotBar'
import About from './pages/About'
import Artio from './pages/Artio'
import GamerHub from './pages/GamerHub'
import Pokeshooter from './pages/Pokeshooter'

function App() {

  return (
    <>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work/hay-barro' element={<HayBarro />} />
        <Route path='/work/artio' element={<Artio />} />
        <Route path='/work/gamerhub' element={<GamerHub />} />
        <Route path='/work/pokeshooter' element={<Pokeshooter />} />
      </Routes>
      <BotBar />
    </>
  )
}

export default App
