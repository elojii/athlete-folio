import clubAthletics from "@/assets/club-athletics.jpg";
import clubMarathon from "@/assets/club-marathon.jpg";
import clubNyc from "@/assets/club-nyc.jpg";
import clubOlympic from "@/assets/club-olympic.jpg";
import clubTrack from "@/assets/club-track.jpg";
import clubWorld from "@/assets/club-world.jpg";

export const CLUB_MEMBERSHIPS = [
  { name: "NYC Marathon Club", logo: clubNyc, type: "Professional Member" },
  { name: "US Olympic Committee", logo: clubOlympic, type: "Team Member" },
  { name: "Elite Marathon Club", logo: clubMarathon, type: "Founding Member" },
  {
    name: "Track & Field Federation",
    logo: clubTrack,
    type: "Licensed Athlete",
  },
  { name: "Athletics USA", logo: clubAthletics, type: "Elite Member" },
  { name: "World Athletics", logo: clubWorld, type: "Registered Athlete" },
];

export const EXCESS_MESSAGES = 20;
