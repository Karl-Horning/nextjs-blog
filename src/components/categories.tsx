import { Link, Chip } from "@nextui-org/react";

export default function Categories() {
    return (
        <section className="flex flex-col items-center">
            <div className="w-full max-w-lg">
                <div className="pb-10">
                    <h4 className="text-xl font-bold text-white bg-black py-4 px-6">
                        Categories
                    </h4>
                </div>

                <ul className="pb-8 px-6">
                    <li className="flex justify-between items-center py-4 px-6 border-b border-gray-400">
                        <span>
                            <Link href="#" color="primary">
                                Writing
                            </Link>
                        </span>
                        <span className="text-right">
                            <Link href="#" color="primary">
                                <Chip color="primary" radius="full" size="lg">
                                    9
                                </Chip>
                            </Link>
                        </span>
                    </li>
                    <li className="flex justify-between items-center py-4 px-6 border-b border-gray-400">
                        <span>
                            <Link href="#" color="primary">
                                Work
                            </Link>
                        </span>
                        <span className="text-right">
                            <Link href="#" color="primary">
                                <Chip color="primary" radius="full" size="lg">
                                    2
                                </Chip>
                            </Link>
                        </span>
                    </li>
                    <li className="flex justify-between items-center py-4 px-6">
                        <span>
                            <Link href="#" color="primary">
                                WebDev
                            </Link>
                        </span>
                        <span className="text-right">
                            <Link href="#" color="primary">
                                <Chip color="primary" radius="full" size="lg">
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
