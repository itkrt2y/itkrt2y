import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

export default () => (
  <>
    <Head>
      <title>{title("Experience")}</title>
    </Head>

    <Nav selected="Experience" />

    <div className="px-md-0 px-3">TODO: My Experience</div>
  </>
);
