import { FC } from "react";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DonationForm } from "./DonationForm";

export const SupportForm: FC = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="secondary" size={'lg'}>
        <Heart className="w-4 h-4 mr-2" />
        Be a fan
      </Button>
    </DialogTrigger>

    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500" />
          Support Alexander Peterson
        </DialogTitle>
        <DialogDescription>
          Show your support with a donation to help our elite athlete achieve their goals.
        </DialogDescription>
      </DialogHeader>

      <DonationForm />
    </DialogContent>
  </Dialog>
);
