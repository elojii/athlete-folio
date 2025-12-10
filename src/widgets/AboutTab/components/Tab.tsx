import { FC } from "react";
import { Calendar, Heart, MessageCircle, Share2 } from "lucide-react";

import { ATHLETES, AthleteCard } from "@/entities/Athlete";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { CLUB_MEMBERSHIPS, ClubCard } from "@/entities/Club";
import { COMMUNITY_POSTS } from "@/entities/Community";
import athleteAvatar from "@/assets/athlete-avatar.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AboutTab: FC = () => (
    <TabsContent value="about" className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <Card className="bg-card border-border hover:shadow-soft transition-smooth rounded-2xl dark:bg-card dark:border-border dark:hover:shadow-lg">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-bold mb-6 text-foreground">About Our Elite Team</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Alexander Peterson Elite Running is a premier marathon training group founded in 2018.
                            We specialize in developing world-class distance runners through innovative training
                            methodologies and comprehensive athlete support systems.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Our team has produced multiple Olympic qualifiers, world championship medalists, and
                            major marathon winners. We believe in the power of collective training while maintaining
                            individual athlete development paths.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-4 bg-muted/50 rounded-lg dark:bg-muted/20">
                                <div className="text-3xl font-bold text-foreground">28</div>
                                <div className="text-sm text-muted-foreground">Elite Athletes</div>
                            </div>
                            <div className="text-center p-4 bg-muted/50 rounded-lg dark:bg-muted/20">
                                <div className="text-3xl font-bold text-foreground">156</div>
                                <div className="text-sm text-muted-foreground">Total Medals</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <Card className="bg-card border-border hover:shadow-soft transition-smooth rounded-2xl dark:bg-card dark:border-border dark:hover:shadow-lg">
                    <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-4 text-foreground">Team Leader</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <Avatar className="w-16 h-16 border-2 border-background dark:border-background">
                                <AvatarImage src={athleteAvatar.src} alt="Alexander Peterson" />
                                <AvatarFallback className="bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground">AP</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-bold text-foreground">Alexander Peterson</div>
                                <div className="text-sm text-muted-foreground">Team Captain & Founder</div>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Olympic qualifier and 2:08 marathoner leading our elite training group.
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-soft transition-smooth rounded-2xl dark:bg-card dark:border-border dark:hover:shadow-lg">
                    <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-4 text-foreground">Upcoming Events</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                <div>
                                    <div className="font-medium text-foreground text-sm">Paris Olympics</div>
                                    <div className="text-xs text-muted-foreground">August 10, 2024</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="w-4 h-4 text-muted-foreground" />
                                <div>
                                    <div className="font-medium text-foreground text-sm">Team Training Camp</div>
                                    <div className="text-xs text-muted-foreground">July 1-15, 2024</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>

        {/* Community Feed Section */}
        <div className="mt-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">feeds and posts</h2>
                <p className="text-muted-foreground">Stay updated with the latest news and achievements from our sports community</p>
            </div>

            {/* Stories Section */}
            <section className="mb-8 overflow-hidden">
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                    {/* Add Your Story */}
                    <div className="relative min-w-[160px] h-[280px] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-dashed border-primary/30 flex flex-col items-center justify-end p-4 cursor-pointer hover:scale-105 transition-transform overflow-hidden">
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary text-2xl font-light">+</span>
                        </div>
                        <span className="text-sm text-foreground font-medium text-center bg-background/90 dark:bg-background/90 px-3 py-2 rounded-lg">Your story</span>
                    </div>

                    {/* Athletes Stories */}
                    {ATHLETES.slice(0, 5).map((athlete, index) => (
                        // <div key={index} className="relative min-w-[160px] h-[280px] rounded-2xl bg-gradient-to-br from-primary via-primary/70 to-primary/50 cursor-pointer hover:scale-105 transition-transform overflow-hidden group">
                        //     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        //     <div className="absolute top-4 left-4">
                        //         <Avatar className="w-12 h-12 border-3 border-white">
                        //             <AvatarImage src={athlete.avatar as string} alt={athlete.name} />
                        //             <AvatarFallback className="bg-muted text-muted-foreground text-sm">
                        //                 {athlete.name.split(' ').map(n => n[0]).join('')}
                        //             </AvatarFallback>
                        //         </Avatar>
                        //     </div>
                        //     <div className="absolute bottom-4 left-4 right-4">
                        //         <span className="text-sm text-white font-medium drop-shadow-sm">
                        //             {athlete.name.split(' ')[0]}
                        //         </span>
                        //     </div>
                        // </div>
                        <AthleteCard key={index} athlete={athlete} />
                    ))}

                    {/* Club Stories */}
                    {CLUB_MEMBERSHIPS.slice(0, 2).map((club, index) => (
                        // <div key={`club-${index}`} className="relative min-w-[160px] h-[280px] rounded-2xl cursor-pointer hover:scale-105 transition-transform overflow-hidden group">
                        //     <img
                        //         src={club.logo.src}
                        //         alt={club.name}
                        //         className="w-full h-full object-cover"
                        //     />
                        //     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 group-hover:from-black/40 transition-colors"></div>
                        //     <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 p-1">
                        //         <img
                        //             src={club.logo.src}
                        //             alt={club.name}
                        //             className="w-full h-full object-cover rounded-full"
                        //         />
                        //     </div>
                        //     <div className="absolute bottom-4 left-4 right-4">
                        //         <span className="text-sm text-white font-medium drop-shadow-sm">
                        //             {club.name.split(' ')[0]}
                        //         </span>
                        //     </div>
                        // </div>

                        <ClubCard key={index} club={club}/>
                    ))}
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
                {COMMUNITY_POSTS.map((post, index) => (
                    <Card key={post.id} className={`bg-card border-border hover:shadow-soft transition-smooth dark:bg-card dark:border-border dark:hover:shadow-lg h-fit ${index % 2 === 0 ? 'mr-0 md:mr-3' : 'ml-0 md:ml-3'} mb-6`}>
                        <CardContent className="p-6">
                            {/* Post Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <Avatar className="w-12 h-12 border border-border dark:border-border">
                                    <AvatarImage src={post.avatar.src} alt={post.author} />
                                    <AvatarFallback className="bg-muted text-muted-foreground dark:bg-muted dark:text-muted-foreground">
                                        {post.author.split(" ").map(n => n[0]).join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-bold text-foreground text-sm">{post.author}</h4>
                                        {post.isVerified && (
                                            <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                                </div>
                            </div>

                            {/* Post Content */}
                            <p className="text-sm text-foreground mb-4 leading-relaxed">
                                {post.content}
                            </p>

                            {/* Post Image - Only render if image exists */}
                            {post.image && (
                                <div className="mb-4 rounded-lg overflow-hidden border border-border dark:border-border">
                                    <img
                                        src={post.image.src}
                                        alt="Post content"
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                            )}

                            {/* Engagement Stats */}
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                                <span>{post.likes} likes</span>
                                <span>{post.comments} comments</span>
                                <span>{post.shares} shares</span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-between pt-4 border-t border-border dark:border-border">
                                <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground dark:hover:bg-accent">
                                    <Heart className="w-4 h-4" />
                                    <span className="text-xs">Like</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground dark:hover:bg-accent">
                                    <MessageCircle className="w-4 h-4" />
                                    <span className="text-xs">Comment</span>
                                </Button>
                                <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground dark:hover:bg-accent">
                                    <Share2 className="w-4 h-4" />
                                    <span className="text-xs">Share</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
                <Button variant="outline" className="px-8 py-2 dark:border-border dark:bg-background dark:text-foreground dark:hover:bg-accent">
                    Load More Posts
                </Button>
            </div>
        </div>
    </TabsContent>
)