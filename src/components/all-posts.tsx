import PostCardLg from "@/components/post-card-lg";

export default function AllPosts() {
    return (
        <section id="all-posts">
            <div className="container mx-auto px-4">
                <PostCardLg
                    imgAlt="Example text"
                    imgSource="/images/hero-card-complete.jpg"
                    postTitle="This is the first post here, but there will be many more
                    soon"
                    postLead="Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Cumque sequi, error nulla ipsum veniam laudantium.
                    Error cum sapiente, possimus veniam dolorem similique
                    reiciendis amet impedit, ea eos cumque quia minima."
                    postAuthor="Karl"
                    publicationDate="15 March 2024"
                />

                <PostCardLg
                    imgAlt="Example text"
                    imgSource="/images/hero-card-complete.jpg"
                    postTitle="This is the first post here, but there will be many more
                    soon"
                    postLead="Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Cumque sequi, error nulla ipsum veniam laudantium.
                    Error cum sapiente, possimus veniam dolorem similique
                    reiciendis amet impedit, ea eos cumque quia minima."
                    postAuthor="Karl"
                    publicationDate="15 March 2024"
                />

                <PostCardLg
                    imgAlt="Example text"
                    imgSource="/images/hero-card-complete.jpg"
                    postTitle="This is the first post here, but there will be many more
                    soon"
                    postLead="Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Cumque sequi, error nulla ipsum veniam laudantium.
                    Error cum sapiente, possimus veniam dolorem similique
                    reiciendis amet impedit, ea eos cumque quia minima."
                    postAuthor="Karl"
                    publicationDate="15 March 2024"
                />
            </div>
        </section>
    );
}
