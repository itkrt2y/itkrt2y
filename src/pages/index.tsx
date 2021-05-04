import Head from "next/head";
import { FunctionComponent } from "preact";
import { Section } from "~/components/Section";
import { title } from "~/lib/header";

const skills = {
  awesome: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Preact",
    "Next.js",
    "Vite",
    "Ruby",
    "Ruby on Rails",
  ],
  great: [
    "Express.js",
    "Vue",
    "Nuxt.js",
    "Docker",
    "PostgreSQL",
    "Firebase",
    "Elasticsearch",
  ],
  good: ["AWS", "GCP", "Java", "Go", "C", "MySQL", "Redis"],
  interests: [
    "WebAssembly",
    "WASI",
    "Rust",
    "C++",
    "Make Programming Language",
    "Make OS",
    "Make RDBMS",
    "Make fulltext search engine",
  ],
};

const SkillList: FunctionComponent<{ title: string; skills: string[] }> = ({
  title,
  skills,
}) => (
  <Section title={title}>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <div key={skill}>
          <span className="text-mono">{skill}</span>
          {i !== skills.length - 1 && <span> ,</span>}
        </div>
      ))}
    </div>
  </Section>
);

export default function Page() {
  return (
    <>
      <Head>
        <title>{title()}</title>
      </Head>

      <div className="flex flex-col gap-8">
        <SkillList title="Awesome" skills={skills.awesome} />
        <SkillList title="Great" skills={skills.great} />
        <SkillList title="Good" skills={skills.good} />
        <SkillList title="Interests" skills={skills.interests} />
      </div>
    </>
  );
}
