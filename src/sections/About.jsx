import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import TextSlider from "../components/TextSlider";

const About = () => {
    return (
        <section className="bg-dark mb-12 p-6 md:p-12 duration-300">
            <SectionTitle title='About Me' />

            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-y-10 md:gap-10 duration-300">
                <div className="md:w-96 lg:w-auto mx-auto border border-red p-4 rounded-lg">
                    <img className="w-full rounded-lg shadow-custom" src="https://i.ibb.co/vDJHFyn/person.jpg" alt="" />
                </div>

                <div className="col-span-2">
                    <TextSlider />

                    <h3 className="text-red text-2xl font-semibold mt-6">Fiverr Level 2 Seller - <Link className="text-blue text-base underline italic" target="_blank" rel="noreferrer" to='https://www.fiverr.com/foridislam332' >See Profile</Link></h3>

                    <p className="text-gray max-w-xl mt-2 mb-10">Hi! My name is MD Forid Hossain. I'm from Bangladesh. I'm a Full-time professional freelancer. I truly believe that your success is my reason to smile!. I have great experience in React JS, Redux, Javascript, HTML 5, CSS 3, Bootstrap, Material UI, Tailwind CSS, Font Awesome, React Router, React Hook Form, MongoDB, and Firebase, etc.</p>

                    <div className="flex">
                        <Link target="_blank" rel="noreferrer" to="https://drive.google.com/file/d/1INPgb_Krz66nLNcb4M5kIdpm0N7zhMwH/view?usp=sharing" className="btn_primary">
                            Download Resume
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;