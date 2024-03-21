import { Link, Chip } from "@nextui-org/react";
import SidebarHeader from "@/components/Sidebar/SidebarHeader";
import Category from "@/components/Sidebar/Category";

export default function Categories() {
    return (
        <section className="flex flex-col items-center pb-16">
            <div className="w-full max-w-lg">
                <SidebarHeader title="Categories" />

                <ul className="px-6">
                    <Category title="Writing" count={9} />
                    <Category title="Work" count={2} />
                    <Category title="WebDev" count={6} />
                </ul>
            </div>
        </section>
    );
}
