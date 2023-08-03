// react-icons
import { TfiClose } from "react-icons/tfi";

import Navigation from '../shared/Navigation';

const Drawer = ({ isOpen, toggle }) => {
    return (
        <>
            <div style={isOpen ? { clipPath: 'circle(200% at 100% 0)' } : { clipPath: 'circle(0% at 100% 0)' }} className={`lg:hidden fixed bg-white origin-top-right text-dark w-[250px] h-screen top-0 right-0 z-50 px-6 transition-all duration-300 ease-in`}>

                {/* close button */}
                <button onClick={toggle} className='absolute top-0 right-0 p-5'>
                    <TfiClose />
                </button>

                <ul className='pt-16 flex flex-col gap-3'>
                    <Navigation />
                </ul>
            </div>
            {/* overlay */}
            <div onClick={toggle} className={`fixed lg:hidden w-full h-screen top-0 left-0 z-30 bg-blue bg-opacity-30 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}></div>
        </>
    );
};

export default Drawer;