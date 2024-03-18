import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import LatestPosts from "@/components/latest-posts";
import AllPosts from "@/components/all-posts";
import Subscribe from "@/components/subscribe";
import Footer from "@/components/footer";
import Categories from "@/components/categories";
import TrendingPosts from "@/components/trending-posts";

export default function App() {
    return (
        <main>
            <Navigation />
            <Hero />
            <LatestPosts />
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-4">
                    <main id="blog-posts" className="md:col-span-2">
                        <AllPosts />
                        <Subscribe />
                    </main>
                    <aside id="sidebar" className="md:col-span-1">
                        <TrendingPosts />
                        <Categories />
                    </aside>
                </div>
            </div>
            <Footer />
        </main>
    );
}
