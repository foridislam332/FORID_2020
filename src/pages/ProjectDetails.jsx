import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import useProjectData from "../hooks/useProjectData";
import { Link, useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

const ProjectDetails = () => {
    const [project, setProject] = useState({});
    const [projectData] = useProjectData();
    const { id } = useParams();

    useEffect(() => {
        const findProject = projectData.find(project => project.id == id);
        setProject(findProject);
    }, [id])
    return (
        <section className="bg-dark mb-12 p-6 md:p-12 duration-300">
            <SectionTitle title='Project Details' />

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                <ImageSlider />
                <div className="">
                    <h1 className="text-white text-3xl line-clamp-1">Turista - <span className="text-xl">Travel Agency React Template</span></h1>

                    <div className="text-white flex items-center gap-2 -mt-1">
                        <Link target="_blake" className="text-blue" to={project.projectURL}>Live preview</Link>
                        -
                        <Link target="_blake" className="text-blue" to={project.clientURL}>Client code</Link>
                        -
                        <Link target="_blake" className="text-blue" to={project.serverURL}>Server code</Link>
                    </div>

                    <p className="text-gray line-clamp-2 mt-3">Through a wide variety of mobile applications, we’ve developed a unique visual system. Through a wide variety of mobile applications, we’ve developed a unique visual system</p>

                    <div className="grid grid-cols-2 mt-4">
                        <p className="text-gray"><span className="text-white">Client: </span>Envato</p>
                        <p className="text-gray"><span className="text-white">Date: </span>15 June 2022</p>
                    </div>

                    <p className="text-white mt-2 underline">Technology Used:</p>

                    <div className="mt-2 flex flex-wrap gap-2">
                        <span className="text-white bg-blue py-1 px-3 rounded-md shadow-lg shadow-blue/40">React</span>
                        <span className="text-white bg-blue py-1 px-3 rounded-md shadow-lg shadow-blue/40">Javascript</span>
                        <span className="text-white bg-blue py-1 px-3 rounded-md shadow-lg shadow-blue/40">Tailwind</span>
                        <span className="text-white bg-blue py-1 px-3 rounded-md shadow-lg shadow-blue/40">React Router</span>
                        <span className="text-white bg-blue py-1 px-3 rounded-md shadow-lg shadow-blue/40">React</span>
                        <span className="text-white bg-blue py-1 px-3 rounded-md shadow-lg shadow-blue/40">Javascript</span>
                        <span className="text-white bg-blue py-1 px-3 rounded-md shadow-lg shadow-blue/40">Tailwind</span>
                        <span className="text-white bg-blue py-1 px-3 rounded-md shadow-lg shadow-blue/40">React Router</span>
                    </div>
                </div>
            </div>

            <hr className="mt-16" />

            <div className="mt-14">
                <h1 className="text-white text-4xl mb-8">Project Screenshots</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <img className="shadow-iconShadow rounded-xl" src="https://i.ibb.co/wr8vDc3/Capture.png" alt="" />
                    <img className="shadow-iconShadow rounded-xl" src="https://i.ibb.co/wr8vDc3/Capture.png" alt="" />
                    <img className="shadow-iconShadow rounded-xl" src="https://i.ibb.co/wr8vDc3/Capture.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;