import Link from "next/link";
import { FunctionComponent } from "preact";
import { LinkExternalIcon } from "./icons";

type NavItems = "Blog" | "Experience" | "Skills" | "This Site" | "Gist";

const NavItem = ({
  name,
  href,
  selected,
  external = false,
}: {
  name: NavItems;
  href: string;
  selected: NavItems;
  external?: boolean;
}) => (
  <Link href={href}>
    <a
      className={`UnderlineNav-item text-white no-wrap px-2 ${
        selected === name ? "selected" : ""
      }`}
    >
      {name}

      {external ? <LinkExternalIcon className="ml-2" /> : null}
    </a>
  </Link>
);

const Nav: FunctionComponent<{ selected: NavItems }> = ({ selected }) => (
  <nav className="UnderlineNav UnderlineNav--full mb-5" aria-label="Navigation">
    <div className="UnderlineNav-container">
      <div className="UnderlineNav-body" style={{ overflowX: "auto" }}>
        <NavItem name="Skills" href="/" selected={selected} />
        <NavItem name="Experience" href="/experience" selected={selected} />
        <NavItem name="Blog" href="/blog" selected={selected} />
        <NavItem
          name="Gist"
          href="https://gist.github.com/itkrt2y"
          external={true}
          selected={selected}
        />
        <NavItem name="This Site" href="/this-site" selected={selected} />
      </div>
    </div>
  </nav>
);
export default Nav;
