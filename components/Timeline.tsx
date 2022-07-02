/** @jsx h */
import { h, type JSX, type FunctionComponent } from "preact";
import { tw } from "@twind";
import { GitCommitIcon } from "./icons.tsx";

type Props = FunctionComponent<JSX.HTMLAttributes<HTMLDivElement>> & {
  Item: FunctionComponent<{ dateStr: string }>;
};

export const Timeline: Props = ({ className, ...props }) => (
  <div {...props} class={tw`${className} flex flex-col border-l gap-1 pl-4`} />
);

const TimelineItem: FunctionComponent<{ dateStr: string }> = ({
  dateStr,
  children,
}) => (
  <div class={tw`flex flex-col`}>
    <div class={tw`-ml-6 flex items-center`}>
      <GitCommitIcon />
      <span class={tw`text-sm`}>{dateStr}</span>
    </div>
    <div class={tw`py-5`}>{children}</div>
  </div>
);
Timeline.Item = TimelineItem;
