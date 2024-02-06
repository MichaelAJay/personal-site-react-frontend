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
    dashPercent: 85,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: `In my Node.js development journey, I've built a wide array of applications, spanning from user-centric solutions to complex integration services. My approach to asynchronous programming primarily leverages async/await, with strategic use of Promise.all and Promise.allSettled to optimize concurrent operations. I ensure robust error handling by employing explicit checks and utilizing Sentry for error monitoring, demonstrating my commitment to building stable and reliable applications. Performance is a key focus, with Sentry again proving invaluable for monitoring, complemented by targeted caching strategies. Security practices, including CORS, rate limiting, and JWTs for authentication, form the bedrock of my approach to safeguarding applications. Through diligent package management with npm and a strong emphasis on testing with Jest, I maintain high-quality, dependable code. My deployment processes leverage GCP Cloud Build and Docker, underscoring my proficiency in modern deployment methodologies.`,
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
    levelAssessmentReason: `In developing REST APIs, I prioritize logical endpoint structure and effective HTTP method application, ensuring clarity and consistency. My approach to security includes CORS, rate limiting, and JWTs, with a focus on efficient validation practices. Although new to API versioning and load testing, I excel in documentation using Swagger, performance optimization, and meaningful error handling. My testing strategy, employing Supertest and Jest for my Node.js servers, underlines my commitment to quality.`,
  },
  {
    title: 'NestJS',
    level: skillLevel.Advanced.name,
    dashPercent: 80,
    description: 'REST deployments',
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: `In NestJS, I adeptly use Modules, Controllers, and Services for clean application structure and efficient dependency injection, enhancing code management. My experience covers integrating SQL and NoSQL databases, favoring Postgres & Prisma for SQL DBs and the native MongoDB Node.js driver for MongoDB, and implementing security with Guards for authentication. While primarily focused on unit testing with Jest, I also tackle performance issues by optimizing async operations and database queries. Although new to microservices in NestJS, my foundation is solid.`,
  },
  {
    title: 'Express',
    level: skillLevel.Intermediate.name,
    dashPercent: 55,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: `While my primary focus has been on NestJS applications, which use Express under the hood, I've developed a solid understanding of Express for building direct applications. My approach involves structuring applications in layers for clear separation of concerns, though my use of Express-specific middleware is limited. I design RESTful APIs with attention to standard practices and secure them with CORS, rate limiting, and JWTs. Performance optimization and error handling are approached with Node.js best practices, ensuring robust application functionality. My testing strategy includes Supertest and Jest, emphasizing quality and reliability. I appreciate that Express has a robust and thriving ecosystem and community support system, and have found its documentation succinct, and highly informative, useful and well-organized.`,
  },
  {
    title: 'Fastify',
    level: skillLevel.Intermediate.name,
    dashPercent: 50,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: `I've leveraged Fastify for its performance advantages, navigating its steeper learning curve and smaller ecosystem compared to Express. Although I primarily use NestJS, I prefer the Fastify adapter, ajv validation, and of course Fastify packages for handling needs like multipart requests. Despite challenges in dependency injection and adapting to a less mature community, I effectively utilized Fastify's plugin system and embraced schema validation with ajv, benefiting from TypeScript integration. My approach to error handling and security, using JWTs and CORS, aligns with best practices. Testing with Supertest and Jest, I maintain a focus on quality and reliability. My journey with Fastify is marked by adaptability and a solid grasp of foundational features.`,
  },
  {
    title: 'hapi',
    level: skillLevel.Intermediate.name,
    dashPercent: 50,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: `My initial foray into Node.js development involved working with a hapi-based server, delving into the framework's capabilities through a microservice project integrating SenecaJS for service communication. While my direct engagement with hapi's plugin system has been limited, I've applied JWT for authentication and leveraged Joi within controller classes for request validation, adhering to established microservice patterns. My error handling strategy aligns with Node.js idioms, focusing on creating client-friendly error responses at the api/controller layer. Although performance optimization hasn't been a significant focus, my testing experience, albeit minimal with mocha and chai, underscores a foundational understanding of hapi's ecosystem. This background positions me as an intermediate user, equipped with a solid base and potential for deeper exploration into hapi's advanced features.`,
  },
  {
    title: 'Request Validation',
    level: skillLevel.Advanced.name,
    dashPercent: 75,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: `In my development work, I've embraced a variety of validation tools across Node.js and Go, with a notable preference for ajv due to its performance and flexibility. My integration strategies vary by framework, leveraging global validation pipelines in NestJS and direct route handler validations in both Node.js and Go environments. I've devised custom validation logic for complex scenarios, such as exclusive or inclusive property requirements, demonstrating my ability to handle nuanced validation needs. My approach to error handling is tailored to the validation tool used, ensuring clear, actionable feedback for clients. Security is a paramount concern, with request validation serving as a critical first defense line by strictly whitelisting allowed properties. My commitment to using efficient validation libraries like ajv reflects a proactive stance on performance management. Over time, my practices have evolved towards more schema-based validation techniques, particularly favoring inline validations for their directness and precision. I've switched to using ajv in my NestJS projects as well.`,
  },
  {
    title: 'Jest',
    level: skillLevel.Intermediate.name,
    dashPercent: 60,
    tabs: new Set<TabNames>(['Testing']),
    levelAssessmentReason: `In my two years of experience with Jest, I've honed my skills in unit, HTTP, and integration testing, primarily within the NestJS ecosystem. My proficiency with Jest's mocking features has enabled me to construct thorough tests for backend services, focusing on isolating dependencies and ensuring method functionalities are accurately verified. While my testing configurations leverage the robust defaults of NestJS, my approach to test coverage—meticulously analyzing execution paths—underscores a disciplined methodology to quality assurance. Although my integration of Jest with CI/CD pipelines and engagement with the latest testing practices remain areas for further exploration, my foundational knowledge and practical application of Jest in TypeScript projects represent a solid intermediate proficiency. My troubleshooting strategies, relying on Jest's documentation and debugging tools, reflect a pragmatic approach to overcoming testing challenges. As I continue to develop my skills in Jest and testing best practices, I aim to expand my understanding of Jest's capabilities and integrate continuous testing into CI/CD workflows, further enhancing the quality and reliability of the applications I develop.`,
  },
  {
    title: 'Unit Testing',
    level: skillLevel.Intermediate.name,
    dashPercent: 60,
    tabs: new Set<TabNames>(['Testing']),
    levelAssessmentReason: `Over the past two years, my journey with unit testing has been grounded in practical application within NestJS applications, supported by theoretical insights from my software engineering education. My proficiency with Jest, as facilitated by NestJS's streamlined testing capabilities, has enabled me to effectively isolate and validate the functionality of backend services. Although I aim for high test coverage by diligently considering all possible code paths, my approach has room for growth in formal coverage measurement, integration with CI processes, and exploring TDD more fully in professional contexts. My troubleshooting process underscores the iterative learning opportunity presented by unit testing, challenging and refining my understanding of code behavior. Moving forward, I recognize the importance of formalizing my approach to test coverage, incorporating testing more deeply into CI/CD workflows, and engaging with the software testing community to stay abreast of best practices and emerging tools. My commitment to leveraging unit testing as a cornerstone of quality assurance positions me for continuous improvement and deeper exploration of advanced testing strategies.`,
  },
  {
    title: 'Integration Testing',
    level: skillLevel.Intermediate.name,
    dashPercent: 50,
    tabs: new Set<TabNames>(['Testing']),
    levelAssessmentReason: `Over the last two years, my journey with integration testing has been characterized by a focused application within NestJS backend development, employing true dependencies to assess the integration between different application layers. My reliance on Jest for both mocking external services and executing integration tests underscores a solid grasp of using testing frameworks to simulate real-world application behaviors. While I've successfully navigated the complexities of integration testing in this context, my experience has not yet extended to incorporating these tests into CI pipelines, nor have I delved into performance, load, or security testing as part of my integration testing strategy. The absence of collaboration with broader development and operations teams on integration testing efforts and a proactive approach to staying updated with the latest testing practices suggest areas for further growth. Moving forward, expanding my integration testing practices to include CI integration, advanced testing types, and fostering collaboration will be crucial steps in evolving from an intermediate proficiency level to an advanced practitioner, fully leveraging integration testing to enhance application quality and reliability.`,
  },
  // {
  //   title: 'E2E Testing',
  //   level: skillLevel.Intermediate.name,
  //   dashPercent: 40,
  //   tabs: new Set<TabNames>(['Testing']),
  //   levelAssessmentReason: '',
  // },
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
    level: skillLevel.Novice.name,
    dashPercent: 30,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: `Having embarked on a journey with Python around a decade ago, my proficiency has been rejuvenated through the development of a FastAPI server, marking my foray back into Python's evolving landscape. This endeavor, focused on creating efficient routes for a gaming application, has solidified my foundational skills in Python, albeit within a narrow scope. My experience, while limited to FastAPI for asynchronous server development, underscores a nascent yet growing understanding of Python's potential. Absence of engagement with extensive libraries, advanced features, and performance optimization strategies earmarks my current standing as a Novice. This rating is a testament to my foundational grasp and the onset of a deeper exploration into Python's capabilities, with a commitment to broaden my expertise through continuous learning and application.`,
  },
  {
    title: 'FastAPI',
    level: skillLevel.Novice.name,
    dashPercent: 30,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: `My foray into FastAPI has been marked by the development of an asynchronous server, catering to a niche functionality within a web application. This initiative, characterized by two primary routes for data retrieval and validation, has laid the groundwork for my understanding of FastAPI's capabilities and its promise for future project scalability. Adhering to RESTful principles, my approach has been methodical, yet remains nascent, with much of FastAPI's extensive feature set like dependency injection, security, and advanced asynchronous programming yet to be explored. My current engagement reflects a novice level proficiency, underpinned by a keen interest in harnessing FastAPI's full potential. As I venture deeper into FastAPI's ecosystem, I anticipate enriching my skill set with more complex features, robust testing, and security practices, marking the next phase of my development journey.`,
  },
  {
    title: 'Go',
    level: skillLevel.Novice.name,
    dashPercent: 40,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: `My initial foray into Go has been characterized by the development of a web server and the implementation of the Sierpinski triangle algorithm, showcasing my ability to apply Go in creating functional and algorithmic solutions. Leveraging Go's standard library and the Gin framework, I've embarked on a journey to understand Go's potential in web development and computational tasks. Although my project incorporates essential features like form handling and SVG generation, it remains at a foundational level, with concurrency, testing, and performance optimization yet to be explored. My current proficiency with Go is encapsulated by a novice ranking, underpinned by a strong foundation and a clear path for growth. Embracing Go's idiomatic practices, such as error handling and code organization, I've laid the groundwork for advancing my skills, with an eagerness to delve into Go's concurrency model and embrace a more comprehensive testing and optimization strategy in future projects. I've also implemented GORM as a DB client and am making DB requests to it.`,
  },
  {
    title: 'Gin',
    level: skillLevel.Novice.name,
    dashPercent: 40,
    tabs: new Set<TabNames>(['Backend Development']),
    levelAssessmentReason: `In my recent project utilizing the Gin framework, I've harnessed its capabilities to develop a web server that not only processes and validates form inputs but also dynamically generates SVG representations through the Sierpinski triangle algorithm. My approach to routing and middleware is structured, with a clear separation of concerns within my application's architecture. Utilizing 'ShouldBindJSON' for efficient data validation, my work reflects a growing proficiency in handling complex request and response scenarios. The integration of GORM for database interactions enriches my backend development skills, marking a transition from novice to intermediate proficiency in leveraging Gin's ecosystem. My implementation of signed JWTs for secure authentication further underscores my commitment to robust security practices. While my journey with Gin is marked by foundational successes and a solid grasp of its core functionalities, I recognize the path ahead includes expanding my expertise into performance optimization, testing strategies, and deeper exploration of Gin's advanced features.`,
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
    levelAssessmentReason: `Over the past five years, my engagement with SQL, particularly PostgreSQL, has been foundational to my role in developing backend web applications. My proficiency extends from constructing complex queries involving multiple joins and conditions to intuitively designing normalized database schemas, leveraging my academic background in advanced database design. While my direct experience with query optimization and advanced SQL functionalities remains limited, my practical understanding of SQL through both direct interaction and ORM interfaces underpins my capability to effectively manage and manipulate data for backend development. My approach to transactions and concurrency control, guided by the principles of ACID compliance and performance consideration, further exemplifies my intermediate proficiency in SQL. This blend of theoretical knowledge and practical application positions me as an intermediate SQL practitioner, equipped with a solid foundation and a clear trajectory for continued growth and deeper exploration of SQL's capabilities.`,
  },
  {
    title: 'ORM/ODM',
    level: skillLevel.Intermediate.name,
    dashPercent: 60,
    description: 'General',
    tabs: new Set<TabNames>(['Backend Development', 'Database Management']),
    levelAssessmentReason: `Over the last five years, my journey with ORM and ODM technologies has been marked by a continuous learning curve and an evolving preference for tools that enhance development efficiency and database interaction. Starting with Sequelize and transitioning towards Prisma and GORM, my approach has been characterized by a keen understanding of ORM/ODM integration, focused on maximizing their benefits while maintaining application performance and security. Although I have yet to fully grasp certain advanced problems like the N+1 query issue, my proactive management of database connections, migrations, and schema updates, coupled with my ability to directly interact with databases when necessary, demonstrates an intermediate proficiency level. My preference for tools like Prisma and the MongoDB Node.js driver over their alternatives underscores my value for simplicity and efficiency in development workflows. Furthermore, my specific strategies for error handling and monitoring, including the use of Sentry, reflect a comprehensive and mature approach to ORM/ODM usage. This blend of practical experience, strategic integration, and preference for intuitive tools positions me as a proficient practitioner, poised for further exploration and mastery of ORM/ODM technologies.`,
  },
  {
    title: 'MongoDB',
    level: skillLevel.Intermediate.name,
    dashPercent: 55,
    tabs: new Set<TabNames>(['Database Management']),
    levelAssessmentReason: `Having embarked on a journey with MongoDB four years ago through Mongo University's Developer's Path, my proficiency has grown from foundational coursework to practical application in several Node.js projects. My experience spans from data modeling for complex electronic signature processes to implementing security measures via MongoDB Atlas, illustrating a well-rounded understanding of MongoDB's capabilities. While my hands-on experience with advanced features like the aggregation framework, sharding, and replication remains theoretical, my commitment to applying these concepts in future projects signals a readiness to deepen my MongoDB expertise. My use of transactions in MongoDB to ensure referential integrity further demonstrates an intermediate proficiency level, balancing practical application with theoretical knowledge. Through MongoDB Atlas, I've honed my skills in database administration, leveraging cloud-based management tools to enhance database security and efficiency. My trajectory in MongoDB proficiency is marked by continuous learning and application, positioning me as an intermediate practitioner eager to explore MongoDB's advanced functionalities in more depth.`,
  },
  {
    title: 'Cloud server deployment',
    level: skillLevel.Intermediate.name,
    dashPercent: 60, // Note: ChatGPT assessed me as "Advanced, 70%...".  Something to think on.
    tabs: new Set<TabNames>([
      'Backend Development',
      'DevOps and Cloud Services',
    ]),
    levelAssessmentReason: `Over the course of my career, I've cultivated a strong proficiency in cloud server deployment, particularly within the Google Cloud Platform, augmented by foundational knowledge in AWS. My expertise encompasses a range of cloud services and deployment models, from serverless architectures in Cloud Run to containerized applications managed with Kubernetes (GKE). I've successfully implemented CI/CD workflows, leveraging Cloud Build for automated deployments, and have demonstrated skill in configuring network and security settings, including VPCs and SSL certificates. My work with various database systems, both SQL and NoSQL, further attests to my ability to design and manage comprehensive cloud-based solutions. While my experience with cost management and performance optimization remains limited, my foundational knowledge and hands-on experience position me as an advanced practitioner in cloud server deployment. My dedication to learning and applying the latest cloud technologies drives my ongoing development in this rapidly evolving field.`,
  },
  {
    title: 'Cloud DB deployment',
    level: skillLevel.Intermediate.name,
    dashPercent: 55,
    tabs: new Set<TabNames>([
      'Database Management',
      'DevOps and Cloud Services',
    ]),
    levelAssessmentReason: `Over several years, I've developed a proficiency in cloud database deployment, focusing on Google Cloud services like Cloud SQL and Firestore, alongside integrating MongoDB Atlas for robust database solutions. My approach to database management is pragmatic, prioritizing scalability and security through managed services while also employing custom solutions on Compute Engine for cost-sensitive projects. Although my experience with data migration and explicit cost optimization strategies is limited, my capability to navigate cloud database deployments effectively—balancing cost, performance, and security considerations—positions me as an intermediate to advanced practitioner. My successful use of IAM for secure service integration and reliance on built-in features of managed services for disaster recovery and scalability underlines a strategic approach to cloud database deployment. My journey reflects a commitment to leveraging cloud technologies to meet diverse project requirements, with a continuous openness to expanding my expertise in areas like cost management and advanced data migration techniques.`,
  },
  {
    title: 'Cloud Storage',
    level: skillLevel.Intermediate.name,
    dashPercent: 50,
    description:
      'Creation, configuration, programmatic access including signed URLS',
    tabs: new Set<TabNames>([
      'Backend Development',
      'DevOps and Cloud Services',
    ]),
    levelAssessmentReason: `My experience with cloud storage, primarily through AWS S3 and Google Cloud Storage, has been centered on developing secure storage solutions for sensitive user credentials, underpinned by robust IAM policies and access control mechanisms. Leveraging signed URLs, I've facilitated time-limited public access to private bucket data, ensuring security and privacy. Although my projects have not yet required complex data lifecycle management or optimization strategies, my successful integration of cloud storage within NestJS applications demonstrates a solid foundation in cloud storage utilization. This integration has been streamlined by the cohesive ecosystem provided by Google Cloud Storage, enabling efficient and secure application development workflows. While my engagement with advanced features like storage classes, large-scale data transfers, and backup strategies remains limited, my current focus has honed my skills in securing and integrating cloud storage, positioning me as an intermediate practitioner ready to expand into more complex cloud storage capabilities.`,
  },
  {
    title: 'IAM',
    level: skillLevel.Novice.name,
    dashPercent: 40,
    tabs: new Set<TabNames>(['DevOps and Cloud Services']),
    levelAssessmentReason: `My engagement with IAM systems, notably Google Cloud IAM and AWS IAM, has centered around configuring service accounts to facilitate secure interactions between cloud-based backend services and resources like Cloud SQL and Cloud Storage. While my experience with complex IAM policy creation and role management is limited to direct, task-specific applications, my successful use of service accounts for securing service-to-service communications underscores a foundational proficiency in IAM. Although my journey with IAM has not extensively covered areas like identity federation beyond following procedural guides, user and group management, or in-depth security and compliance measures, my capability to implement and manage key IAM functionalities positions me at a novice to intermediate level. Moving forward, I aim to deepen my understanding and application of IAM principles, exploring broader aspects of policy management, security best practices, and advanced IAM features to enhance my proficiency and contribute more effectively to secure cloud architectures.`,
  },
  {
    title: 'Docker',
    level: skillLevel.Intermediate.name,
    dashPercent: 50,
    tabs: new Set<TabNames>(['DevOps and Cloud Services']),
    levelAssessmentReason: `Over the last 2-3 years, my journey with Docker has encompassed a range of applications, from utilizing Docker Compose for educational purposes to integrating Dockerfiles into CI/CD pipelines for automated container image creation and deployment. My experience extends to deploying third-party Docker images on cloud platforms, including GKE and Compute Engine, leveraging managed Kubernetes services albeit with a limited understanding. While my approach to Docker has been somewhat 'cookbook'—relying on established patterns for image creation and management—I've successfully employed volumes for persistent storage in database containers and integrated Docker into CI/CD workflows using Cloud Build triggers, significantly enhancing deployment processes. Despite facing challenges in troubleshooting and a lack of formal security measures in Docker environments, my practical experience underscores an intermediate proficiency level. My use of Docker has not extensively covered development and testing environments or detailed security practices, indicating areas for potential growth. As I continue to build on this foundation, I aim to deepen my understanding of Docker's capabilities, particularly in areas of security, orchestration, and advanced container management, to fully leverage Docker's potential in future projects.`,
  },
  {
    title: 'Kubernetes',
    level: skillLevel.Novice.name,
    dashPercent: 35,
    tabs: new Set<TabNames>(['DevOps and Cloud Services']),
    levelAssessmentReason: `My Kubernetes journey has been characterized by deploying and managing clusters within the managed service environment of Google Kubernetes Engine (GKE). My practical experience is highlighted by deploying managed Kubernetes clusters, including configuring ingress controllers and network policies, largely following best practices and templates provided by GCP documentation. While I have successfully implemented sidecar containers for specific functionality such as Cloud SQL access, my overall experience with Kubernetes has been guided by the managed services' frameworks, without extensive engagement in cluster management, security, monitoring, or advanced configuration. The challenges I've encountered have been resolved through perseverance and reference to documentation, indicating a foundational level of proficiency with Kubernetes. Moving forward, I aim to deepen my understanding of Kubernetes, expanding my skill set to include more advanced configurations, proactive monitoring and logging, and more effective troubleshooting techniques, to fully leverage the power and flexibility of Kubernetes in cloud-native applications.`,
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
