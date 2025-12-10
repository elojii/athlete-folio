import { FC } from "react";

import { ClubCard } from "@/entities/Club";
import { AthleteCard } from "@/entities/Athlete";
import { CarouselProps, CarouselPropsMap, CarouselTypes } from "../types";

class StoryRegistry {
    static registry = {
        [CarouselTypes.ATHLETES]: (props: CarouselPropsMap[CarouselTypes.ATHLETES]) => <AthleteCard {...props} />,
        [CarouselTypes.CLUB_MEMEBER]: (props: CarouselPropsMap[CarouselTypes.CLUB_MEMEBER]) => <ClubCard {...props} />
    }
}

export const CarouselCard = <T extends CarouselProps>({ story }: { story: T }) => {
    const Card = StoryRegistry.registry[story.type];
    if (!Card) return null;

    return Card(story);
}
