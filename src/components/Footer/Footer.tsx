import Link from "next/link";
import "font-awesome/css/font-awesome.min.css";

export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-5 gap-4 md:text-left text-center">
                        <div className="md:col-span-2 p-4">
                            <h4 className="text-xl font-bold">Blog</h4>
                            <p className="text-gray-400 mt-4">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ab vero quo nobis fugit vel
                                accusamus porro dignissimos, qui a totam
                                blanditiis mollitia amet nisi. Quibusdam
                                molestiae ducimus quod dicta ex.
                            </p>
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-4">Support</h3>
                            <ul>
                                <li className="pb-4">
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="pb-4">
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                                <li className="pb-4">
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Newsletter
                                    </Link>
                                </li>
                                <li className="pb-4">
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-4">
                                Navigation
                            </h3>
                            <ul>
                                <li className="pb-4">
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="pb-4">
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li className="pb-4">
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="pb-4">
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-4">
                                Follow Us
                            </h3>
                            <ul>
                                <li className="pb-4">
                                    <Link
                                        href="#"
                                        className="block text-gray-400 hover:text-white"
                                    >
                                        <i className="fa fa-facebook-official"></i>{" "}
                                        Facebook
                                    </Link>
                                </li>
                                <li className="pb-4">
                                    <Link
                                        href="#"
                                        className="block text-gray-400 hover:text-white"
                                    >
                                        <i className="fa fa-twitter"></i>{" "}
                                        Twitter
                                    </Link>
                                </li>
                                <li className="pb-4">
                                    <Link
                                        href="#"
                                        className="block text-gray-400 hover:text-white"
                                    >
                                        <i className="fa fa-instagram"></i>{" "}
                                        Instagram
                                    </Link>
                                </li>
                                <li className="pb-4">
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        <i className="fa fa-linkedin"></i>{" "}
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-32 text-center text-gray-500 text-sm">
                        <p>
                            &copy; {new Date().getFullYear()} All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
