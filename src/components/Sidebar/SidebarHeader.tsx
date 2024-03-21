interface SidebarHeaderProps {
    title: string;
}

export default function SidebarHeader({ title }: SidebarHeaderProps) {
    return (
        <div className="pb-10">
            <h4 className="text-xl font-bold text-white bg-black py-4 px-6">
                {title}
            </h4>
        </div>
    );
}
