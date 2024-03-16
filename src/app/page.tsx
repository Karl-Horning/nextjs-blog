import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import LatestPosts from "@/components/latest-posts";
import AllPosts from "@/components/all-posts";
import Subscribe from "@/components/subscribe";

export default function App() {
    return (
        <main>
            <Navigation />
            <Hero />
            <LatestPosts />
            <AllPosts />
            <Subscribe />
        </main>
    );
}
