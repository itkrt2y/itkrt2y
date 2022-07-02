/** @jsx h */
import { h, type FunctionComponent } from "preact";
import { tw } from "@twind";
import { ExternalIcon } from "./icons.tsx";

type NavItems = "BLOG" | "EXPERIENCE" | "SKILLS" | "THIS SITE" | "Gist";

export const Nav: FunctionComponent<{ url: URL }> = ({ url }) => (
  <nav class={tw`flex w-full mb-10`} aria-label="Navigation">
    <NavItem url={url} name="SKILLS" href="/" />
    <NavItem url={url} name="EXPERIENCE" href="/experience" />
    <NavItem url={url} name="BLOG" href="/blog" />
    <NavItem url={url} name="THIS SITE" href="/this-site" />
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
    class={tw`flex-1 flex gap-1 items-center justify-center text-white text-sm tracking-wider whitespace-nowrap p-3 border-b-2 hover:bg-gray-700 ${
      url.pathname === href
        ? "border-yellow-600 bg-gray-700"
        : "border-gray-600"
    }`}
    target={external ? "_blank" : ""}
  >
    {name}
    {external && <ExternalIcon />}
  </a>
);
