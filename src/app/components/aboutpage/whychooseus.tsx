import { Sparkles, Leaf, UtensilsCrossed } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const WhyChooseUs = () => {
    return (
        <div className="py-16 bg-[#fdf0d5] border rounded-3xl">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <Card className="text-center border-gray-200 hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center rounded-lg">
                        <div className="mb-6 p-4 bg-yellow-100 rounded-full text-yellow-600">
                            <Sparkles className="h-12 w-12" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-800 mb-3">Truly Homemade</CardTitle>
                        <CardContent className="p-0">
                            <p className="text-gray-600">Prepared with love and traditional recipes, just like mom makes.</p>
                        </CardContent>
                    </Card>


                    <Card className="text-center border-gray-200 hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center rounded-lg">
                        <div className="mb-6 p-4 bg-green-100 rounded-full text-green-600">
                            <Leaf className="h-12 w-12" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-800 mb-3">Pure Vegetarian</CardTitle>
                        <CardContent className="p-0">
                            <p className="text-gray-600">Delicious and wholesome 100% vegetarian meals and snacks.</p>
                        </CardContent>
                    </Card>


                    <Card className="text-center border-gray-200 hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center rounded-lg">
                        <div className="mb-6 p-4 bg-blue-100 rounded-full text-blue-600">
                            <UtensilsCrossed className="h-12 w-12" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-800 mb-3">Fresh Ingredients</CardTitle>
                        <CardContent className="p-0">
                            <p className="text-gray-600">We use fresh, high-quality ingredients for the best taste and health.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
