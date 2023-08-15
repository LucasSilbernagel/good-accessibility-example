type NavLinkProps = {
  url: string;
  openInNewTab?: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>;

export default function NavLink({
  url,
  children,
  openInNewTab,
  ...props
}: NavLinkProps) {
  return (
    <a
      // eslint-disable-next-line
      test-id="nav-link"
      href={url}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
      className="text-gray-800 transition-colors duration-200 hover:text-slate-500 focus:border focus:border-slate-500 focus:text-slate-700"
      {...props}
    >
      {children}
    </a>
  );
}
