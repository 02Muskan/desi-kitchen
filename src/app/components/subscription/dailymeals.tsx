import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Repeat, CalendarDays, Info, ChefHat, Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function dailymeals() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-3 text-[#fb8500]">
                    <ChefHat className="h-8 w-8 text-[#fb8500]" />
                    Homemade Meal Subscriptions
                    <Repeat className="h-8 w-8 text-[#fb8500]" />
                </h1>
                <p className="text-lg text-[#64748b]">Convenient, Delicious, and Delivered Fresh.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-[7rem] items-center mb-16">
                <div className="flex-shrink-0">
                    <Image
                        src="/images/Momcooking.png"
                        alt="Mom cooking"
                        width={400}
                        height={300}
                        className="rounded-xl"
                    />
                </div>

                <div className="flex-1 space-y-4">
                    <h2 className="text-3xl font-semibold text-[#1e293b]">Simplify Your Mealtimes with Love</h2>
                    <p className="text-[#64748b] leading-relaxed">
                        Tired of cooking daily or ordering unhealthy takeout? Our subscription service brings the warmth and taste of <span className='font-semibold'>Ghar Ka Khana</span> straight to your doorstep. Enjoy balanced, nutritious, and flavorful vegetarian meals without the hassle.
                    </p>
                    <p className="text-[#64748b] leading-relaxed">
                        We offer a rotating menu featuring authentic homemade Sabzi, Dal, Rice, and Rotis, prepared fresh every day with high-quality ingredients and traditional recipes. Choose a plan that suits your needs!
                    </p>

                    <Card className="bg-[#fff4e5] border-[#fcd9a5]">
                        <CardHeader>
                            <CardTitle className="text-xl flex items-center gap-2 text-[#fb8500]">
                                <Info className="h-5 w-5" /> Launching Soon!
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#fb8500]">
                                Our subscription plans are launching soon! Register your interest now to get notified and receive early bird offers. Manage your plans easily through our upcoming portal.
                            </p>
                            <Button asChild variant="link" className="mt-2 px-0 text-[#fb8500]">
                                <Link href="/contact?interest=subscriptions">Register Interest &rarr;</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>


            <div className="py-12 bg-[#faa75c] rounded-lg mb-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#ad5015] mb-8">Why Choose Our Subscriptions?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="space-y-2">
                            <div className="mx-auto bg-white rounded-full p-3 w-fit mb-2 border border-[#e2e8f0]">
                                <CalendarDays className="h-8 w-8 text-[#fb8500]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#1e293b]">Daily Changing Menu</h3>
                            <p className="text-[#64748b]">Never get bored! Enjoy a diverse range of wholesome vegetarian dishes daily.</p>
                        </div>

                        <div className="space-y-2">
                            <div className="mx-auto bg-white rounded-full p-3 w-fit mb-2 border border-[#e2e8f0]">
                                <Package className="h-8 w-8 text-[#fb8500]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#1e293b]">Hassle-Free Delivery</h3>
                            <p className="text-[#64748b]">Freshly prepared meals delivered punctually to your home or office.</p>
                        </div>

                        <div className="space-y-2">
                            <div className="mx-auto bg-white rounded-full p-3 w-fit mb-2 border border-[#e2e8f0]">
                                <Heart className="h-8 w-8 text-[#fb8500]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#1e293b]">Homemade Goodness</h3>
                            <p className="text-[#64748b]">Cooked with fresh ingredients, love, and traditional recipes.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="subscription-plans" className="py-16 bg-[#f7ede2] rounded-lg">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#fb8500] mb-10">Flexible Subscription Plans (Coming Soon)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card className="border-[#e2e8f0] hover:shadow-lg  flex flex-col">
                            <CardHeader className="bg-[#fff1e6]  rounded-md border-none">
                                <CardTitle className="text-xl font-semibold text-[#1e293b]">Taste Tester (Trial Week)</CardTitle>
                                <CardDescription>Perfect for trying us out!</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6 flex-grow space-y-3">
                                <p className="text-2xl font-bold text-[#fb8500]">100<span className="text-sm font-normal text-[#64748b]">/ meal</span></p>
                                <ul className="list-disc list-inside text-[#64748b] space-y-1 text-sm">
                                    <li>5 Days (Mon-Fri)</li>
                                    <li>One complete Thali per day</li>
                                    <li>Experience our daily variety</li>
                                    <li>No long-term commitment</li>
                                </ul>
                            </CardContent>
                            <CardContent>
                                <Button className="w-full bg-[#f9c74f] text-white hover:bg-[#ffeecf] hover:text-[#4c230a]" variant="outline">Sign Up (Soon)</Button>
                            </CardContent>
                        </Card>
                        <Card className="border-[#fb8500] rounded-lg shadow-lg flex flex-col">
                            <CardHeader className="bg-[#ffe8cc] rounded-md border-none">
                                <div className="flex justify-between items-center">
                                    <CardTitle className="text-xl font-semibold text-[#fb8500]">Weekly Saver</CardTitle>
                                    <span className="text-xs bg-[#facc15] text-[#1e293b] font-medium px-2 py-0.5 rounded-full">Popular</span>
                                </div>
                                <CardDescription>Consistent taste, weekly convenience.</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6 flex-grow space-y-3">
                                <p className="text-2xl font-bold text-[#fb8500]">₹180 <span className="text-sm font-normal text-[#64748b]">/ meal</span></p>
                                <ul className="list-disc list-inside text-[#64748b] space-y-1 text-sm">
                                    <li>Choose 5 or 6 days/week</li>
                                    <li>One complete Thali per day</li>
                                    <li>Slightly discounted rate</li>
                                    <li>Auto-renews weekly (manage online)</li>
                                </ul>
                            </CardContent>
                            <CardContent>
                                <Button className="w-full bg-[#ff8600] text-white hover:bg-[#ffeecf] hover:text-[#4c230a]">Sign Up (Soon)</Button>
                            </CardContent>
                        </Card>
                        <Card className="border-[#e2e8f0] hover:shadow-lg flex flex-col">
                            <CardHeader className="bg-[#fff1e6] rounded-md border-none">
                                <CardTitle className="text-xl font-semibold text-[#1e293b]">Monthly Delight</CardTitle>
                                <CardDescription>Best value for regular customers.</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6 flex-grow space-y-3">
                                <p className="text-2xl font-bold text-[#fb8500]">₹200 <span className="text-sm font-normal text-[#64748b]">/ meal</span></p>
                                <ul className="list-disc list-inside text-[#64748b] space-y-1 text-sm">
                                    <li>Full Month (approx. 22-26 meals)</li>
                                    <li>One complete Thali per day</li>
                                    <li>Maximum savings per meal</li>
                                    <li>Convenient monthly billing (manage online)</li>
                                </ul>
                            </CardContent>
                            <CardContent>
                                <Button className="w-full bg-[#f9c74f] text-white hover:bg-[#ffeecf] hover:text-[#4c230a]"  >Sign Up (Soon)</Button>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="text-center mt-12">
                        <h3 className="text-2xl font-semibold text-[#1e293b] mb-4">Ready to simplify your meals?</h3>
                        <p className="text-[#64748b] mb-6 max-w-xl mx-auto">
                            Our subscription service is launching soon. Click below to register your interest and be the first to know when you can sign up and manage your plan! We will notify you with launch details and special offers.
                        </p>
                        <Button asChild size="lg" className="bg-[#facc15] hover:bg-[#fbbf24] text-[#1e293b]">
                            <Link href="/contact?interest=subscriptions">Register Interest</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
