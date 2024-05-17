import Image from "next/image";

const ImageComp = ({ image, imageText, like }: ImageCompProps) => {
  return (
    <div className="min-w-[280px] relative shadow-sm rounded-xl shadow-black">
      <Image
        src={image}
        height={280}
        width={280}
        className="rounded-xl object-cover"
        alt="hotel"
      />
      {like && (
        <div className="bg-white rounded-full w-10 z-10 cursor-pointer h-10 absolute top-4 right-4"></div>
      )}
      {imageText && (
        <p className="absolute text-white z-10 bottom-4 left-4 font-semibold text-lg">
          {imageText}
        </p>
      )}
    </div>
  );
};

export default ImageComp;
