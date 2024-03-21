import { Pagination } from "@nextui-org/react";
import MainPost from "@/components/Posts/MainPost";

export default function AllMainPosts() {
    return (
        <section id="all-posts" className="container mx-auto mb-16">
            <MainPost
                imgAlt="Example text"
                imgSource="/images/hero-card-complete.jpg"
                title="This is the first post here, but there will be many more
                    soon"
                snippet="Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Cumque sequi, error nulla ipsum veniam laudantium.
                    Error cum sapiente, possimus veniam dolorem similique
                    reiciendis amet impedit, ea eos cumque quia minima."
                author="Karl"
                publicationDate="15 March 2024"
                category="Writing"
                commentCount={15}
            />

            <MainPost
                imgAlt="Example text"
                imgSource="/images/hero-card-complete.jpg"
                title="This is the first post here, but there will be many more
                    soon"
                snippet="Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Cumque sequi, error nulla ipsum veniam laudantium.
                    Error cum sapiente, possimus veniam dolorem similique
                    reiciendis amet impedit, ea eos cumque quia minima."
                author="Karl"
                publicationDate="15 March 2024"
                category="Review"
                commentCount={5}
            />

            <MainPost
                imgAlt="Example text"
                imgSource="/images/hero-card-complete.jpg"
                title="This is the first post here, but there will be many more
                    soon"
                snippet="Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Cumque sequi, error nulla ipsum veniam laudantium.
                    Error cum sapiente, possimus veniam dolorem similique
                    reiciendis amet impedit, ea eos cumque quia minima."
                author="Karl"
                publicationDate="15 March 2024"
                category="WebDev"
                commentCount={15}
            />

            <div className="flex justify-center">
                <Pagination
                    showControls
                    color="danger"
                    initialPage={1}
                    radius="none"
                    size="lg"
                    total={5}
                />
            </div>
        </section>
    );
}
