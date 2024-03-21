import { Image, Button, Link } from "@nextui-org/react";

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
                className="mb-8 rounded-none"
                loading="lazy"
                src={imgSource}
                width="100%"
            />
            <h3 className="text-4xl md:text-5xl font-bold mb-4">{postTitle}</h3>
            <div className="border-b mb-4 pb-4 border-black">
                <div className="md:inline-block">
                    <span className="pr-4">
                        <i
                            className="fa fa-user text-gray-300 pr-2"
                            aria-hidden="true"
                        ></i>{" "}
                        <Link href="#" className="text-danger">
                            {postAuthor}
                        </Link>
                    </span>
                    <span className="pr-4">
                        <i
                            className="fa fa-calendar text-gray-300 pr-2"
                            aria-hidden="true"
                        ></i>{" "}
                        <Link href="#" className="text-danger">
                            {publicationDate}
                        </Link>
                    </span>
                </div>
                <div className="md:inline-block">
                    <span className="pr-4">
                        <i
                            className="fa fa-folder-open text-gray-300 pr-2"
                            aria-hidden="true"
                        ></i>{" "}
                        <Link href="#" className="text-danger">
                            Writing
                        </Link>
                    </span>
                    <span className="pr-4">
                        <i
                            className="fa fa-comments text-gray-300 pr-2"
                            aria-hidden="true"
                        ></i>{" "}
                        <Link href="#" className="text-danger">
                            15 Comments
                        </Link>
                    </span>
                </div>
            </div>

            <p className="text-lg mb-8 text-gray-600">{postLead}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex justify-center items-center">
                        <Button
                            className="text-lg bg-facebook"
                            color="primary"
                            href="#"
                            radius="none"
                            size="lg"
                            variant="solid"
                            fullWidth
                        >
                            <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                            ></i>
                        </Button>
                    </div>
                    <div className="flex justify-center items-center">
                        <Button
                            className="text-lg bg-twitter"
                            color="primary"
                            href="#"
                            radius="none"
                            size="lg"
                            variant="solid"
                            fullWidth
                        >
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </Button>
                    </div>
                    <div className="flex justify-center items-center">
                        <Button
                            className="text-lg bg-linkedin"
                            color="primary"
                            href="#"
                            radius="none"
                            size="lg"
                            variant="solid"
                            fullWidth
                        >
                            <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                            ></i>
                        </Button>
                    </div>
                    <div className="flex justify-center items-center">
                        <Button
                            className="text-lg bg-danger"
                            color="primary"
                            href="#"
                            radius="none"
                            size="lg"
                            variant="solid"
                            fullWidth
                        >
                            <i
                                className="fa fa-envelope"
                                aria-hidden="true"
                            ></i>
                        </Button>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-1">
                    <div className="md:flex md:justify-end md:items-center">
                        <Button
                            className="text-lg border-3 md:w-auto w-full"
                            color="danger"
                            href="#"
                            radius="none"
                            size="lg"
                            variant="bordered"
                        >
                            Read More{" "}
                            <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                            ></i>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
