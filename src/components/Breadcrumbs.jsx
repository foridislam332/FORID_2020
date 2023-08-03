import { Link } from 'react-router-dom';

const Breadcrumbs = ({ title }) => {
    return (
        <div className='bg-[url("https://i.ibb.co/5WBPscH/breadcrumbs-bg.png")] bg-right-top bg-no-repeat bg-cover xl:bg-center pt-32 md:pt-[240px]'>
            <div className='container'>

                <h1 className='text-center font-semibold text-dark-text text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px]'>{title}</h1>
                <div className='text-dark-text font-medium text-sm uppercase flex items-center justify-center gap-2'>
                    <Link to='/'>Home</Link>
                    <span className='text-primary'>/</span>
                    <span className='text-dark-gray'>{title}</span>
                </div>

                {/* border */}
                <div className='border-b border-[#DFDFDF] mt-20 md:mt[120px] lg:mt-[120px]'></div>
            </div>
        </div>
    );
};

export default Breadcrumbs;