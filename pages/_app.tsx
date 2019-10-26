import * as React from "react";
import App from "next/app";
import Head from "next/head";
import Link from "next/link";
import {
  GitHubIcon,
  TwitterIcon,
  LeetCodeIcon,
  MailIcon
} from "../components/icons";

const Avatar = () => (
  <Link href="/">
    <a>
      <picture>
        <source type="image/webp" srcSet="images/avatar.webp" />
        <source type="image/jpeg" srcSet="images/avatar.jpg" />
        <img
          className="width-full"
          src="images/avatar.jpg"
          alt="avatar"
          style={{ maxWidth: 272 }}
        />
      </picture>
    </a>
  </Link>
);

const Icons = () => (
  <>
    <a href="https://github.com/itkrt2y" className="mr-2">
      <GitHubIcon />
    </a>

    <a href="https://twitter.com/itkrt2y" className="mx-2">
      <TwitterIcon />
    </a>

    <a href="https://leetcode.com/itkrt2y" className="mx-2">
      <LeetCodeIcon />
    </a>

    <a href="mailto:itkrt2y.591721200@gmail.com" className="ml-2">
      <MailIcon />
    </a>
  </>
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

          <link
            href="https://unpkg.com/primer@11.0.0/build/build.css"
            rel="stylesheet"
          />
        </Head>

        <div
          className="d-lg-flex flex-justify-center"
          style={{ minHeight: "100vh" }}
        >
          <div
            className="col-xl-3 col-lg-4 col-12 px-2 px-md-3 pt-6 pb-7"
            style={{ backgroundColor: "#2f363d" }}
          >
            <div className="d-flex flex-row flex-lg-column flex-content-center flex-items-center p-2">
              <div className="col-4 col-lg-12 mb-lg-6 text-center">
                <Avatar />
              </div>

              <div className="col-8 col-lg-12 pl-4 pl-md-5 pl-lg-3">
                <div className="f1">Tatsuya Itakura</div>
                <div className="f3">
                  <span title="ITaKuRa TaTSUYa">@itkrt2y</span>
                </div>
                <div className="text-mono text-small mt-3 mt-lg-4">
                  Web developer with a passion for creating simple, fast and
                  user friendly services.
                </div>

                <div className="mt-2 mt-lg-4 text-lg-center">
                  <Icons />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9 col-lg-8 col-12 px-lg-4 py-lg-5">
            <Component {...pageProps} />
          </div>
        </div>

        <style jsx global>{`
          html,
          body {
            min-height: 100vh;
          }

          body {
            background-color: #24292e;
            color: white;
          }
        `}</style>

        <style jsx>{`
          @media (min-width: 545px) {
            .email.css-truncate-target {
              max-width: 21vw;
            }
          }

          @media (max-width: 768px) {
            .email.css-truncate-target {
              max-width: 100%;
            }
          }
        `}</style>
      </>
    );
  }
}
