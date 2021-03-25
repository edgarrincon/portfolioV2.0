/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Edgar Rincón » Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hi, Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Edgar',
  subtitle: "I'm a Web Developer",
  cta: 'know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'edgar.jpg',
  paragraphOne:
    'Web Developer with 1+ years of experience in designing and developing user interfaces, testing, debugging, and training staff within eCommerce technologies',
  paragraphTwo:
    'Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiency.',
  paragraphThree: 'Do you want to hire me? take a look at Resumen',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'StandardsApps.jpg',
    title: 'Standards Apps',
    info: 'Web Development according to your business needs, StartUp made 100% with React',
    info2: 'They makes landing page, eCommerce, magazine, portfolio, blogs, online booking & more',
    url: 'https://standardsapps.com/',
    repo: 'https://github.com/edgarrincon/standards', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lacumbremarket.jpg',
    title: 'La Cumbre Market',
    info: 'Physical and online MARKET & BAKERY',
    info2: 'eCommerce made by Woocommerce sync with Odoo ERP',
    url: 'https://lacumbremarket.com/',
    repo: 'https://github.com/edgarrincon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bsi.jpg',
    title: 'BSI',
    info: 'Installation Done Right',
    info2: 'An amazing site for an wonderful company made with vanilla Javascript',
    url: 'https://bsi.vercel.app/',
    repo: 'https://github.com/edgarrincon/bsi', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pisodeportivo.jpg',
    title: 'Piso Deportivo',
    info: 'Sport Web Application',
    info2: 'Latest news on sports and opinion made with React and Wordpress (Frontity)',
    url: 'https://pisodeportivo.com/',
    repo: 'https://github.com/edgarrincon/pisodeportivo', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'edgarrinconmoran@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/edgarrinconmora',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/edgarrinconmoran/',
    },
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://wa.me/+584246132492?text=Hi%20Edgar.%20',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/edgarrincon/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
