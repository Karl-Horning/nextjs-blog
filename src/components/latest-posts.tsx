import { Link } from "@nextui-org/react";
import PostCardMd from "@/components/post-card-md";

export default function LatestPosts() {
    return (
        <section id="latest-posts">
            <div className="container mx-auto px-4 m-36">
                <div className="columns-1 md:columns-2 mb-12">
                    <h2 className="text-4xl md:text-4xl font-bold mb-2">
                        Latest Posts
                    </h2>
                    <p className="text-3xl md:text-2xl mb-12 text-gray-600">
                        Get started with our latest posts
                    </p>
                    <p className="md:text-right">
                        <Link href={"#"}>See all posts</Link>
                    </p>
                </div>
                <div className="columns-2 md:columns-4">
                    <PostCardMd
                        imgAlt="Card background"
                        imgSource="/images/hero-card-complete.jpg"
                        postTitle="How to write fake blog posts for website
                        mock-ups"
                        postAuthor="Karl"
                    />

                    <PostCardMd
                        imgAlt="Card background"
                        imgSource="/images/hero-card-complete.jpg"
                        postTitle="This is another test post"
                        postAuthor="Cátia"
                    />

                    <PostCardMd
                        imgAlt="Card background"
                        imgSource="/images/hero-card-complete.jpg"
                        postTitle="This is a longer test post to see how the text wraps"
                        postAuthor="Eva"
                    />

                    <PostCardMd
                        imgAlt="Card background"
                        imgSource="/images/hero-card-complete.jpg"
                        postTitle="Meow!"
                        postAuthor="Edgar & Nadia"
                    />
                </div>
            </div>
        </section>
    );
}
