import PopularPost from "@/components/Sidebar/PopularPost";
import SidebarHeader from "@/components/Sidebar/SidebarHeader";
SidebarHeader;

export default function AllPopularPosts() {
    return (
        <section id="trending-posts" className="pb-16">
            <SidebarHeader title="Popular" />

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
