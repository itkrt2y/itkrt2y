/** @jsx h */
import { h, type FunctionComponent } from "preact";
import { tw } from "@twind";

export const Section: FunctionComponent<{
  title: string;
  subtitle?: string;
}> = ({ title, subtitle, children }) => (
  <div class={tw`pl-4 flex flex-col gap-2 divide-y`}>
    <div class={tw`flex flex-col gap-1`}>
      <h3 class={tw`text-lg font-semibold tracking-wider`}>{title}</h3>
      {subtitle && <div class={tw`text-sm font-mono`}>{subtitle}</div>}
    </div>

    <div class={tw`flex flex-col gap-5 pt-3`}>{children}</div>
  </div>
);
