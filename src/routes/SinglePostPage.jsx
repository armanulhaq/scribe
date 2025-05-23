import { Link } from "react-router-dom";
import LazyImage from "../components/LazyImage";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Perspectives from "../components/Perspectives";

const SinglePostPage = () => {
    return (
        <div className="flex flex-col gap-8 my-20">
            {/* detail */}
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8 justify-center">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                        Thomas Müller: The Underrated Genius Redefining Football
                        Greatness
                    </h1>

                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Written by</span>
                        <Link className="text-blue-800">John Doe</Link>
                        <span>on</span>
                        <Link className="text-blue-800">Web Design</Link>
                        <span>2 days ago</span>
                    </div>

                    {/* <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis voluptas, quae, quidem, fugiat quas quos quibusdam
                        voluptates doloribus ipsam doloremque repellendus.
                        Quaerat, laborum consequuntur.
                    </p> */}
                </div>

                <div className="hidden lg:block w-2/5">
                    <LazyImage src="featured1.jpeg" className="rounded-3xl" />
                </div>
            </div>
            {/* content */}
            <div className="flex flex-col md:flex-row gap-12 justify-between">
                {/* text */}
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>
                        In the world of football, there’s a pervasive belief
                        that to become a legend, you must possess the dazzling
                        flair of Neymar, the dribbling wizardry of Messi, the
                        lightning pace of Mbappe, or the chiseled physique of
                        Ronaldo. If you’re blessed with any of these attributes,
                        you’re well on your way to stardom. But there’s one man
                        who has shown us that you don’t need to fit into these
                        molds to etch your name into football folklore — Thomas
                        Müller.
                    </p>
                    <p>
                        You’ve probably heard people say, “Thomas Müller is the
                        most underrated player of this generation.” But most
                        stop right there, never diving into why this is the
                        case. Today, we’re not just stopping at the surface.
                        We’re diving deep into what makes Müller so special, why
                        he’s so criminally underrated, and how he’s mastered the
                        art of football without ever needing to dribble past
                        five players or launch a 30-yard screamer into the top
                        corner.
                    </p>
                    <p>
                        Thomas Müller was born in Weilheim in Oberbayern, West
                        Germany, and emerged from the fabled Bayern Munich youth
                        system. He made his senior debut in the 2008–09 season,
                        but it was the following season when he truly announced
                        himself. Under the guidance of Louis van Gaal, Müller
                        played 51 games, scoring 19 goals and providing 16
                        assists. Not bad for a young lad who looked like he
                        might struggle to pass for legal drinking age, right?
                    </p>
                    <p>
                        Müller usually played as a second striker or on the
                        wings, drifting inside with a kind of casual ease that
                        made you wonder if he was playing the same sport as the
                        rest of us. His impressive season earned him a spot in
                        the German national team for the 2010 World Cup, where
                        he promptly decided to introduce himself to the world by
                        scoring five goals and providing three assists. Not too
                        shabby for a 21-year-old, right? Oh, and by the way, he
                        won the Golden Boot and was named the tournament’s Best
                        Young Player. If there was ever a coming-of-age story,
                        this was it, and it didn’t even need a cheesy montage.
                    </p>
                    <p>
                        In 2011, Müller coined the term “Raumdeuter” to describe
                        his role on the pitch — roughly translating to “space
                        interpreter” or, as I like to call it, “the guy who sees
                        things before they happen”. While most footballers are
                        lauded for their finishing, physicality, or dazzling
                        skills, Müller’s genius lies in his positioning and game
                        awareness. He’s like that friend who always seems to
                        know where the best seat in the house is, except in
                        Müller’s case, it’s the best spot to score or assist.
                    </p>
                    <p>
                        One of the key elements that set Thomas Müller apart as
                        a prolific playmaker is his exceptional first and second
                        touch. His first touch is not merely about receiving the
                        ball; it’s about setting the stage for what comes next.
                        Müller has an uncanny ability to cushion the ball and
                        direct it into space, allowing him to quickly assess his
                        options, even in tight situations. This skill enables
                        him to evade defenders and create separation, giving him
                        the time to think and act.Once he secures the ball, his
                        second touch is where the real magic happens. Müller’s
                        quick decision-making allows him to deliver precise
                        passes or clever through balls with remarkable accuracy.
                        His awareness of teammates’ movements means he can
                        anticipate their runs and find them in optimal
                        positions, often catching defenders off guard. Together,
                        these touches create a seamless flow in his gameplay,
                        resulting in a staggering number of assists throughout
                        his career. While others may rely on individual flair,
                        Müller’s genius lies in his ability to make intelligent
                        plays that elevate the entire team, proving that
                        football is as much about brains as it is about brawn.
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
                            <Link className="">Arman Ul Haq</Link>
                        </div>

                        <p className="text-sm text-gray-400">
                            ⚽️ Football Enthusiast | Writer | Analyst
                        </p>
                        <div className="flex gap-2 items-center">
                            <Link>
                                <LazyImage src="facebook.svg" w="20" />
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
            <Perspectives />
        </div>
    );
};

export default SinglePostPage;
