import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import styles from "./ProjectSection.module.css";

function ProjectSection() {
    return (<div className={styles.container}>
        <SectionHeading headingText={"My Projects"}/>
        <p className={styles.text}>I started building out my project with plain HTML/CSS, and gradually moved to frameworks.
            The figma designs were taken from the freely available figma designs, but all the development
            work is mine.
        </p>
        <div>
            <ProjectCard projectHeading={"Luminae - A brand's own ecommerce store"} 
            projectDescription={"This is my most ambitious project. I took the store design from figma, gathered some already fake API for products etc, and started building out this project completely. Along the way I learnt new things, fixed my own mistakes and made it into a fully functioning backend store. Got a good products dataset from kaggle and added some random data like discounts etc. It is developed on Next.js utilzing serverless backend with MongoDB as database"} 
            imageLink={'/images/Landing Desktop.png'} tags={['Next.js','React','Typescript','CSS Modules','HTML']}/>
            <ProjectCard projectHeading={"Little Learners - A school"} 
            projectDescription={"When I saw this figma design, its uniqueness compelled me do this complete frontend design in react which is fully responsive"} 
            imageLink={'/images/littlelearners.png'} tags={['React','Typescript','CSS Modules','HTML','Router']}/>
            <ProjectCard projectHeading={"Your Bank - A online bank"} 
            projectDescription={"After using wise.com, I was searching for a similar design to do in frontend, and this was the closest which I found, and it gave me a ground to practice alot of my skills"} 
            imageLink={'/images/yourbank.png'} tags={['React','Typescript','CSS Modules','HTML']}/>
            <ProjectCard projectHeading={"Streamvibe - A video streaming platform"} 
            projectDescription={"This is my first angular project, which gave me alot of exposure to Angular framework, while I still like the framework itself but I think React is my favorite"} 
            imageLink={'/images/streamvibe.png'} tags={['Angular','Typescript','CSS','HTML']}/>
            <ProjectCard projectHeading={"SkillBridge - An online courses institute"} 
            projectDescription={"This is my first React based project and I used chose Javascript for starting out with React. It gave me a lot of exposure to basic React principles and hooks mainly"} 
            imageLink={'/images/skillbridge.png'} tags={['React','Javascript','CSS Modules','HTML']}/>
            <ProjectCard projectHeading={"Transitflow - A shipping company's homepage"} 
            projectDescription={"This was my first ever complete Plain HTML and CSS design. It consists of only Homepage and is not made screen responsive intentionally"} 
            imageLink={'/images/transit-flow.png'} tags={['HTML','CSS']}/>
        </div>
    </div>);
}

export default ProjectSection;