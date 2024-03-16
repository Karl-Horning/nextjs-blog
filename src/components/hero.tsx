import { Button } from "@nextui-org/react";

export default function Hero() {
    return (
        <section id="hero" className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4 m-36">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
                    Welcome to Our Blog
                </h1>
                <p className="text-3xl md:text-2xl text-center mb-12">
                    Discover amazing things with us
                </p>
                <div className="flex justify-center">
                    <Button
                        color="primary"
                        radius="md"
                        size="lg"
                        href="#"
                        className="text-white text-lg font-light py-4 px-4 mr-4"
                    >
                        Primary Button
                    </Button>

                    <Button
                        color="primary"
                        radius="md"
                        size="lg"
                        variant="bordered"
                        href="#"
                        className="text-lg py-4 px-4"
                    >
                        Secondary Button
                    </Button>
                </div>
            </div>
        </section>
    );
}
