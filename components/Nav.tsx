import Link from "next/link";

type NavItems = "About Me" | "Skills" | "Experience" | "This Site";

const NavItem = ({
  name,
  href,
  selected
}: {
  name: NavItems;
  href: string;
  selected: NavItems;
}) => (
  <Link href={href} prefetch>
    <a
      className={`UnderlineNav-item text-white m-0 px-4 ${
        selected === name ? "selected" : ""
      }`}
    >
      {name}
    </a>
  </Link>
);

export default ({ selected }: { selected: NavItems }) => (
  <nav className="UnderlineNav UnderlineNav--full mb-5" aria-label="Navigation">
    <div className="UnderlineNav-container">
      <div className="UnderlineNav-body">
        <NavItem name="About Me" href="/" selected={selected} />
        <NavItem name="Skills" href="/skills" selected={selected} />
        <NavItem name="Experience" href="/experience" selected={selected} />
        <NavItem name="This Site" href="/this-site" selected={selected} />
      </div>
    </div>
  </nav>
);
