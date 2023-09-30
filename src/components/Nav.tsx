import { useRef, useState } from 'react';
import { ReactComponent as Logo } from '../assets/pennylane-logo.svg';
import { FaBars } from 'react-icons/fa';

// Hooks & Components
import NavLink from './NavLink';
import useScrollTracker from '../hooks/useScrollTracker';
import useResizeHandler from '../hooks/useResizeHandler';
import useOnKeyPress from '../hooks/useOnKeyPress';

// Utils & Data
import { useOnClickOutside } from 'usehooks-ts';
import { navbarContent } from '../content';
import { getSlideFadeTransitionClasses } from '../styles/toggleAnimationClasses';
import { TEST_IDS } from '../test/constants';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Nav() {
  // State
  const [menuOpen, setMenuOpen] = useState(false);
  const { position, direction } = useScrollTracker();
  const { windowWidth } = useWindowDimensions();

  // Refs
  const navRef = useRef(null);

  // Utils
  const handleMenuClose = () => setMenuOpen(false);

  // Effects & Event Handlers
  useResizeHandler(() => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  });
  useOnClickOutside(navRef, handleMenuClose);
  useOnKeyPress(['Escape'], handleMenuClose);

  // Determine nav collapse
  const isNavCollapsed = !menuOpen && direction === 'down' && position.y > 100;

  return (
    <nav
      className={`sticky top-0 z-50 bg-white px-5 py-5 
      shadow-md transition-all duration-300 md:py-10 ${getSlideFadeTransitionClasses(
        isNavCollapsed,
      )}`}
      ref={navRef}
    >
      <div className="container mx-auto flex h-full w-full flex-col justify-between md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <a href="/" aria-label="home" data-testid="home-link">
            <Logo
              aria-hidden="true"
              title="Pennylane Logo"
              data-testid={TEST_IDS.PENNYLANE_WORDMARK_LOGO}
            />
          </a>
          <button
            aria-label={menuOpen ? 'close mobile menu' : 'open mobile menu'}
            aria-expanded={menuOpen}
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <FaBars size={24} aria-hidden="true" />
          </button>
        </div>

        <div
          className={`flex flex-col gap-6 overflow-hidden opacity-100 md:flex-row md:items-center md:gap-12
          ${
            !menuOpen && windowWidth < 769
              ? 'invisible h-0 pt-0 opacity-0'
              : 'visible h-auto pt-6 opacity-100'
          }
          transition-all duration-200 md:h-auto md:overflow-y-auto md:pt-0`}
        >
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            {navbarContent.internalLinks.map(({ label, url }) => (
              <li key={label}>
                <NavLink url={url}>{label}</NavLink>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-6">
            {navbarContent.socialLinks.map(({ label, icon: Icon, url }) => (
              <li key={label}>
                <NavLink
                  title={label}
                  aria-label={label}
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
