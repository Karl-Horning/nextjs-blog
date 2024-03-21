"use client";

import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/hero";
import LatestPosts from "@/components/latest-posts";
import AllMainPosts from "@/components/Posts/AllMainPosts";
import Footer from "@/components/Footer/Footer";
import FeaturedAuthor from "@/components/Sidebar/FeaturedAuthor";
import AllPopularPosts from "@/components/Sidebar/AllPopularPosts";
import CategoryList from "@/components/Sidebar/CategoryList";
import Newsletter from "@/components/Sidebar/Newsletter";
import Carousel from "@/components/Carousel/Carousel";

const slides = [
    { src: "/images/hero-card-complete.jpg", alt: "Image 1" },
    { src: "/images/hero-card-complete.jpg", alt: "Image 2" },
    { src: "/images/hero-card-complete.jpg", alt: "Image 3" },
    { src: "/images/hero-card-complete.jpg", alt: "Image 4" },
    { src: "/images/hero-card-complete.jpg", alt: "Image 5" },
];

export default function App() {
    return (
        <main>
            <Navigation />
            <Hero />
            <Carousel slides={slides} />
            <LatestPosts />
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-4">
                    <main id="blog-posts" className="md:col-span-2">
                        <AllMainPosts />
                    </main>
                    <aside id="sidebar" className="md:col-span-1">
                        <FeaturedAuthor />
                        <AllPopularPosts />
                        <CategoryList />
                        <Newsletter />
                    </aside>
                </div>
            </div>
            <Footer />
        </main>
    );
}
