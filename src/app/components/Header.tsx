'use client'
import React, {useState} from 'react'
import {FaTimes, FaBars } from 'react-icons/fa'

const Header = () => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  const Links = [
    { name: 'Home', link: 'Home' },
    { name: 'Serviços', link: 'Services' },
    { name: 'Preços', link: 'Prices' },
    { name: 'FAQ', link: 'FAQ' },
    { name: 'Contato', link: 'Contact' },
  ];

  const scrollToSection = (event:any, targetId:any) => {
    event.preventDefault();

    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setOpen(false); // Feche o menu após clicar no link
  };

  return (
    <header className='fixed top-0 left-0 flex flex-col w-full h-16 py-[16px]  bg-slate-50'>
        <div className='flex'>
          <div className='flex items-center justify-between mx-36  w-full'>
            <div className=' font-bold text-[24px] text-[#82498C]'>Pet</div>
            <div className="text-3x1 text-white absolute top-6 right-8 md:top-5 flex justify-center cursor-pointer md:hidden">
          <button className='text-black' onClick={toggleMenu}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul
          className={` md:flex md:items-center md:pb-0 pb-4 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-12 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
           <ul className={`md:flex md:items-center text-purple-700 md:pb-0 pb-4 absolute md:static bg-slate-50 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`} >
           {Links.map((Link) => (
          <li key={Link.name} className="md:ml-8 text-x1 md:my-0 my-7">
            <a
              href={`#${Link.link}`}
              className="hover:text-blue-700 duration-500"
              onClick={(e) => scrollToSection(e, Link.link)}
            >
              {Link.name}
            </a>
          </li>
        ))}
            </ul>
        </ul>
          </div>
        </div>
        <hr className='mt-3 mx-28'/>
        
      </header>
  )
}

export default Header