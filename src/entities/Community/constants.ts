import athleteAvatar from "@/assets/athlete-avatar.jpg";

import clubWorld from "@/assets/club-world.jpg";
import clubOlympic from "@/assets/club-olympic.jpg";
import tennisCourt from "@/assets/tennis-court.jpg";
import swimmingPost from "@/assets/swimming-post.jpg";
import clubAthletics from "@/assets/club-athletics.jpg";
import footballTraining from "@/assets/football-training.jpg";
import marathonCelebration from "@/assets/marathon-celebration.jpg";

export const COMMUNITY_POSTS = [
  {
    id: 1,
    author: "Olympic Sports Club",
    avatar: clubOlympic,
    timestamp: "2 hours ago",
    isVerified: true,
    content:
      "Exciting news! Our swimming team just broke 3 regional records at today's championship. Congratulations to all athletes who participated! 🏊‍♂️🏆",
    image: swimmingPost,
    likes: 45,
    comments: 12,
    shares: 8,
  },
  {
    id: 2,
    author: "Football Academy",
    avatar: clubAthletics,
    timestamp: "5 hours ago",
    isVerified: true,
    content:
      "Join us for a special training session this weekend! We'll be focusing on advanced techniques and tactical gameplay. All skill levels welcome.",
    image: footballTraining,
    likes: 32,
    comments: 7,
    shares: 15,
  },
  {
    id: 3,
    author: "Sarah Johnson",
    avatar: athleteAvatar,
    timestamp: "1 day ago",
    isVerified: false,
    content:
      "Just completed my first marathon! Thank you to SportUnion for all the training support and motivation. The community here is incredible! 🏃‍♀️💪",
    image: marathonCelebration,
    likes: 78,
    comments: 23,
    shares: 5,
  },
  {
    id: 4,
    author: "Tennis Pro Academy",
    avatar: clubWorld,
    timestamp: "2 days ago",
    isVerified: true,
    content:
      "New courts are officially open! Come check out our state-of-the-art facilities with professional-grade surfaces and lighting. Book your session today!",
    image: tennisCourt,
    likes: 56,
    comments: 18,
    shares: 12,
  },
];
