import Link from "next/link";

type NavItems = "About Me" | "Blog" | "Experience" | "Skills" | "This Site";

const NavItem = ({
  name,
  href,
  selected
}: {
  name: NavItems;
  href: string;
  selected: NavItems;
}) => (
  <Link href={href}>
    <a
      className={`UnderlineNav-item text-white no-wrap px-2 ${
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
      <div className="UnderlineNav-body" style={{ overflowX: "auto" }}>
        <NavItem name="About Me" href="/" selected={selected} />
        <NavItem name="Skills" href="/skills" selected={selected} />
        <NavItem name="Experience" href="/experience" selected={selected} />
        <NavItem name="Blog" href="/blog" selected={selected} />
        <NavItem name="This Site" href="/this-site" selected={selected} />
      </div>
    </div>
  </nav>
);
