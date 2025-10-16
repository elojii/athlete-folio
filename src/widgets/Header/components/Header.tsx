import { FC } from "react";

import athleteAvatar from "@/assets/athlete-avatar.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header: FC = () => (
    <header>
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div> */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-left mb-12">
                <p className="text-sm text-muted-foreground font-normal uppercase tracking-wider mb-4">
                    PROFESSIONAL | ELITE
                </p>
                <div className="flex items-center justify-start gap-8 mb-8">
                    <Avatar className="w-[120px] h-[120px] border-4 border-background dark:border-background">
                        <AvatarImage src={athleteAvatar.src} alt="Alexander Peterson" />
                        <AvatarFallback className="bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground text-4xl">AP</AvatarFallback>
                    </Avatar>
                    <span className="text-8xl lg:text-9xl font-bold text-foreground tracking-tighter drop-shadow-sm">
                        A
                    </span>
                    <div className="text-left">
                        <h1 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight drop-shadow-sm">
                            ALEXANDER PETERSON
                        </h1>
                        <h2 className="text-4xl lg:text-6xl font-bold text-foreground/80 tracking-tight">
                            ELITE RUNNING
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </header>
)
