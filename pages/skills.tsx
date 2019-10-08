import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

const awesome = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Ruby",
  "Ruby on Rails"
];
const great = [
  "Express.js",
  "Vue",
  "Nuxt.js",
  "Docker",
  "PostgreSQL",
  "Firebase",
  "Elasticsearch"
];
const good = ["AWS", "GCP", "Java", "Go", "C", "MySQL", "Redis"];
const interests = [
  "WebAssembly",
  "WASI",
  "Rust",
  "C++",
  "Kubernetes",
  "Make a Programming Language",
  "Make an OS",
  "Make a RDBMS",
  "Make a fulltext search engine"
];

export default () => (
  <>
    <Head>
      <title>{title("Skills")}</title>
    </Head>

    <Nav selected="Skills" />

    <div className="px-3">
      <div className="mb-6">
        <h2 className="border-bottom pb-2 mb-3">Awesome</h2>
        <div className="d-flex flex-wrap">
          {awesome.map(skill => (
            <div
              className="px-3 py-1 px-md-4 py-md-2 border border-gray rounded-1 m-1 m-lg-2 f3 text-mono"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="border-bottom pb-2 mb-3">Great</h2>
        <div className="d-flex flex-wrap">
          {great.map(skill => (
            <div
              className="px-3 py-1 px-md-4 py-md-2 border border-gray rounded-1 m-1 m-lg-2 f3 text-mono"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="border-bottom pb-2 mb-3">Good</h2>
        <div className="d-flex flex-wrap">
          {good.map(skill => (
            <div
              className="px-3 py-1 px-md-4 py-md-2 border border-gray rounded-1 m-1 m-lg-2 f3 text-mono"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="border-bottom pb-2 mb-3">Interests</h2>
        <div className="d-flex flex-wrap">
          {interests.map(skill => (
            <div
              className="px-3 py-1 px-md-4 py-md-2 border border-gray rounded-1 m-1 m-lg-2 f3 text-mono"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);
