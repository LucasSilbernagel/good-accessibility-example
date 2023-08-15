import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { navbarContent } from '../content';
import Nav from './Nav';
import { TEST_IDS } from '../test/constants';

describe('<Nav />', () => {
  beforeEach(() => {
    render(<Nav />);
  });

  it('renders navbar component', () => {
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  describe('internal links', () => {
    it('renders correctly', () => {
      const navElement = screen.getByRole('navigation');

      navbarContent.internalLinks.forEach((link) => {
        const linkElement = screen.getByText(link.label);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', link.url);
        expect(navElement).toContainElement(linkElement);
      });
    });
  });

  describe('Home link', () => {
    it('renders correctly', () => {
      const navElement = screen.getByRole('navigation');
      const linkElement = screen.getByTitle('Home');
      const logoElement = screen.getByTestId(TEST_IDS.PENNYLANE_WORDMARK_LOGO);

      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', '/');
      expect(navElement).toContainElement(linkElement);
      expect(logoElement).toBeInTheDocument();
      expect(linkElement).toContainElement(logoElement);
    });
  });

  describe('social links', () => {
    it('renders external links correctly (new tab, rel, etc)', () => {
      const navElement = screen.getByRole('navigation');

      navbarContent.socialLinks.forEach((link) => {
        const linkElement = screen.getByTitle(link.label);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', link.url);
        expect(navElement).toContainElement(linkElement);
        expect(linkElement).toHaveAttribute('target', '_blank');
        expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });
  });

  describe('scroll behavior', () => {
    it('renders navbar visible on initial render', () => {
      const navElement = screen.getByRole('navigation');
      expect(navElement).not.toHaveClass('-translate-y-full');
    });

    it('renders navbar hidden on scroll', () => {
      const navElement = screen.getByRole('navigation');
      fireEvent.scroll(window, { target: { scrollY: 150 } });
      expect(navElement).toHaveClass('-translate-y-full');
    });

    it('renders navbar visible on scroll up', () => {
      const navElement = screen.getByRole('navigation');
      fireEvent.scroll(window, { target: { scrollY: 250 } });
      expect(navElement).toHaveClass('-translate-y-full');
      fireEvent.scroll(window, { target: { scrollY: 0 } });
      expect(navElement).not.toHaveClass('-translate-y-full');
    });

    it('renders navbar visible on refresh with a specific scroll position', () => {
      // this test may be flaky, the goal was to mimic a refresh with a specific scroll position and rerendering the navbar
      const { container, rerender } = render(<Nav />);
      window.scrollTo(0, 250);
      rerender(<Nav />);
      const navElement = container.querySelector('nav');
      waitFor(() => {
        expect(window.scrollY).toBeGreaterThan(0);
      });
      expect(navElement).not.toHaveClass('-translate-y-full');
    });
  });
});
