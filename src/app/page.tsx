import Navigation from "@/components/navigation";
import Hero from "@/components/hero";

export default function App() {
    return (
        <>
            <div
                id="nav-container"
                className="bg-gray-50 border-b-2 border-slate-200"
            >
                <Navigation />
            </div>
            <main>
                <Hero />
            </main>
        </>
    );
}
