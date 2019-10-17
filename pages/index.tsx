import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

// eslint-disable-next-line no-unused-vars
[
  "https://link.medium.com/MT5zu3jyN0",
  "https://engineer.crowdworks.jp/entry/2016/05/11/153739"
];

type BlogProps = {
  title: string;
  url: string;
  publishedAt: string;
};

const Blog = ({ title, url, publishedAt }: BlogProps) => (
  <a href={url} className="mb-3 text-white" style={{ textDecoration: "none" }}>
    <div id="content" className="mb-3 p-3 border border-gray rounded-1">
      <h4>{title}</h4>
      <span className="text-small">{publishedAt}</span>
    </div>

    <style jsx>{`
      #content:hover {
        opacity: 0.8;
      }
    `}</style>
  </a>
);

export default () => (
  <>
    <Head>
      <title>{title("Blog")}</title>
    </Head>

    <Nav selected="Blog" />

    <div className="px-3">
      <Blog
        title="Rails + TypeScript + webpack環境構築"
        url="https://link.medium.com/MT5zu3jyN0"
        publishedAt="Feb 1, 2019"
      />

      <Blog
        title="Railsのポリモーフィック関連とはなんなのか"
        url="https://qiita.com/itkrt2y/items/32ad1512fce1bf90c20b"
        publishedAt="Dec 4, 2016"
      />

      <Blog
        title="ghq, peco, hubで快適Gitライフを手に入れよう！"
        url="https://qiita.com/itkrt2y/items/0671d1f48e66f21241e2"
        publishedAt="Dec 23, 2015"
      />
    </div>
  </>
);
