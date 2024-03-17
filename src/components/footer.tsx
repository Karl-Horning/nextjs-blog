import Link from "next/link";
import "font-awesome/css/font-awesome.min.css";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h4 className="text-xl font-bold">Blog</h4>
                    <p className="mt-4">A brief description of the site.</p>
                </div>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-lg font-bold mb-4">Navigation</h3>
                    <ul>
                        <li>
                            <a href="#" className="block hover:text-gray-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block hover:text-gray-400">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block hover:text-gray-400">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block hover:text-gray-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Link
                            href="#"
                            className="text-gray-400 hover:text-white text-2xl"
                        >
                            <i className="fa fa-facebook"></i>
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-400 hover:text-white text-2xl"
                        >
                            <i className="fa fa-twitter"></i>
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-400 hover:text-white text-2xl"
                        >
                            <i className="fa fa-instagram"></i>
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-400 hover:text-white text-2xl"
                        >
                            <i className="fa fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
}
