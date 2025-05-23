import LazyImage from "./LazyImage";

const Perspective = () => {
    return (
        <div className="p-4 bg-slate-50 rounded-xl mb-8">
            <div className="flex items-center gap-4">
                <LazyImage
                    src="user.jpg"
                    className="w-10 h-10 rounded-full object-cover"
                    w="40"
                />
                <span className="font-medium">Arman Ul Haq</span>
                <span className="text-sm text-gray-500">4 days ago</span>
            </div>
            <div className="mt-4">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti veritatis, corporis repudiandae alias sunt tempore
                    dolore quo pariatur assumenda recusandae.
                </p>
            </div>
        </div>
    );
};

export default Perspective;
