import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface ClubAvatarProps {
  name: string, type: string, logo: StaticImageData
}

export const Avatar: FC<ClubAvatarProps> = ({ name, type, logo }) => (
  <div
    className="group relative"
    title={`${name} - ${type}`}
  >
    <div className="w-14 h-14 rounded-full border-2 border-background dark:border-background bg-card overflow-hidden shadow-sm hover:shadow-medium transition-all hover:scale-110 hover:z-10">
      <Image
        src={logo}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);