import { Star, Quote } from "lucide-react"; // Assuming you're using lucide-react icons
import { Card, CardContent } from "@/components/ui/card"; // Adjust to match your component library

const CustomerLove: React.FC = () => {
    return (
        <div className="py-16 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12 text-primary">Customer Love</h2>

                <div className="overflow-x-auto">
                    <div className="flex gap-8 max-w-full mx-auto">
                        {/* Customer Testimonial 1 */}
                        <Card className="bg-background border-primary/30 shadow-lg text-left p-6 rounded-xl w-72 flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <CardContent className="p-0">
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-muted-foreground italic mb-4 relative pl-6 text-md leading-relaxed">
                                    <Quote className="absolute left-0 top-0 h-5 w-5 text-muted-foreground/40 transform -scale-x-100" />
                                    The Standard Thali feels just like home! So comforting and delicious after a long day. Delivery is always prompt too.
                                </blockquote>
                                <p className="font-semibold text-secondary-foreground text-right">- Priya S.</p>
                            </CardContent>
                        </Card>

                        {/* Customer Testimonial 2 */}
                        <Card className="bg-background border-primary/30 shadow-lg text-left p-6 rounded-xl w-72 flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <CardContent className="p-0">
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-muted-foreground italic mb-4 relative pl-6 text-md leading-relaxed">
                                    <Quote className="absolute left-0 top-0 h-5 w-5 text-muted-foreground/40 transform -scale-x-100" />
                                    Tried the Deluxe Thali and the Samosas - amazing taste and quality! The Paneer was perfectly cooked. Highly recommend.
                                </blockquote>
                                <p className="font-semibold text-secondary-foreground text-right">- Rohan M.</p>
                            </CardContent>
                        </Card>

                        {/* Customer Testimonial 3 */}
                        <Card className="bg-background border-primary/30 shadow-lg text-left p-6 rounded-xl w-72 flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <CardContent className="p-0">
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-muted-foreground italic mb-4 relative pl-6 text-md leading-relaxed">
                                    <Quote className="absolute left-0 top-0 h-5 w-5 text-muted-foreground/40 transform -scale-x-100" />
                                    So glad I found this cloud kitchen. The meal subscriptions will be a lifesaver! The Namkeens are great too.
                                </blockquote>
                                <p className="font-semibold text-secondary-foreground text-right">- Anjali K.</p>
                            </CardContent>
                        </Card>

                        {/* Customer Testimonial 4 */}
                        <Card className="bg-background border-primary/30 shadow-lg text-left p-6 rounded-xl w-72 flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <CardContent className="p-0">
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-muted-foreground italic mb-4 relative pl-6 text-md leading-relaxed">
                                    <Quote className="absolute left-0 top-0 h-5 w-5 text-muted-foreground/40 transform -scale-x-100" />
                                    The food quality is consistently amazing. The portions are perfect, and the service is always friendly and fast!
                                </blockquote>
                                <p className="font-semibold text-secondary-foreground text-right">- Manish P.</p>
                            </CardContent>
                        </Card>

                        {/* Customer Testimonial 5 */}
                        <Card className="bg-background border-primary/30 shadow-lg text-left p-6 rounded-xl w-72 flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <CardContent className="p-0">
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-muted-foreground italic mb-4 relative pl-6 text-md leading-relaxed">
                                    <Quote className="absolute left-0 top-0 h-5 w-5 text-muted-foreground/40 transform -scale-x-100" />
                                    Absolutely delicious! The Paneer Tikka was to die for. Definitely ordering again soon!
                                </blockquote>
                                <p className="font-semibold text-secondary-foreground text-right">- Shweta R.</p>
                            </CardContent>
                        </Card>

                        {/* Customer Testimonial 6 */}
                        <Card className="bg-background border-primary/30 shadow-lg text-left p-6 rounded-xl w-72 flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <CardContent className="p-0">
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <blockquote className="text-muted-foreground italic mb-4 relative pl-6 text-md leading-relaxed">
                                    <Quote className="absolute left-0 top-0 h-5 w-5 text-muted-foreground/40 transform -scale-x-100" />
                                    A wonderful experience! The food is just the right balance of flavors and spices. Perfect for any occasion!
                                </blockquote>
                                <p className="font-semibold text-secondary-foreground text-right">- Arvind S.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerLove;
