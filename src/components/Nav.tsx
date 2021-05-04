import Link from "next/link";
import { FunctionComponent } from "preact";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { useRouter } from "next/dist/client/router";

type NavItems = "Blog" | "Experience" | "Skills" | "This Site" | "Gist";

const NavItem = ({
  name,
  href,
  external = false,
}: {
  name: NavItems;
  href: string;
  external?: boolean;
}) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`flex-1 flex items-center justify-center text-white text-sm whitespace-nowrap p-3 ${
          router.pathname === href
            ? "border-b-4 -mb-px border-yellow-600"
            : "border-b border-white"
        }`}
      >
        {name}
        {external && <ExternalLinkIcon className="w-4 h-4 ml-2 -mb-1" />}
      </a>
    </Link>
  );
};

export const Nav: FunctionComponent = () => (
  <nav className="flex w-full mb-10" aria-label="Navigation">
    <NavItem name="Skills" href="/" />
    <NavItem name="Experience" href="/experience" />
    <NavItem name="Blog" href="/blog" />
    <NavItem
      name="Gist"
      href="https://gist.github.com/itkrt2y"
      external={true}
    />
    <NavItem name="This Site" href="/this-site" />
  </nav>
);
