import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import styles from "./ProjectSection.module.css";
import { littleLearnersTechStacks, luminaeTechStacks, skillbridgeTechStacks, streamvibeTechStacks, transitflowTechStacks, yourBankTechStacks } from "../lib/ProjectsTechStacks";

function ProjectSection() {
    return (<div className={styles.container} id="projects">
        <SectionHeading headingText={"Projects"}/>
        <p className={styles.text}>I started building out my project with plain HTML/CSS, and gradually moved to frameworks.
            The figma designs were taken from the freely available figma designs, but all the development
            work is mine.
        </p>
        <div className={styles.contentContainer}>
            <ProjectCard projectHeading={"Luminae - A brand's ecommerce store"}
            projectDescription={"This is a full stack e-commerce website developed on Next.js utilzing serverless backend with MongoDB as database"}
            imageLink={'/images/Landing Desktop.png'} techStacks={luminaeTechStacks} sourceLink={'https://github.com/stuckrabbit/luminae'} demoLink={"https://luminaed.vercel.app/"}/>
            <ProjectCard projectHeading={"Little Learners - A school"}
            projectDescription={"When I saw this figma design, its uniqueness compelled me do this complete frontend design in react which is fully responsive"}
            imageLink={'/images/littlelearners.png'} techStacks={littleLearnersTechStacks} sourceLink={'https://github.com/stuckrabbit/little-learners'} demoLink={'https://littlelearner.netlify.app'}/>
            <ProjectCard projectHeading={"Your Bank - An online bank"}
            projectDescription={"After using wise.com, I was searching for a similar design to do in frontend, and this was the closest which I found, and it gave me a ground to practice alot of my skills"}
            imageLink={'/images/yourbank.png'} techStacks={yourBankTechStacks} sourceLink={'https://github.com/stuckrabbit/your-bank'} demoLink={'https://imaginarybank.netlify.app'}/>
            <ProjectCard projectHeading={"SkillBridge - An online courses institute"}
            projectDescription={"This is my first React based project and I used chose Javascript for starting out with React. It gave me a lot of exposure to basic React principles and hooks mainly"}
            imageLink={'/images/skillbridge.png'} techStacks={skillbridgeTechStacks} sourceLink={'https://github.com/stuckrabbit/skillbridge'} demoLink={'https://skilledbridge.netlify.app'}/>
            <ProjectCard projectHeading={"Streamvibe - A video streaming platform"}
            projectDescription={"This is my first angular project, which gave me alot of exposure to Angular framework, this is current not mobile responsive due to the design issues I encountered, but the frontend attests to my skills in angular"}
            imageLink={'/images/streamvibe.png'} techStacks={streamvibeTechStacks} sourceLink={'https://github.com/stuckrabbit/stream-vibe'} demoLink={'https://streamvibes.netlify.app'}/>
            <ProjectCard projectHeading={"Transitflow - A company's homepage"}
            projectDescription={"This was my first ever complete Plain HTML and CSS design. It consists of only Homepage and is not made screen responsive intentionally"}
            imageLink={'/images/transit-flow.png'} techStacks={transitflowTechStacks} sourceLink={'https://github.com/stuckrabbit/Transport-Company'} demoLink={'https://stuckrabbit.github.io/Transport-Company'}/>
        </div>
    </div>);
}

export default ProjectSection;