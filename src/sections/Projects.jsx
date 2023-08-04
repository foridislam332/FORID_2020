import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import useProjectData from "../hooks/useProjectData";
import ProjectCard from "../components/ProjectCard";

// react tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [category, setCategory] = useState('all');
    const [projectData] = useProjectData();

    useEffect(() => {
        if (category === 'all' && projectData.length) {
            return setProjects(projectData)
        }
        if (projectData.length) {
            const filterProject = projectData.filter(project => project.category === category);
            return setProjects(filterProject)
        }
    }, [category, projectData.length])

    let content;

    if (projects.length > 0) {
        content = <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
            {
                projects.slice(0, 6).map((project, index) => <ProjectCard
                    key={index}
                    project={project}
                />)
            }
        </div>
    }
    return (
        <section className="bg-dark mb-12 p-6 md:p-12 duration-300">
            <SectionTitle title='My Projects' />

            <Tabs>
                <TabList className="text-navy text-lg text-center space-x-2 space-y-2">
                    <Tab onClick={() => setCategory('all')}>All Template</Tab>
                    <Tab onClick={() => setCategory('react')}>React Template</Tab>
                    <Tab onClick={() => setCategory('html')}>HTML Template</Tab>
                </TabList>

                <TabPanel>
                    {content}
                </TabPanel>
                <TabPanel>
                    {content}
                </TabPanel>
                <TabPanel>
                    {content}
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default Projects;