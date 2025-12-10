import { FC } from "react";

import { FallbackAvatarProps } from "..";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const FallbackAvatar: FC<FallbackAvatarProps> = ({ src, alt, fallback }) => (
    <Avatar className="w-12 h-12 border-3 border-white">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback className="bg-muted text-muted-foreground text-sm">
            {fallback}
        </AvatarFallback>
    </Avatar>
)