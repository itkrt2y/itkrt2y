import Link from "next/link";
import { FunctionComponent } from "preact";
import { ExternalLinkIcon } from "@heroicons/react/outline";

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
      className={`flex-1 flex items-center justify-center text-white text-sm whitespace-nowrap p-3 ${
        selected === name
          ? "border-b-4 -mb-px border-yellow-600"
          : "border-b border-white"
      }`}
    >
      {name}
      {external && <ExternalLinkIcon className="w-4 h-4 ml-2 -mb-1" />}
    </a>
  </Link>
);

export const Nav: FunctionComponent<{ selected: NavItems }> = ({
  selected,
}) => (
  <nav className="flex w-full mb-10" aria-label="Navigation">
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
  </nav>
);
