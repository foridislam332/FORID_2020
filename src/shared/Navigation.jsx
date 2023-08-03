import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <ul className="flex flex-col lg:flex-row gap-2 lg:gap-5 lg:items-center text-dark lg:text-white">
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/services'>Services</Link>
            </li>
            <li>
                <Link to='/projects'>Projects</Link>
            </li>
            <li>
                <Link to='/education'>Education</Link>
            </li>

            <Link target="_blank" rel="noreferrer" to="https://drive.google.com/file/d/1INPgb_Krz66nLNcb4M5kIdpm0N7zhMwH/view?usp=sharing" className="btn_primary">
                Download Resume
            </Link>
        </ul>
    );
};

export default Navigation;