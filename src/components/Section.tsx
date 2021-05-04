import { FunctionComponent } from "preact";

export const Section: FunctionComponent<{
  title: string;
  subtitle?: string;
}> = ({ title, subtitle, children }) => (
  <div className="pl-4 flex flex-col gap-2 divide-y">
    <div className="flex flex-col gap-1">
      <h3 className="text-lg font-semibold tracking-wider">{title}</h3>
      {subtitle && <div className="text-sm font-mono">{subtitle}</div>}
    </div>

    <div className="flex flex-col gap-5 pt-3">{children}</div>
  </div>
);
