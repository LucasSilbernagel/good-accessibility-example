import { AnchorHTMLAttributes } from 'react';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  newTab?: boolean;
  wrapper?: 'li' | 'div';
  wrapperClassName?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * @description A simple component that renders an anchor tag with the correct target and referrer policy.
 * -------------
 * @note In a real world project that needed routing, I would use a library like react-router-dom instead of an anchor tag when needed.
 */
export default function NavLink({
  children,
  href,
  newTab = false,
  wrapper = 'li',
  ...props
}: NavLinkProps) {
  const Wrapper = wrapper;

  return (
    <Wrapper>
      <a
        href={href}
        target={newTab ? '_blank' : '_self'}
        referrerPolicy={newTab ? 'no-referrer' : 'origin'}
        rel="noreferrer"
        {...props}
      >
        {children}
      </a>
    </Wrapper>
  );
}
