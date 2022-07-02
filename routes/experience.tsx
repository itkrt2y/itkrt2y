/** @jsx h */
import { h, type FunctionComponent } from "preact";
import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { Layout } from "@components/Layout.tsx";
import { Section } from "@components/Section.tsx";
import { Timeline } from "@components/Timeline.tsx";
import { title } from "@lib/header.ts";

type Repo = {
  name: string;
  url: string;
};

type Experience = {
  from: string;
  to: string;
  company: string;
  as: string;
  techs: string[];
  publicRepos: Repo[];
};

const experiences: Experience[] = [
  {
    from: "Jan 2020",
    to: "Current",
    company: "Repro inc.",
    as: "",
    techs: [
      "Ruby on Rails",
      "Go",
      "Java",
      "Kafka",
      "Kafka Streams",
      "TypeScript",
      "React",
      "Vue",
      "MySQL",
      "Cassandra",
      "Docker",
      "AWS",
    ],
    publicRepos: [],
  },
  {
    from: "Feb 2017",
    to: "May 2019",
    company: "Takeyu Web inc.",
    as: "Ruby on Rails / Frontend Engineer",
    techs: [
      "Ruby on Rails",
      "TypeScript",
      "React",
      "PostgreSQL",
      "MySQL",
      "Elasticsearch",
      "Docker",
      "AWS",
    ],
    publicRepos: [
      {
        name: "gitfab2",
        url: "https://github.com/takeyuwebinc/gitfab2",
      },
      {
        name: "repro-client",
        url: "https://github.com/itkrt2y/repro-client",
      },
      {
        name: "render_async",
        url: "https://github.com/itkrt2y/render_async",
      },
    ],
  },
  {
    from: "Aug 2016",
    to: "Feb 2017",
    company: "MediWeb Inc.",
    as: "Ruby on Rails Engineer",
    techs: [
      "Ruby on Rails",
      "Ember.js",
      "Docker",
      "PostgreSQL",
      "Engine Yard",
      "Circle CI",
    ],
    publicRepos: [],
  },
  {
    from: "Jan 2015",
    to: "Aug 2016",
    company: "CrowdWorks Inc.",
    as: "Ruby on Rails Engineer",
    techs: [
      "Ruby on Rails",
      "Vue",
      "jQuery",
      "MySQL",
      "Elasticsearch",
      "AWS",
      "Circle CI",
    ],
    publicRepos: [],
  },
  {
    from: "Dec 2014",
    to: "Jul 2013",
    company: "FunTeam Inc.",
    as: "Java Engineer",
    techs: ["Java", "Spring", "Struts", "jQuery"],
    publicRepos: [],
  },
];

export default function Page(props: PageProps) {
  return (
    <Layout url={props.url}>
      <Head>
        <title>{title("Experience")}</title>
      </Head>

      <div class={tw`px-3`}>
        <ExperienceList />
      </div>
    </Layout>
  );
}

const Content: FunctionComponent<{ title: string }> = ({ title, children }) => (
  <div class={tw`flex flex-col gap-2`}>
    <h4 class={tw`font-semibold underline text-sm`}>{title}</h4>
    {children}
  </div>
);

const Techs: FunctionComponent<{ techs: string[] }> = ({ techs }) => (
  <div class={tw`flex flex-wrap gap-2`}>
    {techs.map((tech, i) => (
      <div key={tech}>
        {tech}
        {i !== techs.length - 1 && <span> ,</span>}
      </div>
    ))}
  </div>
);

const Repos: FunctionComponent<{ repos: Repo[] }> = ({ repos }) => (
  <div class={tw`flex flex-wrap gap-2`}>
    {repos.map((repo, i) => (
      <div key={repo.name}>
        <a
          href={repo.url}
          class={tw`text-blue-300 hover:text-blue-100 underline font-mono`}
        >
          {repo.name}
        </a>
        {i !== repos.length - 1 && <span> ,</span>}
      </div>
    ))}
  </div>
);

const ExperienceList = () => (
  <Timeline>
    {experiences.map((exp) => (
      <Timeline.Item dateStr={`${exp.from} - ${exp.to}`} key={exp.company}>
        <Section title={exp.company} subtitle={exp.as}>
          <Content title="Techs">
            <Techs techs={exp.techs} />
          </Content>

          {exp.publicRepos.length > 0 && (
            <Content title="Repositories">
              <Repos repos={exp.publicRepos} />
            </Content>
          )}
        </Section>
      </Timeline.Item>
    ))}
  </Timeline>
);
