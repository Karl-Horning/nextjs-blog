import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface PostCardMdProps {
    imgAlt: string;
    imgSource: string;
    postTitle: string;
    postAuthor: string;
}

export default function PostCardMd({
    imgAlt,
    imgSource,
    postTitle,
    postAuthor,
}: PostCardMdProps) {
    return (
        <Card className="py-4 mb-6">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Image
                    alt={imgAlt}
                    className="object-cover rounded-xl"
                    src={imgSource}
                    width={270}
                />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <h4 className="font-bold text-large mb-2">{postTitle}</h4>

                <small className="text-default-500">By {postAuthor}</small>
            </CardBody>
        </Card>
    );
}
