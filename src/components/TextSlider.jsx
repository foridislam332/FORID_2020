import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const titles = ['Front-end Developer', 'MERN Stack Developer', 'Full Stack Developer', 'React Application'];

const TextSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            4000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <h1 className='text-3xl md:text-4xl text-white text-ellipsis overflow-hidden'>
            <TextTransition springConfig={presets.wobbly}>{titles[index % titles.length]}</TextTransition>
        </h1>
    );
};

export default TextSlider;