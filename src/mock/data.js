import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Nick | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Personal website for Nick Baughman', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Nick',
  subtitle: 'I write code',
  cta: 'Find Out More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    "My name is Nick. I live in Brooklyn, New York. I'm a Fullstack Software Developer. I'm expereinced in Object Oriented Programming, Desinging MVC based web apps, building and working with REST APIs. I'm also an armature photographer, artist, political junkie. Also, if you hire me you can play with my two dogs. ",
  paragraphTwo: 'My  technical skills include:',
  paragraphThree: '-JavaScript',
  paragraphFour: '-Ruby',
  paragraphFive: '-ReactJS/Redux',
  paragraphSix: '-Ruby on Rails',
  paragraphSeven: '-SQL',
  paragraphEight: '-GraphQL',
  paragraphNine: '-GatsbyJS',
  resume:
    'https://docs.google.com/document/d/1C7xzSib3-c18ZfZKj3NuliDL97Cxeueg4H_x1EzVDyY/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'wdye-img.png',
    title: 'Where Did You Eat?',
    info:
      'Where Did You Eat is an application that helps a user keep track of the restaurants they’ve visited with help from Yelp’s API.',
    info2: '-Built with Ruby on Rails and SQLite3',
    info3: '-Utilizes ActiveRecord, Google OmniAuth, bcrypt',
    info4: '-Application demonstrates MVC design principles, RESTful APIs',
    url: 'https://youtu.be/fngmTTybbvQ',
    repo: 'https://github.com/nbaugh1/wdye', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'reorder-img.png',
    title: 'ReOrder',
    info:
      'Reorder is an app used to create order requests, used to help with tracking and ordering inventory using mobile devices',
    info2:
      '-Reorder is a full-stack application with a ReactJS/Redux frontend and Ruby on Rails backend',
    info3: '-Database built with PostgreSQL, deployed to Heroku, styled with React Bootstrap',
    url: 'https://youtu.be/ZtmP3BlufDg',
    repo: 'https://github.com/nbaugh1/reorder', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'photobook-img.png',
    title: 'Photobook',
    info:
      'Photo Book is a web application that allows a users to add photos and comments to photos as a personal photography portfolio',
    info2:
      '-A fullstack application with a vanilla JavaScript frontend and a Ruby on Rails backend',
    info3: '-Utilizes ACtiveRecord, SQLite3, AJAX, Bootstrap',
    url: 'https://youtu.be/A3ZeoXQIIlw',
    repo: 'https://github.com/nbaugh1/photo-book', // if no repo, the button will not show up
  },
];

// BLOG  DATA
export const blogData = {
  info: 'test info',
};

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
