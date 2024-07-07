import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import styles from "./ProjectSection.module.css";
import { littleLearnersTechStacks, luminaeTechStacks, questeriaTechStacks, skillbridgeTechStacks, streamvibeTechStacks, yourBankTechStacks } from "../lib/ProjectsTechStacks";

function ProjectSection() {
    return (<div className={styles.container} id="projects">
        <SectionHeading headingText={"Projects"}/>
        {/*<p className={styles.text}>I started building out my project with plain HTML/CSS, and gradually moved to frameworks.
            The figma designs were taken from the freely available figma designs, but all the development
            work is mine.
        </p>*/}
        <div className={styles.contentContainer}>
            <ProjectCard projectHeading={"Luminae - A brand's ecommerce store"}
            projectDescription={"This is a full stack e-commerce website developed on Next.js utilzing serverless backend with MongoDB as database"}
            imageLink={'/images/luminae.webp'} techStacks={luminaeTechStacks} sourceLink={'https://github.com/sajidMunir04/luminae'} demoLink={"https://luminaed.vercel.app/"}/>
            <ProjectCard projectHeading={"Little Learners - A school"}
            projectDescription={"When I saw this figma design, its uniqueness compelled me do this complete frontend design in react which is fully responsive"}
            imageLink={'/images/littlelearners.webp'} techStacks={littleLearnersTechStacks} sourceLink={'https://github.com/sajidMunir04/little-learners'} demoLink={'https://littlelearner.netlify.app'}/>
            <ProjectCard projectHeading={"Questeria (In development)"}
            projectDescription={"It is an application in which user can create forms by selecting different types of question, using express.js as backend."}
            imageLink={'/images/questeria.webp'} techStacks={questeriaTechStacks} sourceLink={'https://github.com/sajidMunir04/questeria'} demoLink={''}/>
            <ProjectCard projectHeading={"Your Bank - An online bank"}
            projectDescription={"After using wise.com, I was searching for a similar design to do in frontend, and this was the closest which I found, and it gave me a ground to practice alot of my skills"}
            imageLink={'/images/yourbank.webp'} techStacks={yourBankTechStacks} sourceLink={'https://github.com/sajidMunir04/your-bank'} demoLink={'https://demosite123456.netlify.app/'}/>
            <ProjectCard projectHeading={"SkillBridge - An online courses institute"}
            projectDescription={"This is my first React based project and I used chose Javascript for starting out with React. It gave me a lot of exposure to basic React principles and hooks mainly"}
            imageLink={'/images/skillbridge.webp'} techStacks={skillbridgeTechStacks} sourceLink={'https://github.com/sajidMunir04/skillbridge'} demoLink={'https://skilledbridge.netlify.app'}/>
            <ProjectCard projectHeading={"Streamvibe (In development)"}
            projectDescription={"This is my first angular project, which gave me alot of exposure to Angular framework, this is still in development."}
            imageLink={'/images/streamvibe.webp'} techStacks={streamvibeTechStacks} sourceLink={'https://github.com/sajidMunir04/stream-vibe'} demoLink={'https://streamvibes.netlify.app'}/>
        </div>
    </div>);
}

export default ProjectSection;