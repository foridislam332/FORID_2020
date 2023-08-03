import { Link } from 'react-router-dom';
import SubMenu from '../SubMenu';

// react-icons
import { TfiClose } from "react-icons/tfi";
import { AiFillCaretUp } from 'react-icons/ai';
import SubActiveLink from '../SubActiveLink';

const Drawer = ({ isOpen, toggle }) => {
    return (
        <>
            <div style={isOpen ? { clipPath: 'circle(200% at 100% 0)' } : { clipPath: 'circle(0% at 100% 0)' }} className={`lg:hidden fixed bg-dark-text origin-top-right text-white w-[250px] h-screen top-0 right-0 z-50 px-6 transition-all duration-300 ease-in`}>

                {/* close button */}
                <button onClick={toggle} className='absolute top-0 right-0 p-5'>
                    <TfiClose />
                </button>

                <ul className='pt-16 flex flex-col gap-3'>
                    <li>
                        <Link to='/' onClick={toggle}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='relative drop_down pb-2' to='javascript:void(0)'>
                            <span>Pages</span>
                            <AiFillCaretUp className='down_icon relative inline-block ml-1 transition-all duration-300 ease-in-out' />
                            {/* sub menu */}
                            <SubMenu>
                                <li>
                                    <SubActiveLink to='/about' onClick={toggle}>
                                        About
                                    </SubActiveLink>
                                </li>
                                <li>
                                    <SubActiveLink to='/service' onClick={toggle}>
                                        Services
                                    </SubActiveLink>
                                </li>
                                <li>
                                    <SubActiveLink to='/pricing' onClick={toggle}>
                                        Pricing
                                    </SubActiveLink>
                                </li>
                                <li>
                                    <SubActiveLink to='/team' onClick={toggle}>
                                        Team
                                    </SubActiveLink>
                                </li>
                                <li>
                                    <SubActiveLink to='/teamDetails/A1bC2d' onClick={toggle}>
                                        Team Details
                                    </SubActiveLink>
                                </li>
                                <li>
                                    <SubActiveLink to='/faqs' onClick={toggle}>
                                        Faqs
                                    </SubActiveLink>
                                </li>
                                <li>
                                    <SubActiveLink to='/utility' onClick={toggle}>
                                        Utility
                                    </SubActiveLink>
                                </li>
                                <li>
                                    <SubActiveLink to='*' onClick={toggle}>
                                        Error
                                    </SubActiveLink>
                                </li>
                            </SubMenu>
                        </Link>
                    </li>
                    <li>
                        <Link className='relative drop_down pb-2' to='javascript:void(0)'>
                            <span>Work</span>
                            <AiFillCaretUp className='down_icon relative inline-block ml-1 transition-all duration-300 ease-in-out' />
                            {/* sub menu */}
                            <SubMenu>
                                <li>
                                    <SubActiveLink to='/work' onClick={toggle}>
                                        Work
                                    </SubActiveLink>
                                </li>
                                <li>
                                    <SubActiveLink to='/workDetails/64902b43e2f55e99591f89a6' onClick={toggle}>
                                        Work Details
                                    </SubActiveLink>
                                </li>
                            </SubMenu>
                        </Link>
                    </li>
                    <li>
                        <Link className='relative drop_down pb-2' to='javascript:void(0)'>
                            <span>Blog</span>
                            <AiFillCaretUp className='down_icon relative inline-block ml-1 transition-all duration-300 ease-in-out' />
                            {/* sub menu */}
                            <SubMenu>
                                <li>
                                    <SubActiveLink to='/blog' onClick={toggle}>
                                        Blog
                                    </SubActiveLink>
                                </li>
                                <li>
                                    <SubActiveLink to='/blogDetails/6490fdd01791cf8eba77675e' onClick={toggle}>
                                        Blog Details
                                    </SubActiveLink>
                                </li>
                            </SubMenu>
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact' onClick={toggle}>
                            Contact
                        </Link>
                    </li>
                    <Link to='/contact' className='btn_primary mt-4' onClick={toggle}>
                        Start a Project
                    </Link>
                </ul>
            </div>
            {/* overlay */}
            <div onClick={toggle} className={`fixed w-full h-screen top-0 left-0 z-30 bg-[rgba(0,0,0,.5)] transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}></div>
        </>
    );
};

export default Drawer;