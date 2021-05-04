import Head from "next/head";
import { FunctionComponent } from "preact";
import { title } from "~/lib/header";

const SkillList: FunctionComponent<{ title: string; skills: string[] }> = ({
  title,
  skills,
}) => (
  <div className="flex flex-col gap-3">
    <h2 className="border-b pb-1 text-lg font-semibold tracking-wide">
      {title}
    </h2>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <div key={skill}>
          <span className="text-mono">{skill}</span>
          {i !== skills.length - 1 && <span> ,</span>}
        </div>
      ))}
    </div>
  </div>
);

export default function Page() {
  return (
    <>
      <Head>
        <title>{title()}</title>
      </Head>

      <div className="flex flex-col gap-8">
        <SkillList
          title="Awesome"
          skills={[
            "JavaScript",
            "TypeScript",
            "Node.js",
            "React",
            "Preact",
            "Next.js",
            "Vite",
            "Ruby",
            "Ruby on Rails",
          ]}
        />

        <SkillList
          title="Great"
          skills={[
            "Express.js",
            "Vue",
            "Nuxt.js",
            "Docker",
            "PostgreSQL",
            "Firebase",
            "Elasticsearch",
          ]}
        />

        <SkillList
          title="Good"
          skills={["AWS", "GCP", "Java", "Go", "C", "MySQL", "Redis"]}
        />

        <SkillList
          title="Interests"
          skills={[
            "WebAssembly",
            "WASI",
            "Rust",
            "C++",
            "Make Programming Language",
            "Make OS",
            "Make RDBMS",
            "Make fulltext search engine",
          ]}
        />
      </div>
    </>
  );
}
