import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Nick | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Personal website for Nick Baughman', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Nick',
  subtitle: "I'm a software developer.",
  cta: 'More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    "My name is Nick. I live in Brooklyn, New York. I'm a Fullstack Software Developer.",
  paragraphTwo: 'My  technical skills include:',
  paragraphThree: 'JavaScript',
  paragraphFour: 'Ruby',
  paragraphFive: 'ReactJS/Redux',
  paragraphSix: 'Ruby on Rails',
  paragraphSeven: 'SQL',
  paragraphEight: 'GraphQL',
  paragraphNine: 'GatsbyJS',
  resume:
    'https://docs.google.com/document/d/1C7xzSib3-c18ZfZKj3NuliDL97Cxeueg4H_x1EzVDyY/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Where Did You Eat?',
    info: '',
    info2: '',
    url: 'https://youtu.be/fngmTTybbvQ',
    repo: 'https://github.com/nbaugh1/wdye', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'ReOrder',
    info: '',
    info2: '',
    url: 'https://youtu.be/ZtmP3BlufDg',
    repo: 'https://github.com/nbaugh1/reorder', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Photobook',
    info: '',
    info2: '',
    url: 'https://youtu.be/A3ZeoXQIIlw',
    repo: 'https://github.com/nbaugh1/photo-book', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's talk",
  btn: 'Contact Me',
  email: 'nbaugh1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/Nbaugh1',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nickbaughman/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/nbaugh1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
