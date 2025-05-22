import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";

const SinglePostPage = () => {
    return (
        <div className="flex flex-col gap-8 my-20">
            {/* detail */}
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                        Lorem ipsum dolor sit, <em>amet</em> consectetur{" "}
                        <em>adipisicing</em> elit. Ullam modi eum aut.
                    </h1>

                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Written by</span>
                        <Link className="text-blue-800">John Doe</Link>
                        <span>on</span>
                        <Link className="text-blue-800">Web Design</Link>
                        <span>2 days ago</span>
                    </div>

                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis voluptas, quae, quidem, fugiat quas quos quibusdam
                        voluptates doloribus ipsam doloremque repellendus.
                        Quaerat, laborum consequuntur.
                    </p>
                </div>

                <div className="hidden lg:block w-2/5">
                    <LazyImage src="featured1.jpeg" />
                </div>
            </div>
            {/* content */}
            <div className="flex flex-col md:flex-row gap-12 justify-between">
                {/* text */}
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias neque fugiat itaque quas esse sunt cupiditate
                        possimus cumque asperiores, dolorem, dolores eligendi
                        amet perferendis illum repellat nam quam facilis
                        veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam
                        dicta quas exercitationem aliquam maxime quaerat, enim
                        autem culpa sequi at! Earum facere in ducimus culpa.
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Libero fuga modi amet error aliquid eos nobis vero
                        soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta
                        ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias neque fugiat itaque quas esse sunt cupiditate
                        possimus cumque asperiores, dolorem, dolores eligendi
                        amet perferendis illum repellat nam quam facilis
                        veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam
                        dicta quas exercitationem aliquam maxime quaerat, enim
                        autem culpa sequi at! Earum facere in ducimus culpa.
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Libero fuga modi amet error aliquid eos nobis vero
                        soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta
                        ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias neque fugiat itaque quas esse sunt cupiditate
                        possimus cumque asperiores, dolorem, dolores eligendi
                        amet perferendis illum repellat nam quam facilis
                        veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam
                        dicta quas exercitationem aliquam maxime quaerat, enim
                        autem culpa sequi at! Earum facere in ducimus culpa.
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Libero fuga modi amet error aliquid eos nobis vero
                        soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta
                        ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias neque fugiat itaque quas esse sunt cupiditate
                        possimus cumque asperiores, dolorem, dolores eligendi
                        amet perferendis illum repellat nam quam facilis
                        veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam
                        dicta quas exercitationem aliquam maxime quaerat, enim
                        autem culpa sequi at! Earum facere in ducimus culpa.
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Libero fuga modi amet error aliquid eos nobis vero
                        soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta
                        ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias neque fugiat itaque quas esse sunt cupiditate
                        possimus cumque asperiores, dolorem, dolores eligendi
                        amet perferendis illum repellat nam quam facilis
                        veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam
                        dicta quas exercitationem aliquam maxime quaerat, enim
                        autem culpa sequi at! Earum facere in ducimus culpa.
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Libero fuga modi amet error aliquid eos nobis vero
                        soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta
                        ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias neque fugiat itaque quas esse sunt cupiditate
                        possimus cumque asperiores, dolorem, dolores eligendi
                        amet perferendis illum repellat nam quam facilis
                        veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam
                        dicta quas exercitationem aliquam maxime quaerat, enim
                        autem culpa sequi at! Earum facere in ducimus culpa.
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Libero fuga modi amet error aliquid eos nobis vero
                        soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta
                        ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias neque fugiat itaque quas esse sunt cupiditate
                        possimus cumque asperiores, dolorem, dolores eligendi
                        amet perferendis illum repellat nam quam facilis
                        veritatis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sint ipsa fuga nihil numquam, quam
                        dicta quas exercitationem aliquam maxime quaerat, enim
                        autem culpa sequi at! Earum facere in ducimus culpa.
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Libero fuga modi amet error aliquid eos nobis vero
                        soluta facilis, voluptatem, voluptates quod suscipit
                        obcaecati voluptate quaerat laborum, voluptatum dicta
                        ipsum.
                    </p>
                </div>
                <div className="px-4 h-max sticky top-8">
                    <h1 className="text-lg text-blue-500">Author</h1>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-4 mt-5">
                            <LazyImage
                                src="user.jpg"
                                className="w-12 h-12 rounded-full object-cover"
                                w="48"
                                h="48"
                            />
                            <Link className="">John Doe</Link>
                        </div>

                        <p className="text-sm text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Magnam quis suscipit obcaecati dolore
                            accusantium.
                        </p>
                        <div className="flex gap-2 items-center">
                            <Link>
                                <LazyImage src="facebook.png" w="20" />
                            </Link>
                            <Link>
                                <LazyImage src="instagram.svg" w="25" />
                            </Link>
                        </div>
                    </div>
                    <div className="my-5 flex flex-col">
                        <PostMenuActions />
                    </div>

                    <h1 className="text-lg text-blue-500">Categories</h1>
                    <div className="flex flex-col gap-2 text-sm my-3">
                        <Link className="underline">All</Link>
                        <Link className="underline" to="/">
                            Web Design
                        </Link>

                        <Link className="underline" to="/">
                            Development
                        </Link>

                        <Link className="underline" to="/">
                            Databases
                        </Link>

                        <Link className="underline" to="/">
                            Search Engines
                        </Link>

                        <Link to="/" className="underline">
                            Marketing
                        </Link>
                    </div>
                    <div className="my-10 gap-2 flex flex-col">
                        <h1 className="text-lg text-blue-500">Search</h1>
                        <Search />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;
