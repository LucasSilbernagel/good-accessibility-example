import { useState } from 'react';
import { ReactComponent as Logo } from '../assets/pennylane-logo.svg';
import { navbarContent } from '../content';
import { FaBars } from 'react-icons/fa';
import useScrollTracker from '../hooks/useScrollTracker';
import useResizeHandler from '../hooks/useResizeHandler';
import NavLink from './NavLink';

export default function Nav() {
  // State
  const [menuOpen, setMenuOpen] = useState(false);
  const { position, direction } = useScrollTracker();

  // Effects
  useResizeHandler(() => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  });

  // Determine nav collapse
  const isNavCollapsed = !menuOpen && direction === 'down' && position.y > 100;

  // Styles
  const navStyles = isNavCollapsed
    ? '-translate-y-full opacity-0'
    : 'translate-y-0 opacity-100';

  return (
    <nav
      role="navigation"
      aria-label="main navigation"
      className={`sticky top-0 z-50 bg-white px-5 py-5 
      shadow-md transition-all duration-300 md:py-10 ${navStyles}`}
    >
      <div className="container mx-auto flex h-full w-full flex-col justify-between md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <a href="/" aria-label="navigate to home page" title="Home">
            <Logo aria-hidden="true" title="Pennylane Logo" />
          </a>
          <button
            aria-label="toggle menu"
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <FaBars size={24} aria-hidden="true" />
          </button>
        </div>

        <div
          className={`flex flex-col gap-6 overflow-hidden opacity-100 md:flex-row md:items-center md:gap-12
          ${menuOpen ? 'h-auto pt-6 opacity-100' : 'h-0 pt-0 opacity-0'}
          transition-all duration-200 md:h-auto md:overflow-y-auto md:pt-0`}
        >
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            {navbarContent.internalLinks.map(({ label, url }) => (
              <li key={label}>
                <NavLink aria-label={`navigates to ${label}`} url={url}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-6">
            {navbarContent.socialLinks.map(({ label, icon: Icon, url }) => (
              <li key={label}>
                <NavLink
                  aria-label={`navigates to ${label} (opens new tab)`}
                  url={url}
                  openInNewTab
                >
                  <Icon size={24} aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
