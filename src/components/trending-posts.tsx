import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
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
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt="nextui logo"
                            height={100}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width={100}
                        />
                        <div className="flex flex-col">
                            <p className="text-md">NextUI</p>
                            <p className="text-small text-default-500">
                                nextui.org
                            </p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>
                            Make beautiful websites regardless of your design
                            experience.
                        </p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://github.com/nextui-org/nextui"
                        >
                            Visit source code on GitHub.
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
}
