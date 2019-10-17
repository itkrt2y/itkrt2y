import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

type Blog = {
  title: string;
  url: string;
  publishedAt: string;
};

const blogs: Blog[] = [
  {
    title: "Rails + TypeScript + webpack環境構築",
    url: "https://link.medium.com/MT5zu3jyN0",
    publishedAt: "Feb 1, 2019"
  },
  {
    title: "Railsのポリモーフィック関連とはなんなのか",
    url: "https://qiita.com/itkrt2y/items/32ad1512fce1bf90c20b",
    publishedAt: "Dec 4, 2016"
  },
  {
    title: "ghq, peco, hubで快適Gitライフを手に入れよう！",
    url: "https://qiita.com/itkrt2y/items/0671d1f48e66f21241e2",
    publishedAt: "Dec 23, 2015"
  }
];

const Blog = ({ blog: { title, url } }: { blog: Blog }) => (
  <a href={url} className="mb-3 text-white" style={{ textDecoration: "none" }}>
    <div id="content" className="p-3 border border-gray rounded-1">
      <h4>{title}</h4>
    </div>

    <style jsx>{`
      #content:hover {
        opacity: 0.8;
      }
    `}</style>
  </a>
);

const Blogs = ({ blogs }: { blogs: Blog[] }) => (
  <div id="blogs">
    {blogs.map(blog => (
      <div className="mb-5" key={blog.title}>
        <div
          className="mb-3"
          style={{ backgroundColor: "#24292e", marginLeft: -24 }}
        >
          <svg
            className="octicon octicon-git-commit"
            viewBox="0 0 14 16"
            version="1.1"
            width="14"
            height="16"
            aria-hidden="true"
            fill="#fafbfc"
            style={{ marginRight: 11 }}
          >
            <path
              fillRule="evenodd"
              d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"
            ></path>
          </svg>

          <span style={{ color: "#fafbfc" }}>{blog.publishedAt}</span>
        </div>

        <Blog blog={blog} />
      </div>
    ))}

    <style jsx>{`
      #blogs {
        position: relative;
        padding-left: 18px;
        padding-bottom: 1px;
      }

      #blogs:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        display: block;
        width: 2px;
        content: "";
        background-color: #959da5;
      }
    `}</style>
  </div>
);

export default () => (
  <>
    <Head>
      <title>{title("Blog")}</title>
    </Head>

    <Nav selected="Blog" />

    <div className="px-3">
      <Blogs blogs={blogs} />
    </div>
  </>
);
