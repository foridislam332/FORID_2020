import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ImageSlider = () => {
    return (
        <Carousel className="shadow-iconShadow rounded-xl" autoPlay={true} infiniteLoop={true} showThumbs={false}>
            <div>
                <img className="rounded-xl" src="https://i.ibb.co/wr8vDc3/Capture.png" />
            </div>
            <div>
                <img className="rounded-xl" src="https://i.ibb.co/wr8vDc3/Capture.png" />
            </div>
            <div>
                <img className="rounded-xl" src="https://i.ibb.co/wr8vDc3/Capture.png" />
            </div>
        </Carousel>
    );
};

export default ImageSlider;