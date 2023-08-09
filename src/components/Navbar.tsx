import { ReactComponent as Logo } from '../assets/pennylane-logo.svg';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

/* Hooks & Components */
import NavLink from './NavLink';
import useScrollTracker from '../hooks/useScrollTracker';

export default function Navbar() {
  const logoSize = 25;

  const {
    position: { y: scrollY },
    direction,
  } = useScrollTracker();
  const isNavHidden = scrollY > 100 && direction === 'down';

  return (
    <nav
      className={`sticky top-0 h-[90px] border-b border-gray-50 bg-white shadow-md
        ${isNavHidden ? 'translate-y-[-90px]' : ''} 
          transition-all duration-300 ease-in-out`}
    >
      <div className="space container mx-auto flex h-full justify-between py-5">
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
