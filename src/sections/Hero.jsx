import Typed from 'react-typed';

import SocialIcons from '../components/SocialIcons';

const Hero = () => {
    return (
        <section className="bg-dark mb-12 p-6 md:p-12 duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-7 items-center gap-10 lg:gap-14 duration-300">

                {/* left content */}
                <div className='col-span-3'>
                    <h3 className="text-red text-2xl md:text-3xl font-semibold mb-1 md:mb-3 duration-300">Hello! I'm</h3>

                    <h1 className="text-[28px] md:text-5xl font-bold bg-clip-text text-transparent bg-text-gradient duration-300">MD Forid Hossain</h1>

                    <h2 className='text-white text-xl md:text-3xl mt-2 md:mt-3 duration-300'>
                        <Typed
                            strings={['Front-end Developer ', 'MERN Stack Developer ', 'React Application ']}
                            typeSpeed={100}
                            backSpeed={50}
                            loop
                        />
                    </h2>

                    <button className="btn_primary mt-8 md:mt-12 duration-300">
                        Let's Start
                    </button>
                </div>

                {/* right content */}
                <div className="mx-auto md:mx-0 flex flex-col md:flex-row items-center justify-between gap-10 shadow-custom rounded-tl-full rounded-tr-full md:rounded-tr-none md:rounded-s-full p-10 col-span-4 duration-300">
                    {/* person image */}
                    <div className="w-52 md:w-[300px] h-52 md:h-[300px] bg-img-gradient rounded-full shadow-custom">
                        <img className='w-full' style={{ borderRadius: '50%', width: '100%' }} src="https://i.ibb.co/q19TjV4/forid.png" alt="" />
                    </div>

                    {/* social area */}
                    <SocialIcons />
                </div>
            </div>
        </section>
    );
};

export default Hero;