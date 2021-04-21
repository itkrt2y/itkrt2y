import Head from "next/head";
import { FunctionComponent } from "preact";
import Nav from "~/components/Nav";
import { title } from "~/lib/header";

const Tech: FunctionComponent<{ name: string; url: string }> = ({
  name,
  url,
}) => (
  <a href={url} className="text-white text-underline f3">
    {name}
  </a>
);

const TechSpacer = () => <span className="f3 mx-1"> / </span>;

export default function Page() {
  return (
    <>
      <Head>
        <title>{title("This Site")}</title>
      </Head>

      <Nav selected="This Site" />

      <div className="px-3">
        <div className="mb-5">
          <h2 className="border-bottom pb-2 mb-4">Repository</h2>
          <a
            href="https://github.com/itkrt2y/about-me"
            className="text-white text-underline f3"
          >
            itkrt2y / about-me
          </a>
        </div>

        <div className="my-5">
          <h2 className="border-bottom pb-2 mb-4">Built with</h2>
          <Tech name="Next.js" url="https://nextjs.org/" />
          <TechSpacer />
          <Tech name="Primer" url="https://primer.style" />
          <TechSpacer />
          <Tech
            name="Firebase Hosting"
            url="https://firebase.google.com/products/hosting/"
          />
          <TechSpacer />
          <Tech name="Google Domains" url="https://domains.google" />
        </div>
      </div>
    </>
  );
}
