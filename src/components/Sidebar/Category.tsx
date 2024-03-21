import { Link, Chip } from "@nextui-org/react";

interface CategoryParams {
    title: string;
    count: number;
}

export default function Category({ title, count }: CategoryParams) {
    return (
        <li className="flex justify-between items-center py-4 px-6 mb-2 border border-gray-400">
            <span>
                <Link href="#" color="danger">
                    {title}
                </Link>
            </span>
            <span className="text-right">
                <Link href="#" color="danger">
                    <Chip color="danger" radius="full" size="lg">
                        {count}
                    </Chip>
                </Link>
            </span>
        </li>
    );
}
