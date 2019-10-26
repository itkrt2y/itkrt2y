import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

function Title({ children }: { children: string }) {
  return <h2 className="border-bottom pb-2 mb-3">{children}</h2>;
}

function SkillList({ skills }: { skills: string[] }) {
  return (
    <div className="d-flex flex-wrap">
      {skills.map(skill => (
        <div
          className="px-3 py-1 py-md-2 m-1 m-lg-2 border border-gray rounded-1 f3 text-mono"
          key={skill}
        >
          {skill}
        </div>
      ))}
    </div>
  );
}

export default function() {
  return (
    <>
      <Head>
        <title>{title()}</title>
      </Head>

      <Nav selected="Skills" />

      <div className="px-3">
        <div className="mb-6">
          <Title>Awesome</Title>
          <SkillList
            skills={[
              "JavaScript",
              "TypeScript",
              "Node.js",
              "React",
              "Next.js",
              "Ruby",
              "Ruby on Rails"
            ]}
          />
        </div>

        <div className="mb-6">
          <Title>Great</Title>
          <SkillList
            skills={[
              "Express.js",
              "Vue",
              "Nuxt.js",
              "Docker",
              "PostgreSQL",
              "Firebase",
              "Elasticsearch"
            ]}
          />
        </div>

        <div className="mb-6">
          <Title>Good</Title>
          <SkillList
            skills={["AWS", "GCP", "Java", "Go", "C", "MySQL", "Redis"]}
          />
        </div>

        <div className="mb-6">
          <Title>Interests</Title>
          <SkillList
            skills={[
              "WebAssembly",
              "WASI",
              "Rust",
              "C++",
              "Kubernetes",
              "Make a Programming Language",
              "Make an OS",
              "Make a RDBMS",
              "Make a fulltext search engine"
            ]}
          />
        </div>
      </div>
    </>
  );
}
