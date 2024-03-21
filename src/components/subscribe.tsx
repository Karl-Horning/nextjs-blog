import { Input, Button } from "@nextui-org/react";

export default function Subscribe() {
    return (
        <section id="newsletter" className="pb-16">
            <div className="pb-10">
                <h4 className="text-xl font-bold text-white bg-black py-4 px-6">
                    Newsletter
                </h4>
            </div>

            <div className="bg-black p-4">
                <p className="text-white mb-4">
                    Get the latest posts directly to your email every week!
                </p>
                <form action="">
                    <Input
                        isClearable
                        isRequired
                        className="max-w-xl"
                        description="We'll never share your email with anyone else."
                        label="Your Email"
                        radius="none"
                        type="email"
                    />

                    <Button
                        className="w-full py-6 rounded-none"
                        color="danger"
                        size="lg"
                    >
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
    );
}
