import { FC } from "react";

import { CLUB_MEMBERSHIPS } from "..";
import { Avatar } from "@/shared/components/Avatar";

const EXCESS_MESSAGES = 20

export const ClubAvatars: FC = () => (
    <div className="flex items-center gap-4">
      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mr-4">
        CLUB MEMBERSHIPS
      </p>
  
      <div className="flex -space-x-3">
        {CLUB_MEMBERSHIPS.slice(0, 6).map((club, index) => (
          <Avatar key={index} {...club} />
        ))}
  
        <div className="w-14 h-14 rounded-full bg-muted border-2 border-background dark:border-background flex items-center justify-center hover:bg-muted/80 transition-colors">
          <span className="text-sm font-medium text-muted-foreground dark:text-muted-foreground">+{EXCESS_MESSAGES}</span>
        </div>
      </div>
    </div>
  );