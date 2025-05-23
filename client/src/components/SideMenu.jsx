import { Link } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
    return (
        <div className="px-4 h-max sticky top-8">
            <h1 className="mb-4 text-sm font-medium">Search</h1>
            <Search />
            <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
            <div className="flex flex-col gap-2 text-sm">
                <label htmlFor="" className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="sort"
                        value="newest"
                        className="appearance-none w-4 h-4 border-[1.5px] border-blue-900 cursor-pointer rounded-full bg-white checked:bg-blue-500"
                    />
                    Newest
                </label>
                <label htmlFor="" className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="sort"
                        value="popular"
                        className="appearance-none w-4 h-4 border-[1.5px] border-blue-900 cursor-pointer rounded-full bg-white checked:bg-blue-500"
                    />
                    Most Popular
                </label>
                <label htmlFor="" className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="sort"
                        value="trending"
                        className="appearance-none w-4 h-4 border-[1.5px]  border-blue-900 cursor-pointer rounded-full bg-white checked:bg-blue-500"
                    />
                    Trending
                </label>
                <label htmlFor="" className="flex items-center gap-2">
                    <input
                        type="radio"
                        name="sort"
                        value="oldest"
                        className="appearance-none w-4 h-4 border-[1.5px] border-blue-900 cursor-pointer rounded-full bg-white checked:bg-blue-500"
                    />
                    Oldest
                </label>
            </div>
            <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
                <span className="underline cursor-pointer">All</span>
                <span className="underline cursor-pointer">Web Design</span>
                <span className="underline cursor-pointer">Development</span>
                <span className="underline cursor-pointer">Databases</span>
                <span className="underline cursor-pointer">Search Engines</span>
                <span className="underline cursor-pointer">Marketing</span>
            </div>
        </div>
    );
};

export default SideMenu;
