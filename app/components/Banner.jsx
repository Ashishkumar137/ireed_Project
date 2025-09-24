// components/Banner.jsx

import Image from "next/image";

export default function Banner({ imageSrc, alt, heading, paragraph }) {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] relative overflow-hidden">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-end pb-10 pl-4">
        <div className="container mx-auto px-4 max-w-7xl w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase">
            {heading}
          </h1>
          <p className="text-white font-light">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}
