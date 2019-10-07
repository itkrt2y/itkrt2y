import * as React from "react";
import App from "next/app";
import Head from "next/head";
import Link from "next/link";

const Avatar = () => (
  <Link href="/">
    <a>
      <img
        className="width-full avatar"
        src="/static/images/avatar.webp"
        alt="itkrt2y's avatar"
      />
    </a>
  </Link>
);

const Icons = () => (
  <div className="d-flex flex-items-center">
    <a href="https://github.com/itkrt2y" className="mx-2">
      <svg
        height="24"
        width="24"
        className="octicon octicon-mark-github v-align-middle"
        fill="#ffffff"
        aria-label="GitHub"
        viewBox="0 0 16 16"
        version="1.1"
        role="img"
      >
        <path
          fillRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        ></path>
      </svg>
    </a>

    <a href="https://twitter.com/itkrt2y" className="mx-2">
      <svg
        height="36"
        width="34"
        className="v-align-middle"
        data-name="Logo — FIXED"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        fill="#ffffff"
        aria-label="Twitter"
      >
        <title>Twitter_Logo_Blue</title>
        <rect fill="none" width="400" height="400" />
        <path d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23" />
      </svg>
    </a>

    <a href="mailto:itkrt2y.591721200@gmail.com" className="mx-2">
      <svg
        height="26"
        width="24"
        className="octicon octicon-mail mr-2 v-align-middle"
        fill="#ffffff"
        aria-label="email"
        viewBox="0 0 14 16"
        version="1.1"
        role="img"
      >
        <path
          fillRule="evenodd"
          d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
        ></path>
      </svg>
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
            href="https://unpkg.com/primer/build/build.css"
            rel="stylesheet"
          />
        </Head>

        <div className="d-md-flex" style={{ minHeight: "100vh" }}>
          <div
            className="col-xl-2 col-lg-3 col-md-3 col-sm-12 col-12 px-2 py-6"
            style={{ backgroundColor: "#2f363d" }}
          >
            <div className="d-flex flex-column flex-items-center">
              <div className="col-5 col-md-10 d-flex flex-items-center flex-items-center mb-6">
                <Avatar />
              </div>

              <div className="col-12 col-md-11 d-flex flex-column flex-justify-center flex-items-center">
                <h1 className="text-normal no-wrap" style={{ fontSize: 28 }}>
                  Tatsuya Itakura
                </h1>

                <div className="mt-3 mb-4">
                  <Icons />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-10 col-lg-9 col-md-9 col-sm-12 col-12 px-4 px-lg-6 py-6">
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
            font-size: 1.05rem;
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
