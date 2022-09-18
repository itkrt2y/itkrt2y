import { type FunctionComponent } from "preact";
import { GitHubIcon, LeetCodeIcon, MailIcon, TwitterIcon } from "./icons.tsx";
import { Nav } from "./Nav.tsx";

export const Layout: FunctionComponent<{ url: URL }> = ({ url, children }) => (
  <div class="h-screen min-h-[720px] lg:flex text-white">
    <div class="lg:w-96 lg:h-full py-8 lg:py-0 bg-gray-800">
      <Profile />
    </div>

    <div class="lg:flex-1 overflow-y-auto bg-gray-900">
      <Nav url={url} />
      <div class="px-4 lg:px-12">{children}</div>
    </div>
  </div>
);

const Profile = () => (
  <div class="p-12 flex flex-col items-center gap-6">
    <Avatar />

    <div class="flex flex-col items-center gap-1">
      <div class="text-2xl font-medium tracking-wide">Tatsuya Itakura</div>
      <div class="text-lg font-medium" title="ITaKuRa TaTSUYa">
        @itkrt2y
      </div>
    </div>

    <div class="font-mono text-sm pl-3">
      Web developer with a passion for creating simple, fast and user friendly
      services.
    </div>

    <Icons />
  </div>
);

const Avatar = () => (
  <a href="/">
    <picture>
      <source
        type="image/webp"
        srcSet="/avatar.webp"
        class="w-60 h-60 rounded-full"
      />
      <source
        type="image/jpeg"
        srcSet="/avatar.jpg"
        class="w-60 h-60 rounded-full"
      />
      <img src="/avatar.jpg" alt="avatar" class="w-60 h-60 rounded-full" />
    </picture>
  </a>
);

const Icons = () => (
  <div class="flex gap-4 items-center justify-center">
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
