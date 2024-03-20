import {
    Card,
    CardHeader,
    CardFooter,
    Link,
    Image,
    Button,
    Avatar,
} from "@nextui-org/react";

interface PopularPostProps {
    avatarImg: string;
    blackText: boolean;
    category: string;
    imgAlt: string;
    imgSource: string;
    postAuthor: string;
    postTitle: string;
}

export default function PopularPost({
    avatarImg,
    blackText,
    category,
    imgAlt,
    imgSource,
    postAuthor,
    postTitle,
}: Readonly<PopularPostProps>) {
    return (
        <Card isFooterBlurred className="w-full h-[300px] mb-2">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                    {category}
                </p>
                <h4
                    className={`${
                        blackText ? "text-black" : "text-white"
                    } font-medium text-2xl`}
                >
                    {postTitle}
                </h4>
            </CardHeader>
            <Image
                removeWrapper
                alt={imgAlt}
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={imgSource}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                    <Avatar src={avatarImg} />
                    <p
                        className={`${
                            blackText ? "text-black" : "text-white"
                        } text-tiny`}
                    >
                        By {postAuthor}
                    </p>
                </div>
                <Link href="#">
                    <Button
                        className="text-tiny uppercase"
                        color="danger"
                        radius="full"
                        size="md"
                        fullWidth
                    >
                        Read more
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
