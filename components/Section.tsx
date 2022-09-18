import { type FunctionComponent } from "preact";
export const Section: FunctionComponent<{
  title: string;
  subtitle?: string;
}> = ({ title, subtitle, children }) => (
  <div class="pl-4 flex flex-col gap-2 divide-y">
    <div class="flex flex-col gap-1">
      <h3 class="text-lg font-semibold tracking-wider">{title}</h3>
      {subtitle && <div class="text-sm font-mono">{subtitle}</div>}
    </div>

    <div class="flex flex-col gap-5 pt-3">{children}</div>
  </div>
);
