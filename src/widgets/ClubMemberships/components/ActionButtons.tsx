import { FC } from "react";
import { TrendingUp, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SupportForm } from "@/features/SupportForm";

export const ActionButtons: FC = () => (
  <section className="flex items-center gap-3">
    <Button variant="default" size={'lg'} className="rounded-md dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
      <Users className="w-4 h-4 mr-2" />
      Join Team
    </Button>

    <Button variant="outline" size={'lg'} className="rounded-md dark:border-border dark:bg-background dark:text-foreground dark:hover:bg-accent">
      <TrendingUp className="w-4 h-4 mr-2" />
      Share
    </Button>

    <SupportForm />
  </section>
);