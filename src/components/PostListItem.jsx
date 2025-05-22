import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8 mb-12">
            <div className="md:hidden xl:block xl:w-1/3">
                <LazyImage
                    src="featured3.jpeg"
                    className="rounded-2xl object-cover"
                    w="735"
                />
            </div>
            <div className="py-5 flex flex-col gap-4 xl:w-2/3">
                <Link to="/test" className="text-4xl font-semibold">
                    Lorem ipsum dolor sit amet consectetur.
                </Link>
                <div className="flex items-center text-gray-400 text-sm gap-1">
                    <span>Written by</span>
                    <Link className="text-blue-500">John Doe</Link>
                    <span>on</span>
                    <Link className="text-blue-500">Web Design</Link>
                    <span>2 days ago</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Porro maxime assumenda cum eum numquam, officia, quam
                    repudiandae ad quo id mollitia necessitatibus dicta omnis
                    rem? Libero amet asperiores doloribus qui, magnam nihil ipsa
                    autem obcaecati mollitia. Totam, sed voluptates iure
                    reprehenderit commodi, nemo iste repellat quia cupiditate
                    facere neque eius!
                </p>
                <Link to="/test" className="underline text-blue-500 text-sm">
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default PostListItem;
