import { Button } from "@/components/ui/button";
import Perspective from "./Perspective";

const Perspectives = () => {
    return (
        <div className="flex flex-col gap-8 lg:w-3/5">
            <h1 className="text-xl text-gray-500 underline">Comments</h1>
            <div className="flex items-center gap-8">
                <textarea
                    placeholder="Write a counterpoint..."
                    className="w-full p-4 rounded-xl border-1 border-gray-200"
                ></textarea>
                <Button className="bg-blue-500 px-4 py-3 text-white font-medium rounded-xl">
                    Post
                </Button>
            </div>
            <Perspective />
            <Perspective />
            <Perspective />
            <Perspective />
            <Perspective />
            <Perspective />
            <Perspective />
        </div>
    );
};

export default Perspectives;
