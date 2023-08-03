import About from "../sections/About";
import Education from "../sections/Education";
import Hero from "../sections/Hero"
import Projects from "../sections/Projects";
import Services from "../sections/Services";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Education />
            <Projects />
        </>
    );
};

export default Home;