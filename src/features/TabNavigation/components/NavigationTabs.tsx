import { FC } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TabNavigation: FC = () => {
    return <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-8 bg-transparent border-b border-border rounded-none h-auto p-0 dark:border-border">
            <TabsTrigger
                value="about"
                className="py-4 px-1 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent transition-colors dark:data-[state=active]:border-foreground"
            >
                About
            </TabsTrigger>
            <TabsTrigger
                value="athletes"
                className="py-4 px-1 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent transition-colors dark:data-[state=active]:border-foreground"
            >
                Athletes
            </TabsTrigger>
            <TabsTrigger
                value="achievements"
                className="py-4 px-1 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent transition-colors dark:data-[state=active]:border-foreground"
            >
                Achievements
            </TabsTrigger>
            <TabsTrigger
                value="coaching"
                className="py-4 px-1 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent transition-colors dark:data-[state=active]:border-foreground"
            >
                Coaching
            </TabsTrigger>
            <TabsTrigger
                value="training"
                className="py-4 px-1 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent transition-colors dark:data-[state=active]:border-foreground"
            >
                Training
            </TabsTrigger>
            <TabsTrigger
                value="events"
                className="py-4 px-1 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent transition-colors dark:data-[state=active]:border-foreground"
            >
                Events
            </TabsTrigger>
            <TabsTrigger
                value="media"
                className="py-4 px-1 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent transition-colors dark:data-[state=active]:border-foreground"
            >
                Media
            </TabsTrigger>
            <TabsTrigger
                value="marketplace"
                className="py-4 px-1 rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent transition-colors dark:data-[state=active]:border-foreground"
            >
                Marketplace
            </TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <TabsContent value="about">
            {/* <AboutTab /> */}
        </TabsContent>

        <TabsContent value="events">
            {/* <EventsTab /> */}
        </TabsContent>

        <TabsContent value="community">
            {/* <CommunityTab /> */}
        </TabsContent>

        {/* Add other TabsContent here */}
    </Tabs>
}