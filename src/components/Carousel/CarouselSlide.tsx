import { Image } from "@nextui-org/react";

interface CarouselSlideProps {
    src: string;
    alt: string;
}

export default function CarouselSlide({ src, alt }: CarouselSlideProps) {
    return (
        <div className="carousel-item">
            <Image isZoomed alt={alt} radius="none" src={src} width={"100%"} />
        </div>
    );
}
