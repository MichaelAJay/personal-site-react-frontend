import { IProgressBadgeProps } from './ProgressBadgeDisplay';

export const LOREM_IPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export type SkillLevel =
  | 'Beginner'
  | 'Novice'
  | 'Intermediate'
  | 'Advanced'
  | 'Expert';

export const skillLevel: Record<
  SkillLevel,
  { name: SkillLevel; description: string; dashPercent: number }
> = {
  Beginner: {
    name: 'Beginner',
    description: 'Just starting, little to no practical experience.',
    dashPercent: 20,
  },
  Novice: {
    name: 'Novice',
    description: 'Basic understanding, some hands-on experience.',
    dashPercent: 40,
  },
  Intermediate: {
    name: 'Intermediate',
    description: 'Good working knowledge, can solve problems independently.',
    dashPercent: 60,
  },
  Advanced: {
    name: 'Advanced',
    description:
      'Strong in the field, capable of mentoring others, and handling complex projects.',
    dashPercent: 80,
  },
  Expert: {
    name: 'Expert',
    description:
      'Leading authority, deep and broad expertise, innovates in the field.',
    dashPercent: 95,
  },
};

export const AboutMe = {
  title: 'About Me',
  brief:
    'I am an experienced software developer specializing in web application development across the entirety of the software development lifecycle. I merge practical experience with theory from my Masters degree in Software Engineering along with strong analytical and mathematical underpinnings.',
  professionalPhilosophy:
    'I strive to practice software development with the idea of "gongfu" in my mind. That is, software development is a skillLevel.Novice.name, dashPercent: 45 w,hich deepens over time with experience and through concentrated effort.  There is no shortcut, and it isn\'t easy.  But that which is worth doing is worth doing well, and when development gets tough, I take solace in this.',
  professionalViewOfLLMs:
    'I have embraced the ascension of LLMs (ChatGPT in particular), and leverage them in my daily work. My skills have grown immeasurably since ChatGPT was released. While I am familiar with the frustration of not teasing a useful solution out of ChatGPT, I have also found quite elegant solutions in a timely manner, and always couple my take-aways with external sources.',
  professionalJourney:
    'My favorite aspects of web application development are in the sphere of backend development.  I enjoy thinking through problems and implementing solutions to them.  As of early 2024, I\'ve started began working in earnest to gain some frontend skillLevel.Novice.name, dashPercent: 45. ,I find that I really enjoy the "back of the front end" aspect of front end development - that is, writing the JavaScript code necessary to make a web application function properly. I\'m learning to approach with patience the subject of styling.',
};

export const aboutMeInterests = [
  'Self-improvement through Taijiquan',
  'Guitar',
  'Family',
  'Games - "Istanbul" is getting the most play right now',
];

export const aboutMeProfessionalAttributes = [
  'Able to view the big picture while paying attention to small details',
  'Logical problem-solver and decision-maker',
  'Confident solo worker and dependable teammate',
  'Effective technical communicator',
  'Fast learner & Adept researcher',
];
export const aboutMePersonalAttributes = [
  'Positive',
  'Receptive to feedback',
  'Cordial and congenial',
  'Goal-oriented',
  'Reliable and accountable',
];
export const devStrengths = [
  'Data modeling and integration',
  'API development and documentation',
  'Third-party integrations',
  'Code modularization and reuse',
];
export const devWeaknesses = ['UI styling'];

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

export type TabNames =
  | 'Frontend Development'
  | 'Backend Development'
  | 'Testing'
  | 'Database Management'
  | 'DevOps and Cloud Services';

export const technologiesOBJECTS: Array<
  IProgressBadgeProps & { tabs: Set<TabNames>; levelAssessmentReason: string }
> = [
  {
    title: 'JavaScript & TypeScript',
    level: skillLevel.Advanced.name,
    dashPercent: 80,
    tabs: new Set<TabNames>(['Frontend Development', 'Backend Development']),
    levelAssessmentReason: `I've honed my skills in both the foundational aspects and modern features of these languages. My expertise encompasses understanding variable scopes, mastering asynchronous programming, and utilizing TypeScript's type safety and utility types for robust application development. I excel in crafting robust applications through meticulous error handling - integrating try/catch blocks and judicious use of .catch() chaining. Through solving real-world problems, like deduplicating contacts in a dynamic web application, I've applied these skills to create efficient, maintainable, and high-quality software solutions.`,
  },
  {
    title: 'Node.js',
    level: skillLevel.Advanced.name,
    dashPercent: 80,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: '',
  },
  {
    title: 'External Integrations',
    level: skillLevel.Advanced.name,
    dashPercent: 80,
    description: 'REST deployments',
    tabs: new Set<TabNames>(['Frontend Development', 'Backend Development']),
    levelAssessmentReason: `My expertise in external integrations spans both front-end and back-end development, marked by advanced techniques in interfacing with APIs like Stripe (through their library) and creating custom Axios providers. I encapsulate integration logic, ensuring robust error handling and secure data exchanges. My approach includes strategic layering to isolate changes, safeguard sensitive data, and maintain adaptability. Leveraging asynchronous operations in Node.js enhances performance, while my testing regime combines manual checks with unit tests for mock responses, ensuring reliability and efficiency in real-world applications.`,
  },
  {
    title: 'REST',
    level: skillLevel.Advanced.name,
    dashPercent: 80,
    description: 'REST deployments',
    tabs: new Set<TabNames>(['Frontend Development', 'Backend Development']),
    levelAssessmentReason: `When designing APIs, I prefer highly declarative, concise endpoints that align with HTTP standards for clarity and efficiency. My design philosophy ensures meaningful HTTP methods usage and status codes, enhancing usability and reliability. Security is prioritized through JWTs and cookies, minimizing vulnerabilities. Performance optimization in Node.js leverages its asynchronous nature, while scaling is managed through deployment strategies. Client-side integration focuses on graceful error handling, ensuring a seamless user experience. Documentation and testing are integral, with Swagger for clear API documentation and Supertest for robust testing, ensuring comprehensive API reliability and performance.`,
  },
  {
    title: 'Accessibility',
    level: skillLevel.Beginner.name,
    dashPercent: 15,
    tabs: new Set<TabNames>(['Frontend Development']),
    levelAssessmentReason: `I am in the early stages of my journey to embed accessibility principles into my web development projects, recognizing the importance of creating inclusive and user-friendly experiences for all. My current practice includes ensuring images are equipped with descriptive 'alt' attributes to aid vision-impaired users, along with an awareness of color contrast and the significance of semantic HTML for screen reader navigability. Acknowledging the gaps in my knowledge, I am committed to expanding my understanding and skills in web accessibility. I plan to delve into comprehensive resources such as MDN's "Accessibility" section, aiming to integrate robust accessibility standards and testing tools into my workflow. This commitment to learning and improvement underscores my dedication to developing accessible, inclusive web applications.`,
  },
  {
    title: 'GraphQL (Consumption)',
    level: skillLevel.Intermediate.name,
    dashPercent: 50,
    description: 'REST deployments',
    tabs: new Set<TabNames>(['Frontend Development', 'Backend Development']),
    levelAssessmentReason: `I possess foundational skills in consuming GraphQL APIs, appreciating the efficiency of GraphQL for tailored data retrieval. My approach involves constructing precise queries using npm-packaged clients, ensuring I fetch only the necessary data, which optimizes network usage and improves application performance. While my experience with advanced optimization techniques is growing, I've effectively leveraged libraries like graphql in Node.js to integrate GraphQL services into my projects. This includes creating interface layers that simplify interactions with GraphQL endpoints, demonstrating my ability to adapt and implement practical solutions for data consumption challenges. My hands-on experience, particularly in fetching detailed order information through GraphQL, illustrates my competency in leveraging this technology to enhance application functionality and user experience.`,
  },
  {
    title: 'RPC (Consumption)',
    level: skillLevel.Novice.name,
    dashPercent: 40,
    description: 'REST deployments',
    tabs: new Set<TabNames>(['Frontend Development', 'Backend Development']),
    levelAssessmentReason: `With a foundational grasp on RPC (Remote Procedure Call) mechanisms, particularly JSON-RPC, I bring practical experience in integrating efficient communication protocols into web applications. My approach leverages external npm packages to abstract and simplify RPC interactions, ensuring seamless integration alongside RESTful services within client layers. While I have successfully used JSON-RPC for cross-system communication, highlighting its speed and efficiency advantages over traditional HTTP, I recognize the importance of advancing my skills in error handling, security measures, and performance optimization. My ongoing commitment to learning and integrating more robust practices in RPC consumption reflects my dedication to building secure, reliable, and high-performing web solutions.`,
  },
  {
    title: 'API Creation',
    level: skillLevel.Advanced.name,
    dashPercent: 80,
    description: 'REST deployments',
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: '',
  },
  {
    title: 'NestJS',
    level: skillLevel.Advanced.name,
    dashPercent: 80,
    description: 'REST deployments',
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: '',
  },
  {
    title: 'Express',
    level: skillLevel.Advanced.name,
    dashPercent: 50,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: '',
  },
  {
    title: 'Fastify',
    level: skillLevel.Advanced.name,
    dashPercent: 40,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: '',
  },
  {
    title: 'HAPI',
    level: skillLevel.Advanced.name,
    dashPercent: 50,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: '',
  },
  {
    title: 'Request Validation',
    level: skillLevel.Advanced.name,
    dashPercent: 70,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: '',
  },
  {
    title: 'Jest',
    level: skillLevel.Intermediate.name,
    dashPercent: 60,
    tabs: new Set<TabNames>(['Testing']),
    levelAssessmentReason: '',
  },
  {
    title: 'Unit Testing',
    level: skillLevel.Intermediate.name,
    dashPercent: 60,
    tabs: new Set<TabNames>(['Testing']),
    levelAssessmentReason: '',
  },
  {
    title: 'Integration Testing',
    level: skillLevel.Intermediate.name,
    dashPercent: 60,
    tabs: new Set<TabNames>(['Testing']),
    levelAssessmentReason: '',
  },
  {
    title: 'E2E Testing',
    level: skillLevel.Intermediate.name,
    dashPercent: 40,
    tabs: new Set<TabNames>(['Testing']),
    levelAssessmentReason: '',
  },
  {
    title: 'React',
    level: skillLevel.Intermediate.name,
    dashPercent: 65,
    tabs: new Set<TabNames>(['Frontend Development']),
    levelAssessmentReason: `I excel in writing fine-grained functional components, leveraging React's context and hooks like useState and useEffect for state management and dynamic functionality. My use of Ant Design enhances UI development, with custom components for reusability and style. Though new to performance optimization and component testing, my skills in routing with react-router-dom and custom hook creation showcase my ability to tailor React applications to specific needs. My commitment to mastering advanced features and solving UI challenges with creative solutions underscores my ongoing journey towards React mastery.`,
  },
  {
    title: 'Vue',
    level: skillLevel.Novice.name,
    dashPercent: 30,
    tabs: new Set<TabNames>(['Frontend Development']),
    levelAssessmentReason: `As a budding Vue.js developer, I'm in the early stages of exploring its powerful ecosystem, favoring single-file components for their cohesiveness and simplicity. While my experience with advanced state management and performance optimization is still developing, I've successfully utilized Vue Router for basic navigation in applications. Initiating projects with Vue CLI and experimenting with Vite, I've navigated the challenges of integrating TypeScript, viewing these as valuable learning opportunities. My journey with Vue is marked by a keen interest in overcoming obstacles and a strong desire to deepen my understanding of Vue's capabilities, particularly in achieving seamless TypeScript integration and leveraging Vue's reactivity system more effectively.`,
  },
  {
    title: 'Ant Design',
    level: skillLevel.Intermediate.name,
    dashPercent: 60,
    tabs: new Set<TabNames>(['Frontend Development']),
    levelAssessmentReason: `I tailor components for bespoke needs and seamless UI integration, employing custom theming and styles to align with project branding. My practical use of forms, layout components, and adept handling of styling challenges, like specific selector overrides, showcases my capability to enhance user interfaces significantly. While my focus has been on desktop, I'm gearing up for responsive design, continuously improving by adapting to new updates and best practices.`,
  },
  {
    title: 'HTML',
    level: skillLevel.Novice.name,
    dashPercent: 40,
    tabs: new Set<TabNames>(['Frontend Development']),
    levelAssessmentReason: `As a React developer, my interaction with HTML is predominantly through JSX, with a focus on building dynamic, component-based applications. While direct usage of semantic HTML elements and SEO optimization strategies have not been my primary focus, I ensure accessibility by providing descriptive 'alt' attributes for images within React components. My experience includes integrating multimedia content effectively, planning for future enhancements like using cloud storage for media and exploring lazy loading for performance optimization. While I recognize the importance of semantic HTML and cross-browser compatibility, my current expertise is more aligned with React's abstraction layer, indicating an area for future development, particularly in deepening my understanding of HTML's foundational aspects outside of a React context.`,
  },
  {
    title: 'CSS',
    level: skillLevel.Intermediate.name,
    dashPercent: 50,
    tabs: new Set<TabNames>(['Frontend Development']),
    levelAssessmentReason: `As a developer primarily integrated into the React ecosystem with Ant Design (so far), my CSS expertise is primarily applied through customizing and extending framework styles to suit my projects. I utilize external CSS files for overriding default styles, ensuring my applications maintain visual consistency. Familiarity with Flexbox and CSS Grid enables me to construct responsive layouts and align elements effectively, despite a primary focus on desktop interfaces. My approach to CSS challenges, especially when working within the constraints of Ant Design, involves crafting precise selectors to achieve desired styling effects. While my experience with responsive design, performance optimization, and cross-browser compatibility is developing, my current practices underscore a solid foundation with room for expansion into more advanced CSS techniques and broader accessibility considerations.`,
  },
  {
    title: 'Responsive Web Design',
    level: skillLevel.Beginner.name,
    dashPercent: 25,
    tabs: new Set<TabNames>(['Frontend Development']),
    levelAssessmentReason: `As a developer focusing on React and Ant Design, my journey into Responsive Web Design is just beginning. My current approach utilizes flexible layouts provided by Ant Design, with an interest in expanding my skills to include CSS media queries for more tailored responsive behaviors. While I have minimal experience with frameworks like Tailwind CSS, testing for cross-device compatibility, and performance optimization for responsive designs, my eagerness to learn and apply RWD principles is clear. The next steps in my professional development include diving deeper into media queries, exploring testing methodologies for responsiveness, and integrating accessibility into responsive designs to ensure usability across all devices.`,
  },
  {
    title: 'Tailwind CSS',
    level: skillLevel.Beginner.name,
    dashPercent: 20,
    tabs: new Set<TabNames>(['Frontend Development']),
    levelAssessmentReason: `In my Vue project, my exploration of Tailwind CSS represents an initial step towards embracing utility-first styling. I appreciate Tailwind's lightweight nature, which complements my goal to craft functional components with efficient, predefined styles. Although my comfort with the utility-first paradigm and experience with responsive design utilities in Tailwind are still developing, my enthusiasm for learning this framework is strong. I've yet to delve into customization, performance optimization, or responsive utilities, but I recognize these as important next steps in my journey with Tailwind CSS. My approach has been cautious yet optimistic, with a clear intention to deepen my understanding and practical application of Tailwind's features in future projects.`,
  },
  {
    title: 'State Management',
    level: skillLevel.Beginner.name,
    dashPercent: 25,
    tabs: new Set<TabNames>(['Frontend Development']),
    levelAssessmentReason: `In my current projects, I've begun to explore state management through React's Context API, applying it to streamline communication between components and their grandchildren. This approach has allowed me to avoid prop drilling, simplifying the transfer of data within a subset of the application. My journey into more complex aspects of state management, such as performance optimization, handling global versus local state, managing asynchronous operations, and testing state management logic, is still in its infancy. I recognize these as critical areas for development as I advance my skills in building dynamic, responsive web applications. My initial foray into state management with the Context API marks the beginning of a deeper dive into efficient state handling techniques, with plans to expand my knowledge and practical experience in the near future.`,
  },
  {
    title: 'Understanding of DOM',
    level: skillLevel.Beginner.name,
    dashPercent: 20,
    tabs: new Set<TabNames>(['Frontend Development']),
    levelAssessmentReason: `My engagement with the Document Object Model (DOM) is through the structured and component-based paradigms offered by React and Vue. In my projects, I leverage these frameworks to manipulate the DOM indirectly, focusing on optimizing re-renders to enhance performance. Event handling and dynamic content updates are managed within the framework ecosystems, utilizing libraries like Ant Design to handle user interactions seamlessly. While my direct experience with vanilla DOM manipulation and considerations for accessibility, SEO, and cross-browser compatibility is limited, my reliance on framework abstractions has allowed me to focus on application logic and user experience. As I continue to develop my skills, I recognize the importance of deepening my understanding of the DOM's underlying mechanisms to improve application performance and ensure broader accessibility and compatibility.`,
  },
  {
    title: 'Python',
    level: skillLevel.Intermediate.name,
    dashPercent: 55,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: '',
  },
  {
    title: 'FastAPI',
    level: skillLevel.Novice.name,
    dashPercent: 40,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: '',
  },
  {
    title: 'Go',
    level: skillLevel.Intermediate.name,
    dashPercent: 55,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: '',
  },
  {
    title: 'Gin',
    level: skillLevel.Novice.name,
    dashPercent: 45,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: '',
  },
  {
    title: 'Sentry (Performance Monitoring and Error Tracking',
    level: skillLevel.Advanced.name,
    dashPercent: 70,
    tabs: new Set<TabNames>(['Frontend Development', 'Backend Development']),
    levelAssessmentReason: `I have successfully integrated Sentry into multiple NestJS applications, leveraging its npm package and middleware for seamless incorporation into my projects. My use of Sentry for error tracking is strategic; I employ Sentry.captureException and Sentry.withScope within catch blocks to judiciously monitor and manage exceptions. Performance monitoring features have been instrumental in identifying optimization opportunities, such as aggregating promises with Promise.all and refining database operations, significantly improving response times. I've configured real-time alerts and notifications through Slack and automated ticket creation in JIRA to streamline issue tracking and resolution workflows. My hands-on experience ensures that issues detected by Sentry are addressed promptly, maintaining high application performance and reliability. While working primarily independently, my Sentry workflow is characterized by a diligent and responsive approach to error and performance management.`,
  },
  {
    title: 'SQL',
    level: skillLevel.Intermediate.name,
    dashPercent: 60,
    tabs: new Set<TabNames>(['Database Management']),
    levelAssessmentReason: '',
  },
  {
    title: 'ORM/ODM',
    level: skillLevel.Intermediate.name,
    dashPercent: 65,
    description: 'General',
    tabs: new Set<TabNames>(['Backend Development', 'Database Management']),
    levelAssessmentReason: '',
  },
  {
    title: 'MongoDB',
    level: skillLevel.Intermediate.name,
    dashPercent: 60,
    tabs: new Set<TabNames>(['Database Management']),
    levelAssessmentReason: '',
  },
  {
    title: 'Cloud server deployment',
    level: skillLevel.Intermediate.name,
    dashPercent: 60,
    tabs: new Set<TabNames>([
      'Backend Development',
      'DevOps and Cloud Services',
    ]),
    levelAssessmentReason: '',
  },
  {
    title: 'Cloud DB deployment',
    level: skillLevel.Intermediate.name,
    dashPercent: 55,
    tabs: new Set<TabNames>([
      'Database Management',
      'DevOps and Cloud Services',
    ]),
    levelAssessmentReason: '',
  },
  {
    title: 'Cloud Storage',
    level: skillLevel.Advanced.name,
    dashPercent: 70,
    description:
      'Creation, configuration, programmatic access including signed URLS',
    tabs: new Set<TabNames>([
      'Backend Development',
      'DevOps and Cloud Services',
    ]),
    levelAssessmentReason: '',
  },
  {
    title: 'IAM',
    level: skillLevel.Intermediate.name,
    dashPercent: 55,
    tabs: new Set<TabNames>(['DevOps and Cloud Services']),
    levelAssessmentReason: '',
  },
  {
    title: 'Docker',
    level: skillLevel.Intermediate.name,
    dashPercent: 50,
    tabs: new Set<TabNames>(['DevOps and Cloud Services']),
    levelAssessmentReason: '',
  },
  {
    title: 'Kubernetes',
    level: skillLevel.Novice.name,
    dashPercent: 30,
    tabs: new Set<TabNames>(['DevOps and Cloud Services']),
    levelAssessmentReason: '',
  },
];

export const nonTechnicalSDLCSkills = [
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
