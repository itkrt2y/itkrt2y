import Link from "next/link";

type NavItems = "Skills" | "Background" | "Interests";

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
      className={`UnderlineNav-item text-white ${
        selected === name ? "selected" : ""
      }`}
    >
      {name}
    </a>
  </Link>
);

export default ({ selected }: { selected: NavItems }) => (
  <nav className="UnderlineNav UnderlineNav--full" aria-label="Foo bar">
    <div className="container-lg UnderlineNav-container">
      <div className="UnderlineNav-body">
        <NavItem name="Skills" href="/" selected={selected} />
        <NavItem name="Background" href="/background" selected={selected} />
        <NavItem name="Interests" href="/interests" selected={selected} />
      </div>
    </div>
  </nav>
);
