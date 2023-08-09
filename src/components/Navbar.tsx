/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Logo } from '../assets/pennylane-logo.svg';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

import NavLink from './NavLink';

export default function Navbar() {
  const logoSize = 30;

  return (
    <nav className="border-b border-gray-50 shadow-md">
      <div className="container mx-auto flex space justify-between py-5">
        <ul className="flex gap-2 md:gap-5">
          <NavLink href="/">
            <Logo title="Pennylane" />
          </NavLink>
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#blog">Blog</NavLink>
          <NavLink href="#press">Press</NavLink>
        </ul>
        <ul className="flex gap-2 md:gap-5">
          <NavLink href="https://github.com/alan-emartin" newTab>
            <FaGithub size={logoSize} title="Github | Alan Martin" />
          </NavLink>
          <NavLink
            href="https://www.linkedin.com/in/alan-martin-2426b461/"
            newTab
          >
            <FaLinkedin size={logoSize} title="LinkedIn | Alan Martin" />
          </NavLink>
          <NavLink href="https://twitter.com/alanMartinCodes" newTab>
            <FaTwitter size={logoSize} title="Twitter | Alan Martin" />
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
