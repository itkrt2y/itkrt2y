/** @jsx h */
import { h, type FunctionComponent } from "preact";
import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { Layout } from "@components/Layout.tsx";
import { Section } from "@components/Section.tsx";
import { title } from "@lib/header.ts";

type TechType = { name: string; url: string };

const techs: readonly TechType[] = [
  { name: "Fresh", url: "https://fresh.deno.dev/" },
  { name: "Twind", url: "https://twind.dev/" },
  {
    name: "Deno deploy",
    url: "https://firebase.google.com/products/hosting/",
  },
  { name: "Google Domains", url: "https://domains.google" },
];

export default function Page(props: PageProps) {
  return (
    <Layout url={props.url}>
      <Head>
        <title>{title("This Site")}</title>
      </Head>

      <div class={tw`flex flex-col gap-8`}>
        <Section title="Repository">
          <a
            href="https://github.com/itkrt2y/about-me"
            class={tw`text-blue-300 hover:text-blue-100 underline`}
          >
            itkrt2y/about-me
          </a>
        </Section>

        <Section title="Built with">
          <TechList techs={techs} />
        </Section>
      </div>
    </Layout>
  );
}

const TechList: FunctionComponent<{
  techs: readonly TechType[];
}> = ({ techs }) => (
  <div class={tw`flex gap-2`}>
    {techs.map((tech, i) => (
      <div key={tech.name}>
        <a
          href={tech.url}
          class={tw`text-blue-300 hover:text-blue-100 underline`}
          target="_blank"
        >
          {tech.name}
        </a>
        {i !== techs.length - 1 && <span> ,</span>}
      </div>
    ))}
  </div>
);
