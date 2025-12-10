import { Header } from "@/widgets/Header";
import { TeamStats } from "@/entities/Team";
import { NavTabs } from "@/widgets/Navigation";
import { ClubMembership } from "@/widgets/ClubMemberships";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-6 py-16 lg:px-8">
        <Header />
        <TeamStats />
        <ClubMembership />
      </div>

      <NavTabs />
    </>
  );
}
