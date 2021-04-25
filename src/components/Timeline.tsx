import { FunctionComponent } from "preact";
import { HTMLAttributes } from "react";
import { GitCommitIcon } from "~/components/icons";

type Props = FunctionComponent<HTMLAttributes<HTMLDivElement>> & {
  Item: FunctionComponent<{ dateStr: string }>;
};

export const Timeline: Props = ({ className, ...props }) => (
  <div {...props} className={`${className} flex flex-col border-l pl-4`} />
);

const TimelineItem: FunctionComponent<{ dateStr: string }> = ({
  dateStr,
  children,
}) => (
  <div className="flex flex-col">
    <div className="-ml-6 flex items-center bg-gray-800">
      <GitCommitIcon />
      <span className="text-sm">{dateStr}</span>
    </div>
    <div className="py-5">{children}</div>
  </div>
);
Timeline.Item = TimelineItem;
