import Head from "next/head";
import Nav from "../components/Nav";
import { title } from "../lib/header";

const experiences = [
  {
    from: "Feb 2017",
    to: "May 2019",
    company: "Takeyu Web inc."
  },
  {
    from: "Aug 2016",
    to: "Feb 2017",
    company: "MediWeb Inc."
  },
  {
    from: "Jan 2015",
    to: "Aug 2016",
    company: "CrowdWorks Inc."
  },
  {
    from: "Dec 2014",
    to: "Jul 2013",
    company: "FunTeam Inc."
  }
];

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
          <h3 className="f4 border-bottom mb-3">{exp.company}</h3>
          <div>foo</div>
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
