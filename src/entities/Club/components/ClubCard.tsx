import { FC } from "react";

import { CLUB_MEMBERSHIPS } from "..";

export interface ClubCardProps {
  club: typeof CLUB_MEMBERSHIPS[number];
}

export const ClubCard: FC<ClubCardProps> = ({ club }) => (
    <div className="relative min-w-[160px] h-[280px] rounded-2xl cursor-pointer hover:scale-105 transition-transform overflow-hidden group">
        <img
            src={club.logo.src}
            alt={club.name}
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/40 transition-colors"></div>
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 p-1">
            <img
                src={club.logo.src}
                alt={club.name}
                className="w-full h-full object-cover rounded-full"
            />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
            <span className="text-sm text-white font-medium drop-shadow-sm">
                {club.name.split(' ')[0]}
            </span>
        </div>
    </div>
);
