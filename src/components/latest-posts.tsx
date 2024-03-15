import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react";

export default function LatestPosts() {
    return (
        <section id="latest-posts">
            <div className="container mx-auto px-4 m-36">
                <div className="columns-2 mb-12">
                    <h2 className="text-4xl md:text-4xl font-bold mb-2">
                        Latest Posts
                    </h2>
                    <p className="text-3xl md:text-2xl mb-12 text-gray-600">
                        Get started with our latest posts
                    </p>
                    <p className="text-right">
                        <Link href={"#"}>See all posts</Link>
                    </p>
                </div>
                <div className="columns-4">
                    <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="/images/hero-card-complete.jpg"
                                width={270}
                            />
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <h4 className="font-bold text-large mb-2">
                                How to write fake blog posts for website
                                mock-ups
                            </h4>

                            <small className="text-default-500">By Karl</small>
                        </CardBody>
                    </Card>

                    <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="/images/hero-card-complete.jpg"
                                width={270}
                            />
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <h4 className="font-bold text-large mb-2">
                                How to write fake blog posts for website
                                mock-ups
                            </h4>

                            <small className="text-default-500">By Karl</small>
                        </CardBody>
                    </Card>

                    <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="/images/hero-card-complete.jpg"
                                width={270}
                            />
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <h4 className="font-bold text-large mb-2">
                                How to write fake blog posts for website
                                mock-ups
                            </h4>

                            <small className="text-default-500">By Karl</small>
                        </CardBody>
                    </Card>

                    <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src="/images/hero-card-complete.jpg"
                                width={270}
                            />
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <h4 className="font-bold text-large mb-2">
                                How to write fake blog posts for website
                                mock-ups
                            </h4>

                            <small className="text-default-500">By Karl</small>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </section>
    );
}
