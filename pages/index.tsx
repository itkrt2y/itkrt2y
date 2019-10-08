import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

export default () => (
  <>
    <Head>
      <title>{title("Blog")}</title>
    </Head>

    <Nav selected="Blog" />

    <div className="px-3">
      <h2>🚧 Under Construction 🚧</h2>
    </div>
  </>
);
