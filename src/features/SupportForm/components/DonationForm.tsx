"use client"

import { ChangeEvent, FC, useState } from "react";
import { DollarSign, Heart, Users } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DONATION_AMOUNTS } from "../constants";

const PROCESSING_FEE = 0.59

export const DonationForm: FC = () => {
    const [selectedDonationAmount, setSelectedDonationAmount] = useState<number | null>(null)
    const [customAmount, setCustomAmount] = useState<number | null>(null)

    const handleSetDonationAmount = (amount: number) => {
        if (selectedDonationAmount === amount) return setSelectedDonationAmount(null)
        setSelectedDonationAmount(amount);
        setCustomAmount(null);
    }

    const handleSetCustomAmount = (e: ChangeEvent<HTMLInputElement>) => {
        const customAmount = Number(e.target.value)

        if (customAmount < 0) return
        if (customAmount === 0) return setCustomAmount(null);

        setCustomAmount(customAmount);
        setSelectedDonationAmount(null);
    }

    const totalFee = selectedDonationAmount ?? customAmount ?? 0

    return (
        <form className="space-y-6 py-4">

            <fieldset className="space-y-4">
                <legend className="text-sm font-medium">Select donation amount</legend>
                <ul className="grid grid-cols-3 gap-3">
                    {DONATION_AMOUNTS.map((amount) => (
                        <li key={amount}>
                            <Button
                                key={amount}
                                variant={selectedDonationAmount === amount ? "default" : "outline"}
                                onClick={() => handleSetDonationAmount(amount)}
                                type="button"
                                className="h-12 w-full"
                            >
                                ${amount}
                            </Button>
                        </li>
                    ))}
                </ul>

                <div className="space-y-2">
                    <Label htmlFor="custom-amount" className="text-sm font-medium">Or enter custom amount</Label>
                    <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            id="custom-amount"
                            type="number"
                            placeholder="0"
                            value={`${customAmount}`}
                            onChange={handleSetCustomAmount}
                            className="pl-10"
                        />
                    </div>
                </div>
            </fieldset>

            <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">Add a message (optional)</Label>
                <Input id="message" placeholder="Good luck with your training!" />
            </div>

            <section className="bg-muted/50 rounded-lg p-4 space-y-2">
                <h3 id="summary" className="sr-only">Donation Summary</h3>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Donation amount:</span>
                    <span className="font-medium">${totalFee}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Processing fee:</span>
                    <span className="text-sm text-muted-foreground">${PROCESSING_FEE}</span>
                </div>
                <div className="border-t pt-2 flex justify-between items-center font-medium">
                    <span>Total:</span>
                    <span>${totalFee + PROCESSING_FEE}</span>
                </div>
            </section>

            <Button className="w-full h-12 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white">
                <Heart className="w-4 h-4 mr-2" />
            </Button>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <hr className="border-border" aria-hidden="true" />
                    <span className="bg-background px-2 text-muted-foreground">or</span>
                </div>
            </div>
            <Button variant="outline" className="w-full h-12">
                <Users className="w-4 h-4 mr-2" />
                Follow without donation
            </Button>

            <p className="text-xs text-muted-foreground text-center">
                Donations are processed securely through Stripe. You will be redirected to complete your payment.
            </p>
        </form>
    )

}