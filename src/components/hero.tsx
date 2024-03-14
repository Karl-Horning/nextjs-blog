import { Button } from "@nextui-org/react";

export default function Hero() {
    return (
        <section id="hero">
            <div className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4 m-36">
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
                        Welcome to Our Blog
                    </h1>
                    <p className="text-3xl md:text-2xl text-center mb-12">
                        Discover amazing things with us
                    </p>
                    <div className="flex justify-center">
                        <Button
                            size="lg"
                            href="#"
                            className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-light py-4 px-4 rounded-xl mr-4"
                        >
                            Primary Button
                        </Button>
                        
                        <Button
                            href="#"
                            className="bg-gray-500 hover:bg-gray-600 text-white text-lg font-light py-4 px-4 rounded-xl"
                        >
                            Secondary Button
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
