import github from "../assets/social/github.png";
import linkedin from "../assets/social/linkedin.png";
import bootstrap from "../assets/skills/bootstrap.png";
import c from "../assets/skills/c.png";
import css from "../assets/skills/css.png";
import html from "../assets/skills/html.png";
import jest from "../assets/skills/jest.png";
import js from "../assets/skills/js.png";
import node from "../assets/skills/node.png";
import git from "../assets/skills/git.png";
import postgres from "../assets/skills/postgres.png";
import rails from "../assets/skills/rails.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import ruby from "../assets/skills/ruby.png";
import sql from "../assets/skills/sql.png";
import tailwind from "../assets/skills/tailwind.png";
import vite from "../assets/skills/vite.png";
import visualstudio from "../assets/skills/visualstudio.png";
import vscode from "../assets/skills/vscode.png";
import  webpack from "../assets/skills/webpack.png";
import figma from "../assets/skills/figma.png";
import code from "../assets/experience/code.png";
import database from "../assets/experience/database.png";
import design from "../assets/experience/design.png";
import resolve from "../assets/experience/resolve.png";
import books from "../assets/projects/books.png";
import math from "../assets/projects/math.png";
import bitcoin from "../assets/projects/bitcoin.png";
import film from "../assets/projects/film.png";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },

  {
    imageUrl: css,
    name: "Css",
    type: "Frontend",
  },

  {
    imageUrl: js,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: c,
    name: "C#",
    type: "Full-Stack",
  },

  {
    imageUrl: ruby,
    name: "Ruby",
    type: "Backend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: redux,
    name: "Redux",
    type: "Frontend",
  },

  {
    imageUrl: rails,
    name: "Ruby & Rails",
    type: "Full-Stack",
  },

  {
    imageUrl: vite,
    name: "Vite",
    type: "Frontend",
  },

  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },

  {
    imageUrl: tailwind,
    name: "Tailwind Css",
    type: "Frontend",
  },

  {
    imageUrl: jest,
    name: "Jest",
    type: "Testing",
  },

  {
    imageUrl: webpack,
    name: "Webpack",
    type: "Frontend",
  },

  {
    imageUrl: node,
    name: "Node.js",
    type: "Npm",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Command Prompt",
  },

  {
    imageUrl: postgres,
    name: "Postgres SQL",
    type: "Data Base",
  },

  {
    imageUrl: sql,
    name: "SQL server",
    type: "Data Base",
  },

  {
    imageUrl: vscode,
    name: "VS code",
    type: "Text editor",
  },

  {
    imageUrl: visualstudio,
    name: "Visual Studio",
    type: "Text editor",
  },

  {
    imageUrl: figma,
    name: "Figma",
    type: "UI/UX",
  },
];

export const experiences =[
  {
    title: "HTML/CSS Developer",
    institution: "Microverse",
    icon: design,
    iconBg: "#fbc3bc",
    date: "May 2021 - June 2021",
    points: [
      "Learned the basics of HTML and CSS",
      "Responsive structure using Flexbox and Grid",
      "linting with Stylelint",
      "Boostrap and Tailwind CSS",
      "Built a simple Portfolio",
      "Built a clone of the CC Global Summit 2015 page",
    ]

  },
  
  {
    title: "JavaScript Developer",
    institution: "Microverse",
    icon: code,
    iconBg: "#accbe1",
    date: "June 2021 - August 2021",
    points: [
      "Learned the basics of JavaScript",
      "ES6+ syntax",
      "DOM Manipulation",
      "Webpack",
      "Testing with Jest",
      "linting with Eslint",
      "Built a simple Todo list",
      "Built a clone of Netflix page",
    ]
  },

  {
    title: "React/Redux Developer",
    institution: "Microverse",
    icon: resolve,
    iconBg: "#d2e69c",
    date: "August 2021 - October 2021",
    points: [
      "Learned the basics of React",
      "Learned the basics of Redux",
      "React Hooks",
      "Redux",
      "React Router",
      "linting with Eslint",
      "Testing with Jest",
      "Built a simple Bookstore",
      "Built a Metrics webapp page ",
    ]
  },

  {
    title: "Ruby on Rails Developer and PostgreSQL",
    institution: "Microverse",
    icon: database,
    iconBg: "#fbc3bc",
    date: "October 2021 - December 2021",
    points: [
      "Learned the basics of Ruby",
      "Learned the basics of Rails",
      "Ruby on Rails",
      "PostgreSQL",
      "Active Record",
      "Testing with Rspec",
      "linting with Rubocop",
      "Built a simple Console app",
      "Built a clone of Budget app page",
    ]
  }
]

export const projects = [
  {
    iconUrl: books,
    theme: 'btn-back-red',
    name: 'Admin Dashboard',
    description: 'ADMIN DASHBOARD IS A WEBSITE MADE WITH REACT AND REDUX FOR THE USE OF A SIMPLE ADMINISTRATOR PANEL, IN THEORY, IT, THIS PROVIDE YOU STATISTIC ABOUT YOUR BUSSINESS.',
    link:'https://dev--lucky-moxie-8d5dd8.netlify.app/'
  },

  {
    iconUrl: math,
    theme: 'btn-back-blue',
    name: 'Nike Clone',
    description: 'NIKE CLONE IS A WEBSITE TO DISPLAY THE LATEST NIKE PRODUCTS AND SOME COMMENTS ABOUT THE QUALITY AND USER EXPERIENCE, THIS SIMPLE LANDING PAGE WAS BUILT WITH REACT',
    link: 'https://elaborate-malabi-9452c6.netlify.app/'
  },

  {
    iconUrl: bitcoin,
    theme: 'btn-back-green',
    name: 'Cripto Coin Price Tracker',
    description: 'IF YOU LIKE A LOT OF CRYPTOCURRENCY MARKETS THEN I RECOMMEND YOU THIS SITE THAT CONTAINS REAL-TIME INFORMATION ABOUT THE CRYPTOCURRENCY MARKET.',
    link: 'https://dreamy-twilight-dc3eda.netlify.app/'
  },

  {
    iconUrl: film,
    theme: 'btn-back-yellow',
    name: 'Series Review',
    description:'SERIES PAGES IS AN APP MADE WITH WEBPACK WHICH RESEMBLES NETFLIX, IN THIS PAGE USES ASYNCHRONOUS FUNCTIONS TO CONSUME AN API AND DISPLAY ALL YOUR CONTENT.',
    link: 'https://glittering-kashata-b89a93.netlify.app/'
  }
]
export const socials = [
  {
    name: 'Github',
    iconUrl: github,
    link: 'https://github.com/jdbs9514',
  },

  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/macoin/',
  }
]
