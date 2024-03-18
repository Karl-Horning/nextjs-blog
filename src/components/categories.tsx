import { Link, Chip } from "@nextui-org/react";

export default function Categories() {
    return (
        <section className="flex flex-col items-center pb-16">
            <div className="w-full max-w-lg">
                <div className="pb-10">
                    <h4 className="text-xl font-bold text-white bg-black py-4 px-6">
                        Categories
                    </h4>
                </div>

                <ul className="px-6">
                    <li className="flex justify-between items-center py-4 px-6 mb-2 border border-gray-400">
                        <span>
                            <Link href="#" color="danger">
                                Writing
                            </Link>
                        </span>
                        <span className="text-right">
                            <Link href="#" color="danger">
                                <Chip color="danger" radius="full" size="lg">
                                    9
                                </Chip>
                            </Link>
                        </span>
                    </li>
                    <li className="flex justify-between items-center py-4 px-6 mb-2 border border-gray-400">
                        <span>
                            <Link href="#" color="danger">
                                Work
                            </Link>
                        </span>
                        <span className="text-right">
                            <Link href="#" color="danger">
                                <Chip color="danger" radius="full" size="lg">
                                    2
                                </Chip>
                            </Link>
                        </span>
                    </li>
                    <li className="flex justify-between items-center py-4 px-6 mb-2 border border-gray-400">
                        <span>
                            <Link href="#" color="danger">
                                WebDev
                            </Link>
                        </span>
                        <span className="text-right">
                            <Link href="#" color="danger">
                                <Chip color="danger" radius="full" size="lg">
                                    6
                                </Chip>
                            </Link>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
