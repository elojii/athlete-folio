import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface DescriptionCardProps { label: string, value: string }

export const DescriptionCard: FC<DescriptionCardProps> = ({ label, value }) => (
    <Card className="bg-card border-border hover:shadow-soft transition-smooth rounded-xl dark:bg-card dark:border-border dark:hover:shadow-lg max-w-full">
        <CardContent>
            <p className="text-xs text-muted-foreground font-normal uppercase tracking-wider mb-2 truncate">
                {label}
            </p>
            <p className="text-lg font-bold text-foreground truncate">
                {value}
            </p>

        </CardContent>
    </Card>
)