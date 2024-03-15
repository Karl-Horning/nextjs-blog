import { Link } from "@nextui-org/react";

export default function LatestPosts() {
    return (
        <section id="latest-posts">
            <div className="container mx-auto px-4 m-36">
                <h2 className="text-4xl md:text-4xl font-bold mb-2">
                    Latest Posts
                </h2>
                <p className="text-3xl md:text-2xl mb-12 text-gray-600">
                    Get started with our latest posts
                </p>
                <p>
                    <Link href={"#"}>
                        See all posts
                    </Link>
                </p>
            </div>
        </section>
    );
}
