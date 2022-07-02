/** @jsx h */
import { h, type FunctionComponent } from "preact";
import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { Layout } from "@components/Layout.tsx";
import { Section } from "@components/Section.tsx";
import { title } from "@lib/header.ts";

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
    "GraphQL",
  ],
  great: ["Java", "Docker", "MySQL", "PostgreSQL", "Elasticsearch"],
  good: ["AWS", "GCP", "Rust", "Go", "Vue", "Redis", "Cassandra"],
  interests: [
    "WebAssembly",
    "WASI",
    "Deno",
    "C++",
    "Make Programming Language",
    "Make OS",
    "Make RDBMS",
    "Make fulltext search engine",
  ],
};

export default function Page(props: PageProps) {
  return (
    <Layout url={props.url}>
      <Head>
        <title>{title()}</title>
      </Head>

      <div class={tw`flex flex-col gap-8`}>
        <SkillList title="Awesome" skills={skills.awesome} />
        <SkillList title="Great" skills={skills.great} />
        <SkillList title="Good" skills={skills.good} />
        <SkillList title="Interests" skills={skills.interests} />
      </div>
    </Layout>
  );
}

const SkillList: FunctionComponent<{ title: string; skills: string[] }> = ({
  title,
  skills,
}) => (
  <Section title={title}>
    <div class={tw`flex flex-wrap gap-2`}>
      {skills.map((skill, i) => (
        <div key={skill}>
          <span class={tw`text-mono`}>{skill}</span>
          {i !== skills.length - 1 && <span> ,</span>}
        </div>
      ))}
    </div>
  </Section>
);
