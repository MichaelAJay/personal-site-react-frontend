import { TabsProps } from "antd";
import { IProgressBadgeProps } from "./Progress-Badge";

export const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export type SkillLevel = 'Beginner' | 'Novice' | 'Intermediate' | 'Advanced' | 'Expert';

export const skillLevel: Record<SkillLevel, { name: SkillLevel, description: string }> = {
    Beginner: 
        {
            name: 'Beginner',
            description: 'Just starting, little to no practical experience.',
        },
    Novice: 
        {
            name: 'Novice',
            description: 'Basic understanding, some hands-on experience.',
        },
    Intermediate: 
        {
            name: 'Intermediate',
            description: 'Good working knowledge, can solve problems independently.',
        },
    Advanced: 
        {
            name: 'Advanced',
            description: 'Strong in the field, capable of mentoring others, and handling complex projects.',
        },
    Expert: 
        {
            name: 'Expert',
            description: 'Leading authority, deep and broad expertise, innovates in the field.',
        },
};


export const AboutMe = {
    title: 'About Me',
    brief: "I am an experienced software developer specializing in web application development across the entirety of the software development lifecycle. I merge practical experience with theory from my Masters degree in Software Engineering along with strong analytical and mathematical underpinnings.",
    professionalPhilosophy: "I strive to practice software development with the idea of \"gongfu\" in my mind. That is, software development is a skillLevel.Novice.name, dashPercent: 45 w,hich deepens over time with experience and through concentrated effort.  There is no shortcut, and it isn't easy.  But that which is worth doing is worth doing well, and when development gets tough, I take solace in this.",
    professionalViewOfLLMs: "I have embraced the ascension of LLMs (ChatGPT in particular), and leverage them in my daily work. My skills have grown immeasurably since ChatGPT was released. While I am familiar with the frustration of not teasing a useful solution out of ChatGPT, I have also found quite elegant solutions in a timely manner, and always couple my take-aways with external sources.",
    professionalJourney: "My favorite aspects of web application development are in the sphere of backend development.  I enjoy thinking through problems and implementing solutions to them.  As of early 2024, I\'ve started began working in earnest to gain some frontend skillLevel.Novice.name, dashPercent: 45. ,I find that I really enjoy the \"back of the front end\" aspect of front end development - that is, writing the JavaScript code necessary to make a web application function properly. I\'m learning to approach with patience the subject of styling.",

}

export const aboutMeInterests = [
    'Self-improvement through Taijiquan',
    'Guitar',
    'Family',
    'Games - "Istanbul" is getting the most play right now'
];


export const aboutMeProfessionalAttributes = [
    'Able to view the big picture while paying attention to small details',
    'Logical problem-solver and decision-maker',
    'Confident solo worker and dependable teammate',
    'Effective technical communicator',
    'Fast learner & Adept researcher'
];
export const aboutMePersonalAttributes = [
    'Positive',
    'Receptive to feedback',
    'Cordial and congenial',
    'Goal-oriented',
    'Reliable and accountable'
];
export const devStrengths = [
    'Data modeling and integration',
    'API development and documentation',
    'Third-party integrations',
    'Code modularization and reuse'
];
export const devWeaknesses = [
    'UI styling'
];

export const languagesAndFrameworks = [
    `JavaScript, TypeScript, and Node.js - ${skillLevel.Advanced.name}`,
    `React - ${skillLevel.Intermediate.name}`,
    `Python - ${skillLevel.Intermediate.name}`,
    `Go - ${skillLevel.Intermediate.name}`
];

export const dbs = [
    'SQL - Adept use of ORMs and direct SQL use in a backend developer context',
    'NoSQL - Adept MongoDB developer with experience in DynamoDB and Google Cloud Firestore Firebase'
];

export const cloudSkills = [
    `Server deployment and monitoring - ${skillLevel.Intermediate.name}`,
    `Database configuration and deployment - ${skillLevel.Intermediate.name}`,
    `Networking - ${skillLevel.Beginner.name}`
]

export const technologies = [
    `JavaScript, TypeScript, and Node.js - ${skillLevel.Advanced.name}`,
    `NestJS - ${skillLevel.Advanced.name} (REST deployments)`,
    `Jest - ${skillLevel.Intermediate.name}`,
    `React - ${skillLevel.Intermediate.name}`,
    `Vue - ${skillLevel.Novice.name}`,
    `HTML - ${skillLevel.Intermediate.name}`,
    `CSS - ${skillLevel.Novice.name}`,
    `Tailwind CSS - ${skillLevel.Beginner.name}`,
    `Python - ${skillLevel.Intermediate.name}`,
    `Go - ${skillLevel.Intermediate.name}`,
    `SQL -  ${skillLevel.Intermediate.name}`,
    `ORM (General) - ${skillLevel.Intermediate.name} (Advanced with Prisma for Postgres & MongoDB Native Node driver)`,
    `MongoDB - ${skillLevel.Intermediate.name}`,
    `Cloud server deployment - ${skillLevel.Intermediate.name}`,
    `Cloud DB deployment - ${skillLevel.Intermediate.name} (Experience with GCP CloudSQL, Compute Engine)`,
    `Cloud Storage - ${skillLevel.Advanced.name} (Able to create and configure & )`,
    `IAM - ${skillLevel.Intermediate.name}`,
    `Docker - ${skillLevel.Intermediate.name}`,
    `Kubernetes - ${skillLevel.Novice.name}`,
];

export type TabNames = 'Frontend Development' | 'Backend Development' | 'Testing' | 'Database Management' | 'DevOps and Cloud Services';

export const technologiesOBJECTS: Array<IProgressBadgeProps & { tabs: Set<TabNames> }> = [
    { title: 'JavaScript & TypeScript', level: skillLevel.Advanced.name, dashPercent: 80, tabs: new Set<TabNames>(['Frontend Development', 'Backend Development']) },
    { title: 'Node.js', level: skillLevel.Advanced.name, dashPercent: 80, tabs: new Set<TabNames>(['Backend Development']) },
    { title: 'NestJS', level: skillLevel.Advanced.name, dashPercent: 80, description: 'REST deployments', tabs: new Set<TabNames>(['Backend Development']) },
    { title: 'Express', level: skillLevel.Advanced.name, dashPercent: 50, description: 'REST deployments', tabs: new Set<TabNames>(['Backend Development']) },
    { title: 'Fastify', level: skillLevel.Advanced.name, dashPercent: 40, description: 'REST deployments', tabs: new Set<TabNames>(['Backend Development']) },
    { title: 'HAPI', level: skillLevel.Advanced.name, dashPercent: 50, description: 'REST deployments', tabs: new Set<TabNames>(['Backend Development']) },
    { title: 'Jest', level: skillLevel.Intermediate.name, dashPercent: 60, tabs: new Set<TabNames>(['Testing']) },
    { title: 'Unit Testing', level: skillLevel.Intermediate.name, dashPercent: 60, tabs: new Set<TabNames>(['Testing']) },
    { title: 'Integration Testing', level: skillLevel.Intermediate.name, dashPercent: 60, tabs: new Set<TabNames>(['Testing']) },
    { title: 'E2E Testing', level: skillLevel.Intermediate.name, dashPercent: 40, tabs: new Set<TabNames>(['Testing']) },
    { title: 'React', level: skillLevel.Intermediate.name, dashPercent: 60, tabs: new Set<TabNames>(['Frontend Development']) },
    { title: 'Vue', level: skillLevel.Novice.name, dashPercent: 35, tabs: new Set<TabNames>(['Frontend Development']) },
    { title: 'HTML', level: skillLevel.Intermediate.name, dashPercent: 55, tabs: new Set<TabNames>(['Frontend Development']) },
    { title: 'CSS', level: skillLevel.Novice.name, dashPercent: 35, tabs: new Set<TabNames>(['Frontend Development']) },
    { title: 'Tailwind CSS', level: skillLevel.Beginner.name, dashPercent: 15, tabs: new Set<TabNames>(['Frontend Development']) },
    { title: 'Python', level: skillLevel.Intermediate.name, dashPercent: 55, tabs: new Set<TabNames>(['Backend Development']) },
    { title: 'FastAPI', level: skillLevel.Novice.name, dashPercent: 40, tabs: new Set<TabNames>(['Backend Development']) },
    { title: 'Go', level: skillLevel.Intermediate.name, dashPercent: 55, tabs: new Set<TabNames>(['Backend Development']) },
    { title: 'Gin', level: skillLevel.Novice.name, dashPercent: 45, tabs: new Set<TabNames>(['Backend Development']) },
    { title: 'SQL', level: skillLevel.Intermediate.name, dashPercent: 60, tabs: new Set<TabNames>(['Database Management']) },
    { title: 'ORM/ODM', level: skillLevel.Intermediate.name, dashPercent: 65, description: 'General', tabs: new Set<TabNames>(['Backend Development', 'Database Management']) },
    { title: 'MongoDB', level: skillLevel.Intermediate.name, dashPercent: 60, tabs: new Set<TabNames>(['Database Management']) },
    { title: 'Cloud server deployment', level: skillLevel.Intermediate.name, dashPercent: 60, tabs: new Set<TabNames>(['Backend Development', 'DevOps and Cloud Services']) },
    { title: 'Cloud DB deployment', level: skillLevel.Intermediate.name, dashPercent: 55, tabs: new Set<TabNames>(['Database Management', 'DevOps and Cloud Services']) },
    { title: 'Cloud Storage', level: skillLevel.Advanced.name, dashPercent: 70, description: 'Creation, configuration, programmatic access including signed URLS', tabs: new Set<TabNames>(['Backend Development', 'DevOps and Cloud Services']) },
    { title: 'IAM', level: skillLevel.Intermediate.name, dashPercent: 55, tabs: new Set<TabNames>(['DevOps and Cloud Services']) },
    { title: 'Docker', level: skillLevel.Intermediate.name, dashPercent: 50, tabs: new Set<TabNames>(['DevOps and Cloud Services']) },
    { title: 'Kubernetes', level: skillLevel.Novice.name, dashPercent: 30, tabs: new Set<TabNames>(['DevOps and Cloud Services']) },
];

export const nonTechnicalSDLCSkills= [
    `Requirements elicitation - ${skillLevel.Novice.name}`,
    `Requirements formalization - ${skillLevel.Intermediate.name}`,
    `Swagger specification - ${skillLevel.Intermediate.name}`,
    `Git - ${skillLevel.Intermediate.name}`,
    `Algorithm design - ${skillLevel.Novice.name}`,
    ` - ${skillLevel.Novice.name}`,
    ` - ${skillLevel.Novice.name}`,
    ` - ${skillLevel.Novice.name}`,
    ` - ${skillLevel.Novice.name}`,
];



/**
 * NOTES:
 * 
 * ChatGPT thinks that someone that can create a server and serve content is "Intermediate"
 */