import {
    Card,
    CardHeader,
    CardFooter,
    Link,
    Image,
    Button,
    Avatar,
} from "@nextui-org/react";

export default function TrendingPosts() {
    return (
        <section id="trending-posts" className="pb-16">
            <div className="pb-10">
                <h4 className="text-xl font-bold text-white bg-black py-4 px-6">
                    Popular
                </h4>
            </div>

            <div className="px-6">
                <Card isFooterBlurred className="w-full h-[300px] mb-2">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                            News
                        </p>
                        <h4 className="text-white font-medium text-2xl">
                            Stream the Acme event
                        </h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="/images/card-example-4.jpg"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <Avatar src="/images/150.jpg" />
                            <p className="text-white text-tiny">By Karl</p>
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

                <Card isFooterBlurred className="w-full h-[300px] mb-2">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                            Article
                        </p>
                        <h4 className="text-white font-medium text-2xl">
                            Your checklist for better sleep
                        </h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="/images/card-example-5.jpg"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <Avatar src="/images/150.jpg" />
                            <p className="text-white text-tiny">By Karl</p>
                        </div>
                        <Link href="#">
                            <Button
                                className="text-tiny uppercase"
                                color="danger"
                                radius="full"
                                size="md"
                            >
                                Read more
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>

                <Card isFooterBlurred className="w-full h-[300px] mb-2">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                            Review
                        </p>
                        <h4 className="text-black font-medium text-2xl">
                            Acme camera
                        </h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="/images/card-example-6.jpg"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <Avatar src="/images/150.jpg" />
                            <p className="text-black text-tiny">By Karl</p>
                        </div>
                        <Link href="#">
                            <Button
                                className="text-tiny uppercase"
                                color="danger"
                                radius="full"
                                size="md"
                            >
                                Read more
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
}
