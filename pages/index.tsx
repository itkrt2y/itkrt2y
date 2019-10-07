import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

export default () => (
  <>
    <Head>
      <title>{title("About Me")}</title>
    </Head>

    <Nav selected="About Me" />

    <div className="px-md-0 px-3">TODO: About Me</div>
  </>
);
