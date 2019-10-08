import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

export default () => (
  <>
    <Head>
      <title>{title("Experience")}</title>
    </Head>

    <Nav selected="Experience" />

    <div className="px-3">
      <h2>🚧 Under Construction 🚧</h2>
    </div>
  </>
);
