// react icons
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialIcons = () => {
    return (
        <div className="flex md:flex-col items-center gap-4 duration-300">
            <Link className="relative w-[44px] h-[44px] text-white shadow-iconShadow group" target="_blank" rel="noreferrer" to="https://www.facebook.com/foridh332/">

                <div className='w-full h-full flex items-center justify-center bg-[rgba(24,23,23,.6)] z-30 relative'>
                    <FaFacebook className='text-2xl' />
                </div>

                <span className="absolute z-20 text-xl bg-red h-full flex items-center justify-center top-0 -right-2 scale-x-0 opacity-0 px-5 group-hover:right-full group-hover:scale-x-100 origin-right group-hover:opacity-100 duration-300">Facebook</span>
            </Link>

            <Link className="relative w-[44px] h-[44px] text-white shadow-iconShadow group" target="_blank" rel="noreferrer" to="https://www.facebook.com/foridh332/">

                <div className='w-full h-full flex items-center justify-center bg-[rgba(24,23,23,.6)] z-30 relative'>
                    <FaTwitter className='text-2xl' />
                </div>

                <span className="absolute z-20 text-xl bg-red h-full flex items-center justify-center top-0 -right-2 scale-x-0 opacity-0 px-5 group-hover:right-full group-hover:scale-x-100 origin-right group-hover:opacity-100 duration-300">Twitter</span>
            </Link>

            <Link className="relative w-[44px] h-[44px] text-white shadow-iconShadow group" target="_blank" rel="noreferrer" to="https://www.facebook.com/foridh332/">

                <div className='w-full h-full flex items-center justify-center bg-[rgba(24,23,23,.6)] z-30 relative'>
                    <FaLinkedin className='text-2xl' />
                </div>

                <span className="absolute z-20 text-xl bg-red h-full flex items-center justify-center top-0 -right-2 scale-x-0 opacity-0 px-5 group-hover:right-full group-hover:scale-x-100 origin-right group-hover:opacity-100 duration-300">Linkedin</span>
            </Link>

            <Link className="relative w-[44px] h-[44px] text-white shadow-iconShadow group" target="_blank" rel="noreferrer" to="https://www.facebook.com/foridh332/">

                <div className='w-full h-full flex items-center justify-center bg-[rgba(24,23,23,.6)] z-30 relative'>
                    <FaGithub className='text-2xl' />
                </div>

                <span className="absolute z-20 text-xl bg-red h-full flex items-center justify-center top-0 -right-2 scale-x-0 opacity-0 px-5 group-hover:right-full group-hover:scale-x-100 origin-right group-hover:opacity-100 duration-300">GitHub</span>
            </Link>
        </div>
    );
};

export default SocialIcons;