import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <ul className="flex space-x-8 text-white">
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
    );
};

export default Navigation;