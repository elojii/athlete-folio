import { FC } from "react";

import { ATHLETES } from "@/entities/Athlete";
import { CarouselCard } from "./CarouselCard";
import { CLUB_MEMBERSHIPS, ClubCard } from "@/entities/Club";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CarouselProps {
    athletes: typeof ATHLETES[number][],
    clubMembers: typeof CLUB_MEMBERSHIPS[number][],
}

export const Carousel: FC<CarouselProps> = ({ athletes, clubMembers }) => {
    const stories = [
        ...athletes.map((athlete) => ({ ...athlete, type: 'athlete' })),
        ...clubMembers.map((clubMember) => ({ ...clubMember, type: 'clubMember' }))
    ];

    return <section className="mb-8 overflow-hidden">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {/* Add Your Story */}
            <div className="relative min-w-[160px] h-[280px] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-dashed border-primary/30 flex flex-col items-center justify-end p-4 cursor-pointer hover:scale-105 transition-transform overflow-hidden">
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-2xl font-light">+</span>
                </div>
                <span className="text-sm text-foreground font-medium text-center bg-background/90 dark:bg-background/90 px-3 py-2 rounded-lg">Your story</span>
            </div>


            {/* Athletes Stories */}
            {ATHLETES.slice(0, 5).map((athlete, index) => (
                <div key={index} className="relative min-w-[160px] h-[280px] rounded-2xl bg-gradient-to-br from-primary via-primary/70 to-primary/50 cursor-pointer hover:scale-105 transition-transform overflow-hidden group">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-4 left-4">
                        <Avatar className="w-12 h-12 border-3 border-white">
                            <AvatarImage src={athlete.avatar as string} alt={athlete.name} />
                            <AvatarFallback className="bg-muted text-muted-foreground text-sm">
                                {athlete.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-sm text-white font-medium drop-shadow-sm">
                            {athlete.name.split(' ')[0]}
                        </span>
                    </div>
                </div>
                // <AthleteCard key={index} athlete={athlete} />
            ))}

            {/* Club Stories */}
            {CLUB_MEMBERSHIPS.slice(0, 2).map((club, index) => (
                // <div key={`club-${index}`} className="relative min-w-[160px] h-[280px] rounded-2xl cursor-pointer hover:scale-105 transition-transform overflow-hidden group">
                //     <img
                //         src={club.logo.src}
                //         alt={club.name}
                //         className="w-full h-full object-cover"
                //     />
                //     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/40 transition-colors"></div>
                //     <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 p-1">
                //         <img
                //             src={club.logo.src}
                //             alt={club.name}
                //             className="w-full h-full object-cover rounded-full"
                //         />
                //     </div>
                //     <div className="absolute bottom-4 left-4 right-4">
                //         <span className="text-sm text-white font-medium drop-shadow-sm">
                //             {club.name.split(' ')[0]}
                //         </span>
                //     </div>
                // </div>
                <></>
            ))}
        </div>
    </section>
}