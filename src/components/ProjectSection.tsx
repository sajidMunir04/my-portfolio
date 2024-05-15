import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import styles from "./ProjectSection.module.css";

function ProjectSection() {
    return (<div className={styles.container} id="projects">
        <SectionHeading headingText={"Projects"}/>
        <p className={styles.text}>I started building out my project with plain HTML/CSS, and gradually moved to frameworks.
            The figma designs were taken from the freely available figma designs, but all the development
            work is mine.
        </p>
        <div className={styles.contentContainer}>
            <ProjectCard projectHeading={"Luminae - A brand's ecommerce store"}
            projectDescription={"This is my most ambitious project. I took the store design from figma, and started building out this project completely.It is developed on Next.js utilzing serverless backend with MongoDB as database"}
            imageLink={'/images/Landing Desktop.png'} techStacks={['/images/tech-stacks/nextjs.svg', '/images/tech-stacks/react.svg', '/images/tech-stacks/ts.svg',
                '/images/tech-stacks/css.svg', '/images/tech-stacks/html.svg']} sourceLink={'https://github.com/stuckrabbit/luminae'} demoLink={""}/>
            <ProjectCard projectHeading={"Little Learners - A school"}
            projectDescription={"When I saw this figma design, its uniqueness compelled me do this complete frontend design in react which is fully responsive"}
            imageLink={'/images/littlelearners.png'} techStacks={['/images/tech-stacks/react.svg', '/images/tech-stacks/ts.svg',
                '/images/tech-stacks/css.svg', '/images/tech-stacks/html.svg']} sourceLink={'https://github.com/stuckrabbit/little-learners'} demoLink={'https://littlelearner.netlify.app'}/>
            <ProjectCard projectHeading={"Your Bank - An online bank"}
            projectDescription={"After using wise.com, I was searching for a similar design to do in frontend, and this was the closest which I found, and it gave me a ground to practice alot of my skills"}
            imageLink={'/images/yourbank.png'} techStacks={['/images/tech-stacks/react.svg', '/images/tech-stacks/ts.svg',
                '/images/tech-stacks/css.svg', '/images/tech-stacks/html.svg']} sourceLink={'https://github.com/stuckrabbit/your-bank'} demoLink={'https://imaginarybank.netlify.app'}/>
            <ProjectCard projectHeading={"Streamvibe - A video streaming platform"}
            projectDescription={"This is my first angular project, which gave me alot of exposure to Angular framework, while I still like the framework itself but I think React is my favorite"}
            imageLink={'/images/streamvibe.png'} techStacks={['/images/tech-stacks/angular.svg', '/images/tech-stacks/ts.svg',
                '/images/tech-stacks/css.svg', '/images/tech-stacks/html.svg']} sourceLink={'https://github.com/stuckrabbit/stream-vibe'} demoLink={'https://streamvibes.netlify.app'}/>
            <ProjectCard projectHeading={"SkillBridge - An online courses institute"}
            projectDescription={"This is my first React based project and I used chose Javascript for starting out with React. It gave me a lot of exposure to basic React principles and hooks mainly"}
            imageLink={'/images/skillbridge.png'} techStacks={['/images/tech-stacks/react.svg', '/images/tech-stacks/javascript.svg',
                '/images/tech-stacks/css.svg', '/images/tech-stacks/html.svg']} sourceLink={'https://github.com/stuckrabbit/skillbridge'} demoLink={'https://skilledbridge.netlify.app'}/>
            <ProjectCard projectHeading={"Transitflow - A company's homepage"}
            projectDescription={"This was my first ever complete Plain HTML and CSS design. It consists of only Homepage and is not made screen responsive intentionally"}
            imageLink={'/images/transit-flow.png'} techStacks={['/images/tech-stacks/html.svg', '/images/tech-stacks/css.svg']} sourceLink={'https://github.com/stuckrabbit/Transport-Company'} demoLink={'https://stuckrabbit.github.io/Transport-Company'}/>
        </div>
    </div>);
}

export default ProjectSection;