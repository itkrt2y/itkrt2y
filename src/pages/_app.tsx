import * as React from "react";
import App from "next/app";
import Head from "next/head";
import Link from "next/link";
import {
  GitHubIcon,
  TwitterIcon,
  LeetCodeIcon,
  MailIcon,
} from "~/components/icons";

import "tailwindcss/tailwind.css";
import { Nav } from "~/components/Nav";

const Avatar = () => (
  <Link href="/">
    <a>
      <picture>
        <source
          type="image/webp"
          srcSet="images/avatar.webp"
          className="w-60 h-60 rounded-full"
        />
        <source
          type="image/jpeg"
          srcSet="images/avatar.jpg"
          className="w-60 h-60 rounded-full"
        />
        <img
          src="images/avatar.jpg"
          alt="avatar"
          className="w-60 h-60 rounded-full"
        />
      </picture>
    </a>
  </Link>
);

const Icons = () => (
  <div className="flex gap-4 items-center justify-center">
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

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/images/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#41297e" />
          <meta name="theme-color" content="#ffffff" />

          <meta
            name="description"
            content="Tatsuya Itakura (@itkrt2y) - Web developer with a passion for creating simple, fast and user friendly services."
          />
        </Head>

        <div className="h-screen min-h-[720px] lg:flex text-white">
          <div className="lg:w-96 lg:h-full py-8 lg:py-0 bg-gray-700">
            <Profile />
          </div>

          <div className="lg:flex-1 overflow-y-auto bg-gray-800">
            <Nav />
            <div className="px-4 lg:px-12">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const Profile = () => (
  <div className="p-12 flex flex-col items-center gap-6">
    <Avatar />

    <div className="flex flex-col items-center gap-1">
      <div className="text-2xl font-medium tracking-wide">Tatsuya Itakura</div>
      <div className="text-lg font-medium" title="ITaKuRa TaTSUYa">
        @itkrt2y
      </div>
    </div>

    <div className="font-mono text-sm pl-3">
      Web developer with a passion for creating simple, fast and user friendly
      services.
    </div>

    <Icons />
  </div>
);
