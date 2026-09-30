import {  FaPaintBrush, FaCode, FaReact, FaServer, FaLock, FaTools,  FaDatabase,  } from 'react-icons/fa';

import HeroImage from '../assets/HeroImage.png';



export const assets = {
    HeroImage,
}

export const contactInfo = {
  email: 'sujanpanthi092@gmail.com',
  phone: '+977 9840963139',
  github: 'https://github.com/sujan24-w',
};

export const aboutInfo = [
    {
      icon: FaServer,
      title: 'MERN Development',
      description: 'Hands-on experience building React applications, REST APIs, authentication systems, and MongoDB-backed applications.'
    },
    {
      icon: FaPaintBrush,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies, improving my development skills, and learning through real projects and challenges.'
    },
    {
      icon: FaCode,
      title: 'Backend & APIs',
      description: 'Interested in designing reliable REST APIs, database structures, authentication flows, and server-side functionality.'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React',  'TypeScript','Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Developing server-side applications and RESTful APIs with Node.js and Express.',
    tags: ['Node.js', 'Express','REST APIs']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Working with databases to store, manage, and retrieve application data efficiently.',
    tags: ['MongoDB',  'MySQL']
  },
  {
    title: 'Authentication',
    icon: FaLock,
    description: 'Implementing user authentication, JWT-based authorization, protected routes, and secure password handling.',
    tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  },
  
  {
    title: 'Tools & Development',
    icon: FaTools,
    description: 'Using modern development tools for coding, API testing, version control, and application deployment.',
    tags: ['Git & GitHub', 'Postman', 'Render', 'Vercel']
  }
];



export const projects = [
  {
    id: 'e-garage',
    name: 'E-Garage',
    tagline: 'Two-Wheeler Garage Service Management System',
    description:
      'A multi-role two-wheeler garage service management platform designed for customers, garage owners, and mechanics.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Socket.IO',
      'Leaflet',
    ],
    contributions: [
      'Developed backend routes and database models for garage and service-related data',
      'Built frontend garage listing cards',
      'Added filtering and pagination functionality',
      'Contributed to the multi-role service platform',
    ],
  },
  {
    id: 'bmcit',
    name: 'BMCIT College Website',
    tagline: 'Common College Frontend Web Application',
    description:
      'A responsive college frontend application created as an academic project, featuring route-based navigation and an interactive content slider.',
    technologies: ['React.js', 'Tailwind CSS', 'React Router'],
    features: [
      'Route-based navigation between website sections and pages',
      'Interactive content slider',
      'Responsive and straightforward interface',
      'Common college website content',
    ],
    demoUrl: 'https://sujan24-w.github.io/bmcit-sp/',
    
  },
  {
    id: 'mern-auth',
    name: 'MERN Authentication System',
    tagline: 'Full-Stack Authentication & Recovery Flows',
    description:
      'A full-stack authentication system implementing common account authentication and recovery flows, including OTP and email verification.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Nodemailer',
      'Axios',
    ],
    features: [
      'User registration and login/logout',
      'Login and logout',
      'JWT authentication with HTTP-only cookies',
      'OTP-based email verification with expiration handling',
      'Password reset via OTP',
      'MongoDB-based user management',
     " Email delivery using Nodemailer and Gmail SMTP",
      'Authentication middleware',
    ],
    demoUrl: 'https://auth-mern-beryl.vercel.app',
    code:"https://github.com/sujan24-w/auth-mern",
    note:{
      note1:"Some authentication features may not work in the deployed demo due to production email/cookie configuration.",
      note2:"The complete authentication system has been tested successfully in the local environment.",
    }
  },
];
