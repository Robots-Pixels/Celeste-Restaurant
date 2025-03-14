import React, { useEffect, useState } from 'react'
import Sidemenu from './Sidemenu'
import { Link } from 'react-router-dom'

import {FaBars} from "react-icons/fa"
import ShinyButton from './ShinyButton';
import MiniAboutModal from './MiniAboutModal';

export default function Header() {
    const [clicked, setClicked] = useState(false);
    const [transformMini, setTransformMini] = useState("500px");
    const [transformSide, setTransformSide] = useState("-700px");
    const [isSmall, setIsSmall] = useState(false);

    const toggleSideMenu = () => {
        if (isSmall) {
            setClicked((prev) => !prev);
            setTransformSide((prev) => (prev === "0px" ? "-700px" : "0px"));
        }
    };
    
    const toggleMiniAbout = () => {
        if (!isSmall) {
            setClicked((prev) => !prev);
            setTransformMini((prev) => (prev === "0px" ? "500px" : "0px"));
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmall(window.innerWidth < 770);
            console.log(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = () => {
            console.log(clicked);
            if (!clicked){
                setTransformSide("-700px");
                setTransformMini("500px");
            }
            setClicked(false);
        }

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        }
    }, [clicked]);

  return (

    <div className='relative'>

        <div className={`absolute left-0 bg-black ${clicked && isSmall ? "opacity-70" : "opacity-0"} inset-0  w-full h-[100vh]`} style={{transition: "opacity 0.8s"}}>
            
        </div>

        {isSmall &&
            (
            <div className={`absolute top-0 w-full left-0 z-4`} style={{transform:`translateX(${transformSide})`, transition:"all 0.8s"}}>
                <Sidemenu handleClick={() => {toggleSideMenu()}}/>
            </div>
            )
        }
        
        <header className={`py-5 md:py-7 relative overflow-x-clip`} style={{transition: "all 0.8s"}}>

            <div className='max-w-3xl md:max-w-6xl mx-auto px-4 md:px-8'>

                <div className='flex justify-between'>
                    
                    <div className='logo text-4xl sm:text-5xl z-3'>
                        <Link to={"/"} className=''>Celeste</Link>
                    </div>

                    <div className='nav-menu-links items-center hidden md:flex z-3'>
                        <div className='flex items-center justify-between gap-12 h-full'>
                            <div className='h-full flex items-center justify-center cursor-pointer nav-link'>
                                <Link to={"/"}>HOME</Link>
                            </div>

                            <div className='h-full flex items-center justify-center cursor-pointer nav-link'>
                                <Link to={"/about"}>ABOUT</Link>
                            </div>

                            <div className='h-full flex items-center justify-center cursor-pointer nav-link'>
                                <Link to={"/menu"}>MENU</Link>
                            </div>

                            <div className='h-full flex items-center justify-center cursor-pointer nav-link'>
                                <Link to={"/CONTACT"}>CONTACT</Link>
                            </div>
                        </div>
                    </div>

                    <div className='nav-cta-links flex items-center z-3'>
                        <div className='flex items-center justify-between gap-6'>

                        <div className='hidden md:block'>
                            <ShinyButton destination={"/reservation"}>
                                BOOK A TABLE
                            </ShinyButton>
                        </div>

                            
                            <button
                            onClick={isSmall ? toggleSideMenu : toggleMiniAbout}
                            className='text-2xl text-[#cd9d4b] relative z-10'>
                                <FaBars/>
                            </button>

                        </div>
                    </div>

                </div>
                
            </div>

            {   
            !isSmall 
                &&
                <div className={`absolute top-[100%] right-0 z-4`} style={{transform: `translateX(${transformMini})`, transition:"all 0.8s"}}>
                    <MiniAboutModal handleClick={() => toggleMiniAbout()}/>
                </div>
            }

        </header>

    </div>
  )
}
