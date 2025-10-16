import { Header } from "@/widgets/Header";
import { TeamStats } from "@/widgets/TeamStats";
import { ClubMembership } from "@/widgets/ClubMemberships";
import { TabNavigation } from "@/features/TabNavigation/components/NavigationTabs";
import { NavTabs } from "@/widgets/Navigation/components";

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
