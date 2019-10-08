import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

export default () => (
  <>
    <Head>
      <title>{title("About Me")}</title>
    </Head>

    <Nav selected="About Me" />

    <div className="px-3">
      <div className="f3 text-mono">
        I am a web developer with a passion for creating simple, fast and user
        friendly services.
      </div>
    </div>
  </>
);
