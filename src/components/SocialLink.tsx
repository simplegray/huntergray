import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  tooltip?: string;
}

const SocialLink = ({ href, icon, label, tooltip }: SocialLinkProps) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="social-link"
          >
            {icon}
          </a>
        </TooltipTrigger>
        {tooltip && (
          <TooltipContent side="top" className="text-xs">
            {tooltip}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default SocialLink;
