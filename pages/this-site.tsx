import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

export default () => (
  <>
    <Head>
      <title>{title("This Site")}</title>
    </Head>

    <Nav selected="This Site" />

    <div className="px-md-0 px-3">TODO: Explain architectures of this site</div>
  </>
);
