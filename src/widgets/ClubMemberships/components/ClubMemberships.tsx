import { FC } from "react";

import { ClubAvatars } from "@/entities/Club";
import { ActionButtons } from "./ActionButtons";

export const ClubMembership: FC = () => (
  <section className="flex flex-col lg:flex-row items-center lg:justify-between gap-6 mb-8">
    <h2 className="sr-only">Club Memberships</h2>

    <ClubAvatars />
    <ActionButtons />
  </section>
);