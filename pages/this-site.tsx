import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

const usingTechs = [
  {
    name: "Next.js",
    url: "https://nextjs.org/"
  },
  {
    name: "Docker",
    url: "https://docker.com/"
  },
  {
    name: "Google Cloud Run",
    url: "https://cloud.google.com/run/"
  },
  {
    name: "Firebase Hosting",
    url: "https://firebase.google.com/products/hosting/"
  }
];

const TechList = () => (
  <ul className="pl-4 f3">
    {usingTechs.map(tech => (
      <li className="mb-2" key={tech.name}>
        <a href={tech.url} className="text-white">
          {tech.name}
        </a>
      </li>
    ))}
  </ul>
);

export default () => (
  <>
    <Head>
      <title>{title("This Site")}</title>
    </Head>

    <Nav selected="This Site" />

    <div className="px-3">
      <h2 className="border-bottom pb-2 mb-4">This site is built with</h2>
      <TechList />
    </div>
  </>
);
