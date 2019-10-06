import Link from "next/link";

type NavItem = "skills" | "background";

export default ({ selected }: { selected: NavItem }) => (
  <nav className="UnderlineNav UnderlineNav--full" aria-label="Foo bar">
    <div className="container-lg UnderlineNav-container">
      <div className="UnderlineNav-body">
        <Link href="/skills">
          <a
            className={`UnderlineNav-item text-white ${
              selected === "skills" ? "selected" : ""
            }`}
          >
            Skills
          </a>
        </Link>

        <Link href="/background">
          <a
            className={`UnderlineNav-item text-white ${
              selected === "background" ? "selected" : ""
            }`}
          >
            Background
          </a>
        </Link>
      </div>
    </div>
  </nav>
);
