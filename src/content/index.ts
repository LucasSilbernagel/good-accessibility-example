import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export const navbarContent = {
  internalLinks: [
    {
      label: 'Products',
      url: '#products',
    },
    {
      label: 'About',
      url: '#about',
    },
    {
      label: 'Blog',
      url: '#blog',
    },
    {
      label: 'Press',
      url: '#press',
    },
  ],
  socialLinks: [
    {
      label: 'Twitter | @alanMartinCodes',
      url: 'https://twitter.com/alanMartinCodes',
      icon: FaTwitter,
    },
    {
      label: 'Github | alan-emartin',
      url: 'https://github.com/alan-emartin',
      icon: FaGithub,
    },
    {
      label: 'Linkedin | Alan Martin - Software Engineer',
      url: 'https://www.linkedin.com/in/alan-martin-2426b461/',
      icon: FaLinkedin,
    },
  ],
};
