import { useState } from "react";
import LazyImage from "./LazyImage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

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
                    alt="Lama Logo"
                    w={32}
                    h={32}
                />
                <span>Scribe</span>
            </Link>
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
                        Most Popular
                    </Link>
                    <Link to="/" onClick={() => setOpenHam(false)}>
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
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/posts?sort=trending">Trending</Link>
                <Link to="/posts?sort=popular">Most Popular</Link>
                <Link to="/">About</Link>
                <Link to="/login">
                    <Button className="py-2 px-7 rounded-3xl bg-[#2667ff] text-white">
                        Login
                    </Button>
                </Link>

                {/* <SignedOut>
                    <Link>
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                            Login 👋
                        </button>
                    </a>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn> */}
            </div>
        </div>
    );
};

export default Navbar;
