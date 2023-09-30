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
      label: 'Github',
      url: 'https://github.com/PennyLaneAI/pennylane',
      icon: FaGithub,
    },
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/company/pennylaneai/',
      icon: FaLinkedin,
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/PennyLaneAI',
      icon: FaTwitter,
    },
  ],
};
