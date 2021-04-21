import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";
import { GitCommitIcon } from "../components/icons";
import { FunctionComponent } from "preact";

type BlogType = {
  title: string;
  url: string;
  publishedAt: string;
};

const blogs: BlogType[] = [
  {
    title: "Rails + TypeScript + webpack環境構築",
    url: "https://link.medium.com/MT5zu3jyN0",
    publishedAt: "Feb 1, 2019",
  },
  {
    title: "Railsのポリモーフィック関連とはなんなのか",
    url: "https://qiita.com/itkrt2y/items/32ad1512fce1bf90c20b",
    publishedAt: "Dec 4, 2016",
  },
  {
    title: "ghq, peco, hubで快適Gitライフを手に入れよう！",
    url: "https://qiita.com/itkrt2y/items/0671d1f48e66f21241e2",
    publishedAt: "Dec 23, 2015",
  },
];

const PublishedAt: FunctionComponent = ({ children }) => (
  <span style={{ color: "#fafbfc" }}>{children}</span>
);

const BlogCard: FunctionComponent<{ title: string; url: string }> = ({
  title,
  url,
}) => (
  <a href={url} className="mb-3 text-white text-underline">
    <div className="p-3 border border-gray-dark rounded-1">
      <h4>{title}</h4>
    </div>

    <style jsx>{`
      div:hover {
        opacity: 0.8;
      }
    `}</style>
  </a>
);

const Blog: FunctionComponent<{ blog: BlogType }> = ({ blog }) => (
  <div className="mb-5">
    <div
      className="mb-3"
      style={{ backgroundColor: "#24292e", marginLeft: -24 }}
    >
      <GitCommitIcon />
      <PublishedAt>{blog.publishedAt}</PublishedAt>
    </div>

    <BlogCard title={blog.title} url={blog.url} />
  </div>
);

const Blogs: FunctionComponent<{ blogs: BlogType[] }> = ({ blogs }) => (
  <div id="blogs">
    {blogs.map((blog) => (
      <Blog blog={blog} key={blog.title} />
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

export default function Page() {
  return (
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
}
