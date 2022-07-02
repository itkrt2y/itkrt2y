/** @jsx h */
import { h, type FunctionComponent } from "preact";
import { GitHubIcon, LeetCodeIcon, MailIcon, TwitterIcon } from "./icons.tsx";
import { tw } from "@twind";
import { Nav } from "./Nav.tsx";

export const Layout: FunctionComponent<{ url: URL }> = ({ url, children }) => (
  <div class={tw`h-screen min-h-[720px] lg:flex text-white`}>
    <div class={tw`lg:w-96 lg:h-full py-8 lg:py-0 bg-gray-700`}>
      <Profile />
    </div>

    <div class={tw`lg:flex-1 overflow-y-auto bg-gray-800`}>
      <Nav url={url} />
      <div class={tw`px-4 lg:px-12`}>{children}</div>
    </div>
  </div>
);

const Avatar = () => (
  <a href="/">
    <picture>
      <source
        type="image/webp"
        srcSet="/avatar.webp"
        class={tw`w-60 h-60 rounded-full`}
      />
      <source
        type="image/jpeg"
        srcSet="/avatar.jpg"
        class={tw`w-60 h-60 rounded-full`}
      />
      <img src="/avatar.jpg" alt="avatar" class={tw`w-60 h-60 rounded-full`} />
    </picture>
  </a>
);

const Icons = () => (
  <div class={tw`flex gap-4 items-center justify-center`}>
    <a href="https://github.com/itkrt2y">
      <GitHubIcon />
    </a>

    <a href="https://twitter.com/itkrt2y">
      <TwitterIcon />
    </a>

    <a href="https://leetcode.com/itkrt2y">
      <LeetCodeIcon />
    </a>

    <a href="mailto:itkrt2y.591721200@gmail.com">
      <MailIcon />
    </a>
  </div>
);

const Profile = () => (
  <div class={tw`p-12 flex flex-col items-center gap-6`}>
    <Avatar />

    <div class={tw`flex flex-col items-center gap-1`}>
      <div class={tw`text-2xl font-medium tracking-wide`}>Tatsuya Itakura</div>
      <div class={tw`text-lg font-medium`} title="ITaKuRa TaTSUYa">
        @itkrt2y
      </div>
    </div>

    <div class={tw`font-mono text-sm pl-3`}>
      Web developer with a passion for creating simple, fast and user friendly
      services.
    </div>

    <Icons />
  </div>
);
