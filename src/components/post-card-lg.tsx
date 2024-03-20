import { Image, Button, Chip } from "@nextui-org/react";

interface PostCardLgProps {
    imgAlt: string;
    imgSource: string;
    postTitle: string;
    postLead: string;
    postAuthor: string;
    publicationDate: string;
}

export default function PostCardLg({
    imgAlt,
    imgSource,
    postTitle,
    postLead,
    postAuthor,
    publicationDate,
}: Readonly<PostCardLgProps>) {
    return (
        <div className="mb-16">
            <Image
                alt={imgAlt}
                className="mb-8"
                loading="lazy"
                src={imgSource}
                width="100%"
            />
            <h3 className="text-4xl md:text-5xl font-bold mb-4">{postTitle}</h3>
            <div className="grid grid-cols-3 gap-3 border-b mb-4 pb-4">
                <div>{postAuthor}</div>

                <div className="text-center">Writing</div>

                <div className="text-right">15 Comments</div>
            </div>

            <p className="text-lg mb-8 text-gray-600">{postLead}</p>

            <div className="mb-8">
                <Chip
                    className="py-5"
                    color="primary"
                    radius="lg"
                    size="lg"
                    variant="flat"
                >
                    {publicationDate}
                </Chip>

                <Chip
                    className="py-5 mx-5"
                    color="warning"
                    radius="lg"
                    size="lg"
                    variant="flat"
                >
                    15 Comments
                </Chip>

                <Chip
                    className="py-5"
                    color="danger"
                    radius="lg"
                    size="lg"
                    variant="flat"
                >
                    Share
                </Chip>
            </div>

            <p className="mb-8">
                <Button
                    color="primary"
                    radius="md"
                    size="lg"
                    href="#"
                    className="text-white text-lg font-light py-8 px-16 mr-4"
                >
                    Continue Reading
                </Button>
            </p>
        </div>
    );
}
