import Head from "next/head";
import { FunctionComponent } from "preact";
import { title } from "~/lib/header";

const Tech: FunctionComponent<{ name: string; url: string }> = ({
  name,
  url,
}) => (
  <a href={url} className="text-blue-300 hover:text-blue-100 underline">
    {name}
  </a>
);

const TechSpacer = () => <span className="mr-1">, </span>;

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

          <div className="flex gap-1">
            <Tech name="Next.js" url="https://nextjs.org/" />
            <TechSpacer />
            <Tech name="Tailwind CSS" url="https://tailwindcss.com/" />
            <TechSpacer />
            <Tech
              name="Firebase Hosting"
              url="https://firebase.google.com/products/hosting/"
            />
            <TechSpacer />
            <Tech name="Google Domains" url="https://domains.google" />
          </div>
        </div>
      </div>
    </>
  );
}
