import { Link, Chip } from "@nextui-org/react";

export default function Categories() {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-lg">
                <h4 className="text-xl font-bold">Categories</h4>
                <ul>
                    <li className="flex justify-between items-center py-4 border-b border-gray-400">
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
                    <li className="flex justify-between items-center py-4 border-b border-gray-400">
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
                    <li className="flex justify-between items-center py-4">
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
        </div>
    );
}
