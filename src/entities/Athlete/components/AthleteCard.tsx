import { FC } from "react";

import { ATHLETES } from "..";
import { FallbackAvatar } from "@/shared";
import { Card, CardContent } from "@/components/ui/card";

export interface AthleteCardProps {
    athlete: typeof ATHLETES[number];
}

export const AthleteCard: FC<AthleteCardProps> = ({ athlete }) => (
    <Card className="relative min-w-[160px] h-[280px] rounded-2xl bg-gradient-to-br from-primary via-primary/70 to-primary/50 cursor-pointer hover:scale-105 transition-transform overflow-hidden group border-none shadow-none">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        <div className="absolute top-4 left-4">
            <FallbackAvatar
                src={athlete.avatar as string}
                alt={athlete.name}
                fallback={<AthleteFallback name={athlete.name} />}
            />
        </div>
        <CardContent className="absolute bottom-4 left-4 right-4 p-0 bg-transparent">
            <span className="text-sm text-white font-medium drop-shadow-sm">
                {athlete.name.split(" ")[0]}
            </span>
        </CardContent>
    </Card>
);

const AthleteFallback: FC<{ name: string }> = ({ name }) => name.split(' ').map(n => n[0]).join('')
