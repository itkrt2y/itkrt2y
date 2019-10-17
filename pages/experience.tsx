import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

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
    from: "Feb 2017",
    to: "May 2019",
    company: "Takeyu Web inc.",
    as: "Ruby on Rails / Frontend Engineer",
    techs: [
      "Ruby on Rails",
      "React",
      "PostgreSQL",
      "MySQL",
      "Elasticsearch",
      "Docker",
      "AWS",
      "Circle CI",
      "Travis CI"
    ],
    publicRepos: [
      {
        name: "gitfab2",
        url: "https://github.com/takeyuwebinc/gitfab2"
      },
      {
        name: "repro-client",
        url: "https://github.com/itkrt2y/repro-client"
      },
      {
        name: "render_async",
        url: "https://github.com/itkrt2y/render_async"
      }
    ]
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
      "Circle CI"
    ],
    publicRepos: []
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
      "Circle CI"
    ],
    publicRepos: []
  },
  {
    from: "Dec 2014",
    to: "Jul 2013",
    company: "FunTeam Inc.",
    as: "Java Engineer",
    techs: ["Java", "Spring", "Struts", "jQuery"],
    publicRepos: []
  }
];

const Techs = ({ techs }: { techs: string[] }) => (
  <div className="d-flex flex-wrap mt-1">
    {techs.map(tech => (
      <div
        className="px-3 py-1 border border-gray rounded-1 m-1 f4 text-mono"
        key={tech}
      >
        {tech}
      </div>
    ))}
  </div>
);

const Repos = ({ repos }: { repos: Repo[] }) => (
  <div className="d-flex flex-wrap mt-1">
    {repos.map(repo => (
      <a href={repo.url} key={repo.name}>
        <div
          className="px-3 py-1 rounded-1 m-1 f4 text-mono"
          style={{ border: "1px solid #79b8ff" }}
        >
          {repo.name}
        </div>
      </a>
    ))}

    <style jsx>{`
      a {
        color: #79b8ff;
        text-decoration: none;
      }
      a:hover {
        opacity: 0.8;
      }
    `}</style>
  </div>
);

const ExperienceList = () => (
  <div id="experience-listing">
    {experiences.map(exp => (
      <div className="mb-5" key={exp.company}>
        <div style={{ backgroundColor: "#24292e", marginLeft: -24 }}>
          <svg
            className="octicon octicon-git-commit"
            viewBox="0 0 14 16"
            version="1.1"
            width="14"
            height="16"
            aria-hidden="true"
            fill="#fafbfc"
            style={{ marginRight: 11 }}
          >
            <path
              fillRule="evenodd"
              d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"
            ></path>
          </svg>

          <span style={{ color: "#fafbfc" }}>
            {exp.from} - {exp.to}
          </span>
        </div>

        <div className="px-3 py-4 mt-3 border rounded-1">
          <div className="border-bottom">
            <h3>{exp.company}</h3>
            <div className="mb-2">{exp.as}</div>
          </div>

          <div className="mt-4">
            <h4 className="text-normal">Techs</h4>
            <Techs techs={exp.techs} />
          </div>

          {exp.publicRepos.length > 0 ? (
            <div className="mt-4">
              <h4 className="text-normal">Public Repositories</h4>
              <Repos repos={exp.publicRepos} />
            </div>
          ) : null}
        </div>
      </div>
    ))}

    <style jsx>{`
      #experience-listing {
        position: relative;
        padding-left: 18px;
        padding-bottom: 1px;
      }

      #experience-listing:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        display: block;
        width: 2px;
        content: "";
        background-color: #959da5;
      }
    `}</style>
  </div>
);

export default () => (
  <>
    <Head>
      <title>{title("Experience")}</title>
    </Head>

    <Nav selected="Experience" />

    <div className="px-3">
      <ExperienceList />
    </div>
  </>
);
