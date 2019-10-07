import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

export default () => (
  <>
    <Head>
      <title>{title("Skills")}</title>
    </Head>

    <Nav selected="Skills" />

    <div className="px-md-0 px-3">TODO: My Skills</div>
  </>
);
