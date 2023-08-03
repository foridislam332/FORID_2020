import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';

// react-icons
import { HiBars3 } from "react-icons/hi2";

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
        <header className={`fixed w-full py-3 lg:py-0 z-50 transition-all duration-300 ease-in-out ${navState ? 'shadow-lg bg-white' : 'shadow-lg lg:shadow-none bg-transparent'}`}>
            <div className="container">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 bg-clip-text text-transparent bg-text-gradient font-bold text-4xl">
                        {/* <img src={Logo} alt="digity-logo" /> */}
                        FORID 2020
                    </Link>

                    {/* toggle button */}
                    <button onClick={toggleNavbar} className='block lg:hidden text-black'>
                        <HiBars3 className='text-4xl' />
                    </button>

                    {/* Navigation links */}
                    <div className='hidden lg:flex items-center gap-16'>
                        <Navigation />
                        <button className='btn_primary'>
                            Download Resume
                        </button>
                    </div>

                    {/* Responsive menu button */}
                    {/* <Drawer isOpen={isOpen} toggle={toggleNavbar} /> */}
                </nav>
            </div >
        </header >
    );
};

export default Header;