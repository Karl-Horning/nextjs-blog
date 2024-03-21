import PopularPost from "@/components/popular-post";

export default function TrendingPosts() {
    return (
        <section id="trending-posts" className="pb-16">
            <div className="pb-10">
                <h4 className="text-xl font-bold text-white bg-black py-4 px-6">
                    Popular
                </h4>
            </div>

            <div className="px-6">
                <PopularPost
                    avatarImg="/images/150.jpg"
                    blackText={false}
                    category="News"
                    imgAlt="Card example background"
                    imgSource="/images/card-example-4.jpg"
                    postAuthor="Karl"
                    postTitle="Stream the Acme event"
                />

                <PopularPost
                    avatarImg="/images/150.jpg"
                    blackText={false}
                    category="Article"
                    imgAlt="Card example background"
                    imgSource="/images/card-example-5.jpg"
                    postAuthor="Karl"
                    postTitle="Your checklist for better sleep"
                />

                <PopularPost
                    avatarImg="/images/150.jpg"
                    blackText={true}
                    category="Review"
                    imgAlt="Card example background"
                    imgSource="/images/card-example-6.jpg"
                    postAuthor="Karl"
                    postTitle="Acme camera"
                />
            </div>
        </section>
    );
}
