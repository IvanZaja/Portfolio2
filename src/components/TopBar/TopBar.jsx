import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './TopBar.css'; // Asegúrate de importar el archivo CSS

const TopBar = () => {
  const [selectedOption, setSelectedOption] = useState('WORK');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') {
      setSelectedOption('ABOUT');
    } else {
      setSelectedOption('WORK');
    }
  }, [location.pathname]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setMenuOpen(false); // Cierra el menú al seleccionar una opción
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="top-bar">
      <header className="px-gutter pb-[24px] text-[#bcbbbb] transition-colors duration-500 flex justify-between items-start relative z-[4] md:grid md:grid-cols-6 gap-x-columnGap md:pb-[32px] lg:grid-cols-12">
        <div className="col-span-2 lg:col-span-4">
          <Link className="w-fit" to="/">
            <h6 className="blockH2 mb-[4px] w-fit text-white" style={{clipPath: "inset(0px)"}}>
              IVAN SANZA
            </h6>
            <h6 className="blockH2 text-[#bcbbbb] transition-colors duration-500 w-fit" style={{clipPath: "inset(0px)"}}>
              [ FULL STACK DEVELOPER ]
            </h6>
          </Link>
        </div>
        <button className="blockH2 h-[15px] overflow-hidden md:hidden" onClick={toggleMenu}>
            <span className="absolute top-7 right-1 text-white" style={{transform: "none"}}>
              <span className=''>{menuOpen ? '' : '[ MENU ]'}</span>
            </span>
          </button>
        {menuOpen && (
          <div className="mobile-menu-overlay">
          <button className="blockH2 h-[15px] overflow-hidden md:hidden" onClick={toggleMenu}>
            <span className="absolute top-12 right-12" style={{transform: "none"}}>
              <span className='text-3xl'>{menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg> : ''}</span>
            </span>
          </button>
              <ul className="flex flex-col items-center justify-center h-full text-white">
                <li className={`blockH2 mb-4 ${menuOpen ? 'z-10' : ''}`}>
                  <Link className={`${menuOpen ? 'z-10' : ''}`} to="/" onClick={() => handleOptionClick('WORK')}>
                    <div className="relative">
                      {selectedOption === 'WORK' && (
                        <span className="absolute left-[-10px] fade-in text-white" style={{opacity: 1}}>[</span>
                      )}
                      <span className="inline-block h-[30.9px]" style={{clipPath: "inset(0px)"}}>
                        <button className={`blockH2 inline-block ${selectedOption === 'WORK' ? 'text-white' : 'text-[#bcbbbb]'} hover:text-white`}>
                          WORK
                        </button>
                      </span>
                      {selectedOption === 'WORK' && (
                        <span className="absolute right-[-10px] fade-in text-white" style={{opacity: 1}}>] </span>
                      )}
                    </div>
                  </Link>
                </li>
                <li className="blockH2 mb-4">
                  <Link to="/about" onClick={() => handleOptionClick('ABOUT')}>
                    <div className="relative">
                      {selectedOption === 'ABOUT' && (
                        <span className="absolute left-[-10px] fade-in text-white" style={{opacity: 1}}>[</span>
                      )}
                      <span className="inline-block h-[30.9px]" style={{clipPath: "inset(0px)"}}>
                        <button className={`blockH2 inline-block ${selectedOption === 'ABOUT' ? 'text-white' : 'text-[#bcbbbb]'} hover:text-white`}>
                          ABOUT
                        </button>
                      </span>
                      {selectedOption === 'ABOUT' && (
                        <span className="absolute right-[-10px] fade-in text-white" style={{opacity: 1}}>] </span>
                      )}
                    </div>
                  </Link>
                </li>
                <li className="blockH2 mb-4">
                  <a className='text-[#bcbbbb]' href="mailto:sayonbra@gmail.com">
                    CONTACT
                  </a>
                </li>
                <li className="blockH2">
                  <a className='text-[#bcbbbb]' href="mailto:sayonbra@gmail.com">
                    AVAILABLE FOR WORK
                  </a>
                </li>
              </ul>
            
          </div>
        )}
        <nav className="hidden md:block md:col-span-4 lg:col-span-8">
          <ul className="justify-between md:flex">
            <li className="blockH2">
              <Link to="/" onClick={() => handleOptionClick('WORK')}>
                <div className="relative">
                  {selectedOption === 'WORK' && (
                    <span className="absolute left-[-10px] fade-in text-white" style={{opacity: 1}}>[</span>
                  )}
                  <span className="inline-block h-[30.9px]" style={{clipPath: "inset(0px)"}}>
                    <button className={`blockH2 inline-block ${selectedOption === 'WORK' ? 'text-white' : 'text-[#bcbbbb]'} hover:text-white`}>
                      WORK
                    </button>
                  </span>
                  {selectedOption === 'WORK' && (
                    <span className="absolute right-[-10px] fade-in text-white" style={{opacity: 1}}>] </span>
                  )}
                </div>
              </Link>
            </li>
            <li className="blockH2">
              <Link to="/about" onClick={() => handleOptionClick('ABOUT')}>
                <div className="relative">
                  {selectedOption === 'ABOUT' && (
                    <span className="absolute left-[-10px] fade-in text-white" style={{opacity: 1}}>[</span>
                  )}
                  <span className="inline-block h-[30.9px]" style={{clipPath: "inset(0px)"}}>
                    <button className={`blockH2 inline-block ${selectedOption === 'ABOUT' ? 'text-white' : 'text-[#bcbbbb]'} hover:text-white`}>
                      ABOUT
                    </button>
                  </span>
                  {selectedOption === 'ABOUT' && (
                    <span className="absolute right-[-10px] fade-in text-white" style={{opacity: 1}}>] </span>
                  )}
                </div>
              </Link>
            </li>
            <li className="blockH2">
              <a href="mailto:sayonbra@gmail.com">
                <span className="inline-block h-[30.9px]" style={{clipPath: "inset(0px)"}}>
                  <span className="blockH2 text-[#bcbbbb] inline-block relative hover:text-white">CONTACT</span>
                </span>
              </a>
            </li>
            <li className="blockH2">
              <a href="mailto:sayonbra@gmail.com">
                <span className="inline-block h-[30.9px]" style={{clipPath: "inset(0px)"}}>
                  <span className="blockH2 text-[#bcbbbb] inline-block relative hover:text-white">AVAILABLE FOR WORK</span>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default TopBar;