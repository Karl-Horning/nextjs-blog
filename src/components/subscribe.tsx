import { Input, Button } from "@nextui-org/react";

export default function Subscribe() {
    return (
        <section id="newsletter" className="container mx-auto px-4">
            <div className="bg-blue-200 p-20 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4 className="uppercase mb-2 text-slate-600">
                            Newsletter
                        </h4>
                        <p className="mb-2 text-4xl text-blue-900">
                            Subscribe to our newsletter to receive news and
                            updates.
                        </p>
                        <p className="text-slate-600">
                            Get the latest posts directly to your email every
                            week!
                        </p>
                    </div>

                    <form action="">
                        <Input
                            isClearable
                            isRequired
                            className="max-w-xl"
                            color="primary"
                            description="We'll never share your email with anyone else."
                            label="Your Email"
                            size="lg"
                            type="email"
                        />

                        <Button className="w-full py-6" color="primary" size="lg">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
