/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Logo } from '../assets/pennylane-logo.svg';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

import NavLink from './NavLink';
import useScrollPosition from '../hooks/useScrollPosition';

export default function Navbar() {
  const logoSize = 25;
  const { scrollY } = useScrollPosition();

  return (
    <nav className="border-b border-gray-50 shadow-md h-[90px]">
      <div className="container mx-auto flex space justify-between py-5 h-full">
        <div className="flex items-center">
          <NavLink href="/" wrapper="div">
            <Logo title="Pennylane" />
          </NavLink>
        </div>
        <ul className="flex items-center gap-2 md:gap-8">
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#blog">Blog</NavLink>
          <NavLink href="#press">Press</NavLink>
        </ul>
        <ul className="flex items-center gap-2 md:gap-5">
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
