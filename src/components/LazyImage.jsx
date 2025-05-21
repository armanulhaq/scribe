import { Image } from "@imagekit/react";

const LazyImage = ({ src, className, w, h, alt }) => {
    return (
        <Image
            urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
            src={src}
            className={className}
            loading="lazy"
            lqip={{ active: true, quality: 20 }} //When not actively in use 20% quality
            alt={alt}
            width={w}
            height={h}
            transformation={[
                {
                    width: w,
                    height: h,
                },
            ]}
        />
    );
};

export default LazyImage;
