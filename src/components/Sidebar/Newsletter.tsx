import { Input, Button } from "@nextui-org/react";
import SidebarHeader from "./SidebarHeader";

export default function Newsletter() {
    return (
        <section id="newsletter" className="pb-16">
            <SidebarHeader title="Newsletter" />

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
