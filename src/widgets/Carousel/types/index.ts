import { ClubCardProps } from "@/entities/Club";
import { AthleteCardProps } from "@/entities/Athlete";

export enum CarouselTypes {
  CLUB_MEMEBER = "clubMember",
  ATHLETES = "athletes",
}
export type CarouselPropsMap = {
  [CarouselTypes.ATHLETES]: AthleteCardProps;
  [CarouselTypes.CLUB_MEMEBER]: ClubCardProps;
};

type CardTypes = 'athletes' | 'clubMember'

export type CarouselProps = ClubCardProps & AthleteCardProps & { type: CardTypes } 