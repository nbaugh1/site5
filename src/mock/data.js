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
    img: 'project.jpg',
    title: 'Where Did You Eat?',
    info:
      'Where Did You Eat is an application that helps a user keep track of the restaurants they’ve visited with help from Yelp’s API + Utilized Ruby on Rails to build an application following MVC design principles + Created a database using SQLite3 and ActiveRecord to handle data persistence and object associations + Used Google OmniAuth to implement third party log-in capabilities using Google + Used bcrypt Ruby gem to securely hash user passwords + Queried the Yelp API to fetch data about restaurants and enhance user experience by delivering deeper information',
    info2: '',
    url: 'https://youtu.be/fngmTTybbvQ',
    repo: 'https://github.com/nbaugh1/wdye', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'ReOrder',
    info:
      'Reorder is an app used to create order requests, used to help with tracking and ordering inventory using mobile devices + Utilized React and Redux to build application frontend + Used Ruby on Rails to build backend API to handle asynchronous data fetches between the frontend and database + Created a database using PostgreSQL ensuring Heroku deployment compatibility + Styled with React Bootstrap via npm package',
    info2: '',
    url: 'https://youtu.be/ZtmP3BlufDg',
    repo: 'https://github.com/nbaugh1/reorder', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Photobook',
    info:
      'Photo Book is a web application that allows a users to add photos and comments to photos as a personal photography portfolio + Built front end of application with JavaScript enabling asynchronous data fetching + Used Ruby on Rails to build a backend API to handle AJAX requests from front end + Implemented utilization of Bootstrap cdn to streamline styling of UI + Built database using SQLite3 and ActiveRecord to manage object associations',
    info2: '',
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
