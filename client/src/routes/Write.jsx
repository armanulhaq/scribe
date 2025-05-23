import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const Write = () => {
    const { isLoaded, isSignedIn } = useUser();
    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    if (isLoaded && !isSignedIn) {
        return <div>You should login!</div>;
    }
    return (
        <div className=" flex flex-col gap-6 flex-1 mb-6 p-10 border-1 border-gray-200 rounded-xl">
            <h1 className="text-4xl font-bold">Create a new post</h1>
            <form action="" className="flex flex-col gap-6">
                <Button className="w-max cursor-pointer p-2 text-sm border-1 border-blue-500 ">
                    Add a cover image
                </Button>
                <input
                    type="text"
                    className="text-2xl font-semibold bg-transparent outline-none border-1 border-gray-200 py-4 px-5 rounded-xl"
                    placeholder="Add Title"
                />
                <div className="flex items-center gap-4">
                    <label className="text-sm">Choose a category:</label>
                    <select
                        name="category"
                        id=""
                        className="p-2 rounded-xl bg-white border-1 border-gray-200 "
                    >
                        <option value="general">General</option>
                        <option value="web-design">Web Design</option>
                        <option value="development">Development</option>
                        <option value="databases">Databases</option>
                        <option value="seo">Search Engines</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
                <textarea
                    className="p-4 rounded-xl bg-white border-1 border-gray-200 "
                    name="desc"
                    placeholder="A Short Description"
                />
                <ReactQuill
                    theme="snow"
                    className="flex-1 border-1 border-gray-200 rounded-xl"
                />
                <Button className="bg-blue-500 text-white font-medium rounded-xl  p-2 w-36">
                    Post
                </Button>
            </form>
        </div>
    );
};

export default Write;
