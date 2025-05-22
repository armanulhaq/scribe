import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";

const FeaturedPosts = () => {
    return (
        <div className="my-8 flex flex-col lg:flex-row gap-8">
            {/* First */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <LazyImage
                    src="featured1.jpeg"
                    className="rounded-3xl object-cover"
                    w="895"
                />
                <div className="flex items-center gap-2">
                    <h1 className="font-semibold text-sm">01.</h1>
                    <Link className="text-blue-600 text-sm">Web Design</Link>
                    <span className="text-gray-500 text-sm">2 days ago</span>
                </div>
                <Link
                    to="/test"
                    className="text-xl lg:text-3xl font-semibold lg:font-bold"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </Link>
            </div>
            {/* Others */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* Second */}
                <div className="lg:h-1/3 flex items-center justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <LazyImage
                            src="featured2.jpg"
                            className="rounded-3xl object cover"
                        />
                    </div>

                    {/* details */}
                    <div className="w-2/3 items-center gap-2 text-sm lg:text-base  py-5">
                        <div className="flex items-center gap-2">
                            <h1 className="font-semibold text-xs">02.</h1>
                            <Link className="text-blue-600 text-xs">
                                Web Design
                            </Link>
                            <span className="text-gray-500 text-xs">
                                2 days ago
                            </span>
                        </div>
                        <Link
                            to="/test"
                            className="text-base sm:text-lg md:text-2xl lg:text-lg xl:text-xl font-medium"
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Voluptatum sunt deserunt molestias?
                        </Link>
                    </div>
                </div>
                {/* Third */}
                <div className="lg:h-1/3 flex items-center  justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <LazyImage
                            src="featured3.jpeg"
                            className="rounded-3xl object cover"
                        />
                    </div>
                    {/* details */}
                    <div className="w-2/3 items-center gap-4 text-sm lg:text-base py-5">
                        <div className="flex items-center gap-2">
                            <h1 className="font-semibold text-xs">03.</h1>
                            <Link className="text-blue-600 text-xs">
                                Web Design
                            </Link>
                            <span className="text-gray-500 text-xs">
                                2 days ago
                            </span>
                        </div>
                        <Link
                            to="/test"
                            className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-xl font-medium"
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Voluptatum sunt deserunt molestias?
                        </Link>
                    </div>
                </div>
                {/* Fourth */}
                <div className="lg:h-1/3 flex items-center justify-between gap-4">
                    <div className="w-1/3 aspect-video">
                        <LazyImage
                            src="featured4.jpeg"
                            className="rounded-3xl object cover"
                        />
                    </div>
                    {/* details */}
                    <div className="w-2/3 items-center gap-4 text-sm lg:text-base py-5">
                        <div className="flex items-center gap-2">
                            <h1 className="font-semibold text-xs">04.</h1>
                            <Link className="text-blue-600 text-xs">
                                Web Design
                            </Link>
                            <span className="text-gray-500 text-xs">
                                2 days ago
                            </span>
                        </div>
                        <Link
                            to="/test"
                            className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-xl font-medium"
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Voluptatum sunt deserunt molestias?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPosts;
