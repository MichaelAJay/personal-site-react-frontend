export const aboutSite = {
  title: 'About this Website',
  brief:
    "This website is intended to be an ever-improving display of my capabilities, especially as they relate to web application development.  It's my learning ground (especially for frontend development as well as Go development), a place for experimentation, and a place to showcase my current capabilities.",
  p2: "This website is created using React & Ant Design on the frontend, and Go with Gin framework on the backend. Upfront, I'll mention that I know that it isn't responsive - that's coming, although I have quite a long TODO list between this website and some other projects. The frontend is deployed on GitHub Pages, and the backend is deployed using a Docker container and a Google Compute Engine VM.",
  p3: `Check out the 'Oddities' section. Right now, there's a Sierpinski triangle viewer, which is the first meaningful code I wrote in Go.`,
  p4: `Perhaps you see the Login button and say "Why?". Fair question - and one with no answer hwich provides a good reason to create an account and log in. I use it to authenticate and view messages from the application in the conditionally-rendered "Admin" tab. If you're interested, feel free to check out the utility function used for that conditional rendering `,
  callForFeedback: `What do you think I could improve? I'm always open to constructive feedback - send me a message from the Contact section!`
};

export const thingsIveLearned = [
  'React - applying development design principles to the frontend, in the context of JSX.  For instance, code reuse and composibility at the component level',
  'Special knowledge gained in use of React Hooks - both built-in Hooks and custom creations',
  'Ant Design, CSS, & how to get them to place nicely with each other',
  `Separation of concerns - applied to the front end (see note above about splitting component semantics and content)`,
];

export const thingsILike = [
  'Separation of component semantics from content.  As an example, this text (yes, THIS text) is in a .ts file and is imported into the ',
];

export const recognizedPlacesToImprove = [
  'Responsive design',
  'Accessibility',
  'Technical Skills Search feature'
];

export const wips = [
  'The whole site',
  'Colors and sections',
  'Sharpening up my Contact Me form page',
  'The lists',
  'Removing some artifacts I put in place to learn (did you notice the blue corners peaking out around the content sections?',
  'The animation which occurs when navigating from a section with a side navigation panel to one without',
  'Changing the scrollbar color',
  'Responsive design - especially the "Skills Description" modal',
  'Skill badges - implement database storage and API retrieval',
  'Error notification beautification',
];
