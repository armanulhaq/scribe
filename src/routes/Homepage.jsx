import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";
//import MainCategories from "../components/MainCategories";
//import FeaturedPosts from "../components/FeaturedPosts";
//import PostList from "../components/PostList";

const Homepage = () => {
    return (
        <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-2 items-center">
                <Link to="/">Home</Link>
                <span className="text-xs">&gt;</span>
                <span className="text-[#2667ff]">Blogs and Articles</span>
            </div>

            <div className="flex items-center justify-between lg:gap-15">
                {/* titles */}
                <div className="my-20 lg:w-[50%]">
                    <h1 className="text-[#2667ff] text-4xl md:text-5xl lg:text-7xl font-bold">
                        Ideas that <br />
                        inspire change.
                    </h1>
                    <p className="mt-4 md:mt-6 lg:mt-6 text-md md:text-lg">
                        Explore insightful stories, unique perspectives, and
                        expert opinions from writers passionate about topics
                        that matter—designed to inform, inspire, and spark
                        meaningful conversations.
                    </p>
                </div>
                <div className="hidden lg:flex w-[50%]">
                    <LazyImage
                        className="hidden md:flex rounded-xl"
                        src={`${
                            import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT
                        }/featured1.jpeg`}
                        alt="Hero Image"
                    />
                </div>
            </div>
            {/* CATEGORIES */}
            <MainCategories />
            {/* FEATURED POSTS */}
            <FeaturedPosts />
            {/* POST LIST */}
            <div className="">
                <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
                <PostList />
            </div>
        </div>
    );
};

export default Homepage;
