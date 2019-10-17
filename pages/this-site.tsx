import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

type Tech = { name: string; url: string };
const usingTechs: Tech[] = [
  {
    name: "Next.js",
    url: "https://nextjs.org/"
  },
  {
    name: "Primer",
    url: "https://primer.style"
  },
  {
    name: "Firebase Hosting",
    url: "https://firebase.google.com/products/hosting/"
  }
];

function TechList() {
  return (
    <div className="d-flex flex-wrap">
      {usingTechs.map(tech => (
        <a
          href={tech.url}
          className="text-white text-underline"
          key={tech.name}
        >
          <div className="px-3 py-1 py-md-2 m-1 m-lg-2 border border-gray rounded-1 f3 text-mono">
            {tech.name}
          </div>
        </a>
      ))}

      <style jsx>{`
        a:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}

export default function() {
  return (
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
}
