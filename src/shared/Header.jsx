import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';

// react-icons
import { HiBars3 } from "react-icons/hi2";
import Drawer from '../mobile/Drawer';

// logo
// import Logo from '../../assets/images/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const [navState, setNavState] = useState(false);

    const onNavScroll = () => {
        if (window.scrollY > 40) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);
    }, []);

    return (
        <header className={`fixed bg-dark w-full flex items-center justify-center z-50 shadow-custom transition-all duration-300 ease-in-out ${navState ? 'backdrop-blur-lg bg-dark/60 h-[70px]' : 'h-20'}`}>
            <div className="container">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 bg-clip-text text-transparent bg-text-gradient font-bold text-4xl">
                        {/* <img src={Logo} alt="digity-logo" /> */}
                        FORID 2020
                    </Link>

                    {/* toggle button */}
                    <button onClick={toggleNavbar} className='block lg:hidden text-white'>
                        <HiBars3 className='text-4xl' />
                    </button>

                    {/* Navigation links */}
                    <div className='hidden lg:flex items-center gap-16'>
                        <Navigation />
                    </div>

                    {/* Responsive menu button */}
                    <Drawer isOpen={isOpen} toggle={toggleNavbar} />
                </nav>
            </div >
        </header >
    );
};

export default Header;