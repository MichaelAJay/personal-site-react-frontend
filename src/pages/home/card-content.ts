export type HomeSkillCardContent = {
  title: string;
  description: string;
  imgAlt: string;
  imgSrc: string;
  sectionId: string;
};

export const LifecycleCard: HomeSkillCardContent = {
  title: 'Project lifecycle expertise',
  description:
    'Lead projects from requirements elicitation and formalization through system design, development, and deployment',
  imgAlt: 'Disk with stylized components of SDLC',
  imgSrc: '/project-lifecycle-expertise.png',
  sectionId: 'project-lifecycle',
};

export const CraftsmanshipCard: HomeSkillCardContent = {
  title: 'Code craftsmanship',
  description:
    'Committed to writing high quality, maintainable, and testable code',
  imgAlt: 'Stylized keyboard which looks like a circuit board',
  imgSrc: '/code-craftsmanship.png',
  sectionId: 'code-craftsmanship',
};

export const DedicationCard: HomeSkillCardContent = {
  title: 'Dedication',
  description:
    'I am dedicated to my profession I am dedicated to my profession I am dedicated to my profession I am dedicated to my profession',
  imgAlt: 'Image of person with short hair working in fromt of a computer',
  imgSrc: '/dedication.png',
  sectionId: 'dedication',
};

export const ContinuousLearnerCard: HomeSkillCardContent = {
  title: 'Continuous learner',
  description: 'Always working on learning new things',
  imgAlt: 'Dism image with various technology and learning related motifs',
  imgSrc: '/continuous-learner.png',
  sectionId: 'continuous-learner',
};
