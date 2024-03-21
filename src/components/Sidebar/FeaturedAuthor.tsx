import { Avatar, Link } from "@nextui-org/react";
import SidebarHeader from "./SidebarHeader";

export default function FeaturedAuthor() {
    return (
        <section id="featured-author" className="pb-16">
            <SidebarHeader title="Featured Author" />

            <div className="px-6">
                <Avatar
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    className="w-full h-full text-large mb-6"
                />
                <h5 className="text-lg font-bold mb-4">Karl Horning</h5>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sit itaque dolorum officiis! Suscipit aut tempora
                    praesentium, eum quos voluptas nobis? Corporis odit nulla
                    aliquam accusantium soluta saepe voluptatem, modi ipsa.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href="#" className="text-danger text-2xl">
                        <i className="fa fa-facebook"></i>
                    </Link>
                    <Link href="#" className="text-danger text-2xl">
                        <i className="fa fa-twitter"></i>
                    </Link>
                    <Link href="#" className="text-danger text-2xl">
                        <i className="fa fa-instagram"></i>
                    </Link>
                    <Link href="#" className="text-danger text-2xl">
                        <i className="fa fa-linkedin"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}
