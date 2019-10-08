import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

export default () => (
  <>
    <Head>
      <title>{title("This Site")}</title>
    </Head>

    <Nav selected="This Site" />

    <div className="px-3">
      <h2>🚧 Under Construction 🚧</h2>
    </div>
  </>
);
