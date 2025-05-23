import { useState } from "react";
import LazyImage from "./LazyImage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Pen } from "lucide-react";

const Navbar = () => {
    const [openHam, setOpenHam] = useState(false);

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                <LazyImage
                    src={`${
                        import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT
                    }/logo.svg`}
                    alt="Scribe Logo"
                    w={32}
                    h={32}
                />
                <span className="text-[#2667ff]">Scribe</span>
            </Link>
            {/* <Search /> */}
            <div className="bg-gray-100 px-4 py-3 rounded-full items-center gap-2 hidden md:flex">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="gray"
                >
                    <circle cx="10.5" cy="10.5" r="7.5" />
                    <line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
                <input
                    type="text"
                    placeholder="Search a post..."
                    className="md:w-50 lg:w-80 text-sm"
                />
            </div>
            {/* MOBILE MENU */}
            <div className="md:hidden">
                {/* MOBILE BUTTON */}
                <div
                    className="cursor-pointer text-4xl"
                    onClick={() => setOpenHam((prev) => !prev)}
                >
                    {/* Change Hamburger Icon */}
                    {/* {open ? "X" : "☰"} */}
                    <div className="flex flex-col gap-[5.4px]">
                        {/* Three bars */}
                        <div
                            className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                                openHam && "rotate-45"
                            }`}
                        ></div>
                        {/* We dont need the second bar while making a cross */}
                        <div
                            className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${
                                openHam && "opacity-0"
                            }`}
                        ></div>
                        <div
                            className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                                openHam && "-rotate-45"
                            }`}
                        ></div>
                    </div>
                </div>
                {/* MOBILE a LIST */}
                <div
                    // If open menu list starts from right-0 otherwise right-100 i.e., out of the screen
                    className={`w-full h-screen bg-[#e3f2fd] flex flex-col items-center justify-center gap-8 font-medium text-lg fixed top-16 transition-all ease-in-out ${
                        openHam ? "-right-0" : "-right-full"
                    }`}
                >
                    <Link to="/" onClick={() => setOpenHam(false)}>
                        Home
                    </Link>
                    <Link
                        to="/posts?sort=trending"
                        onClick={() => setOpenHam(false)}
                    >
                        Trending
                    </Link>
                    <Link
                        to="/posts?sort=popular"
                        onClick={() => setOpenHam(false)}
                    >
                        Popular
                    </Link>
                    <Link to="/about" onClick={() => setOpenHam(false)}>
                        About
                    </Link>
                    <Link to="/login" onClick={() => setOpenHam(false)}>
                        <Button className="py-2 px-4 rounded-3xl bg-[#2667ff] text-white">
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-4 xl:gap-12 font-medium">
                <Link to="/about">About</Link>
                <Link to="/posts?sort=trending">Trending</Link>
                <Link to="/posts?sort=popular">Popular</Link>

                <Link to="/login"></Link>
                <SignedIn>
                    <Button variant="outline">
                        <Link className="flex items-center gap-2" to="/write">
                            Write <Pen className="h-4 w-4" />
                        </Link>
                    </Button>
                </SignedIn>

                <SignedOut>
                    <Link to="/login">
                        <Button className="py-2 px-7 rounded-3xl bg-[#2667ff] text-white">
                            Login
                        </Button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
};

export default Navbar;
