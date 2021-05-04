import Head from "next/head";
import { FunctionComponent } from "preact";
import { title } from "~/lib/header";

type TechType = { name: string; url: string };

const techs: readonly TechType[] = [
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
  {
    name: "Firebase Hosting",
    url: "https://firebase.google.com/products/hosting/",
  },
  { name: "Google Domains", url: "https://domains.google" },
];

const TechList: FunctionComponent<{
  techs: readonly TechType[];
}> = ({ techs }) => (
  <div className="flex gap-2">
    {techs.map((tech, i) => (
      <div key={tech.name}>
        <a
          href={tech.url}
          className="text-blue-300 hover:text-blue-100 underline"
        >
          {tech.name}
        </a>
        {i !== techs.length - 1 && <span> ,</span>}
      </div>
    ))}
  </div>
);

export default function Page() {
  return (
    <>
      <Head>
        <title>{title("This Site")}</title>
      </Head>

      <div className="px-3 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="border-b text-xl font-semibold tracking-wider pb-1">
            Repository
          </h2>
          <a
            href="https://github.com/itkrt2y/about-me"
            className="text-blue-300 hover:text-blue-100 underline"
          >
            itkrt2y/about-me
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="border-b text-xl font-semibold tracking-wider pb-1">
            Built with
          </h2>

          <TechList techs={techs} />
        </div>
      </div>
    </>
  );
}
