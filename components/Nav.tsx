/** @jsx h */
import { h, type FunctionComponent } from "preact";
import { tw } from "@twind";
import { ExternalIcon } from "./icons.tsx";

type NavItems = "Blog" | "Experience" | "Skills" | "This Site" | "Gist";

export const Nav: FunctionComponent<{ url: URL }> = ({ url }) => (
  <nav class={tw`flex w-full mb-10`} aria-label="Navigation">
    <NavItem url={url} name="Skills" href="/" />
    <NavItem url={url} name="Experience" href="/experience" />
    <NavItem url={url} name="Blog" href="/blog" />
    <NavItem url={url} name="This Site" href="/this-site" />
    <NavItem
      url={url}
      name="Gist"
      href="https://gist.github.com/itkrt2y"
      external={true}
    />
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
    class={tw`flex-1 flex gap-1 items-center justify-center text-white text-sm whitespace-nowrap p-3 border-b-2 ${
      url.pathname === href ? "border-yellow-600" : "border-gray-600"
    }`}
  >
    {name}
    {external && <ExternalIcon />}
  </a>
);
