import { FC } from "react";

import { TEAM_STATS } from "../constants";
import { DescriptionCard } from "@/widgets/TeamStats/components/DescriptionCard";

export const TeamStats: FC = () => (
    <section aria-labelledby="team-stats">
        <h2 id="team-stats" className="sr-only">Team Statistics</h2>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {TEAM_STATS.map((description, index) => (
                <li key={index}>
                    <DescriptionCard {...description}/>
                </li>
            ))}
        </ul>
    </section>
)