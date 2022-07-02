/** @jsx h */
import { h, type FunctionComponent } from "preact";
import { tw } from "@twind";

type NavItems = "Blog" | "Experience" | "Skills" | "This Site" | "Gist";

export const Nav: FunctionComponent<{ url: URL }> = ({ url }) => (
  <nav class={tw`flex w-full mb-10`} aria-label="Navigation">
    <NavItem url={url} name="Skills" href="/" />
    <NavItem url={url} name="Experience" href="/experience" />
    <NavItem url={url} name="Blog" href="/blog" />
    <NavItem
      url={url}
      name="Gist"
      href="https://gist.github.com/itkrt2y"
      external={true}
    />
    <NavItem url={url} name="This Site" href="/this-site" />
  </nav>
);

const NavItem = ({
  url,
  name,
  href,
  external = false,
}: {
  url: URL;
  name: NavItems;
  href: string;
  external?: boolean;
}) => (
  <a
    href={href}
    class={tw`flex-1 flex gap-1 items-center justify-center text-white text-sm whitespace-nowrap p-3 ${
      url.pathname === href
        ? "border-b-4 -mb-px border-yellow-600"
        : "border-b border-white"
    }`}
  >
    {name}
    {external && <ExternalIcon />}
  </a>
);

const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class={tw`w-4 h-4`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);
